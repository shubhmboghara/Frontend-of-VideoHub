import React from 'react';
import { Link } from 'react-router-dom';
import { HiLockClosed } from 'react-icons/hi';
import { DefaultCoverImage } from '.';
import { getOptimizedImageSources } from '../utils/imageUtils';

const PlaylistCard = ({ playlist, onSelect }) => {
  const defaultThumbnail = DefaultCoverImage
  const thumbnail = playlist.videos[0]?.thumbnail || defaultThumbnail;

  return (
    <div
      className="block w-full max-w-sm bg-[#0f0f0f] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={() => onSelect(playlist._id)}
    >

      <div className="relative aspect-video">
        <picture>
          <source srcSet={getOptimizedImageSources(thumbnail).avif} type="image/avif" />
          <source srcSet={getOptimizedImageSources(thumbnail).webp} type="image/webp" />
          <img
            src={thumbnail}
            alt={playlist.name}
            width={320}
            height={180}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </picture>

        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition duration-300 flex items-end justify-end p-2">
          <span className="bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
            {playlist.videos.length} videos
          </span>
        </div>

        {playlist.isPrivate && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-60 p-1 rounded-full">
            <HiLockClosed className="text-white text-sm" />
          </div>
        )}
      </div>
      <div className="px-3 py-2 flex items-center gap-2">
        {playlist.owner && (
          <Link to={`/profile/${playlist.owner.username}`}>
            <picture>
              <source srcSet={getOptimizedImageSources(playlist.owner.avatar).avif} type="image/avif" />
              <source srcSet={getOptimizedImageSources(playlist.owner.avatar).webp} type="image/webp" />
              <img
                src={playlist.owner.avatar && playlist.owner.avatar.trim() !== '' ? playlist.owner.avatar : 'https://via.placeholder.com/40x40.png?text=User'}
                alt={playlist.owner.username}
                width={32}
                height={32}
                loading="lazy"
                className="w-8 h-8 rounded-full border-2 border-purple-400 object-cover cursor-pointer"
                onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/40x40.png?text=User'; }}
              />
            </picture>
          </Link>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-base truncate">{playlist.name}</h3>
          {playlist.description && (
            <p className="text-gray-400 text-sm line-clamp-2">
              {playlist.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
