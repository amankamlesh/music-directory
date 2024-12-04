import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const SongList = ({ songOrder, setSongOrder, playSong }) => {
  const moveSong = (draggedIndex, targetIndex) => {
    const updatedSongs = [...songOrder];
    const [draggedSong] = updatedSongs.splice(draggedIndex, 1);
    updatedSongs.splice(targetIndex, 0, draggedSong);
    setSongOrder(updatedSongs);
  };

  return (
    <div className="song-list flex flex-col w-3/4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow-lg rounded-lg p-6">
  {songOrder.map((song, index) => (
    <SongItem
      key={index}
      index={index}
      song={song}
      moveSong={moveSong}
      playSong={playSong}
    />
  ))}
</div>

  );
};

const SongItem = ({ index, song, moveSong, playSong }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'SONG',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'SONG',
    hover: (item) => {
      if (item.index !== index) {
        moveSong(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`song-item p-4 flex justify-between items-center cursor-pointer ${isDragging ? 'opacity-50' : ''}`}
      onClick={() => playSong(index)}
    >
      <span>{song.title} - {song.artist}</span>
    </div>
  );
};

export default SongList;
