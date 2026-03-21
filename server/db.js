import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const DB_PATH = join(__dirname, 'data', 'db.json');

export function readDB() {
  return JSON.parse(readFileSync(DB_PATH, 'utf-8'));
}

export function writeDB(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}
