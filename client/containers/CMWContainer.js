import React, { Component } from 'react';
import { connect } from 'react-redux';
import cmw from '../components/cmw';
import {testActiontoTestRetrievingDataFromSalesForce} from '../actions/actionCreators';


function mapStateToProps(globalState) {
  console.log('mapStateToProps in cmwContainer', globalState);
  return {
    existinglendingProducts: globalState.existinglendingProducts
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    testActiontoTestRetrievingDataFromSalesForce: () => {
      dispatch(testActiontoTestRetrievingDataFromSalesForce())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(cmw);
