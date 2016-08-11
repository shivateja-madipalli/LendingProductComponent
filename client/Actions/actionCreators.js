  // Action Creators

import {getData, getBasicsData, getInterestData, getAccountingData, submitLoanData, getFeeSetUrl, getExisitingFeeSets} from '../api/serverCalls';

export function openExistingLendingProduct(LendingProductName, LendingProductId) {
  return {
    type: 'OPEN_EXISITING_LENDING_PRODUCT',
    LendingProductName,
    LendingProductId
  }
}


export function changeSelectedLendingProduct(changedLendingProductValue) {
  // console.log('changeSelectedLendingProduct in Actions Invoked');
  return {
    type: 'CHANGE_SELECTED_LENDING_PRODUCT',
    changedLendingProductValue
  }
}

export function testActiontoTestRetrievingDataFromSalesForce() {
  return {
    type: 'RETRIEVE_REQUESTED_DATA',
    returnValueConcernedToRequested: getData()
  };
}

export function getDataFromDB(AccountingPage, InterestPage, BasicsPage) {
  // console.log('listOfAllElements in ACTION CREATOR', listOfAllElements);
  return {
    type: 'RETRIEVE_DATA',
    jsonValueOfAllElements: getData(AccountingPage, InterestPage, BasicsPage)
  }
}

export function getBasicsDataFromDB(BasicsPageFieldNames) {
  // console.log('BasicsPageFieldNames in ACTION CREATOR', BasicsPageFieldNames);
  return {
    type: 'RETRIEVE_BASICSPAGE_DATA',
    jsonValueOfBasicsPage: getBasicsData(BasicsPageFieldNames)
  }
}

export function getInterestDataFromDB(InterestPageFieldNames) {
  // console.log('InterestPageFieldNames in ACTION CREATOR', InterestPageFieldNames);
  return {
    type: 'RETRIEVE_INTERESTPAGE_DATA',
    jsonValueOfInterestPage: getInterestData(InterestPageFieldNames)
  }
}

export function getAccountingDataFromDB() {
  return {
    type: 'RETRIEVE_ACCOUNTINGPAGE_DATA',
    jsonValueOfAccountingPage: getAccountingData()
  }
}

export function getFeeSetUrlFromDB() {
  return {
    type: 'RETRIEVE_FEESET_URL',
    feeSetUrl: getFeeSetUrl()
  }
}

export function getExisitingFeeSetsFromDB() {
  return {
    type: 'EXISITING_FEESET_DATA',
    exisitingFeeSetData: getExisitingFeeSets()
  }
}

export function submitForm(loanData) {
  return {
    type: 'SUBMIT_FORM',
    allDataInsertedConfirmation: submitLoanData(loanData)
  }
}



// export function getDataFromDB() {
//   return {
//     type: 'RETRIEVE_DATA',
//     jsonValueOfAllElements: getData()
//   }
// }
