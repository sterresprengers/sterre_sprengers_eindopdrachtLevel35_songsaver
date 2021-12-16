import React from "react";
import SongItem from "./SongItem"

const SongList = ({songs, deleteSong, selectGenre, selectRating, selectedGenre}) => {
    console.log("songs in SongList is", songs)

    // const songList = songs.map(song => {
    //     // console.log("this is song.genre", song.genre)
    //     // if (selectedGenre === null || song.genre) {
    //         // console.log("song.genre YES")
    //         return <SongItem key={song.id} song={song} deleteSong={deleteSong}/>
    //     // }
    //     // else {
    //         // console.log("song.genre NO")
    //     // }  
    // })

    // const songList = songs.map(song => {
    //     console.log("this is song.genre", song.genre)
    //     if (selectedGenre === null || song.genre) {
    //         console.log("song.genre YES")
    //         return <SongItem key={song.id} song={song} deleteSong={deleteSong}/>
    //     }
    //     else {
    //         console.log("song.genre NO")
    //     }  
    // })

    const songList = songs.map(song => {
        if (song.filtered === true) {
            console.log("check if song is true", song.filtered)
            return <SongItem key={song.id} song={song} deleteSong={deleteSong}/>
        }
        else {
            console.log("song.filtered was false (check)", song.filtered)
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
                    <option value="">--genre--</option>
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
                <select onChange={() => selectRating(songs.rating)}>
                    <option value="">--rating--</option>
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
