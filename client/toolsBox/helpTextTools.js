import {getThekeysOfJSON, getValueForPassed} from '../toolsBox/jsonTools';

export function getJSONwithIdsForHelpText(jsonData) {
  let jsonWithHelpTextId = [];

  // let batchJobKeys = thisVal.getThekeysOfAllBatchJobs(thisVal.state.batchData.default);


  let batchJobKeys = getThekeysOfJSON(jsonData);
  let jsonArrayWithHelpTextId = [];

  for(let i=0;i< batchJobKeys.length; i++) {
    jsonArrayWithHelpTextId.push(
      {
         "elementId" : jsonData[batchJobKeys[i]].idForHelpText,
         "helpText" : ""
      }
    )
  }
  return jsonArrayWithHelpTextId;
}
