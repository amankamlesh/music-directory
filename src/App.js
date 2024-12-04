import React, { useState, useRef, useEffect } from "react";
import { Howl, Howler } from "howler";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SongList from "./components/SongList";
import NowPlaying from "./components/NowPlaying";
import PlayerControls from "./components/PlayerControls";
import SearchBar from "./components/SearchBar";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [songOrder, setSongOrder] = useState([
    { title: "Billie Jean", artist: "Michael Jackson", src: "billie-jean.mp3" },
    { title: "Beat It", artist: "Michael Jackson", src: "beat-it.mp3" },
    { title: "Smooth Criminal", artist: "Michael Jackson", src: "smooth-criminal.mp3" },
    { title: "Don't Stop 'Til You Get Enough", artist: "Michael Jackson", src: "dont-stop.mp3" },
    { title: "Rock with You", artist: "Michael Jackson", src: "rock-with-you.mp3" },
  ]);

  const filteredSongs = songOrder.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const soundRef = useRef(null);

  useEffect(() => {
    Howler.volume(0.5); // Set default global volume
  }, []);

  const playSong = (index) => {
    if (soundRef.current) soundRef.current.stop();

    const song = filteredSongs[index];
    const sound = new Howl({
      src: [song.src],
      html5: true,
      onend: nextSong,
    });

    sound.play();
    soundRef.current = sound;
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
    if (soundRef.current) soundRef.current.pause();
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % filteredSongs.length;
    playSong(nextIndex);
  };

  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;
    playSong(prevIndex);
  };

  const toggleMute = () => {
    Howler.mute(!isMuted);
    setIsMuted(!isMuted);
  };

  return (
    <div className="app-container flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 backdrop-blur-md text-white">
  <DndProvider backend={HTML5Backend}>
    {/* Header Section */}
    <div className="flex flex-wrap justify-between items-center bg-gray-800 p-4">
      {/* Logo and Title */}
      <h1 className="text-xl font-bold">DreamMusic</h1>

      {/* Navigation Menu */}
      <nav className="flex flex-wrap gap-4 md:space-x-8 text-sm font-medium text-gray-200">
        <button className="hover:text-white focus:outline-none">Music</button>
        <button className="hover:text-white focus:outline-none">Podcast</button>
        <button className="hover:text-white focus:outline-none">Live</button>
        <button className="hover:text-white focus:outline-none">Radio</button>
      </nav>

      {/* Search Bar and Icons */}
      <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0 space-x-0 md:space-x-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {/* Settings Icon */}
        <button
          aria-label="Settings"
          className="text-gray-200 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v1.5m0 12v1.5m7.5-7.5h-1.5m-12 0H4.5m2.474 4.974l1.061-1.061m8.838 0l-1.061 1.061m0-8.838l1.061 1.061M8.035 8.035L6.974 6.974m3.976 5.961a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
            />
          </svg>
        </button>
        {/* Logout Icon */}
        <button
          aria-label="Logout"
          className="text-gray-200 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3H6.75A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21h6.75a2.25 2.25 0 002.25-2.25V15M18 9l3 3m0 0l-3 3m3-3H9"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Artist Section */}
    <div className="artist-photo-container w-full flex justify-center mt-8 px-4">
      <img
        src="./artist.jpeg"
        alt="Artist"
        className="w-full max-w-2xl h-auto object-cover rounded-lg"
      />
    </div>

    {/* Content Section */}
    <div className="content flex flex-col md:flex-row justify-between p-4 gap-8">
      <SongList
        className="w-full md:w-3/4"
        songOrder={filteredSongs}
        setSongOrder={setSongOrder}
        playSong={playSong}
      />
      <div className="player-controls w-full md:w-1/4 p-4 bg-gray-800 rounded-lg">
        <NowPlaying song={filteredSongs[currentSongIndex]} />
        <PlayerControls
          isPlaying={isPlaying}
          playSong={playSong}
          pauseSong={pauseSong}
          nextSong={nextSong}
          prevSong={prevSong}
          isMuted={isMuted}
          toggleMute={toggleMute}
        />
      </div>
    </div>
  </DndProvider>
</div>

  );
}

export default App;
