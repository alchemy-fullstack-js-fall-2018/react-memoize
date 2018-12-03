import React, { Fragment, Component } from 'react';
import Func from '../func/Func';

export default class App extends Component {
  state = {
    title: 'hello'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title } = this.state;

    return (
      <Fragment>
        <h1>Memoization App</h1>
        <input name="title" value={title} onChange={this.handleChange} />
        <Func title="My Title" />
      </Fragment>
    );
  }
}
