const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directory structure
const imagesDir = path.join(__dirname, '..', 'public', 'images');
const productsDir = path.join(imagesDir, 'products');

// Create directories if they don't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Placeholder image URLs (using placeholder.com)
const productImages = [
  { 
    name: 'oxford-shirt.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Oxford+Shirt'
  },
  { 
    name: 'tshirt.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=T-Shirt'
  },
  { 
    name: 'jeans.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Jeans'
  },
  { 
    name: 'formal-trousers.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Formal+Trousers'
  },
  { 
    name: 'vest.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Vest'
  },
  { 
    name: 'boxers.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Boxers'
  },
  { 
    name: 'bermuda.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Bermuda+Shorts'
  },
  { 
    name: 'sport-shorts.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Sport+Shorts'
  },
  { 
    name: 'belt.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Leather+Belt'
  },
  { 
    name: 'wallet.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Wallet'
  },
  { 
    name: 'linen-shirt.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Linen+Shirt'
  },
  { 
    name: 'graphic-tshirt.jpg', 
    url: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Graphic+T-Shirt'
  },
  // Hero image
  { 
    name: 'hero-bg.jpg', 
    url: 'https://placehold.co/1920x1080/1e293b/e2e8f0?text=दिल्ली+Style+Fashion',
    path: path.join(imagesDir, 'hero-bg.jpg')
  },
  // About image
  { 
    name: 'about-image.jpg', 
    url: 'https://placehold.co/1200x800/1e293b/e2e8f0?text=About+Us',
    path: path.join(imagesDir, 'about-image.jpg')
  }
];

// Download helper function
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
        console.log(`Downloaded: ${dest}`);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Downloading placeholder images...');
  
  for (const image of productImages) {
    const savePath = image.path || path.join(productsDir, image.name);
    await downloadImage(image.url, savePath);
  }
  
  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(console.error); 