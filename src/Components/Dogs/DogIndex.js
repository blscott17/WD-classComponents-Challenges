import React, { Component } from 'react';

class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { dogImage: '', dogStatus: '' };
  }

  fetchDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ dogImage: json.message, dogStatus: json.status });
        // console.log(json);
        if (this.state.dogStatus !== 'success') {
          console.log('Fetch failed, try again!');
        }
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    return (
      <div>
        <img src={this.state.dogImage} alt='random picture of a dog' />
        <br />
        <br />
        <button onClick={() => this.fetchDog()}>Get Another Picture</button>
      </div>
    );
  }
}

export default DogIndex;
