const fs = require('fs');
const path = require('path');

const src = path.resolve(process.cwd(), 'src', 'generated', 'prisma');
const dest = path.resolve(process.cwd(), 'dist', 'generated', 'prisma');

console.log('Copying generated prisma from', src, 'to', dest);
if (!fs.existsSync(src)) {
  console.warn('Source generated prisma not found, skipping copy');
  process.exit(0);
}

try {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  fs.cpSync(src, dest, { recursive: true });
  console.log('Copied generated prisma to dist');
} catch (err) {
  console.error('Failed to copy generated prisma:', err);
  process.exit(1);
}
