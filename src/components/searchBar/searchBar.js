import React from 'react';
import './searchBar.scss'


class SearchBar extends React.Component {

  state = { term: '' };

  onInputChange = (event) => {
    this.setState({term: event.target.value})
    // console.log(event.target.value);
  };
  onformSubmit = event => {
    event.preventDefault();
    
    this.props.onFormsubmit(this.state.term);
  };

  render() {
    return (
      <div className="sreach-app ui segment">
        <form className="ui form" onSubmit={this.onformSubmit}>
          <div className="field">
            <label>Video Sreach</label>
            <input type="text"
              onChange={this.onInputChange}  
              value={this.state.term}/>
          </div>
        </form>  
      </div>
    );
  }
}

export default SearchBar;