import React from "react";

class SongForm extends React.Component {
  // <SongForm addSong={this.addSong}/>
  state = {
    title: "",
    artist: "",
    genre: ["classic", "pop", "jazz", "rock", "soul", "metal", "hiphop"],
    rating: ["1", "2", "3", "4", "5"],
  };

  render() {
    const onInputSong = (event) => {
      console.log("onInputSong was activated");
      this.setState({
        title: event.target.value,
      });
    };

    const onInputArtist = (event) => {
      console.log("onInputArtist was activated");
      this.setState({
        artist: event.target.value,
      });
    };

    const onSelectGenre = (event) => {
      console.log("onSelectGenre was selected");
      this.setState({
        genre: event.target.value,
      });
    };

    const onSelectRating = (event) => {
      console.log("onSelectRating was selected");
      this.setState({
        rating: event.target.value,
      });
    };

    const onSubmit = (event) => {
      event.preventDefault();
      console.log("onSubmit in SongForm was clicked");
      this.props.addSong(this.state);
      this.setState({
        title: "",
        artist: "",
        genre: "",
        rating: "",
      });
      console.log(
        this.state.title,
        this.state.artist,
        this.state.genre,
        this.state.rating
      );
    };

    return (
      <form onSubmit={onSubmit}>
        <h1>Add your favorite song</h1>
        {/* <table style={{width: "100%"}}> */}
        <table>
          <tbody>
            <tr className="song-header">
              <th className="song-row-item">Title</th>
              <th className="song-row-item">Artist</th>
              <th className="song-row-item">Genre</th>
              <th className="song-row-item">Rating</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={onInputSong}
                  value={this.state.title}
                  className="song-input-item"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Artist"
                  onChange={onInputArtist}
                  value={this.state.artist}
                  className="song-input-item"
                />
              </td>
              <td>
                <select
                  value={this.state.genre}
                  onChange={onSelectGenre}
                  name="genre"
                >
                  <option value="">--select genre--</option>
                  <option value="classic">Classic</option>
                  <option value="pop">Pop</option>
                  <option value="jazz">Jazz</option>
                  <option value="rock">Rock</option>
                  <option value="soul">Soul</option>
                  <option value="metal">Metal</option>
                  <option value="hiphop">Hiphop</option>
                </select>
              </td>
              <td>
                <select
                  value={this.state.rating}
                  onChange={onSelectRating}
                  name="rating"
                >
                  <option value="">--rate song--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Add</button>
      </form>
    );
  }
}

export default SongForm;
