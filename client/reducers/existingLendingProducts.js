const INITIAL_STATE = {
  basicData : {},
  interestData : {},
  accountingData : {},
  allEnterData : {},
  isLoading : true,
  reRenderElements : false,
  currentPage: "",
  confirmationFromSFAfterInsertingLoan : {},
  feeSetUrl: "",
  exisitingfeeSets : {},
  HelpTextData: {},
  ExisitingProtectType: {},
  SetOfAllExisitingLoanProducts: {},
  currentLPPage: "",
  billingData : {}
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
    console.log('#$#$$#$#$$', action.jsonValueOfBasicsPage);
    return { ...state, billingData: state.billingData, basicData: action.jsonValueOfBasicsPage, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, currentPage: state.currentPage, confirmationFromSFAfterInsertingLoan : state.confirmationFromSFAfterInsertingLoan,feeSetUrl: state.feeSetUrl, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};
    // return { ...state, basicData: action.jsonValueOfBasicsPage};

    case "RETRIEVE_BILLINGPAGE_DATA":

    // return { ...state, billingTestData: action.jsonValueOfBillingPage, basicData: state.jsonValueOfBasicsPage, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, currentPage: state.currentPage, confirmationFromSFAfterInsertingLoan : state.confirmationFromSFAfterInsertingLoan,feeSetUrl: state.feeSetUrl, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};
    return { ...state, billingData: action.jsonValueOfBillingPage, basicData: state.jsonValueOfBasicsPage, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, currentPage: state.currentPage, confirmationFromSFAfterInsertingLoan : state.confirmationFromSFAfterInsertingLoan,feeSetUrl: state.feeSetUrl, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};

    case "RETRIEVE_INTERESTPAGE_DATA":

    return { ...state, billingData: state.billingData, basicData: state.basicData, interestData: action.jsonValueOfInterestPage, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, currentPage: state.currentPage, confirmationFromSFAfterInsertingLoan : state.confirmationFromSFAfterInsertingLoan,feeSetUrl: state.feeSetUrl, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};
    // return { ...state, interestData: action.jsonValueOfInterestPage};

    case "RETRIEVE_ACCOUNTINGPAGE_DATA":

    return {...state, billingData: state.billingData, basicData: state.basicData, interestData: state.interestData, accountingData: action.jsonValueOfAccountingPage, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, currentPage: state.currentPage, confirmationFromSFAfterInsertingLoan : state.confirmationFromSFAfterInsertingLoan,feeSetUrl: state.feeSetUrl, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};
    // return {...state,accountingData: action.jsonValueOfAccountingPage};

    case "RETRIEVE_FEESET_URL":

    return {...state, billingData: state.billingData, basicData: state.basicData, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, feeSetUrl: action.feeSetUrl, currentPage: state.currentPage, confirmationFromSFAfterInsertingLoan : state.confirmationFromSFAfterInsertingLoan, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};
    // return {...state, feeSetUrl: action.feeSetUrl};

    case "EXISITING_FEESET_DATA":

    return {...state, billingData: state.billingData, basicData: state.basicData, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, feeSetUrl: state.feeSetUrl, currentPage: state.currentPage, confirmationFromSFAfterInsertingLoan : state.confirmationFromSFAfterInsertingLoan, exisitingfeeSets: action.exisitingFeeSetData, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};
    // return {...state, exisitingfeeSets: action.exisitingFeeSetData};

    case "SUBMIT_FORM":

    return {...state, billingData: state.billingData, basicData: state.basicData, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, confirmationFromSFAfterInsertingLoan : action.allDataInsertedConfirmation, feeSetUrl: state.feeSetUrl, currentPage: state.currentPage, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};
    // return {...state, confirmationFromSFAfterInsertingLoan : action.allDataInsertedConfirmation};

    case "GET_HELP_TEXT":

    return {...state, billingData: state.billingData, basicData: state.basicData, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, confirmationFromSFAfterInsertingLoan : state.allDataInsertedConfirmation, feeSetUrl: state.feeSetUrl, currentPage: state.currentPage, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: action.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};
    // return {...state, HelpTextData: action.HelpTextData};

    case "GET_PROTECT_TYPE":
    return {...state, billingData: state.billingData, basicData: state.basicData, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, confirmationFromSFAfterInsertingLoan : state.allDataInsertedConfirmation, feeSetUrl: state.feeSetUrl, currentPage: state.currentPage, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: action.ExisitingProtectType, SetOfAllExisitingLoanProducts: state.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};

    case "GET_ALL_EXISTING_LOAN_PRODUCTS":
    return {...state, billingData: state.billingData, basicData: state.basicData, interestData: state.interestData, accountingData: state.accountingData, allEnterData: state.allEnterData, isLoading: state.isLoading, reRenderElements: state.reRenderElements, confirmationFromSFAfterInsertingLoan : state.allDataInsertedConfirmation, feeSetUrl: state.feeSetUrl, currentPage: state.currentPage, exisitingfeeSets: state.exisitingfeeSets, HelpTextData: state.HelpTextData, ProtectType: state.ExisitingProtectType, SetOfAllExisitingLoanProducts: action.SetOfAllExisitingLoanProducts, currentLPPage: state.currentLPPage};

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
