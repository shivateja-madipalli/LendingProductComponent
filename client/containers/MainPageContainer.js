import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../pages/MainPage';
import {getHelpTextFromDB} from '../actions/batchJobsActions';

import {getHelpTextOfAllElementsFromDB} from '../actions/actionCreators';


function mapStateToProps(globalState) {
  console.log('mapStateToProps in MAIN PAGE CONTAINER', globalState);
  return {
    helpTextData: globalState.existinglendingProducts.HelpTextData
  };
}


const mapDispatchToProps = (dispatch) => {
  return {

    // testActiontoTestRetrievingDataFromSalesForce: () => {
    //   dispatch(testActiontoTestRetrievingDataFromSalesForce())
    // }/

    getHelpTextFromDB: (jsonStringForHelpText) => {
      dispatch(getHelpTextFromDB(jsonStringForHelpText))
    },

    getHelpTextOfAllElementsFromDB: (elementIds) => {
      dispatch(getHelpTextOfAllElementsFromDB(elementIds))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
