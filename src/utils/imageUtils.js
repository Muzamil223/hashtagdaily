// utils/imageUtils.js
export const optimizeImageUrl = (url, options = {}) => {
  if (!url) return '';
  
  const { width = 800, height, quality = 80, format = 'auto' } = options;
  
  // Handle Unsplash images
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams({
      w: width,
      q: quality,
      auto: format,
      fit: 'crop'
    });
    if (height) params.append('h', height);
    return `${baseUrl}?${params.toString()}`;
  }
  
  // Handle Imgur images
  if (url.includes('imgur.com')) {
    const baseUrl = url.replace(/\.[^/.]+$/, '');
    return `${baseUrl}.jpg`;
  }
  
  // Handle Cloudinary or other services
  return url;
};

export const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = reject;
  });
};

export const preloadImages = (urls) => {
  return Promise.allSettled(urls.map(url => preloadImage(url)));
};