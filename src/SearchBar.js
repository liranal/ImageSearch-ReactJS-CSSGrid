import React, { Component } from "react";
class SearchBar extends Component {
  state = { term: "" };

  setTerm = (e) => {
    e.preventDefault();
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" method="post">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.setTerm}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
