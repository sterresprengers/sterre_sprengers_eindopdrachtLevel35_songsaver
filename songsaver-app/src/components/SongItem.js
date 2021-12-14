import React from "react";

const SongItem = (song) => {
    console.log("this is song in SongItem", song)

  return (
    <tr>
        <td>{song.song.title}</td>
        <td>{song.song.artist}</td>
        <td>{song.song.genre}</td>
        <td>{song.song.rating}</td>
    </tr>
  );
};

export default SongItem;