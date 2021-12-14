import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends React.Component {
  constructor() {
    super()
    this.state = 
    {
      songs: [
        // { id: "", title: "", artist: "", genre: "", rating: ""}
        {id: 1, title: "Ik ben een kerstbal", artist: "Bert & Ernie", genre: "Pop", rating: "3"},
        {id: 2, title: "Canto Ostinato", artist: "Simeon ten Holt", genre: "Classic", rating: "5"},
        {id: 3, title: "Unforgiven 2", artist: "Metallica", genre: "Rock", rating: "2"}
      ],
    }
  this.addSong = this.addSong.bind(this)
  this.deleteSong = this.deleteSong.bind(this)
  }
  
  addSong = (song) => {
    const newSong = {
      id: this.state.songs.length + 1, 
      title: song.title, 
      artist: song.artist,
      genre: song.genre,
      rating: song.rating      
    }
    this.setState({ songs: this.state.songs.concat(newSong)})
  }

  deleteSong = (song) => {
    this.setState(prevState => {
      const oldSongList = [...prevState.songs]
      const newSongList = oldSongList.filter(item => item !== song )
      const newList = {...prevState, songs: newSongList}
      return newList
    })
  }
  
  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />    
        <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
      </div>
    )
  }
}
  
export default SongOverview;