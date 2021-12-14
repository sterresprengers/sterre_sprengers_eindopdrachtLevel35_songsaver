import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends React.Component {
  constructor() {
    super()
    this.state = 
    {
      songs: [
        { id: "", title: "", artist: "", genre: "", rating: ""}
      ],
    }
  this.addSong = this.addSong.bind(this)
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
  
  render() {
    return (
      <div>
        <SongForm addSong={this.addSong}/>    
        <SongList songs={this.state.songs}/>
      </div>
    )
  }
}
  
export default SongOverview;