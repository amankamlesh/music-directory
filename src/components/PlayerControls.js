import React from "react";

const PlayerControls = ({ isPlaying, isMuted, playSong, pauseSong, toggleMute, nextSong, prevSong }) => {
  return (
    <div className="flex items-center justify-center space-x-6">
      {/* Previous Button */}
      <button
        onClick={prevSong}
        className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Play/Pause/Mute Button */}
      <button
        onClick={isPlaying ? toggleMute : playSong}
        className="p-4 bg-blue-500 rounded-full text-white hover:bg-blue-400 transition duration-300"
      >
        {isPlaying ? (
          isMuted ? (
            /* Mute Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 9l6 6M15 9l-6 6M5 10h1.586l5.707 5.707c.391.391.902.293 1.293 0L19.414 10H21m-6.707-4.293l-5 5m10 0l-5-5"
              />
            </svg>
          ) : (
            /* Pause Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 9v6m4-6v6m-5-7h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2V9a2 2 0 012-2z"
              />
            </svg>
          )
        ) : (
          /* Play Icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
          </svg>
        )}
      </button>

      {/* Next Button */}
      <button
        onClick={nextSong}
        className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default PlayerControls;
