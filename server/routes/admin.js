import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, '..', 'data', 'db.json');

const router = Router();

// All admin routes require authentication + admin role
router.use(authenticate);
router.use(requireAdmin);

function readDB() {
  return JSON.parse(readFileSync(DB_PATH, 'utf-8'));
}

function writeDB(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ============ PROPERTIES ============

// GET /api/admin/properties
router.get('/properties', (req, res) => {
  const db = readDB();
  res.json(db.properties);
});

// POST /api/admin/properties
router.post('/properties', (req, res) => {
  const { title, type, bedrooms, bathrooms, area, price, location, description, image, featured, status } = req.body;

  if (!title || !type || !price) {
    return res.status(400).json({ error: 'Title, type, and price are required.' });
  }

  const db = readDB();
  const newProperty = {
    id: `prop-${Date.now()}`,
    title,
    type: type || 'Villa',
    bedrooms: bedrooms || 0,
    bathrooms: bathrooms || 0,
    area: area || 0,
    price: price || 0,
    location: location || '',
    description: description || '',
    image: image || '',
    featured: featured || false,
    status: status || 'available',
    createdAt: new Date().toISOString()
  };

  db.properties.push(newProperty);
  writeDB(db);

  res.status(201).json(newProperty);
});

// PUT /api/admin/properties/:id
router.put('/properties/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const index = db.properties.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Property not found.' });
  }

  db.properties[index] = { ...db.properties[index], ...req.body, id };
  writeDB(db);

  res.json(db.properties[index]);
});

// DELETE /api/admin/properties/:id
router.delete('/properties/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const index = db.properties.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Property not found.' });
  }

  const deleted = db.properties.splice(index, 1)[0];
  writeDB(db);

  res.json({ message: 'Property deleted.', property: deleted });
});

// ============ INQUIRIES ============

// GET /api/admin/inquiries
router.get('/inquiries', (req, res) => {
  const db = readDB();
  res.json(db.inquiries);
});

// PUT /api/admin/inquiries/:id — mark as read/archived
router.put('/inquiries/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const index = db.inquiries.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Inquiry not found.' });
  }

  db.inquiries[index] = { ...db.inquiries[index], ...req.body, id };
  writeDB(db);

  res.json(db.inquiries[index]);
});

// DELETE /api/admin/inquiries/:id
router.delete('/inquiries/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const index = db.inquiries.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Inquiry not found.' });
  }

  db.inquiries.splice(index, 1);
  writeDB(db);

  res.json({ message: 'Inquiry deleted.' });
});

// ============ STATS ============

// GET /api/admin/stats
router.get('/stats', (req, res) => {
  const db = readDB();
  const totalProperties = db.properties.length;
  const availableProperties = db.properties.filter(p => p.status === 'available').length;
  const soldProperties = db.properties.filter(p => p.status === 'sold').length;
  const totalInquiries = db.inquiries.length;
  const newInquiries = db.inquiries.filter(i => i.status === 'new').length;
  const totalValue = db.properties.reduce((sum, p) => sum + (p.price || 0), 0);

  res.json({
    totalProperties,
    availableProperties,
    soldProperties,
    totalInquiries,
    newInquiries,
    totalValue
  });
});

export default router;
