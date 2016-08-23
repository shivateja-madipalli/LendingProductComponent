  export function getThekeysOfJSON(data) {
    // let batchData = thisVal.props.batchData.default;
    let keyS = Object.keys(data);
    return keyS;
  }


  export function getValueForPassed(jsonData, keyS, fieldName) {
    // let batchData = thisVal.props.batchData.default;
    let returnValue = [];
    // let keyS = jsonTools.getThekeysOfJSON(jsonData);
    for(let i=0;i<keyS.length;i++) {
      returnValue.push(jsonData[keyS[i]][fieldName]);
    }
    return returnValue;
  }
