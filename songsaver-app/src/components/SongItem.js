import React from "react";

const SongItem = ({song, deleteSong}) => {
  return (
    <tr>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.rating}</td>
        <td><button onClick={() => deleteSong(song)}>delete</button></td>
    </tr>
  );
};

export default SongItem;