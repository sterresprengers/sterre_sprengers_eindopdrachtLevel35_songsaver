import React from "react";
import SongItem from "./SongItem"

const SongList = ({songs, deleteSong, handleFilter }) => {

    const songList = songs.map(song => {
        if (song.filteredGenre === "Yes" && song.filteredRating === "Yes") 
            {
            return <SongItem key={song.id} song={song} deleteSong={deleteSong}/>
        }
        // else {
        //     console.log("false - false")
        // }
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
                <select onChange={handleFilter}>
                    <option value="allGenres">--genre--</option>
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
                <select onChange={handleFilter}>
                    <option value="allRating">--rating--</option>
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
