// import React from 'react';
//import {Input} from 'reactstrap';
import React, { Component } from 'react';
import SearchList from './SearchList';

class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        'pen',
        'marker',
        'eraser',
        'notebook',
        'pencil',
        'scissors',
        'highlighter',
        'stapler',
        'paper clip',
        'binder',
        'hole punch',
        'laminator',
        'laminating sheets',
        'protective sheets',
        'index cards'
      ],
      searchTerm: ''
    };
  }

  searchFunction = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  dynamicSearch = () => {
    return this.state.things.filter((thing) =>
      thing.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };
  //  function searchFunction() {
  //  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.searchTerm}
          onChange={this.searchFunction}
          placeholder='Search Here'
        />
        <h3>Results:</h3>
        <SearchList things={this.dynamicSearch()} />
      </div>
    );
  }
}
export default SearchIndex;
