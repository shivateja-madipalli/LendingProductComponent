import React, { Component } from 'react';
import LendingProductContainer from '../containers/LendingProductContainer.js';
// import CMWContainer from '../containers/CMWContainer.js';

class MainPage extends Component {
  render() {
    return (
      <div>
        <LendingProductContainer/>

      </div>
    );
  }
}

// class MainPage extends Component {
//   render() {
//     return (
//       <div>
//         <CMWContainer/>
//
//       </div>
//     );
//   }
// }

export default MainPage;
