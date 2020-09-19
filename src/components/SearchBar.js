import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{backgroundColor:"red",marginTop:"3%",marginBottom:"8%"}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{color:"black"}}>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              style={{backgroundColor:"rgb(20, 20, 20)",border:"3px solid black", color:'whitesmoke'}}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
