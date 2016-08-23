// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { Router, hashHistory } from 'react-router';
// import reducers from './reducers/reducerindex';
// import promise from 'redux-promise';
// import { Route, IndexRoute } from 'react-router';
//
// import App from './pages/App';
// import MainPage from './pages/MainPage';
//
// const createStoreWithMiddleware = applyMiddleware(
//   promise
// )(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Router history={hashHistory}>
//       <Route path={'/'} component={App}>
//         <IndexRoute component={MainPage} />
//       </Route>
//     </Router>
//   </Provider>
//   , document.getElementById('body'));




import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import reducers from './reducers/reducerindex';
import promise from 'redux-promise';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
// import MainPage from './pages/MainPage';

import MainPageContainer from './containers/MainPageContainer.js';

// import MainCmp from './components/MainCmp';
// import LendingProductCmp from './components/LendingProductCmp';

  const createStoreWithMiddleware = applyMiddleware(
    promise
  )(createStore);

  // ReactDOM.render(
  //   <Provider store={createStoreWithMiddleware(reducers)}>
  //     <Router history={hashHistory} >
  //       <Route path="/" component={App}>
  //         <IndexRoute component={MainPage} > </IndexRoute>
  //       </Route>
  //     </Router>
  //   </Provider>
  //   , document.getElementById('root')
  // );

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hashHistory} >
        <Route path="/" component={App}>
          <IndexRoute component={MainPageContainer} > </IndexRoute>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('root')
  );
