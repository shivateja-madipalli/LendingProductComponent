import React from 'react';
let $ = require ('jquery');
let Select = require('react-select');

// let template = require('../data/TemplateStructure');

let LPFields = require('../data/LendingProductPageFields');

//importing commonStyles
// import commonStyles from './styles/commonStyles';

const lendingProduct = React.createClass({

  /*
    getInitialState: is used for creating an empty object for filling in the data in further functionality

     componentDidMount: will called after render method and universally if some data is to be loaded prior to the
     page load, many get the data in this life cycle event

     In our code we are retrieving data from DB by calling
                      "getAllPickListData"
     So that once we get the data out UI will be updated accordingly.

     once getAllPickListData is executed, an action will be called,
     that action will call a ServerCall to get the data,
     that particular Server Call will return a promise which will be again returned from reducer.

     The reducer returned promise will be handled by mapStateToProps in container
     those values will be added to props and those props will be connected to the component

     with the component's props values we can access the actual value returned from the serverCall promise

     After componentDidMount, as the component will Receive new Props now, "componentWillReceiveProps",
     will be called thus here the values returned from reducer can be accessed and used.

     setState() will make the component load again but to have a check for this there's another event

     "shouldComponentUpdate" where we can tell whether the component need to update or not

     as the component needs to update the vals can be accessed

  */

  getInitialState() {
    return {
      basicData : {},
      interestData : {},
      accountingData : {},
      allEnterData : {},
      isLoading : true,
      reRenderElements : false
    }
  },

  componentWillMount() {
    // SECOND
    console.log('componentWillMount');
  },

  componentDidMount() {
    // FOURTH
    this.getAllPickListData();
    console.log('componentDidMount');
  },

  componentWillReceiveProps(NextProps) {
    console.log('componentWillReceiveProps', NextProps);
    NextProps.existinglendingProducts.basicData.then(function(data) {
      // console.log('DATA FROM CMP PROPS', data);
      this.setState({
        basicData : data,
        interestData : this.state.interestData,
        accountingData : this.state.accountingData,
        allEnterData : this.state.allEnterData,
        isLoading: false,
        reRenderElements : true
      })
    }.bind(this));

    NextProps.existinglendingProducts.interestData.then(function(data) {
      // console.log('INTEREST DATA FROM CMP PROPS', data);
      this.setState({
        basicData : this.state.basicData,
        interestData : data,
        accountingData : this.state.accountingData,
        allEnterData : this.state.allEnterData,
        isLoading: false,
        reRenderElements : true
      })
    }.bind(this));

    NextProps.existinglendingProducts.accountingData.then(function(data) {
        console.log('ACCOUNTING DATA FROM CMP PROPS', data);
      this.setState({
        basicData : this.state.basicData,
        interestData : this.state.interestData,
        allEnterData : this.state.allEnterData,
        accountingData : data,
        isLoading: false,
        reRenderElements : true
      })
    }.bind(this));

    NextProps.existinglendingProducts.confirmationFromSFAfterInsertingLoan.then(function(data) {
        console.log('SUBMIT FORM DATA FROM CMP PROPS', data);
      this.setState({
        basicData : this.state.basicData,
        interestData : this.state.interestData,
        allEnterData : this.state.allEnterData,
        accountingData : this.state.accountingData,
        isLoading: this.state.isLoading,
        reRenderElements : this.state.reRenderElements,
        confirmationFromSFAfterInsertingLoan : data
      })
    }.bind(this));

  },

  componentWillUnmount() {
    console.log('componentWillUnmount');
    alert('componentWillUnmount');
  },

  componentDidUpdate() {
    console.log('componentDidUpdate');
  },

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    if(!this.state.isLoading && this.state.reRenderElements) {
      return true;
    }
    return false;
  },

  render() {
    // console.log('RENDERING!');
    // // THIRD
    // let self = this;
    //
    // const { existinglendingProducts } = this.props;
    // console.log('existinglendingProducts in testCMP ', existinglendingProducts);
    // if(!this.state.isLoading)
    //
    // {
    //   let billingMethod = this.processPickListValues(this.state.basicData, 'billingMethodBasicsPage', 'Billing Method', this);
    //   return (
    //     <div id="LendingProductCmpMainDiv" className="paddingZero marginZero width100 height100">
    //       <div id="leftDiv" className="floatLeft paddingZero marginZero width70 heightAuto displayTrue">
    //         <div id="leftDiv_TOP" className="paddingZero marginZero width100 heightAuto">
    //           <h4  className="paddingZero marginZero">Select Lending Product Type</h4>
    //
    //           <button id="nextBtn" onClick={this.existingLendingProductSelected}>Next</button>
    //           <label id="errorMessage" className="displayFalse"></label>
    //         </div>
    //
    //         <div id="leftDiv_BOTTOM" className="paddingZero marginZero width100 heightAuto">
    //           <h4 className="paddingZero marginZero">Existing Lending Products</h4>
    //         </div>
    //
    //       </div>
    //       <div id="creatingNewLendingProduct" className="floatLeft paddingZero marginZero width70 heightAuto displayFalse">
    //         <h4 className="paddingZero marginZero"> creatingNewLendingProduct </h4>
    //         <ul className="ulNoBulletPoint paddingZero">
    //           <li>
    //             <form id="profileForm">
    //
    //               <h4>Profile</h4>
    //               <table>
    //                 <tr>
    //                   <td>
    //                     Loan Product Name
    //                   </td>
    //                   <td>
    //                     <input type="text" name="loanProductName" />
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Billing Method
    //                   </td>
    //                   <td>
    //                     {billingMethod}
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Payment Frequency
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="daily">Daily</option>
    //                     <option value="weekly">Weekly</option>
    //                     <option value="biWeekly">Bi Weekly</option>
    //                     <option value="semiMonthly">Semi Monthly</option>
    //                     <option value="monthly">Monthly</option>
    //                     <option value="biMonthly">Bi Monthly</option>
    //                     <option value="quarterly">Quartely</option>
    //                     <option value="semiAnnual">Semi Annual</option>
    //                     <option value="annual">Annual</option>
    //                     <option value="singlePmt">Single Pmt</option>
    //                     <option value="semiMonthlyPD">Semi Monthly PD</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     THe Counting Method
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Accural Start Basis
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Payment Application Mode
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Interest Only Period
    //                   </td>
    //                   <td>
    //                     <input type="text" name="interestOnlyPeriod"/>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Actual Interest Only Payments
    //                   </td>
    //                   <td>
    //
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Interest Only Period
    //                   </td>
    //                   <td>
    //                     <input type="text" name="interestOnlyPeriod"/>
    //                   </td>
    //                 </tr>
    //               </table>
    //             </form>
    //           </li>
    //
    //           <li>
    //             <form id="feesForm">
    //               <h4>Fees</h4>
    //               <input type="radio" /> Choose Existing Fee Set
    //               <input type="radio" /> Create New Fee Set
    //             </form>
    //           </li>
    //
    //           <li>
    //             <form id="termForm">
    //               <h4>Term</h4>
    //               <table>
    //                 <tr>
    //                   <td>
    //                     Min Term
    //                   </td>
    //                   <td>
    //                     <input type="text" name="minTerm"/>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Max Term
    //                   </td>
    //                   <td>
    //                     <input type="text" name="maxTerm"/>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Default Term
    //                   </td>
    //                   <td>
    //                       <input type="text" name="defaultTerm"/>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Amortization Term
    //                   </td>
    //                   <td>
    //                     <input type="text" name="amortizationTerm"/>
    //                   </td>
    //                 </tr>
    //               </table>
    //             </form>
    //           </li>
    //
    //           <li>
    //             <form id="interestForm">
    //               <h4>Interest</h4>
    //                 <table>
    //                   <tr>
    //                     <td>
    //                       Interest Type
    //                     </td>
    //                     <td>
    //                       <select>
    //                         <option value="volvo">Volvo</option>
    //                         <option value="saab">Saab</option>
    //                         <option value="mercedes">Mercedes</option>
    //                         <option value="audi">Audi</option>
    //                       </select>
    //                     </td>
    //                   </tr>
    //                   <tr>
    //                     <td>
    //                       Min Interest Rate
    //                     </td>
    //                     <td>
    //                       <input type="text" name="minInterestRate"/>
    //                     </td>
    //                   </tr>
    //                   <tr>
    //                     <td>
    //                       Max Interest Rate
    //                     </td>
    //                     <td>
    //                       <input type="text" name="maxInterestRate"/>
    //                     </td>
    //                   </tr>
    //                   <tr>
    //                     <td>
    //                       Default Interest Rate
    //                     </td>
    //                     <td>
    //                       <input type="text" name="defaultInterestRate"/>
    //                     </td>
    //                   </tr>
    //                 </table>
    //             </form>
    //           </li>
    //
    //           <li>
    //             <form id="protectForm">
    //               <h4>Protect</h4>
    //               Protect Enabled <input type="radio" />
    //             </form>
    //           </li>
    //
    //           <li>
    //             <form id="fundingForm">
    //               <h4>Funding</h4>
    //               <table>
    //                 <tr>
    //                   <td>
    //                     Funding in Tranches
    //                   </td>
    //                   <td>
    //                     <input type="radio" />
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Min Financed Amount
    //                   </td>
    //                   <td>
    //                     <input type="text" name="minFinancedAmount"/>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Max Financed Amount
    //                   </td>
    //                   <td>
    //                     <input type="text" name="maxFinancedAmount"/>
    //                   </td>
    //                 </tr>
    //               </table>
    //             </form>
    //           </li>
    //
    //           <li>
    //             <form id="tolerenceForm">
    //               <h4>Tolerence</h4>
    //               <table>
    //                 <tr>
    //                   <td>
    //                     Late Charge Grace Days
    //                   </td>
    //                   <td>
    //                     <input type="text" name="lateChargeGraceDays"/>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Delinquency Grace Days
    //                   </td>
    //                   <td>
    //                     <input type="text" name="delinquencyGraceDays"/>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Write off Tolerance Amount
    //                   </td>
    //                   <td>
    //                     <input type="text" name="writeOffToleranceAmount"/>
    //                   </td>
    //                 </tr>
    //               </table>
    //             </form>
    //           </li>
    //
    //           <li>
    //             <form id="accountingForm">
    //               <h4>Accounting</h4>
    //               <table>
    //                 <tr>
    //                   <td>
    //                     Product Asset Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Loan Control Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Interest Income Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Interest Receivable Account
    //                   </td>
    //                   <td>
    //                     <select>
    //                       <option value="volvo">Volvo</option>
    //                       <option value="saab">Saab</option>
    //                       <option value="mercedes">Mercedes</option>
    //                       <option value="audi">Audi</option>
    //                     </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Loan Loss Provision Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Loan Loss Reserve Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Loan Purchase Payable Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Loan Purchase Receivable Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Service Fee Income Account
    //                   </td>
    //                   <td>
    //                     <select>
    //                       <option value="volvo">Volvo</option>
    //                       <option value="saab">Saab</option>
    //                       <option value="mercedes">Mercedes</option>
    //                       <option value="audi">Audi</option>
    //                     </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Excess Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>
    //                     Product Write-Off Recovery Account
    //                   </td>
    //                   <td>
    //                   <select>
    //                     <option value="volvo">Volvo</option>
    //                     <option value="saab">Saab</option>
    //                     <option value="mercedes">Mercedes</option>
    //                     <option value="audi">Audi</option>
    //                   </select>
    //                   </td>
    //                 </tr>
    //               </table>
    //             </form>
    //           </li>
    //
    //         </ul>
    //
    //       </div>
    //       <div id="RightDiv" className="floatLeft paddingZero marginZero width30 heightAuto">
    //        Right
    //       </div>
    //     </div>
    //   )
    // }
    // else {
    //   console.log('existinglendingProducts.basicData EMPTY', existinglendingProducts.basicData);
    //   return (
    //     <div>
    //       <p>LOADING! </p>
    //     </div>
    //   )
    // }


    console.log('RENDERING!');
    // THIRD
    let self = this;

    const { existinglendingProducts } = this.props;
    console.log('existinglendingProducts', existinglendingProducts);
    if(!this.state.isLoading) {
      // load template from TemplateStructure json

      /*
        Whats happening here?
        getTemplateStructure is a method which accepts
          1. which type of data to be retrieved from JSON object
          2. the data retrieved from SF
          3. this value

        as you can see, certain calls 'undefiend' was specified in the place of data retrieved from SF
        the reason behind this is that those types doesn't have any data required from SF
      */

      // retrieve ProfileElements Elements
      let profileElementsHtmlContent = this.getTemplateStructure('ProfileElements', this.state.basicData.basicsData, this);
      let feesElementsHtmlContent = this.getTemplateStructure('FeesElements', undefined, this);
      let termElementsHtmlContent = this.getTemplateStructure('TermElements',undefined, this);
      let interestElementsHtmlContent = this.getTemplateStructure('InterestElements', this.state.interestData.interestData, this);
      let protectElementsHtmlContent = this.getTemplateStructure('ProtectElements', undefined, this);
      let fundingElementsHtmlContent = this.getTemplateStructure('FundingElements', undefined, this);
      let tolerenceElementsHtmlContent = this.getTemplateStructure('TolerenceElements', undefined, this);

      //create Common Options For AccountingElements
      // handing "AccountingElements" select options
      // create options for all select elements in AccountingElements
      //Why am I doing this here?
      /*
        AccountingElements has got >10 select elements all of it has same options
        instead of creating options everytime while creating element itself like what I have done above
        in all other cases would not be a good option
        more over,
        "let accountingElementsHtmlContent = this.getTemplateStructure('AccountingElements', finalAccountingElementsOptionsList, this);"
        here, I have sent "finalAccountingElementsOptionsList" value in the place of either 'undefined' or
        sending the state value because, I dint wanted to disturb the function structure
        thus, instead of sending undefined I have sent the 'finalAccountingElementsOptionsList' value.
      */

      let wholeDatsOfAccountingElements = this.state.accountingData.accountingData;
      let finalAccountingElementsOptionsList = "";
      wholeDatsOfAccountingElements.map(function(eachVal) {
        let individualOption = "<option value='" + eachVal.Id + "'>" + eachVal.Name + "</option>";
        finalAccountingElementsOptionsList += individualOption;
      });

      let accountingElementsHtmlContent = this.getTemplateStructure('AccountingElements', finalAccountingElementsOptionsList, this);

      /*
        <li dangerouslySetInnerHTML={{__html: profileElementsHtmlContent}}>
        'dangerouslySetInnerHTML' is a type where we can insert HTML DATA on need.
      */

      return (
        <div id="LendingProductCmpMainDiv" className="paddingZero marginZero width100 height100">
          <div id="leftDiv" className="floatLeft paddingZero marginZero width70 heightAuto displayTrue">
            <div id="leftDiv_TOP" className="paddingZero marginZero width100 heightAuto">
              <h4  className="paddingZero marginZero">Select Lending Product Type</h4>

              <button id="nextBtn" onClick={this.existingLendingProductSelected}>Next</button>
              <label id="errorMessage" className="displayFalse"></label>
            </div>

            <div id="leftDiv_BOTTOM" className="paddingZero marginZero width100 heightAuto">
              <h4 className="paddingZero marginZero">Existing Lending Products</h4>
            </div>

          </div>
          <div id="creatingNewLendingProduct" className="floatLeft paddingZero marginZero width70 heightAuto displayFalse">
            <h4 className="paddingZero marginZero"> creatingNewLendingProduct </h4>
            <ul className="ulNoBulletPoint paddingZero">
              <li dangerouslySetInnerHTML={{__html: profileElementsHtmlContent}}>
              </li>
              <li dangerouslySetInnerHTML={{__html: feesElementsHtmlContent}}>
              </li>
              <li dangerouslySetInnerHTML={{__html: termElementsHtmlContent}}>
              </li>
              <li dangerouslySetInnerHTML={{__html: interestElementsHtmlContent}}>
              </li>
              <li dangerouslySetInnerHTML={{__html: protectElementsHtmlContent}}>
              </li>
              <li dangerouslySetInnerHTML={{__html: fundingElementsHtmlContent}}>
              </li>
              <li dangerouslySetInnerHTML={{__html: tolerenceElementsHtmlContent}}>
              </li>
              <li dangerouslySetInnerHTML={{__html: accountingElementsHtmlContent}}>
              </li>
            </ul>
            <div>
              <button id="saveLendingProductBtn" onClick={e => this.submitForm(e)}>Save</button>
            </div>
          </div>
          <div id="RightDiv" className="floatLeft paddingZero marginZero width30 heightAuto">
             Right
          </div>
        </div>
      )
    }
    else {
      // console.log('existinglendingProducts.basicData EMPTY', existinglendingProducts.basicData);
      return (
        <div>
          <p>LOADING! </p>
        </div>
      )
    }
  },

  onChangeForAllElements(e) {
    // store each and every element's value in a json obj and set state
    // console.log(e.target.id);
    // console.log(e.target.value);
    let jsonVal = this.state.allEnterData;
    if(!jsonVal.hasOwnProperty(e.target.id)) {
      jsonVal[e.target.id] = e.target.value;
      //set state
        // console.log('INTEREST DATA FROM CMP PROPS', data);
      this.setState({
        basicData : this.state.basicData,
        interestData : this.state.interestData,
        accountingData : this.state.accountingData,
        allEnterData : jsonVal,
        isLoading: false,
        reRenderElements: false
      })
    }
    // console.log(this.state.allEnterData);
    },


///a2Y61000000YgWCEA0

  submitForm(e) {
    e.preventDefault();
    //accessing values with ref's

    //const author = this.refs.author.value;
    // have to access state (JSON DATA) in here
    // and add obj name to the same JSON

    // this.state.allEnterData['sobjectType'] = 'loan__Loan_Product__c';

    console.log('######');
    console.log(this.state.allEnterData);
    console.log('######');

    this.props.submitForm(this.state.allEnterData);
    //call the required action


    // console.log('VALUE:', this.loanProdNametxt.value);
  },

  getAllPickListData() {
    let AccountingPage = [
      'loan__Product_Asset_Account__c',
      'loan__Product_Loan_Control_Account__c',
      'loan__Product_Interest_Income_Account__c',
      'loan__Product_Interest_Amortization_Account__c',
      'loan__Product_Loan_Loss_Provision_Account__c',
      'loan__Product_Loan_Loss_Reserve_Account__c',
      'loan__Product_Loan_Purchase_Payable_Account__c',
      'loan__Product_Loan_Purchase_Receivable_Account__c',
      'loan__Product_Service_Fee_Income_Account__c',
      'loan__Product_Excess_Account__c',
      'loan__Product_Write_Off_Recovery_Account__c'
    ];

    let InterestPage = [
      'loan__Interest_Rate_Type__c'
    ];

    let BasicsPage = [
      'loan__Interest_Calculation_Method__c',
      'loan__Frequency_of_Loan_Payment__c',
      'loan__Time_Counting_Method__c',
      'loan__Payment_Application_Mode__c'
    ]


    //These three are the working things

    // this.props.getDataFromDB(AccountingPage, InterestPage, BasicsPage);

    this.props.getBasicsDataFromDB(BasicsPage);
    this.props.getInterestDataFromDB(InterestPage);
    this.props.getAccountingDataFromDB();



  },

  processPickListValues(individualPageData, htmlElement, dataLabelName, selfVal) {
    //Billing Method
    let optionsForThisSelect = {};
    individualPageData.basicsData.map(function(singleTabData) {
    if(singleTabData.label === dataLabelName) {
        optionsForThisSelect = selfVal.creatOptions(singleTabData.picklist, selfVal);
      }
    });

    //creating good options

    return (
      <Select
        name="form-field-name"
        value="one"
        options={optionsForThisSelect}
      />
    )
  },

  creatOptions(formatTheseOptions, selfVal) {
    var returnOptionsObj = [];
    formatTheseOptions.map(function(singleVal){

      returnOptionsObj.push(
        {
          value: selfVal.formatString(singleVal),
          label: singleVal
        }
      )
    });
    return returnOptionsObj;
  },

  formatString(stringVal) {
    stringVal = stringVal.split(' ').join('_');
    return stringVal;
  },

  // Accepts
  //1. type : type of data to be retrieved from Whole JSON
  //2. wholeDatsOfThisType: the whole data for creating options
  //3. thisVal : this keyword

  getTemplateStructure(type, wholeDatsOfThisType, thisVal) {
    // template has all of the json
    // console.log('template', template);

    // check if the json is valid

    // read json - START

    //read Inner HTML Array
    // this.readJson(template.default.Elements, this);

    let finalHtmlViewWithFields = "<div style='display: table'>";

    // console.log('LPFields', LPFields.default[type]);

    // load LP Fields
    let pickListValues;

    if(LPFields.default[type].length > 0) {
      LPFields.default[type].map(function(eachField) {
        let eachElementHtmlContent = thisVal.createTheElement(type, eachField, wholeDatsOfThisType, thisVal);
        // console.log('eachElementHtmlContent', eachElementHtmlContent);
        finalHtmlViewWithFields += "<div style='display: table-row'>";
        finalHtmlViewWithFields += eachElementHtmlContent;
        finalHtmlViewWithFields += "</div>";
      });
    }
    finalHtmlViewWithFields += "</div>";
    // console.log('finalHtmlViewWithFields',finalHtmlViewWithFields);

    return ( finalHtmlViewWithFields );
  },

  createOptionsForPickList(arrayOfOptions) {
    // pickListValues
    let finalOptionsList = "";
    //<option value="volvo">Volvo</option>
    // arrayOfOptions.map(function(eachVal) {
    //
    //
    // });
    for(let i=0;i<arrayOfOptions.length;i++) {
      let individualOption = "<option value='" + i + "'>" + arrayOfOptions[i] + "</option>";
      finalOptionsList += individualOption;
    }
    return finalOptionsList;
  },

  createTheElement(type, objectData, wholeDatsOfThisType, thisVal) {
    // console.log('objectData', objectData);
    let finalElement = "<div style='display: table-cell'>";
    let htmlStartElement = thisVal.createStartingElement(objectData, thisVal);
    let htmlEndElement = "";
    if(objectData.type === "checkbox" || objectData.type === "radio") {
    }
    else {
      htmlEndElement = thisVal.createEndingElement(objectData.element);
    }

    let labelForElement = thisVal.createLabelForConcernedElement(objectData.label, objectData.id);
    finalElement += labelForElement;
    finalElement += "</div>";
    finalElement += "<div>";
    finalElement += htmlStartElement;
    if(objectData.element === "select" && wholeDatsOfThisType != undefined && type != "AccountingElements") {
      let resultVal = thisVal.searchArray(wholeDatsOfThisType, objectData.label, 'label');
      // pickListValues = resultVal.picklist;
      let optionsForPickList;
      if(resultVal) {
        optionsForPickList = thisVal.createOptionsForPickList(resultVal.picklist);
      }
      finalElement += optionsForPickList;
    }
    else if(objectData.element === "select" && wholeDatsOfThisType != undefined && type === "AccountingElements"){
      finalElement += wholeDatsOfThisType;
    }
    finalElement += htmlEndElement;
    finalElement += "</div>";
    // return (labelForElement + htmlStartElement + htmlEndElement);
    return finalElement;
  },

  createStartingElement(objectData, thisVal) {
    const spaceVariable = ' ';
    const quotesVariable = '"';
    let finalStartingElementStructure;
    finalStartingElementStructure = '<' + objectData.element + spaceVariable;
    if(objectData.type) {
      finalStartingElementStructure += 'type=' + quotesVariable + objectData.type + quotesVariable + spaceVariable;
    }
    finalStartingElementStructure += 'ref=' + quotesVariable + objectData.id + quotesVariable + spaceVariable;
    finalStartingElementStructure += 'id=' + quotesVariable + objectData.id + quotesVariable + spaceVariable;

    //onChange={this.handleChange.bind(this, 'input1')}
    // finalStartingElementStructure += 'onChange=' + quotesVariable  + onChangeForAllElements +  quotesVariable + spaceVariable;

    // finalStartingElementStructure += 'onChange=' + quotesVariable  + this.props.testActiontoTestRetrievingDataFromSalesForce() +  quotesVariable + spaceVariable;

    //using JQuery for on Change event
    $(document).on('change', '#'+objectData.id, this.onChangeForAllElements);

    // onChangeForAllElements

    if(objectData.type === "checkbox" || objectData.type === "radio") {
      finalStartingElementStructure += '/>';
    }
    else {
      finalStartingElementStructure += '>';
    }

    return finalStartingElementStructure;
  },

  createEndingElement(type) {

    let finalEndingElementStructure;
    finalEndingElementStructure = '</' + type + '>';
    return finalEndingElementStructure;
  },

  createLabelForConcernedElement(labelValue, labelForId) {
    let labelElement;
    //<label for="female">Female</label>
    labelElement = '<label for="' + labelForId + '"> ' + labelValue + '</label>';
    return labelElement;
  },

  searchArray(array, key, prop) {
    if(array != undefined) {
      prop = (typeof prop === 'undefined') ? 'name' : prop;

      for (var i=0; i < array.length; i++) {
        // console.log('VAL with PROP',array[i][prop]);
          if (array[i][prop] === key) {
              // console.log('FINAL RESULT',array[i]);
              return array[i];
          }
      }
    }
  }


  // readJson(jsonObj, thisVal) {
  //   console.log('jsonObj', jsonObj);
  //   jsonObj.map(function(innerJson) {
  //     // create HTML content by reading JSON
  //     let finalElement;
  //     let htmlStartElement = thisVal.createStartingElement(innerJson);
  //     if(innerJson.innerElements.length > 0) {
  //       console.log('INNER ELEMENTS TRUE');
  //
  //       //loop thru inner Elements
  //       // thisVal.readInnerElements(innerJson.innerElements);
  //     }
  //     // else {
  //     //   console.log('INNER ELEMENTS FALSE');
  //     //   // thisVal.createTheElement(innerJson, thisVal);
  //     //   let finalElement;
  //     //   let htmlStartElement = thisVal.createStartingElement(innerJson);
  //     //   let htmlEndElement = thisVal.createEndingElement(innerJson.type);
  //     //   console.log('htmlEndElement', htmlEndElement);
  //     //   finalElement = htmlStartElement + htmlEndElement;
  //     //   console.log('FINALELEMENT', finalElement);
  //     // }
  //     let htmlEndElement = thisVal.createEndingElement(innerJson.type);
  //     finalElement = htmlStartElement + htmlEndElement;
  //     retur finalElement;
  //   });
  // },
  //
  // // LPFields
  //
  // readInnerElements(jsonToGetInnerELEMENTS) {
  //   console.log('jsonToGetInnerELEMENTS', jsonToGetInnerELEMENTS);
  // },
  //
  // // Fxn call for creating Element
  // createTheElement(objectData, thisVal) {
  //   console.log('objectData', objectData);
  //   let finalElement;
  //   let htmlStartElement = thisVal.createStartingElement(objectData);
  //   let htmlEndElement = thisVal.createEndingElement(objectData.type);
  // },
  //
  // createStartingElement(objectData) {
  //   const spaceVariable = ' ';
  //   const quotesVariable = '"';
  //   let finalStartingElementStructure;
  //   finalStartingElementStructure = '<' + objectData.type + spaceVariable;
  //   finalStartingElementStructure += 'id:' + quotesVariable + objectData.id + quotesVariable + spaceVariable;
  //   finalStartingElementStructure += 'className:' + quotesVariable + objectData.className + quotesVariable + spaceVariable;
  //
  //   if(objectData.value.length > 0) {
  //     finalStartingElementStructure = 'value:' + quotesVariable + objectData.value + quotesVariable + spaceVariable;
  //   }
  //
  //   finalStartingElementStructure += '>';
  //
  //   return finalStartingElementStructure;
  // },
  //
  // createEndingElement(type) {
  //
  //   let finalEndingElementStructure;
  //   finalEndingElementStructure = '</' + type + '>';
  //   return finalEndingElementStructure;
  // }

});

export default lendingProduct;
