import fs from 'fs';
import path from 'path';

const map = {
  'mong ướt trong lòng': '01-wishes',
  'tình cảm khó phai': '01-treasure',
  'phụ em trong mọi việc': '02-helping',
  'kéo 2 đứa gần với nhau hơn': '02-closer',
  'buổi date đáng nhớ': '03-first-date',
  'xẻo quýt': '03-xeo-quyt',
  'những lần đi với nhau': '03-trips',
  'đi xa hơn trong mqh': '04-album',
};

const imagesDir = path.resolve('images');
const publicImagesDir = path.resolve('public/images');

for (const [srcFolder, dstFolder] of Object.entries(map)) {
  const srcPath = path.join(imagesDir, srcFolder);
  const dstPath = path.join(publicImagesDir, dstFolder);
  fs.mkdirSync(dstPath, { recursive: true });

  if (fs.existsSync(srcPath)) {
    const files = fs.readdirSync(srcPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
    files.sort();
    files.forEach((file, index) => {
      const pad = String(index + 1).padStart(2, '0');
      const srcFile = path.join(srcPath, file);
      const dstFile = path.join(dstPath, `photo-${pad}.jpg`);
      fs.copyFileSync(srcFile, dstFile);
      console.log(`Copied ${srcFolder}/${file} -> ${dstFolder}/photo-${pad}.jpg`);
    });
  }
}
console.log('All images copied successfully.');
