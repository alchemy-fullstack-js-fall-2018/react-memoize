import React, { Component, Fragment } from 'react';
import { MemoizedFunc } from './Func';

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
        <MemoizedFunc title='hard-coded title' />
        {/* <MemoizedFunc title={title} /> */}
      </Fragment>
    );
  }
}
