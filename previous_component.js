import React from 'react';
let Select = require('react-select');


//importing commonStyles
// import commonStyles from './styles/commonStyles';

const lendingProduct = React.createClass({


  getInitialState() {
    return {
      basicData : {},
      interestData : {},
      accountingData : {},
      isLoading : true
    }
  },

  componentWillMount() {
    // SECOND

    console.log('componentWillMount');
  },

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  },

  componentDidMount() {
    // FOURTH
    this.getAllPickListData();
    console.log('componentDidMount');

    // if(this.props.existinglendingProducts.basicData.length > 0) {
    //   this.setState({
    //     basicData : this.props.existinglendingProducts.basicData,
    //     interestData : this.props.existinglendingProducts.interestData
    //   })
    // }
    // else {
    //   console.log('componentDidMount ELSE ELSE ELSE ');
    // }


    // this.setState({
    //   basicData : this.props.existinglendingProducts.basicData,
    //   interestData : this.props.existinglendingProducts.interestData
    // })
  },

  componentWillReceiveProps(NextProps) {
    console.log('componentWillReceiveProps');
    NextProps.existinglendingProducts.basicData.then(function(data) {
      // console.log('DATA FROM CMP PROPS', data);
      this.setState({
        basicData : data,
        interestData : this.state.interestData,
        accountingData : this.state.accountingData,
        isLoading: false
      })
    }.bind(this));

    NextProps.existinglendingProducts.interestData.then(function(data) {
      // console.log('DATA FROM CMP PROPS', data);
      this.setState({
        basicData : this.state.basicData,
        interestData : data,
        accountingData : this.state.accountingData,
        isLoading: false
      })
    }.bind(this));

    NextProps.existinglendingProducts.accountingData.then(function(data) {
      // console.log('DATA FROM CMP PROPS', data);
      this.setState({
        basicData : this.state.basicData,
        interestData : this.state.interestData,
        accountingData : data,
        isLoading: false
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
    if(!this.state.isLoading) {
      return true;
    }
    return false;
  },



  render() {
    console.log('RENDERING!');
    // THIRD
    let self = this;

    const { existinglendingProducts } = this.props;
    console.log('existinglendingProducts in testCMP ', existinglendingProducts);
    if(!this.state.isLoading)
    {
      // console.log('existinglendingProducts.basicData NOT EMPTY', this.state.basicData);
      // Basic Page PickList
      let billingMethod = this.processPickListValues(this.state.basicData, 'billingMethodBasicsPage', 'Billing Method', this);
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
              <li>
                <form id="profileForm">

                  <h4>Profile</h4>
                  <table>
                    <tr>
                      <td>
                        Loan Product Name
                      </td>
                      <td>
                        <input type="text" name="loanProductName" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Billing Method
                      </td>
                      <td>
                        {billingMethod}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Payment Frequency
                      </td>
                      <td>
                      <select>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="biWeekly">Bi Weekly</option>
                        <option value="semiMonthly">Semi Monthly</option>
                        <option value="monthly">Monthly</option>
                        <option value="biMonthly">Bi Monthly</option>
                        <option value="quarterly">Quartely</option>
                        <option value="semiAnnual">Semi Annual</option>
                        <option value="annual">Annual</option>
                        <option value="singlePmt">Single Pmt</option>
                        <option value="semiMonthlyPD">Semi Monthly PD</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        THe Counting Method
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Accural Start Basis
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Payment Application Mode
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Interest Only Period
                      </td>
                      <td>
                        <input type="text" name="interestOnlyPeriod"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Actual Interest Only Payments
                      </td>
                      <td>

                      </td>
                    </tr>
                    <tr>
                      <td>
                        Interest Only Period
                      </td>
                      <td>
                        <input type="text" name="interestOnlyPeriod"/>
                      </td>
                    </tr>
                  </table>
                </form>
              </li>

              <li>
                <form id="feesForm">
                  <h4>Fees</h4>
                  <input type="radio" /> Choose Existing Fee Set
                  <input type="radio" /> Create New Fee Set
                </form>
              </li>

              <li>
                <form id="termForm">
                  <h4>Term</h4>
                  <table>
                    <tr>
                      <td>
                        Min Term
                      </td>
                      <td>
                        <input type="text" name="minTerm"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Max Term
                      </td>
                      <td>
                        <input type="text" name="maxTerm"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Default Term
                      </td>
                      <td>
                          <input type="text" name="defaultTerm"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Amortization Term
                      </td>
                      <td>
                        <input type="text" name="amortizationTerm"/>
                      </td>
                    </tr>
                  </table>
                </form>
              </li>

              <li>
                <form id="interestForm">
                  <h4>Interest</h4>
                    <table>
                      <tr>
                        <td>
                          Interest Type
                        </td>
                        <td>
                          <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Min Interest Rate
                        </td>
                        <td>
                          <input type="text" name="minInterestRate"/>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Max Interest Rate
                        </td>
                        <td>
                          <input type="text" name="maxInterestRate"/>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Default Interest Rate
                        </td>
                        <td>
                          <input type="text" name="defaultInterestRate"/>
                        </td>
                      </tr>
                    </table>
                </form>
              </li>

              <li>
                <form id="protectForm">
                  <h4>Protect</h4>
                  Protect Enabled <input type="radio" />
                </form>
              </li>

              <li>
                <form id="fundingForm">
                  <h4>Funding</h4>
                  <table>
                    <tr>
                      <td>
                        Funding in Tranches
                      </td>
                      <td>
                        <input type="radio" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Min Financed Amount
                      </td>
                      <td>
                        <input type="text" name="minFinancedAmount"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Max Financed Amount
                      </td>
                      <td>
                        <input type="text" name="maxFinancedAmount"/>
                      </td>
                    </tr>
                  </table>
                </form>
              </li>

              <li>
                <form id="tolerenceForm">
                  <h4>Tolerence</h4>
                  <table>
                    <tr>
                      <td>
                        Late Charge Grace Days
                      </td>
                      <td>
                        <input type="text" name="lateChargeGraceDays"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Delinquency Grace Days
                      </td>
                      <td>
                        <input type="text" name="delinquencyGraceDays"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Write off Tolerance Amount
                      </td>
                      <td>
                        <input type="text" name="writeOffToleranceAmount"/>
                      </td>
                    </tr>
                  </table>
                </form>
              </li>

              <li>
                <form id="accountingForm">
                  <h4>Accounting</h4>
                  <table>
                    <tr>
                      <td>
                        Product Asset Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Loan Control Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Interest Income Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Interest Receivable Account
                      </td>
                      <td>
                        <select>
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Loan Loss Provision Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Loan Loss Reserve Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Loan Purchase Payable Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Loan Purchase Receivable Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Service Fee Income Account
                      </td>
                      <td>
                        <select>
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Excess Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product Write-Off Recovery Account
                      </td>
                      <td>
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      </td>
                    </tr>
                  </table>
                </form>
              </li>

            </ul>

          </div>
          <div id="RightDiv" className="floatLeft paddingZero marginZero width30 heightAuto">
           Right
          </div>
        </div>
      )
    }
    else {
      console.log('existinglendingProducts.basicData EMPTY', existinglendingProducts.basicData);
      return (
        <div>
          <p>LOADING! </p>
        </div>
      )
    }

  },

  getAllPickListData() {
    // step1: raise an action
    // step2: save the return val in component state

    // const listOfAllPickListFieldNames = [];

    // let allFieldNames = {
    //   Allvalues : []
    // };

    // const values = [];

    // values.push({
    //   'Name' : 'BasicsPage',
    //   'FieldValues' : [
    //     'loan__Interest_Calculation_Method__c',
    //     'loan__Frequency_of_Loan_Payment__c',
    //     'loan__Time_Counting_Method__c',
    //     'loan__Payment_Application_Mode__c'
    //   ]
    // });
    //
    // values.push({
    //   'Name' : 'InterestPage',
    //   'FieldValues' : [
    //     'loan__Interest_Rate_Type__c'
    //   ]
    // });
    //
    // values.push({
    //   'Name' : 'AccountingPage',
    //   'FieldValues' : [
    //      'loan__Product_Asset_Account__c',
    //      'loan__Product_Loan_Control_Account__c',
    //      'loan__Product_Interest_Income_Account__c',
    //      'loan__Product_Interest_Amortization_Account__c',
    //      'loan__Product_Loan_Loss_Provision_Account__c',
    //      'loan__Product_Loan_Loss_Reserve_Account__c',
    //      'loan__Product_Loan_Purchase_Payable_Account__c',
    //      'loan__Product_Loan_Purchase_Receivable_Account__c',
    //      'loan__Product_Service_Fee_Income_Account__c',
    //      'loan__Product_Excess_Account__c',
    //      'loan__Product_Write_Off_Recovery_Account__c'
    //   ]
    // });

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


    // allFieldNames.Allvalues = values;
    // allFieldNames = JSON.stringify(allFieldNames);
    // console.log('allFieldNames in COMPONENT', allFieldNames);
    // this.props.getDataFromDB(allFieldNames);

    // this.props.getDataFromDB(AccountingPage, InterestPage, BasicsPage);


    //These three are the working things

    this.props.getBasicsDataFromDB(BasicsPage);
    // this.props.getInterestDataFromDB(InterestPage);
    // this.props.getAccountingDataFromDB();


    // this.props.getDataFromDB();

    // //Basics Page
    // listOfAllPickListFieldNames.push('loan__Interest_Calculation_Method__c');
    // listOfAllPickListFieldNames.push('loan__Frequency_of_Loan_Payment__c');
    // listOfAllPickListFieldNames.push('loan__Time_Counting_Method__c');
    // listOfAllPickListFieldNames.push('loan__Accrual_Start_Basis__c');
    // listOfAllPickListFieldNames.push('loan__Payment_Application_Mode__c');
    //
    // //Interest page
    // listOfAllPickListFieldNames.push('loan__Interest_Rate_Type__c');
    //
    // // Accounting Page
    // glAccountNames = [
    //                     "loan__Product_Asset_Account__c",
    //                      "loan__Product_Loan_Control_Account__c",
    //                      "loan__Product_Interest_Income_Account__c",
    //                      "loan__Product_Interest_Amortization_Account__c",
    //                      "loan__Product_Loan_Loss_Provision_Account__c",
    //                      "loan__Product_Loan_Loss_Reserve_Account__c",
    //                      "loan__Product_Loan_Purchase_Payable_Account__c",
    //                      "loan__Product_Loan_Purchase_Receivable_Account__c",
    //                      "loan__Product_Service_Fee_Income_Account__c",
    //                      "loan__Product_Excess_Account__c",
    //                      "loan__Product_Write_Off_Recovery_Account__c"]

    // console.log('allFieldNames BEFORE STRINGIFY', allFieldNames);

    // console.log('allFieldNames AFTER STRINGIFY', allFieldNames);
    //this.props.getDataFromDB(allFieldNames, true);

    // this.props.testActiontoTestRetrievingDataFromSalesForce();

    // this.props.getDataFromDB();
  },

  processPickListValues(individualPageData, htmlElement, dataLabelName, selfVal) {
    //Billing Method
    // console.log(individualPageData,htmlElement, dataLabelName);
    let optionsForThisSelect = {};
    individualPageData.basicsData.map(function(singleTabData) {
      // console.log('##########');
      // console.log(singleTabData.label);
      if(singleTabData.label === dataLabelName) {
        optionsForThisSelect = selfVal.creatOptions(singleTabData.picklist, selfVal);
        // console.log('######', optionsForThisSelect);
      }
    });

    //THIS IS HOW OPTIONS ARE TO BE
    // var options = [
    //   { value: 'one', label: 'One' },
    //   { value: 'two', label: 'Two' }
    // ];

    //creating good options

    return (
      <Select
        name="form-field-name"
        value="one"
        options={optionsForThisSelect}
      />
    )
    // console.log('#################FOR PROCESSSING');
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
    // stringVal = stringVal.replace(/s/g, "_");
    stringVal = stringVal.split(' ').join('_');
    return stringVal;
  }

});



export default lendingProduct;



// <ul id="exisitingLendingProductsList" className="ulNoBulletPoint paddingZero">
//     {
//       existinglendingProducts.names.map((value) =>
//       <li key={value.name}>
//         <input type="radio" value={ value.name } onChange={this.exisitingLendingProductRadioBtnChecked} checked={value.checked}/>
//         { value.name }
//       </li>)
//     }
// </ul>
getDataFromDB
