import { createStore, compose } from 'redux';
import { syncHistoryWithStore  } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/reducerindex';

//importing Data
//retreive data from db by following
// https://medium.com/@rajaraodv/developing-react-redux-apps-in-salesforce-s-visualforce-3ad7be560d1c#.8rqfkhiyz


// var existinglendingProducts = {
//   "names": [
//     'Amortization based Lending Product',
//     'Line of Credit Lending Product',
//     'Simple Lending Product'
//   ]
// }

var existinglendingProducts = {
  "names": [
    {
      'name' : 'Amortization based Lending Product',
      'checked' : false
    },
    {
      'name' : 'Line of Credit Lending Product',
      'checked' : false
    },
    {
      'name' : 'Simple Lending Product',
      'checked' : true
    }
  ]
}

var newLendingProduct = {

}

const defaultState = {
  existinglendingProducts,
  newLendingProduct
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// console.log('STORE FROM STORE.JS', store);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;


// import { createStore, compose } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
//
// //import reducer
// import reducers from './reducers/LendingProduct';
//
// //import data
// //retreive data from db by following
// // https://medium.com/@rajaraodv/developing-react-redux-apps-in-salesforce-s-visualforce-3ad7be560d1c#.8rqfkhiyz
//
// var lendingProducts = {
//   "name": [
//     'Amortization based Lending Product',
//     'Line of Credit Lending Product',
//     'Simple Lending Product'
//   ]
// }
//
// const defaultState = {
//   lendingProducts
// }
//
// const store = createStore(reducers, defaultState);
//
// console.log('store', store);
// console.log('browserHistory', browserHistory);
//
// //also exporting history to add store to the browserHistory
// export const history = syncHistoryWithStore(browserHistory, store);
//
// export default store;
