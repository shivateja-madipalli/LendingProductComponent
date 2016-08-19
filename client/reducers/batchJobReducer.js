const INITIAL_STATE = {
  batchJobsData: {},
  eodBatchjobCount: {},
  returnValueAfterSave: {},
  helpTextOfAllElements : {}
};


function batchJobReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "RETRIEVE_BATCHJOB_DATA":
    console.log('RETRIEVE_BATCHJOB_DATA DATA:', action.batchJobListwithVals);
    return {...state, batchJobsData: action.batchJobListwithVals, eodBatchjobCount: state.eodBatchjobCount, returnValueAfterSave: state.returnValueAfterSave, helpTextOfAllElements: state.helpTextOfAllElements};

    case "RETRIEVE_EOD_BATCHJOBS_COUNT":
    return {...state, batchJobsData: state.batchJobsData, eodBatchjobCount: action.eodBatchJobsCount, returnValueAfterSave: state.returnValueAfterSave, helpTextOfAllElements: state.helpTextOfAllElements};

    case "SAVE_BATCH_JOB":
    return {...state, batchJobsData: state.batchJobsData, eodBatchjobCount: state.eodBatchjobCount, returnValueAfterSave: action.returnValueAfterSavingJob, helpTextOfAllElements: state.helpTextOfAllElements};

    case "GET_HELP_TEXT_DATA":
    return {...state, batchJobsData: state.batchJobsData, eodBatchjobCount: state.eodBatchjobCount, returnValueAfterSave: action.returnValueAfterSavingJob, helpTextOfAllElements: action.HelpTextDataWithElementIds};

    default:
    return state;
  }
}

export default batchJobReducer;
