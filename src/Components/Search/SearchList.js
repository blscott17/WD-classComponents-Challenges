import React, { Component } from 'react';

class SearchList extends Component {
  render() {
    return (
      <div>
        {this.props.things.map((thing) => (
          <li>{thing}</li>
        ))}
      </div>
    );
  }
}

export default SearchList;
