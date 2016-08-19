import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualBatchJobs from '../components/IndividualBatchJobs';
import {saveJob} from '../actions/batchJobsActions';


function mapStateToProps(globalState) {
  console.log('mapStateToProps in Individual Batch Job Container', globalState);
  return {
    returnValueAfterSavingBatchJob : globalState.batchJobReducer.returnValueAfterSave
  };
}


const mapDispatchToProps = (dispatch) => {
  return {

    // testActiontoTestRetrievingDataFromSalesForce: () => {
    //   dispatch(testActiontoTestRetrievingDataFromSalesForce())
    // }/

    saveJob: (idToAbort, cronTime, jobName)=> {
      dispatch(saveJob(idToAbort, cronTime, jobName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualBatchJobs);
