import React from 'react';

const RootComponent = React.createClass({

  getInitialState() {
    return {
      basicData : {},
      interestData : {},
      accountingData : {},
      isLoading : true
    }
  },

  // getInitialState() {
  //   return {
  //     testVal = {}
  //   }
  // },

  componentWillMount() {
    console.log('componentWillMount');
  },

  componentDidMount() {
    console.log('componentDidMount');
    this.props.getAccountingDataFromDB();
  },

  componentWillReceiveProps(NextProps) {
    console.log('componentWillReceiveProps', NextProps);
  },

  componentWillUnmount() {
    console.log('componentWillUnmount');
  },

  render()  {
    console.log('RENDERING');
    return (
      <div>
        <p> Loading! </p>
      </div>
    )

  }

});

export default RootComponent;
