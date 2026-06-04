const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = './images/tours/long-programs';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp') && f.includes('peru-bolivia-chile'));

(async () => {
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace('.webp', '.jpg'));
    
    try {
      await sharp(inputPath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(outputPath);
      
      fs.unlinkSync(inputPath);
      console.log(`✓ ${file} → ${path.basename(outputPath)}`);
    } catch (e) {
      console.log(`✗ ${file}: ${e.message}`);
    }
  }
})();
