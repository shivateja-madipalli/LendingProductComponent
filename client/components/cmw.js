import React from 'react';
let $ = require ('jquery');


const cmw = React.createClass({

  getInitialState() {
    // FIRST
    console.log('getInitialState');
    return {
      test: {}
    }
  },

  componentWillMount() {
    // SECOND
    console.log('componentWillMount');
  },

  render() {
    // Third
    console.log('RENDER');
    return (
      <div>
        <p> CMW Component </p>
      </div>
    )
  },

  componentDidMount() {
    // FOURTH
    console.log('componentDidMount');
  },

  componentWillReceiveProps(NextProps) {
    // Fifth
    console.log('componentWillReceiveProps');
  },

  shouldComponentUpdate() {
    // Sixth
    console.log('shouldComponentUpdate');
  },

  componentWillUnmount() {
    // LAST
    console.log('componentWillUnmount');
  }

});

export default cmw;
