// components/OptimizedImage.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbPhoto, TbCloudOff, TbRefresh } from "react-icons/tb";
import { optimizeImageUrl } from "../utils/imageUtils";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  category,
  width,
  height,
  priority = false,
  onLoad,
  onError,
  lazyBoundary = "200px",
  retryCount = 2,
  quality = 80,
}) => {
  const [imgSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retries, setRetries] = useState(0);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Optimized fallback images
  const fallbackImages = {
    default:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&q=80",
    Sports:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&q=80",
    Health:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&q=80",
    Fashion:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&q=80",
    "Sci & Technology":
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&q=80",
    Nature:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&q=80",
  };

  // Optimize the URL on mount and when src changes
  useEffect(() => {
    if (!src) return;

    const optimized = optimizeImageUrl(src, { width, quality });
    setImgSrc(optimized);
    setIsLoading(true);
    setError(false);
  }, [src, width, quality]);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            observerRef.current?.unobserve(img);
          }
        });
      },
      {
        rootMargin: lazyBoundary,
        threshold: 0.1,
      },
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, lazyBoundary]);

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    if (retries < retryCount) {
      // Retry with a different optimization
      const retryUrl = optimizeImageUrl(src, {
        width,
        quality: quality - 10,
        cacheBuster: Date.now(),
      });
      setImgSrc(retryUrl);
      setRetries((prev) => prev + 1);
    } else {
      // Use category-based fallback
      setIsLoading(false);
      setError(true);
      const fallback =
        category && fallbackImages[category]
          ? fallbackImages[category]
          : fallbackImages.default;
      setImgSrc(optimizeImageUrl(fallback, { width, quality }));

      if (onError) onError();
    }
  };

  const handleRetry = () => {
    setRetries(0);
    setError(false);
    setIsLoading(true);
    setImgSrc(
      optimizeImageUrl(src, { width, quality, cacheBuster: Date.now() }),
    );
  };

  return (
    <div
      className="relative overflow-hidden bg-gray-100 rounded-lg"
      style={{ aspectRatio: width && height ? `${width}/${height}` : "auto" }}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-3 border-amber-200"></div>
              <div className="absolute top-0 left-0 w-10 h-10 rounded-full border-3 border-amber-600 border-t-transparent animate-spin"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && !isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100"
        >
          <TbCloudOff className="w-8 h-8 mb-2 text-gray-400" />
          <p className="mb-2 text-xs text-gray-500">Failed to load</p>
          <button
            onClick={handleRetry}
            className="flex items-center px-3 py-1 space-x-1 text-xs text-white transition-colors rounded-full bg-amber-600 hover:bg-amber-700"
          >
            <TbRefresh className="w-3 h-3" />
            <span>Retry</span>
          </button>
        </motion.div>
      )}

      <img
        ref={imgRef}
        src={priority ? imgSrc : undefined}
        data-src={!priority ? imgSrc : undefined}
        alt={alt || "Blog image"}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};

export default OptimizedImage;
