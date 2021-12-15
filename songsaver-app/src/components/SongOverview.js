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
        {id: 1, title: "Ik ben een kerstbal", artist: "Bert & Ernie", genre: "Pop", rating: "3", filtered: true},
        {id: 2, title: "Canto Ostinato", artist: "Simeon ten Holt", genre: "Classic", rating: "5", filtered: true},
        {id: 3, title: "Unforgiven 2", artist: "Metallica", genre: "Rock", rating: "2", filtered: true},
        {id: 4, title: "Wachten duurt lang", artist: "Bert & Ernie", genre: "Pop", rating: "3", filtered: true},
        {id: 5, title: "Meandres", artist: "Simeon ten Holt", genre: "Classic", rating: "5", filtered: true},
        {id: 6, title: "Nothing else matters", artist: "Metallica", genre: "Rock", rating: "2", filtered: true}
      ],
    }
  this.addSong = this.addSong.bind(this)
  this.deleteSong = this.deleteSong.bind(this)
  this.selectGenre = this.selectGenre.bind(this)
  this.selectRating = this.selectRating.bind(this)
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
      console.log("newList in deleteSong is", newList)
      return newList
    })
  }

  // selectGenre = (event) => {
  //   const selectedGenre = event.target.value
  //   console.log("selectGenre was activated with", selectedGenre)
  //   this.setState({
  //     songs: [...this.state.songs].filter(song => {
  //       if (song.genre === selectedGenre) {
  //         console.log("genre wasn't same as selectedGenre")
  //         return {
  //           filtered: true
  //         }
  //       }

  //     })
  //   })
  // }


  selectGenre = (event) => {
    const selectedGenre = event.target.value 
    const newList = this.state.songs.map((song) => {
      if (song.genre === selectedGenre) {
        console.log("genre wasn't same as selected genre", song.genre)
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          // genre: song.genre,
          filtered: false
        }
      }
      else {
        console.log("wasn't equal")
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          filtered: true
        }
      }
    })
    this.setState({
      songs: [...this.state.songs].concat(newList)        
    })
  }



  // BEST WERKENDE TOT NU TOE: 
  // selectGenre = (event) => {
  //   const selectedGenre = event.target.value 
  //   console.log("selectGenre was activated with", selectedGenre)
  //   this.setState(prevState => {
  //     const oldSongList = [...prevState.songs]
  //     // console.log("the oldSongList", oldSongList[1].filtered)
  //     const newSongList = oldSongList.map((song) => {
  //       if (song.genre !== selectedGenre) {
  //         console.log("genre wasn't same as selected genre", song.genre)
  //         return {
  //           // id: song.id,
  //           // title: song.title,
  //           // artist: song.artist,
  //           // genre: song.genre,
  //           filtered: false
  //         }
  //       } 
  //       else {
  //         return {
  //           // id: song.id,
  //           // title: song.title,
  //           // artist: song.artist,
  //           // genre: song.genre,
  //           filtered: true}
  //       }
  //     })
  //     console.log("the newSongList", newSongList)
  //     return newSongList
  //     // const newThisStateSongs = {...prevState, songs: newSongList}
  //     // console.log("newThisStateSongs is", newThisStateSongs)
  //     // return newThisStateSongs
  //   })
  // }

  // selectGenre = (event) => {
  //   // const {value} = event.target
  //   const selectedGenre = event.target.value
  //   console.log("selectGenre was activated", event.target.value)
  //   // const existingGenresInList = [this.state.songs.genre]
  //   // console.log("existingGenresInList is", existingGenresInList)
  //   const filteredList = this.state.songs.filter((song) => {
  //     console.log("this.state.songs.filter was activated")
  //     const songGenre = song.genre
  //     return songGenre === selectedGenre
  //   })
  //   console.log("this is filteredList after .fiilter()", filteredList)
  //   return <SongList 
  //             songs={filteredList} 
  //             deleteSong={this.deleteSong}
  //             selectGenre={this.selectGenre}
  //             selectRating={this.selectRating}
  //           />
  // }

  // selectGenre = (event) => {
  //   // const {value} = event.target
  //   const selectedGenre = event.target.value
  //   console.log("selectGenre was activated", selectedGenre)
  //   this.setState(prevState => {
  //     const oldSongList = [...prevState.songs]
  //     console.log("this is oldSongList", oldSongList)
  //     const newSongList = oldSongList.filter(item => {
  //       const itemGenre = item.genre
  //       console.log("itemGenre is", itemGenre)
  //       return itemGenre === selectedGenre
  //     })
  //     console.log("this is newSongList", newSongList)
  //     const newList = {...prevState, songs: newSongList}
  //     return newList
  //   })
  // }

  selectRating = (rating) => {
    console.log("selectRating was activated")
  }
  
  render() {
    return (
      <div>
        <SongForm 
          addSong={this.addSong} 
        />    
        <SongList 
          songs={this.state.songs} 
          deleteSong={this.deleteSong} 
          selectGenre={this.selectGenre}
          selectRating={this.selectRating} 
        />
      </div>
    )
  }
}
  
export default SongOverview;