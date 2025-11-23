import fs from 'fs';
import path from 'path';

const dir = path.resolve(process.cwd(), 'src', 'generated', 'prisma');
if (fs.existsSync(dir)) {
  console.log('Removing dir', dir);
  fs.rmSync(dir, { recursive: true, force: true });
  console.log('Removed');
} else {
  console.log('Dir not found', dir);
}
