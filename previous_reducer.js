const INITIAL_STATE = {
              // basicData : {},
              // interestData : {},
              // accountingData : {},
              isLoading : true
						};


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

      // case "RETRIEVE_DATA":
      //   // console.log('RETRIEVE_DATA CALL FROM REDUCER', action.jsonValueOfAllElements);
      //   //edit state to insert the values
      //   // return { ...state, data: action.jsonValueOfAllElements };
      //   action.jsonValueOfAllElements.then(function(data){
      //     console.log('LOG FROM REDUCER',data);
      //   });

      case "RETRIEVE_BASICSPAGE_DATA":
        action.jsonValueOfBasicsPage.then(function(data) {
          // state.basicData = data;
          // state.interestData = state.interestData;
          console.log('DATA OF BASICS FROM REDUCER', state);
          // return { ...state, basicData: action.jsonValueOfBasicsPage, interestData: state.interestData, accountingData: state.accountingData, isLoading: false};
          // return { ...state, basicData: 'asasasSS  sS Ss', interestData: state.interestData, accountingData: state.accountingData, isLoading: false};
          // return Object.assign({}, state, { basicData: "newValue", interestData: state.interestData, accountingData: state.accountingData, isLoading: false });
          console.log('LOGGED');
          return { ...state, basicData: action.jsonValueOfBasicsPage, interestData: state.interestData, accountingData: state.accountingData, isLoading: false};
        });
        return state;


      case "RETRIEVE_INTERESTPAGE_DATA":
        action.jsonValueOfInterestPage.then(function(data) {
          // state.basicData = state.basicData;
          // state.interestData = data;

          console.log('DATA OF INTEREST FROM REDUCER', state);
          return { ...state, basicData: state.basicData, interestData: action.jsonValueOfInterestPage, accountingData: state.accountingData, isLoading: false};
        });
        return state;
        // return action.jsonValueOfBasicsPage;
        // return { ...state, basicData: state.basicData, interestData: action.jsonValueOfInterestPage, accountingData: state.accountingData, isLoading: true};

        case "RETRIEVE_ACCOUNTINGPAGE_DATA":
          let testVal = {};
          action.jsonValueOfAccountingPage.then(function(data) {
            console.log('ACCOUNTING DATA FROM REDUCER', ...state);
            let testVar = { ...state, basicData: "state.basicData", interestData: "asasa", accountingData: "sassa", isLoading: false};

            console.log('testVar', testVar);
            return testVar;
            // return [...state, { basicData: state.basicData, interestData: state.interestData, accountingData: "asassassa", isLoading: false}];
          });



        // case "RETRIEVE_ACCOUNTINGPAGE_DATA":
        //
        //   // return state;
        //   // return action.jsonValueOfBasicsPage;
        //   let text_Var = {...state, basicData: "state.basicData", interestData: "state.interestData", accountingData: "asassassa", isLoading: false};
        //   console.log('text_Var', text_Var);
        //   return text_Var;
        //   // return { ...state, isLoading: false};

      default:
        return state;
    }
  }

export default existingLendingProducts;
