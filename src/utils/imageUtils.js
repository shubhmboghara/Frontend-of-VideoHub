export const getOptimizedImageSources = (originalPath) => {
  if (!originalPath) {
    return {
      webp: '',
      avif: '',
      fallback: ''
    };
  }
  const baseName = originalPath.substring(0, originalPath.lastIndexOf('.'));
  const extension = originalPath.substring(originalPath.lastIndexOf('.'));
  return {
    webp: `${baseName}.webp`,
    avif: `${baseName}.avif`,
    fallback: originalPath // original path with original extension
  };
};