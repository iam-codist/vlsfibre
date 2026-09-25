const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createFavicons() {
  const sourceImage = path.join(__dirname, '..', 'public', 'images', 'brand', 'vls-favicon.png');
  
  if (!fs.existsSync(sourceImage)) {
    console.error('Source image not found:', sourceImage);
    process.exit(1);
  }

  console.log('Generating crisp favicon variants from:', sourceImage);

  // Generate PNG buffers for sizes 16, 32, 48
  const sizes = [16, 32, 48];
  const pngBuffers = [];

  for (const size of sizes) {
    const buf = await sharp(sourceImage)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size, buffer: buf });
  }

  // Generate 180x180 Apple touch icon
  const appleBuf = await sharp(sourceImage)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Generate 192x192 Android icon
  const pwa192Buf = await sharp(sourceImage)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Generate 512x512 icon
  const pwa512Buf = await sharp(sourceImage)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Construct Multi-Image ICO file
  // Header: 6 bytes
  // ICONDIRENTRY: 16 bytes per image
  const numImages = pngBuffers.length;
  const headerLen = 6;
  const entryLen = 16;
  let offset = headerLen + numImages * entryLen;

  const icoHeader = Buffer.alloc(headerLen);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // 1 = ICO
  icoHeader.writeUInt16LE(numImages, 4);

  const entries = [];
  for (const { size, buffer } of pngBuffers) {
    const entry = Buffer.alloc(entryLen);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += buffer.length;
  }

  const icoFileBuffer = Buffer.concat([
    icoHeader,
    ...entries,
    ...pngBuffers.map(p => p.buffer)
  ]);

  // Destination targets
  const targets = [
    { path: path.join(__dirname, '..', 'src', 'app', 'favicon.ico'), data: icoFileBuffer },
    { path: path.join(__dirname, '..', 'public', 'favicon.ico'), data: icoFileBuffer },
    { path: path.join(__dirname, '..', 'public', 'favicon.png'), data: pngBuffers[1].buffer }, // 32x32
    { path: path.join(__dirname, '..', 'src', 'app', 'icon.png'), data: pngBuffers[1].buffer },
    { path: path.join(__dirname, '..', 'public', 'apple-touch-icon.png'), data: appleBuf },
    { path: path.join(__dirname, '..', 'public', 'icon-192.png'), data: pwa192Buf },
    { path: path.join(__dirname, '..', 'public', 'icon-512.png'), data: pwa512Buf }
  ];

  for (const t of targets) {
    fs.writeFileSync(t.path, t.data);
    console.log('✓ Successfully wrote:', t.path, `(${t.data.length} bytes)`);
  }

  console.log('🎉 All favicons generated and synchronized successfully!');
}

createFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
