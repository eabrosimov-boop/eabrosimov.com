const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageDir = './images/tours/short-programs';
const maxWidth = 2000;
const quality = 75;

const files = fs.readdirSync(imageDir).filter(f => f.endsWith('.jpg'));

(async () => {
  for (const file of files) {
    const filePath = path.join(imageDir, file);
    const fileSize = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);
    
    try {
      await sharp(filePath)
        .resize(maxWidth, maxWidth, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality, progressive: true })
        .toFile(filePath + '.tmp');
      
      fs.renameSync(filePath + '.tmp', filePath);
      const newSize = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);
      console.log(`✓ ${file}: ${fileSize}MB → ${newSize}MB`);
    } catch (e) {
      console.log(`✗ ${file}: ${e.message}`);
    }
  }
})();
