import React from 'react';
import logoImage from "/logo.svg";
import { getOptimizedImageSources } from '../utils/imageUtils';

function Logo({ className = '', width = '130px' }) {
  return (
    <div>
      <picture>
        <source srcSet={getOptimizedImageSources(logoImage).avif} type="image/avif" />
        <source srcSet={getOptimizedImageSources(logoImage).webp} type="image/webp" />
        <img 
          src={logoImage} 
          alt="Logo" 
          className={className} 
          style={{ width }} 
          width={130}
          height={36}
        />
      </picture>
    </div>
  );
}

export default Logo;
