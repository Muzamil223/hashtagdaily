// components/ImagePreloader.jsx
import { useEffect } from "react";
import { preloadImages } from "../utils/imageUtils";

const ImagePreloader = ({ urls, onLoaded }) => {
  useEffect(() => {
    if (urls && urls.length > 0) {
      preloadImages(urls).then((results) => {
        const successful = results.filter(
          (r) => r.status === "fulfilled",
        ).length;
        console.log(`✅ Preloaded ${successful}/${urls.length} images`);
        if (onLoaded) onLoaded(results);
      });
    }
  }, [urls]);

  return null;
};

export default ImagePreloader;
