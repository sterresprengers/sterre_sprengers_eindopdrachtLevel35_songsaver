import React from "react";
import SongItem from "./SongItem"

const SongList = (props) => {
    console.log("this is props in SongList", props)

    const songList = props.songs.map(song => {
        console.log("this is song in SongList props.songs.map", song)
        return <SongItem key={song.id} song={song} />
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
