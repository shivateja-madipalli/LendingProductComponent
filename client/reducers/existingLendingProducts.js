const INITIAL_STATE = {
  basicData : {},
  interestData : {},
  accountingData : {},
  allEnterData : {},
  isLoading : true,
  reRenderElements : false
};

// const INITIAL_STATE = {
//   allData : {},
//   isLoading : true
// };


function existingLendingProducts(state = INITIAL_STATE, action) {

  switch (action.type) {
    case "CHANGE_SELECTED_LENDING_PRODUCT":
    // console.log('CHANGE_SELECTED_LENDING_PRODUCT INVOKED');
    // new state need to be added
    // console.log(state);

    state.names.map(function(individual) {
      if(individual.name == action.changedLendingProductValue) {
        console.log('inside');
        if(individual.checked) {
          individual.checked = false;
        }
        else {
          individual.checked = true;
          // all others to be made false
        }
      }
      else {
        console.log('else');
        individual.checked = false;
      }
    });

    console.log(state);
    return state;

    case "RETRIEVE_REQUESTED_DATA":
    console.log('RETRIEVE_REQUESTED_DATA CALL FROM REDUCER', action.returnValueConcernedToRequested);
    // need to store the values in state
    return state;

    case "RETRIEVE_DATA":
      return { ...state, allData: action.jsonValueOfAllElements, isLoading: false};


    /*
      The below three cases are used for retriving basic, interest, account page data from DB
      the role of reducer is to handle the return value from action's method server call
      i.e., in any action, to get the data from DB, a server Call is made and that server call
      will return a value those values will be handled in here.

      In reduer There should be no muation of State i.e., we cannot directly change the values in state
      We need to create a new state object and add our required values to it

      In the below code, "...state" is a ES6 representation of clubbing values
      and we can add our new values to the copy of state object and thus return the value

    */

    case "RETRIEVE_BASICSPAGE_DATA":
    return { ...state, basicData: action.jsonValueOfBasicsPage, interestData: state.interestData, accountingData: state.accountingData, allEnterData: {}, isLoading: false, reRenderElements: state.reRenderElements};


    case "RETRIEVE_INTERESTPAGE_DATA":

    return { ...state, basicData: state.basicData, interestData: action.jsonValueOfInterestPage, accountingData: state.accountingData, allEnterData: {}, isLoading: false, reRenderElements: state.reRenderElements};

    case "RETRIEVE_ACCOUNTINGPAGE_DATA":

    return {...state, basicData: state.basicData, interestData: state.interestData, accountingData: action.jsonValueOfAccountingPage, allEnterData: {}, isLoading: false, reRenderElements: state.reRenderElements};

    case "SUBMIT_FORM":

    return {...state, basicData: state.basicData, interestData: state.interestData, accountingData: state.accountingData, allEnterData: {}, isLoading: state.isLoading, reRenderElements: state.reRenderElements, confirmationFromSFAfterInsertingLoan : action.allDataInsertedConfirmation};

    default:
    return state;

    // case "RETRIEVE_BASICSPAGE_DATA":
    //   // action.jsonValueOfBasicsPage.then(function(data) {
    //     // state.basicData = data;
    //     // state.interestData = state.interestData;
    //     // console.log('DATA OF BASICS FROM REDUCER', state);
    //     return { ...state, basicData: action.jsonValueOfBasicsPage, interestData: state.interestData, accountingData: state.accountingData, isLoading: false};
    //     // return {...state, newKey: "sasaasas"};
    //
    //     // clone the state
    //     // var newState = Object.assign({}, state);
    //     //
    //     // // update basicData Value
    //     // newState.basicData = "sdssdd";
    //     //
    //     // return newState;
    //   // });
    //   // return state;
    //
    // case "RETRIEVE_INTERESTPAGE_DATA":
    //   // action.jsonValueOfInterestPage.then(function(data) {
    //     // state.basicData = state.basicData;
    //     // state.interestData = data;
    //     return { ...state, basicData: state.basicData, interestData: action.jsonValueOfInterestPage, accountingData: state.accountingData, isLoading: false};
    //   // });
    //   // return state;
    //   // return action.jsonValueOfBasicsPage;
    //   // return { ...state, basicData: state.basicData, interestData: action.jsonValueOfInterestPage, accountingData: state.accountingData, isLoading: true};
    //
    //   case "RETRIEVE_ACCOUNTINGPAGE_DATA":
    //     // let testVal = {};
    //     // action.jsonValueOfAccountingPage.then(function(data) {
    //       // console.log('ACCOUNTING DATA FROM REDUCER', ...state);
    //       // let testVar = { ...state, basicData: "state.basicData", interestData: "asasa", accountingData: "sassa", isLoading: false};
    //
    //       // console.log('testVar', testVar);
    //       // return testVar;
    //       return {...state, basicData: state.basicData, interestData: state.interestData, accountingData: action.jsonValueOfAccountingPage, isLoading: false};
    //     // });
    //
    // default:
    //   return state;
  }
}

export default existingLendingProducts;
