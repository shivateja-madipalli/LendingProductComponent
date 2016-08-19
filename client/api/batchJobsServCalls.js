export function getBatchJobData(batchJobNamesArray) {
  console.log('batchJobNamesArray in getBatchJobData SERVER CALL', batchJobNamesArray);
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getAllBatchJobs(batchJobNamesArray, function(Result, event){
        console.log('STATUS:', event.status);
        if (event.status)
        {
          console.log('Result=',Result);

          if(Result!= '')
          {
            // console.log('INFORMATION=',Result);
          }
          else
          {
            // console.log('PROBLEM WITH INFORMATION=',Result);
          }
        }
        return resolve({listOfBatchJobData: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}



export function getHelpText(jsonStringWithElementIds) {

  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getHelperText(jsonStringWithElementIds, function(Result, event){
        console.log('STATUS:', event.status);
        if (event.status)
        {
          console.log('Result=',Result);

          if(Result!= '')
          {
            // console.log('INFORMATION=',Result);
          }
          else
          {
            // console.log('PROBLEM WITH INFORMATION=',Result);
          }
        }
        return resolve({HelpTextData: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}


export function getEODBatchJobsCount() {
  // console.log('listOfAllElements in SERVER CALL', listOfAllElements);
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.EODBatchJobsCount(function(Result, event){
        if (event.status)
        {
          console.log('Result=',Result);

          if(Result!= '')
          {
            // console.log('INFORMATION=',Result);
          }
          else
          {
            // console.log('PROBLEM WITH INFORMATION=',Result);
          }
        }
        return resolve({count: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function saveBatchJob(idToAbort, cronTime, jobName) {
  // console.log('listOfAllElements in SERVER CALL', listOfAllElements);
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.scheduleBatch(idToAbort, cronTime, jobName ,function(Result, event){
        if (event.status)
        {
          console.log('Result=',Result);

          if(Result!= '')
          {
            // console.log('INFORMATION=',Result);
          }
          else
          {
            // console.log('PROBLEM WITH INFORMATION=',Result);
          }
        }
        return resolve({resultAfterSave: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}
