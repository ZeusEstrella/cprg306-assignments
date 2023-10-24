const fs = require('fs');
const path = require('path');

const sourceDir = 'app/week5'; // Source directory
const destinationDir = 'app/week6'; // Destination directory

// Files to copy from week5 to week6
const filesToCopy = ['item-list.js', 'item.js', 'items.json', 'page.js'];

// Copy files from week5 to week6
filesToCopy.forEach((filename) => {
  const sourcePath = path.join(sourceDir, filename);
  const destinationPath = path.join(destinationDir, filename);

  // Use fs.copyFileSync to copy the file
  fs.copyFileSync(sourcePath, destinationPath);

  console.log(`${filename} copied to ${destinationDir}`);
});

// Copy new-item.js from week4 to week6
const newItemSourcePath = 'app/week4/new-item.js';
const newItemDestinationPath = path.join(destinationDir, 'new-item.js');
fs.copyFileSync(newItemSourcePath, newItemDestinationPath);

console.log('new-item.js copied to week6');
