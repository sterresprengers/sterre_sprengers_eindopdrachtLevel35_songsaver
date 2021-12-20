// NOTE TO WINC TEACHERS:
// I've built filterGenre and filterRating as two seperated handle events (those are commented out below)
// I've also tried to combine those filters into one new handleFilter function,
// which works flowless untill certain point (if filters are combined about four times)

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
          filteredRating: true,
        },
        {
          id: 2,
          title: "Canto Ostinato",
          artist: "Simeon ten Holt",
          genre: "Classic",
          rating: "5",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 3,
          title: "Unretrofied",
          artist: "The Dillinger Escape Plan",
          genre: "Rock",
          rating: "4",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 4,
          title: "Shake it like a polaroid picture",
          artist: "Outkast",
          genre: "Hiphop",
          rating: "3",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 5,
          title: "Moonlight",
          artist: "JS Bach",
          genre: "Classic",
          rating: "2",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 6,
          title: "Show yourself",
          artist: "Mastodon",
          genre: "Metal",
          rating: "4",
          filteredGenre: true,
          filteredRating: true,
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    // this.filterGenre = this.filterGenre.bind(this); // for separated handle event filterGenre
    // this.filterRating = this.filterRating.bind(this); // for separated handle event filterRating
    this.handleFilter = this.handleFilter.bind(this);
  }

  addSong = (song) => {
    const newSong = {
      id: this.state.songs.length + 1,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
      filteredGenre: true,
      filteredRating: true,
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

  handleFilter = (event) => {
    const selectedFilter = event.target.value;
    const newSongList = this.state.songs.map((song) => {
      const filteredGenre = song.filteredGenre;
      const filteredRating = song.filteredRating;
      if (selectedFilter === "allGenres") {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: true,
        };
      } else if (selectedFilter === "allRating") {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: true,
        };
      } else if (
        (selectedFilter === song.genre && filteredRating === true) ||
        (selectedFilter === song.rating && filteredGenre === true)
      ) {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: true,
        };
      } else if (
        (selectedFilter === "allGenres" && filteredRating === false) ||
        (selectedFilter === song.genre && filteredRating === false) ||
        (selectedFilter !== song.genre && filteredRating === false)
      ) {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: false,
        };
      } else if (
        (selectedFilter === "allRating" && filteredGenre === false) ||
        (selectedFilter === song.rating && filteredGenre === false) ||
        (selectedFilter !== song.genre && filteredRating === true)
      ) {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: false,
          filteredRating: true,
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
          filteredRating: false,
        };
      }
    });
    this.setState({ songs: newSongList });
  };

  // //////// SEPARATED HANDLE EVENT filterGenre ////////////////
  // filterGenre = (event) => {
  //   const selectedGenre = event.target.value;
  //   const newSongList = this.state.songs.map((song) => {
  //     if (selectedGenre === "All" || selectedGenre === song.genre) {
  //       return {
  //         id: song.id,
  //         title: song.title,
  //         artist: song.artist,
  //         genre: song.genre,
  //         rating: song.rating,
  //         filteredGenre: true,
  //         filteredRating: true
  //       };
  //     }
  //     else {
  //       return {
  //         id: song.id,
  //         title: song.title,
  //         artist: song.artist,
  //         genre: song.genre,
  //         rating: song.rating,
  //         filteredGenre: false,
  //         filteredRating: true
  //       };
  //     }
  //   });
  //   this.setState({ songs: newSongList})
  // };

  // //////// SEPARATED HANDLE EVENT filterRating /////////////////
  // filterRating = (event) => {
  //   const selectedRating = event.target.value
  //   const newSongList = this.state.songs.map((song) => {
  //     if (selectedRating === "All" || selectedRating === song.rating) {
  //       return {
  //         id: song.id,
  //         title: song.title,
  //         artist: song.artist,
  //         genre: song.genre,
  //         rating: song.rating,
  //         filteredGenre: true,
  //         filteredRating: true
  //       };
  //     }
  //     else {
  //       return {
  //         id: song.id,
  //         title: song.title,
  //         artist: song.artist,
  //         genre: song.genre,
  //         rating: song.rating,
  //         filteredGenre: true,
  //         filteredRating: false
  //       };
  //     }
  //   });
  //   this.setState({ songs: newSongList})
  // };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
          deleteSong={this.deleteSong}
          // filterGenre={this.filterGenre}
          // filterRating={this.filterRating}
          handleFilter={this.handleFilter}
        />
      </div>
    );
  }
}

export default SongOverview;
 