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
          filteredGenre: "Yes",
          filteredRating: "Yes"
        },
        {
          id: 2,
          title: "Canto Ostinato",
          artist: "Simeon ten Holt",
          genre: "Classic",
          rating: "5",
          filteredGenre: "Yes",
          filteredRating: "Yes"
        },
        {
          id: 3,
          title: "Unforgiven 2",
          artist: "Metallica",
          genre: "Rock",
          rating: "2",
          filteredGenre: "Yes",
          filteredRating: "Yes"
        },
        {
          id: 4,
          title: "Wachten duurt lang",
          artist: "Bert & Ernie",
          genre: "Pop",
          rating: "3",
          filteredGenre: "Yes",
          filteredRating: "Yes"
        },
        {
          id: 5,
          title: "Meandres",
          artist: "Simeon ten Holt",
          genre: "Classic",
          rating: "4",
          filteredGenre: "Yes",
          filteredRating: "Yes"
        },
        {
          id: 6,
          title: "Nothing else matters",
          artist: "Metallica",
          genre: "Rock",
          rating: "2",
          filteredGenre: "Yes",
          filteredRating: "Yes"
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    // this.filterGenre = this.filterGenre.bind(this); 
    // this.filterRating = this.filterRating.bind(this); 
    this.handleFilter = this.handleFilter.bind(this)
  }

  addSong = (song) => {
    const newSong = {
      id: this.state.songs.length + 1,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
      filteredGenre: "Yes",
      filteredRating: "Yes"
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
    const selectedFilter = event.target.value 
    const selectedFilterOptions = event.target.options.value
    console.log("handleFilter was activated with", selectedFilter)
    console.log("selectedFilterOptios", selectedFilterOptions)
    const newSongList = this.state.songs.map(song => {
      console.log("map in handelFilter was activated")
      const filteredGenre = song.filteredGenre
      const filteredRating = song.filteredRating
      if (selectedFilter === "allGenres") {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: "Yes",
          filteredRating: "Yes"
        }
      }
      else if (selectedFilter === "allRating") {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: "Yes",
          filteredRating: "Yes"
        }
      }
      else if (
          // (selectedFilter === "allGenres" && filteredRating === "Yes") ||
          // (selectedFilter === "allRating" && filteredGenre === "Yes") || 
          (selectedFilter === song.genre && filteredRating === "Yes") ||
          (selectedFilter === song.rating && filteredGenre === "Yes")) { 
        console.log("Yes - Yes with", song)
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: "Yes",
          filteredRating: "Yes"
        }
      }
      else if ((selectedFilter === "allGenres" && filteredRating === "No") ||
              (selectedFilter === song.genre && filteredRating === "No") || 
              (selectedFilter !== song.genre && filteredRating === "No")
              // (selectedFilter !== song.rating && filteredGenre === "Yes")
              ) { 
        console.log("Yes - No with", song)
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: "Yes",
          filteredRating: "No"
        }
      }
      else if ((selectedFilter === "allRating" && filteredGenre === "No") ||
              (selectedFilter === song.rating && filteredGenre === "No") || 
              (selectedFilter !== song.genre && filteredRating === "Yes")) {
        console.log("No - Yes with", song)
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: "No",
          filteredRating: "Yes"
        }
      }
      // else if ((selectedFilter !== song.genre && selectedFilter !== song.rating && filteredRating === "No") ||
      //         (selectedFilter !== song.rating && selectedFilter !==song.genre && filteredGenre === "No")) { 
      else {
        console.log("No - No with", song)
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: "No",
          filteredRating: "No"
        }
      }
    })
    this.setState({ songs: newSongList})
  }

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
