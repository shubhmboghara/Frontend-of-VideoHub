import React from "react";
import { Link } from "react-router-dom";
import { timeAgo } from "../utils";
import DefaultAvatar from "../assets/DefaultAvatar.png";
import { getOptimizedImageSources } from '../utils/imageUtils';

function formatDuration(durationInSeconds) {
  const totalSeconds = Math.floor(durationInSeconds);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export default function VideoCard({
  id,
  thumbnail,
  title,
  channel,
  avatar,
  views,
  time,
  duration,
}) {
  return (
    <div className="block bg-[#18181b] ">
      <div className="w-full rounded-lg overflow-hidden cursor-pointer ">
        <Link to={`/video/${id}`}>
          <div className="relative ">
            <picture>
              <source srcSet={getOptimizedImageSources(thumbnail).avif} type="image/avif" />
              <source srcSet={getOptimizedImageSources(thumbnail).webp} type="image/webp" />
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover"
                width={320}
                height={180}
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                loading="lazy"
              />
            </picture>
            <span className="bg-black px-2 py-0.5 rounded text-white text-xs absolute bottom-2 right-2">
              {formatDuration(duration)}
            </span>
          </div>
        </Link>

        <div className="p-3 flex gap-3">
          {channel ? (
            <Link to={`/profile/${channel}`} className="shrink-0">
              <picture>
                <source srcSet={getOptimizedImageSources(avatar?.trim() ? avatar : DefaultAvatar).avif} type="image/avif" />
                <source srcSet={getOptimizedImageSources(avatar?.trim() ? avatar : DefaultAvatar).webp} type="image/webp" />
                <img
                  src={avatar?.trim() ? avatar : DefaultAvatar}
                  alt="channel avatar"
                  className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 object-cover"
                  width={40}
                  height={40}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    if (e.currentTarget.src !== DefaultAvatar) {
                      e.currentTarget.src = DefaultAvatar;
                    }
                  }}
                />
              </picture>
            </Link>
          ) : (
            <picture>
              <source srcSet={getOptimizedImageSources(DefaultAvatar).avif} type="image/avif" />
              <source srcSet={getOptimizedImageSources(DefaultAvatar).webp} type="image/webp" />
              <img
                src={DefaultAvatar}
                alt="channel avatar"
                className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 object-cover"
                width={40}
                height={40}
                loading="lazy"
              />
            </picture>
          )}

          <div className="flex-1">
            <h3 className="text-white font-semibold truncate">{title}</h3>
            <div className="flex items-center text-gray-400 text-sm mt-1">
              <span className="truncate">{channel}</span>
            </div>
            <p className="text-gray-500 text-xs mt-1">
              {views} views · {timeAgo(time)}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}