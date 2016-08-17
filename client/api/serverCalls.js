import axios from 'axios';

export function getData(AccountingPage, InterestPage, BasicsPage) {
  // console.log('listOfAllElements in SERVER CALL', listOfAllElements);
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getDataOfAllTheFields(AccountingPage, InterestPage, BasicsPage, function(Result, event){
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
        return resolve({data: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function getExisitingLendingProducts() {
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getAllLoanProducts(function(Result, event){
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
        return resolve({existingLoanProducts: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function getHelperTextOfAllFields(listOfAllElementIds) {
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getHelperTextOfAllFields(listOfAllElementIds, function(Result, event){
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
        return resolve({helpTextWithElementId: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function getBillingData(BillingPage) {
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getBillingData(BillingPage, function(Result, event){
        if (event.status)
        {
          console.log('BILLING Result=',Result);

          if(Result!= '')
          {
            // console.log('INFORMATION=',Result);
          }
          else
          {
            // console.log('PROBLEM WITH INFORMATION=',Result);
          }
        }
        return resolve({billingData: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function getBasicsData(BasicsPage) {
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getBasicsData(BasicsPage, function(Result, event){
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
        return resolve({basicsData: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}


export function getInterestData(InterestPage) {
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getInterestData(InterestPage, function(Result, event){
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
        return resolve({interestData: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function getAccountingData() {
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getAccountingData(function(Result, event){
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
        return resolve({accountingData: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function submitLoanData(loanData) {
  console.log('submitForm from Server Call');
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.saveLoan(loanData, function(Result, event) {
        if(event.status) {
          console.log('Result=', Result);
        }
        return resolve({finalResponseAfterInsertion: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function getFeeSetUrl() {
  console.log('getFeeSetUrl from Server Call');
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getFeeURLForUser(function(Result, event) {
        if(event.status) {
          console.log('Result=', Result);
        }
        return resolve({feeSetUrl: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function getExisitingFeeSets() {
  console.log('getExisitingFeeSets from Server Call');
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getValidFeeSets(function(Result, event) {
        if(event.status) {
          console.log('Result=', Result);
        }
        return resolve({existingFeeSets: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

export function getCustomFieldDetails(fieldId, isPickList) {
  return new Promise((resolve, reject) => {
    try {
      CL_SimpleLoanProduct_Controller.getCustomFieldDetails(fieldId, isPickList, function(Result, event){
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
        return resolve({customFieldDetails: Result});
      }, {escape:true});
    }
    catch(ex) {
      console.log('Exception', ex);
    }
  });
}

// export function getData() {
//   return new Promise((resolve, reject) => {
//     try {
//       CL_SimpleLoanProduct_Controller.getDataOfAllTheFields("listOfAllElements", function(Result, event){
//         if (event.status)
//         {
//           console.log('Result=',Result);
//
//           if(Result!= '')
//           {
//             // console.log('INFORMATION=',Result);
//           }
//           else
//           {
//             // console.log('PROBLEM WITH INFORMATION=',Result);
//           }
//         }
//         return resolve({data: Result});
//       }, {escape:true});
//     }
//     catch(ex) {
//       console.log('Exception', ex);
//     }
//   });
// }
