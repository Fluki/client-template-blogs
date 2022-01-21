import React, { Component } from 'react';
import { BACKEND_URL } from '../constants.js';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', image: '' };

    this.handleChange = this.handleChangeTitle.bind(this);
    this.handleChange = this.handleChangeDescription.bind(this);
    this.handleChange = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ image: event.target.value });
  }

  handleSubmit(event) {
    fetch(`${BACKEND_URL}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(this.state),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });

    console.log(this.state);
    let jsonString = JSON.stringify(this.state);
    console.log(jsonString);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeTitle(event)}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            value={this.state.description}
            onChange={(event) => this.handleChangeDescription(event)}
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            value={this.state.image}
            onChange={(event) => this.handleChangeImage(event)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Create;
