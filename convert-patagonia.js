const sharp = require('sharp');
const fs = require('fs');

sharp('./images/tours/long-programs/patagonia-trekking-topcover.webp')
  .jpeg({ quality: 85, progressive: true })
  .toFile('./images/tours/long-programs/patagonia-trekking-topcover.jpg')
  .then(() => {
    fs.unlinkSync('./images/tours/long-programs/patagonia-trekking-topcover.webp');
    console.log('✓ patagonia-trekking-topcover.webp → .jpg');
  })
  .catch(e => console.log('✗ Error:', e.message));
