import {getBatchJobData, getEODBatchJobsCount, saveBatchJob, getHelpText} from '../api/batchJobsServCalls';

export function getBatchJobValues(batchJobsNamesasArray) {
  return {
    type: 'RETRIEVE_BATCHJOB_DATA',
    batchJobListwithVals: getBatchJobData(batchJobsNamesasArray)
  };
}


export function getEODBatchJobsCountFromDB() {
  return {
    type: 'RETRIEVE_EOD_BATCHJOBS_COUNT',
    eodBatchJobsCount:getEODBatchJobsCount()
  }
}


export function scheduleJob(batchJobId,
  crontime, jobname, container_id, id_obj) {
  return {
    type: 'RETRIEVE_REQUESTED_DATA',
    returnValueConcernedToRequested: getData()
  };
}

export function saveJob(idToAbort, cronTime, jobName) {
  return {
    type: 'SAVE_BATCH_JOB',
    returnValueAfterSavingJob : saveBatchJob(idToAbort, cronTime, jobName)
  }
}

export function getHelpTextFromDB(jsonStringForHelpText) {
  return {
    type: 'GET_HELP_TEXT_DATA',
    HelpTextDataWithElementIds : getHelpText(jsonStringForHelpText)
  }
}
