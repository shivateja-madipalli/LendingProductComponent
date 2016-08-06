import React from 'react';


//importing commonStyles
// import commonStyles from './styles/commonStyles';

const LendingProductCmp = React.createClass({


  getInitialState() {
    return {
      data : {}
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

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  },

  componentWillUnmount() {
    console.log('componentWillUnmount');
  },

  render() {
    // THIRD
    const { existinglendingProducts } = this.props;
    console.log('existinglendingProducts', existinglendingProducts);
    return (
      <div id="LendingProductCmpMainDiv" className="paddingZero marginZero width100 height100">
        <div id="leftDiv" className="floatLeft paddingZero marginZero width70 heightAuto displayTrue">
          <div id="leftDiv_TOP" className="paddingZero marginZero width100 heightAuto">
            <h4  className="paddingZero marginZero">Select Lending Product Type</h4>
            <ul id="exisitingLendingProductsList" className="ulNoBulletPoint paddingZero">
                {
                  existinglendingProducts.names.map((value) =>
                  <li key={value.name}>
                    <input type="radio" value={ value.name } onChange={this.exisitingLendingProductRadioBtnChecked} checked={value.checked}/>
                    { value.name }
                  </li>)
                }
            </ul>
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
                      <input type="text" name="loanProductName"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Billing Method
                    </td>
                    <td>
                      <select id="billingMethodSelect">
                        <option value="decliningBalance">Declining Balance</option>
                        <option value="flat">Flat</option>
                        <option value="flexibleRepayment">Flexible Repayment</option>
                      </select>
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
  },

  existingLendingProductSelected(e) {
    // e.preventDefault();
    // this.props.testActiontoTestRetrievingDataFromSalesForce();

    e.preventDefault();
    // display false leftDiv
    // only if anyone of the radio buttons is checked
    let _tempForNextDisablity = false;
    this.props.existinglendingProducts.names.map(function(value){
      if(value.checked) {
        _tempForNextDisablity = true;
      }
    });

    if(_tempForNextDisablity) {
      document.getElementById("leftDiv").classList.add('displayFalse');
      document.getElementById("leftDiv").classList.remove('displayTrue');

      document.getElementById("creatingNewLendingProduct").classList.add('displayTrue');
      document.getElementById("creatingNewLendingProduct").classList.remove('displayFalse');
    }
    else {
      console.log('Check any value');
    }
  },

  getAllPickListData() {
    // step1: raise an action
    // step2: save the return val in component state

    this.props.getDataFromDB('loan__Interest_Calculation_Method__c', true);

    // this.props.testActiontoTestRetrievingDataFromSalesForce();

    // this.props.getDataFromDB();
  },

  exisitingLendingProductRadioBtnChecked(e) {

    const { existinglendingProducts } = this.props;

    this.props.changeSelectedLendingProduct(e.currentTarget.value);
    this.setState(this.props.existinglendingProducts.names);

    let _tempForNextDisablity = false;
  }
});


export default LendingProductCmp;
