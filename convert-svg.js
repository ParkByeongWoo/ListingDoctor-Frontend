const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function convertSvg() {
  const svg = fs.readFileSync('logo-badge.svg', 'utf8');
  const img = await loadImage('data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64'));
  
  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  
  ctx.drawImage(img, 0, 0, 512, 512);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('logo-badge-512.png', buffer);
  console.log('✓ PNG 변환 완료: logo-badge-512.png (512x512)');
}

convertSvg().catch(console.error);
