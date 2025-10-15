const fs = require('fs');
const path = require('path');

const imageFolder = path.join(__dirname, 'public/fotos');

function getImageList() {
  return fs.readdirSync(imageFolder).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });
}

module.exports = getImageList;
