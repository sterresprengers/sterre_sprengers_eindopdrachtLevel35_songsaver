import React from "react";
import SongItem from "./SongItem"

const SongList = ({songs, deleteSong, selectGenre, selectRating, }) => {

    const songList = songs.map(song => {
        if (song.filteredGenre === true && song.filteredRating === true) {
            return <SongItem key={song.id} song={song} deleteSong={deleteSong}/>
        }
    })

  return (
    <div>
      <h1>Your Playlist</h1>
      <table>
        <tbody>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>
                <select onChange={selectGenre}>
                    <option value="All">--genre--</option>
                    <option value="Classic">Classic</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Rock">Rock</option>
                    <option value="Soul">Soul</option>
                    <option value="Metal">Metal</option>
                    <option value="Hiphop">Hiphop</option>
                </select>
            </th>
            <th>
                <select onChange={selectRating}>
                    <option value="All">--rating--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </th>
          </tr>
            {songList}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
