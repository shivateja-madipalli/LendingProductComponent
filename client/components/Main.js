import React from 'react';
import { Link } from 'react-router';
import LendingProductContainer from '../containers/LendingProductContainer';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h2>
           Setup Wizard
        </h2>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});


export default Main;
