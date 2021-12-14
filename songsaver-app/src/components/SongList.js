import React from "react";
import SongItem from "./SongItem"

const SongList = ({songs, deleteSong}) => {

    const songList = songs.map(song => {
        return <SongItem key={song.id} song={song} deleteSong={deleteSong}/>
    })

  return (
    <div>
      <h1>Your Playlist</h1>
      <table>
        <tbody>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
            {songList}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
