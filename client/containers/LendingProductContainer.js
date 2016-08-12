import React, { Component } from 'react';
import { connect } from 'react-redux';
import lendingProduct from '../components/lendingProduct';
import {testActiontoTestRetrievingDataFromSalesForce, getDataFromDB, getBasicsDataFromDB, getInterestDataFromDB, getAccountingDataFromDB, submitForm, getFeeSetUrlFromDB, getExisitingFeeSetsFromDB, getHelpTextOfAllElementsFromDB} from '../actions/actionCreators';


// mapStateToProps is called when ever the state is changed
// The correct worth of React is known in this functionality,
// React will call mapStateToProps only when the state is changed and will not call
// when ever the same state is returned
// state will be returned from reducer
// This will help mapStateToProps to update the props
// hence, those props can be accesed in the component for updating UI

function mapStateToProps(globalState) {
  console.log('mapStateToProps in LendingProductContainer', globalState);
  return {
    existinglendingProducts: globalState.existinglendingProducts,
    newLendingProduct: globalState.newLendingProduct
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   	 getDataFromDB: (AccountingPage, InterestPage, BasicsPage) => {
//     	dispatch(getDataFromDB(AccountingPage, InterestPage, BasicsPage))
//   	 }
//   }
// }

// THe below code means that, actions are to returned with dispatch and
// those actions are retrieved from actionCreators

//Once the action is dispatched then from component
// we need to call these actions and it'll indeed call ServerCalls method


const mapDispatchToProps = (dispatch) => {
  return {
  	 getBasicsDataFromDB: (BasicsPage) => {
    	dispatch(getBasicsDataFromDB(BasicsPage))
    },

    getInterestDataFromDB: (InterestPage) => {
     dispatch(getInterestDataFromDB(InterestPage))
   },

    getAccountingDataFromDB: () => {
     dispatch(getAccountingDataFromDB())
   },

   testActiontoTestRetrievingDataFromSalesForce: () => {
     dispatch(testActiontoTestRetrievingDataFromSalesForce())
   },

   submitForm: (loanData) => {
     dispatch(submitForm(loanData))
   },

   getFeeSetUrlFromDB: () => {
     dispatch(getFeeSetUrlFromDB())
   },

   getExisitingFeeSetsFromDB: () => {
     dispatch(getExisitingFeeSetsFromDB())
   },

   getHelpTextOfAllElementsFromDB: (elementIds) => {
     dispatch(getHelpTextOfAllElementsFromDB(elementIds))
   }

  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//      getDataFromDB: () => {
//       dispatch(getDataFromDB()).then((response) => {
//       		console.log('RESPONSE', response);
//           });
//     }
//   	}
//   }


// the connect functionality is to club mapStateToProps and mapDispatchToProps to  the component
// this will give component access to all the dispatched methods and props so that those can be used
// for creating UI

export default connect(mapStateToProps, mapDispatchToProps)(lendingProduct);
