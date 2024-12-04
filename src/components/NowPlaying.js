import React from 'react';

const NowPlaying = ({ song }) => {
  return (
    <div className="glass-card bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-lg font-bold text-gray-200">Now Playing</h2>
      <p className="mt-2 text-sm text-gray-300">{song.title}</p>
      <p className="text-xs text-gray-400">by {song.artist}</p>
    </div>
  );
};

export default NowPlaying;
