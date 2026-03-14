import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, 'data', 'db.json');
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Seed default admin user
async function seedAdmin() {
  if (!existsSync(DB_PATH)) {
    console.error('Database file not found!');
    return;
  }

  const db = JSON.parse(readFileSync(DB_PATH, 'utf-8'));

  const adminExists = db.users.some(u => u.email === 'admin@springs.estate');
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    db.users.push({
      id: 'user-admin-1',
      name: 'Admin',
      email: 'admin@springs.estate',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date().toISOString()
    });
    writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
    console.log('✅ Default admin user created (admin@springs.estate / admin123)');
  }
}

// Start server
seedAdmin().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🏠 Springs Estate API Server`);
    console.log(`   Running on http://localhost:${PORT}`);
    console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
  });
});
