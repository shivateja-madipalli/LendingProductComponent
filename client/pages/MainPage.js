import React, { Component } from 'react';
// import LendingProductContainer from '../containers/LendingProductContainer.js';
import BatchJobsContainer from '../containers/BatchJobsContainer.js';
// import CMWContainer from '../containers/CMWContainer.js';

// importing batch job data
let batchJobData = require('../data/BatchJobData');

// let simpleLPFields = require('../data/SimpleLendingProductFields');

class MainPage extends Component {

  render() {
      return (
        <div>
          <BatchJobsContainer  batchData={batchJobData} isLoading={true}/>
        </div>
      );
    }
}

// class MainPage extends Component {
// render() {
//   return (
//     <div>
//       <LendingProductContainer/>
//     </div>
//   );
// }
// }

export default MainPage;
