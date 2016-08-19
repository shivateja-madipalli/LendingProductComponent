import React, { Component } from 'react';
import { connect } from 'react-redux';
import batchJobs from '../components/batchJobs';
import {getBatchJobValues, scheduleJob, getEODBatchJobsCountFromDB, saveJob, getHelpTextFromDB} from '../actions/batchJobsActions';

function mapStateToProps(globalState) {
  console.log('mapStateToProps in BatchJobsContainer', globalState);
  return {
    batchJobData: globalState.batchJobReducer.batchJobsData,
    helpTextData: globalState.batchJobReducer.helpTextOfAllElements
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBatchJobValues: (batchJobsNamesasArray) => {
      dispatch(getBatchJobValues(batchJobsNamesasArray))
    },

    scheduleJob: (batchJobId, crontime, jobname, container_id, id_obj) => {
      dispatch(scheduleJob(batchJobId, crontime, jobname, container_id, id_obj))
    },

    getEODBatchJobsCountFromDB: () => {
      dispatch(getEODBatchJobsCountFromDB())
    },

    saveJob: (idToAbort, cronTime, jobName) => {
      dispatch(saveJob(idToAbort, cronTime, jobName))
    },

    getHelpTextFromDB: (jsonStringWithElementIds) => {
      dispatch(getHelpTextFromDB(jsonStringWithElementIds))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(batchJobs);
