import React from 'react';

const CatList = (props) => {
  return (
    <ul>
      {props.breeds.map((cats, index) => (
        <li key={index}>{cats}</li>
      ))}
    </ul>
  );
};

export default CatList;

// import React, { Component } from 'react';

// class CatList extends Component {
//   render() {
//     const breeds = () => this.props.cats.map((cat) => <li>{cat}</li>);
//     return (
//       <div>
//         <h2>List of Cat Breeds</h2>
//         <ul>{breeds()}</ul>
//       </div>
//     );
//   }
// }

// export default CatList;

// import React, { Component } from 'react';

// class CatList extends Component {
//   render() {
//     const breeds = () => this.props.cats.map((cat) => <li>{cat}</li>);
//     return (
//       <div>
//         <h2>List of Cat Breeds</h2>
//         <ul>{breeds()}</ul>
//       </div>
//     );
//   }
// }

// export default CatList;
