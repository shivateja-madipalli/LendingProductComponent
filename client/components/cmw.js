import React from 'react';
let $ = require ('jquery');


const cmw = React.createClass({

  getInitialState() {
    // FIRST
    console.log('getInitialState');
    return {
      test: ""
    }
  },

  componentWillMount() {
    // SECOND
    console.log('componentWillMount');
  },

  render() {
    // Third
    console.log('RENDER', this.props);
    return (
      <div>
        <p> CMW Component </p>
      </div>
    )
  },

  componentDidMount() {
    // FOURTH
    console.log('componentDidMount');
    this.setState({
      test: "Test Value"
    })
  },

  componentWillReceiveProps(NextProps) {
    // Fifth
    console.log('componentWillReceiveProps', NextProps);
  },

  shouldComponentUpdate() {
    // Sixth
    console.log('shouldComponentUpdate');
    if(this.state.test) {
      return true;
    }
    else {
      return false;
    }
  },

  componentWillUnmount() {
    // LAST
    console.log('componentWillUnmount');
  }

});

export default cmw;
