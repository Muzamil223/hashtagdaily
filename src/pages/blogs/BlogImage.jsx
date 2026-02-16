// components/BlogImage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TbPhoto, TbCloudOff } from 'react-icons/tb';

const BlogImage = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc,
  category,
  width,
  height,
  priority = false,
  onLoad,
  onError: customOnError
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 2;

  // Default fallback images based on category
  const fallbackImages = {
    default: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop',
    Sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop',
    Health: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop',
    Fashion: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop',
    'Sci & Technology': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
    Nature: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop',
    Food: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    Travel: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop',
    Business: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&auto=format&fit=crop',
  };

  // Get appropriate fallback based on category
  const getFallbackImage = () => {
    if (fallbackSrc) return fallbackSrc;
    if (category && fallbackImages[category]) return fallbackImages[category];
    return fallbackImages.default;
  };

  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setError(false);
    setRetryCount(0);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    if (retryCount < MAX_RETRIES) {
      // Retry loading with a cache-busting parameter
      const cacheBuster = `?retry=${Date.now()}`;
      setImgSrc(src + cacheBuster);
      setRetryCount(prev => prev + 1);
    } else {
      // All retries failed, use fallback
      setIsLoading(false);
      setError(true);
      setImgSrc(getFallbackImage());
      
      if (customOnError) customOnError();
      
      // Log error in development
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Failed to load image: ${src}`);
      }
    }
  };

  // Image optimization props
  const imgProps = {
    src: imgSrc,
    alt: alt || 'Blog image',
    className: `${className} transition-opacity duration-300 ${
      isLoading ? 'opacity-0' : 'opacity-100'
    }`,
    onLoad: handleLoad,
    onError: handleError,
    loading: priority ? 'eager' : 'lazy',
    ...(width && { width }),
    ...(height && { height }),
  };

  return (
    <div className="relative overflow-hidden bg-gray-100">
      {/* Loading Skeleton */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200"
        >
          <div className="relative">
            <div className="w-12 h-12 border-4 rounded-full border-amber-200"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-4 rounded-full border-amber-600 border-t-transparent animate-spin"></div>
          </div>
        </motion.div>
      )}

      {/* Error State with Retry */}
      {error && !isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100"
        >
          <TbCloudOff className="w-8 h-8 mb-2 text-gray-400" />
          <p className="text-xs text-gray-500">Failed to load image</p>
          <button
            onClick={() => {
              setError(false);
              setIsLoading(true);
              setImgSrc(src);
              setRetryCount(0);
            }}
            className="px-3 py-1 mt-2 text-xs text-white transition-colors rounded-full bg-amber-600 hover:bg-amber-700"
          >
            Retry
          </button>
        </motion.div>
      )}

      {/* Actual Image */}
      <img {...imgProps} />

      {/* Decorative Gradient Overlay (optional) */}
      {!error && !isLoading && (
        <div className="absolute inset-0 transition-opacity opacity-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100"></div>
      )}
    </div>
  );
};

export default BlogImage;