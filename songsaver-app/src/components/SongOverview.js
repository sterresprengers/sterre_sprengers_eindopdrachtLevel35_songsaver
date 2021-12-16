import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "Ik ben een kerstbal",
          artist: "Bert & Ernie",
          genre: "Pop",
          rating: "1",
          filteredGenre: true,
          filteredRating: true
        },
        {
          id: 2,
          title: "Canto Ostinato",
          artist: "Simeon ten Holt",
          genre: "Classic",
          rating: "5",
          filteredGenre: true,
          filteredRating: true
        },
        {
          id: 3,
          title: "Unforgiven 2",
          artist: "Metallica",
          genre: "Rock",
          rating: "2",
          filteredGenre: true,
          filteredRating: true
        },
        {
          id: 4,
          title: "Wachten duurt lang",
          artist: "Bert & Ernie",
          genre: "Pop",
          rating: "3",
          filteredGenre: true,
          filteredRating: true
        },
        {
          id: 5,
          title: "Meandres",
          artist: "Simeon ten Holt",
          genre: "Classic",
          rating: "4",
          filteredGenre: true,
          filteredRating: true
        },
        {
          id: 6,
          title: "Nothing else matters",
          artist: "Metallica",
          genre: "Rock",
          rating: "2",
          filteredGenre: true,
          filteredRating: true
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
    this.selectRating = this.selectRating.bind(this);
  }

  addSong = (song) => {
    const newSong = {
      id: this.state.songs.length + 1,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
      filteredGenre: true,
      filteredRating: true
    };
    this.setState({ songs: this.state.songs.concat(newSong) });
  };

  deleteSong = (song) => {
    this.setState((prevState) => {
      const oldSongList = [...prevState.songs];
      const newSongList = oldSongList.filter((item) => item !== song);
      const newList = { ...prevState, songs: newSongList };
      return newList;
    });
  };

  selectGenre = (event) => {
    const selectedGenre = event.target.value;
    const newSongList = this.state.songs.map((song) => {
      if (selectedGenre === "All" || selectedGenre === song.genre) {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: true
        };
      } 
      else {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: false,
          filteredRating: true
        };
      }
    });
    this.setState({ songs: newSongList})
  };

  selectRating = (event) => {
    const selectedRating = event.target.value
    const newSongList = this.state.songs.map((song) => {
      if (selectedRating === "All" || selectedRating === song.rating) {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: true
        };
      } 
      else {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: false
        };
      }
    });
    this.setState({ songs: newSongList})
    
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
          deleteSong={this.deleteSong}
          selectGenre={this.selectGenre}
          selectRating={this.selectRating}
        />
      </div>
    );
  }
}

export default SongOverview;
