const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const files = [
  'peru-bolivia-chile-day1.webp',
  'peru-bolivia-chile-day13.webp',
  'peru-bolivia-chile-day14.webp',
  'peru-bolivia-chile-day15.webp'
];

const dir = './images/tours/long-programs';

(async () => {
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace('.webp', '.jpg'));
    
    try {
      await sharp(inputPath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(outputPath);
      
      try { fs.unlinkSync(inputPath); } catch(e) {}
      console.log(`✓ ${file} → ${path.basename(outputPath)}`);
    } catch (e) {
      console.log(`✗ ${file}: ${e.message}`);
    }
  }
})();
