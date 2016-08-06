import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  // console.log('state', state);
  return {
    existinglendingProducts: state.existinglendingProducts,
    newLendingProduct: state.newLendingProduct
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
  }

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;

// const Main = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>
//           Setup Wizard
//         </h1>
//       </div>
//     )
//   }
// });

// export default Main;


  // { React.cloneElement(this.props.children, this.props) }
