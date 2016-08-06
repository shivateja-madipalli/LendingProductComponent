import React, { Component } from 'react';
import { connect } from 'react-redux';
import RootComponent from '../components/RootComponent.js';
import { getAccountingDataFromDB } from '../actions/actionCreators';


function mapStateToProps(globalState) {
  console.log('mapStateToProps in ROOT COMPONENT_CONTAINER', globalState);
  return {
    existinglendingProducts: globalState.existinglendingProducts,
    newLendingProduct: globalState.newLendingProduct
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	 getAccountingDataFromDB: () => {
    	dispatch(getAccountingDataFromDB())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
