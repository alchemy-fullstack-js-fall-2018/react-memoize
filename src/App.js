import React, { Component, Fragment } from 'react';
import Func from '../func/Func';

export default class App extends Component {
  state = {
    title: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <Fragment>
        <input name="title" value={title} onChange={this.handleChange} />
        <Func title="My Title" />
      </Fragment>
    );
  }
}