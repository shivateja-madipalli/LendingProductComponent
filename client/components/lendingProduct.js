import React from 'react';
let $ = require ('jquery');

// data for creating the component
let simpleLPFields = require('../data/SimpleLendingProductFields');

let lineOfCreditLPFields = require('../data/LineOfCreditLendingProductFields');

//importing commonStyles
// let commonCss = require('../styles/commonCss.js');

const lendingProduct = React.createClass({

  /* Comments Section
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

    console.log('getInitialState');
    let simpleLPFieldsArray = Object.keys(simpleLPFields.default);
    let completedData = {
      completed: [],
      allData: {}
    };

    simpleLPFieldsArray.map(function(individualPage) {
      completedData.completed.push (
        {
          'FieldName' : individualPage,
          'value' : false
        }
      );
    });

    return {
      billingData : {},
      basicData : {},
      interestData : {},
      accountingData : {},
      allEnterData : completedData,
      isLoading : true,
      reRenderElements : false,
      currentPage: "",
      confirmationFromSFAfterInsertingLoan: {},
      feeSetUrl: "",
      exisitingfeeSets : {},
      HelpTextData: {},
      ProtectType: {},
      SetOfAllExisitingLoanProducts: {},
      currentLPType: ""
    }

    // console.log('getInitialState');
    // return simpleLPFields.default.InitialState;
  },

  componentWillMount() {
    // SECOND
    console.log('componentWillMount');
  },

  componentDidMount() {
    // FOURTH
    console.log('componentDidMount');
    this.getAllPickListData();
  },

  componentWillReceiveProps(NextProps) {
    if(NextProps.existinglendingProducts.billingData) {
      NextProps.existinglendingProducts.billingData.then(function(data) {
        console.log('BILLING DATA FROM CMP PROPS', data);
        this.setState({
          billingData : data,
          basicData : this.state.basicData,
          interestData : this.state.interestData,
          accountingData : this.state.accountingData,
          allEnterData : this.state.allEnterData,
          isLoading: false,
          reRenderElements : true,
          currentPage: this.state.currentPage,
          confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : this.state.exisitingfeeSets,
          ProtectType: this.state.ProtectType,
          HelpTextData : this.state.HelpTextData,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
          currentLPType: this.state.currentLPType
        })
      }.bind(this));
    }

    if(NextProps.existinglendingProducts.HelpTextData) {
      NextProps.existinglendingProducts.HelpTextData.then(function(data) {
        console.log('HelpText DATA FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : this.state.basicData,
          interestData : this.state.interestData,
          accountingData : this.state.accountingData,
          allEnterData : this.state.allEnterData,
          isLoading: false,
          reRenderElements : true,
          currentPage: this.state.currentPage,
          confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : this.state.exisitingfeeSets,
          ProtectType: this.state.ProtectType,
          HelpTextData : data,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
          currentLPType: this.state.currentLPType
        })
      }.bind(this));
    }

    if(NextProps.existinglendingProducts.basicData) {
      NextProps.existinglendingProducts.basicData.then(function(data) {
        console.log('BASIC DATA FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : data,
          interestData : this.state.interestData,
          accountingData : this.state.accountingData,
          allEnterData : this.state.allEnterData,
          isLoading: false,
          reRenderElements : true,
          currentPage: this.state.currentPage,
          confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : this.state.exisitingfeeSets,
          HelpTextData: this.state.HelpTextData,
          ProtectType: this.state.ProtectType,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts
        })
      }.bind(this));
    }

    if(NextProps.existinglendingProducts.interestData) {
      NextProps.existinglendingProducts.interestData.then(function(data) {
        // console.log('INTEREST DATA FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : this.state.basicData,
          interestData : data,
          accountingData : this.state.accountingData,
          allEnterData : this.state.allEnterData,
          isLoading: false,
          reRenderElements : true,
          currentPage: this.state.currentPage,
          confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : this.state.exisitingfeeSets,
          HelpTextData: this.state.HelpTextData,
          ProtectType: this.state.ProtectType,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
          currentLPType: this.state.currentLPType
        })
      }.bind(this));
    }

    if(NextProps.existinglendingProducts.accountingData) {
      NextProps.existinglendingProducts.accountingData.then(function(data) {
        // console.log('ACCOUNTING DATA FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : this.state.basicData,
          interestData : this.state.interestData,
          allEnterData : this.state.allEnterData,
          accountingData : data,
          isLoading: false,
          reRenderElements : true,
          currentPage: this.state.currentPage,
          confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : this.state.exisitingfeeSets,
          HelpTextData: this.state.HelpTextData,
          ProtectType: this.state.ProtectType,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
          currentLPType: this.state.currentLPType
        })
      }.bind(this));
    }

    // console.log(NextProps.existinglendingProducts.confirmationFromSFAfterInsertingLoan);

    // Object.getOwnPropertyNames(obj).length === 0

    // if(Object.getOwnPropertyNames(NextProps.existinglendingProducts.confirmationFromSFAfterInsertingLoan).length !== 0) {
    if(NextProps.existinglendingProducts.confirmationFromSFAfterInsertingLoan){
      NextProps.existinglendingProducts.confirmationFromSFAfterInsertingLoan.then(function(data) {
        console.log('SUBMIT FORM DATA FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : this.state.basicData,
          interestData : this.state.interestData,
          allEnterData : this.state.allEnterData,
          accountingData : this.state.accountingData,
          isLoading: this.state.isLoading,
          reRenderElements : this.state.reRenderElements,
          confirmationFromSFAfterInsertingLoan : data,
          currentPage: this.state.currentPage,
          confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : this.state.exisitingfeeSets,
          HelpTextData: this.state.HelpTextData,
          ProtectType: this.state.ProtectType,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
          currentLPType: this.state.currentLPType
        })
        if(data.finalResponseAfterInsertion !== null) {
          location.reload();
        }
      }.bind(this));
    }

    //feeSetUrl
    if(NextProps.existinglendingProducts.feeSetUrl) {
      NextProps.existinglendingProducts.feeSetUrl.then(function(data) {
        console.log('FEE SET URL FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : this.state.basicData,
          interestData : this.state.interestData,
          allEnterData : this.state.allEnterData,
          accountingData : this.state.accountingData,
          isLoading: this.state.isLoading,
          reRenderElements : this.state.reRenderElements,
          confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
          currentPage: this.state.currentPage,
          feeSetUrl: data,
          exisitingfeeSets : this.state.exisitingfeeSets,
          HelpTextData: this.state.HelpTextData,
          ProtectType: this.state.ProtectType,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
          currentLPType: this.state.currentLPType
        })
      }.bind(this));
    }

    //Exisiting feeSet Data
    if(NextProps.existinglendingProducts.exisitingfeeSets) {
      NextProps.existinglendingProducts.exisitingfeeSets.then(function(data) {
        console.log('Exisiting FEE SET URL FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : this.state.basicData,
          interestData : this.state.interestData,
          allEnterData : this.state.allEnterData,
          accountingData : this.state.accountingData,
          isLoading: this.state.isLoading,
          reRenderElements : this.state.reRenderElements,
          confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
          currentPage: this.state.currentPage,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : data,
          HelpTextData: this.state.HelpTextData,
          ProtectType: this.state.ProtectType,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
          currentLPType: this.state.currentLPType
        })
      }.bind(this));
    }

    // Exisiting ProtectType Data
    if(NextProps.existinglendingProducts.ProtectType) {
      NextProps.existinglendingProducts.ProtectType.then(function(data) {
        console.log('Exisiting PROTECT TYPE FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : this.state.basicData,
          interestData : this.state.interestData,
          allEnterData : this.state.allEnterData,
          accountingData : this.state.accountingData,
          isLoading: this.state.isLoading,
          reRenderElements : this.state.reRenderElements,
          confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
          currentPage: this.state.currentPage,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : this.state.exisitingfeeSets,
          HelpTextData: this.state.HelpTextData,
          ProtectType: data,
          SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
          currentLPType: this.state.currentLPType
        })
      }.bind(this));
    }

    // Exisiting ProtectType Data
    if(NextProps.existinglendingProducts.SetOfAllExisitingLoanProducts) {
      NextProps.existinglendingProducts.SetOfAllExisitingLoanProducts.then(function(data) {
        console.log('Exisiting Set Of All Exisiting Loan Products FROM CMP PROPS', data);
        this.setState({
          billingData : this.state.billingData,
          basicData : this.state.basicData,
          interestData : this.state.interestData,
          allEnterData : this.state.allEnterData,
          accountingData : this.state.accountingData,
          isLoading: this.state.isLoading,
          reRenderElements : this.state.reRenderElements,
          confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
          currentPage: this.state.currentPage,
          feeSetUrl: this.state.feeSetUrl,
          exisitingfeeSets : this.state.exisitingfeeSets,
          HelpTextData: this.state.HelpTextData,
          ProtectType: this.state.ProtectType,
          SetOfAllExisitingLoanProducts: data,
          currentLPType: this.state.currentLPType
        })
      }.bind(this));
    }
  },

  componentWillUnmount() {
    console.log('componentWillUnmount');
  },

  componentDidUpdate() {
    // Display True The First Div
    console.log('componentDidUpdate');
    // div show

    // Line Of Credit LP
    $('#' + lineOfCreditLPFields.default.AllPages[0] + '_MainDiv').addClass('displayBlock').removeClass('displayNone');
    $('#' + lineOfCreditLPFields.default.AllPages[0] + '_NavBtn').addClass('backGroundBlueColor');
    $('#' + lineOfCreditLPFields.default.AllPages[0] + '_NavBtn').addClass('colorWhite');

    // Simple LP
    $('#' + simpleLPFields.default.AllPages[0] + '_MainDiv').addClass('displayBlock').removeClass('displayNone');
    $('#' + simpleLPFields.default.AllPages[0] + '_NavBtn').addClass('backGroundBlueColor');
    $('#' + simpleLPFields.default.AllPages[0] + '_NavBtn').addClass('colorWhite');

  },

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    if(!this.state.isLoading && this.state.reRenderElements) {
      return true;
    }
    return false;
  },

  render() {
    console.log('RENDERING!');
    // THIRD
    let self = this;

    const { existinglendingProducts } = this.props;
    // console.log('existinglendingProducts', existinglendingProducts);
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

      //get all the keys of Global JSON

      // Creating Exisiting Loan Products Table
      let existingLoanProducts = this.createExisitingLoanProductsTable();

      // create Line Of Credit Lending Product Elements
      let lineOfCreditBreadCrumbNavContent = this.createBreadCrumbElements(this, lineOfCreditLPFields);
      let lineOfCreditBasicsElementsHtmlContent = this.getTemplateStructure('BasicsElements_LineOfCreditLP', this.state.basicData.basicsData, lineOfCreditLPFields, this);
      let lineOfCrediBillingElementsHtmlContent = this.getTemplateStructure('BillingElements_LineOfCreditLP', this.state.billingData.billingData, lineOfCreditLPFields, this);
      let lineOfCreditAdvancedElementsHtmlContent = this.getTemplateStructure('AdvanceElements_LineOfCreditLP',undefined, lineOfCreditLPFields, this);
      // let lineOfCreditFeesElementsHtmlContent = this.getTemplateStructure('FeesElements', this.state.interestData.interestData, lineOfCreditLPFields, this);
      // Fees is common
      let lineOfCreditTermElementsHtmlContent = this.getTemplateStructure('TermElements_LineOfCreditLP', undefined, lineOfCreditLPFields, this);
      let lineOfCreditInterestElementsHtmlContent = this.getTemplateStructure('InterestElements_LineOfCreditLP', undefined, lineOfCreditLPFields, this);
      // let tolerenceElementsHtmlContent = this.getTemplateStructure('TolerenceElements', undefined, lineOfCreditLPFields, this);
      // Tolerence is common

      // create Simple Lending Product Elements
      let simpleBreadCrumbNavContent = this.createBreadCrumbElements(this, simpleLPFields);
      let simpleProfileElementsHtmlContent = this.getTemplateStructure('ProfileElements_SimpleLP', this.state.basicData.basicsData, simpleLPFields, this);

      let simpleTermElementsHtmlContent = this.getTemplateStructure('TermElements_SimpleLP',undefined, simpleLPFields, this);
      let simpleInterestElementsHtmlContent = this.getTemplateStructure('InterestElements_SimpleLP', this.state.interestData.interestData, simpleLPFields, this);
      let simpleProtectElementsHtmlContent = this.getTemplateStructure('ProtectElements_SimpleLP', undefined, simpleLPFields, this);
      let simpleFundingElementsHtmlContent = this.getTemplateStructure('FundingElements_SimpleLP', undefined, simpleLPFields, this);

      //common elements between Simple Lending and Line of Credit
      let commonFeesElementsHtmlContent = this.getTemplateStructure('FeesElements_SimpleLP', undefined, simpleLPFields, this);
      let commonTolerenceElementsHtmlContent = this.getTemplateStructure('TolerenceElements_SimpleLP', undefined, simpleLPFields, this);
      // let accountingElementsHtmlContent = this.getTemplateStructure('AccountingElements', undefined, this);

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
      if(wholeDatsOfAccountingElements) {
        wholeDatsOfAccountingElements.map(function(eachVal) {
          let individualOption = "<option value='" + eachVal.Id + "'>" + eachVal.Name + "</option>";
          finalAccountingElementsOptionsList += individualOption;
        });
      }

      let commonAccountingElementsHtmlContent = this.getTemplateStructure('AccountingElements_SimpleLP', finalAccountingElementsOptionsList, simpleLPFields, this);

      /*
      <li dangerouslySetInnerHTML={{__html: profileElementsHtmlContent}}>
      'dangerouslySetInnerHTML' is a type where we can insert HTML DATA on need.
      */

      return (
        <div>
          <div id="leftDiv" className="floatLeft width60">
            <div id="exisitingLendingProductsTable" className="width100">
              <table className="slds-table slds-table--bordered slds-max-medium-table--stacked-horizontal ">
                <thead>
                  <tr className="slds-text-heading--label">
                    <th className="slds-is-sortable width50" scope="col">
                      <div className="slds-truncate" title="Name">
                        Name
                      </div>
                    </th>
                    <th className="slds-is-sortable width50" scope="col">
                      <div className="slds-truncate floatLeft paddingTop1Point5" title="Lending Product Type">
                        Lending Product Type
                      </div>
                      <div className="floatRight">
                        <span> New Lending Product: </span>
                        <div className="slds-dropdown-trigger slds-is-open" aria-expanded="true">
                          <button className="slds-button slds-button--icon-border-filled visibilityVisibleImp" id="newLendingProductSelect" type="button" aria-haspopup="true">
                            <svg version="1.1" className="slds-button__icon slds-button--icon" aria-hidden="true" role="img" viewBox="0 0 24 24">
                              <path d="M3.8 6.5h16.4c.4 0 .8.6.4 1l-8 9.8c-.3.3-.9.3-1.2 0l-8-9.8c-.4-.4-.1-1 .4-1z"></path>
                            </svg>
                          </button>
                          <div className="slds-dropdown slds-dropdown--actions slds-dropdown--left" id="dd0-dd">
                            <ul className="dropdown__list" role="menu">
                              <li className="slds-dropdown__item" tabIndex="-1" role="menuitem option"><a id="amortizationLP" name="AmortizationLendingProductCmpMainDiv" href="#" onClick={e => this.newLendingProductSelectionEvent(e)} className="slds-truncate" tabIndex="-1">Amortization Lending Product</a></li>
                              <li className="slds-dropdown__item" tabIndex="-1" role="menuitem option"><a id="lineOfCreditLP" name="LineOfCreditLendingProductCmpMainDiv" href="#" onClick={e => this.newLendingProductSelectionEvent(e)} className="slds-truncate" tabIndex="-1">Line Of Credit Lending Product</a></li>
                              <li className="slds-dropdown__item" tabIndex="-1" role="menuitem option"><a id="simpleLP" name="SimpleLendingProductCmpMainDiv" href="#" onClick={e => this.newLendingProductSelectionEvent(e)} className="slds-truncate" tabIndex="-1">Simple Lending Product</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="" dangerouslySetInnerHTML={{__html: existingLoanProducts}}>

                </tbody>
              </table>
            </div>
            <div id="ModalForCreatingNewLendingProduct" className="width100">
              <div id="AmortizationLendingProductCmpMainDiv" className="displayNone">
              </div>
              <div id="LineOfCreditLendingProductCmpMainDiv" className="displayNone">
                <div>
                  <div id="InnerleftDiv" className="">
                    <div id="InnerleftDiv_TOP" className="slds-modal__header">
                      <p className="slds-text-heading--medium slds-truncate" id="creatingNewLendingProductHeading" title="Exisiting Lending Product"></p>
                    </div>
                    <div id="InnerleftDiv_BOTTOM" className="">

                      <div id="newSimpleLendingProduct">
                        <div dangerouslySetInnerHTML={{__html: lineOfCreditBreadCrumbNavContent}}>
                        </div>
                        <div id='BasicsElements_LineOfCreditLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: lineOfCreditBasicsElementsHtmlContent}}>
                        </div>
                        <div id='BillingElements_LineOfCreditLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: lineOfCrediBillingElementsHtmlContent}}>
                        </div>
                        <div id='AdvanceElements_LineOfCreditLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone"  dangerouslySetInnerHTML={{__html: lineOfCreditAdvancedElementsHtmlContent}}>
                        </div>
                        <div id='FeesElements_LineOfCreditLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: commonFeesElementsHtmlContent}}>
                        </div>
                        <div  id='TermElements_LineOfCreditLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: lineOfCreditTermElementsHtmlContent}}>
                        </div>
                        <div id='InterestElements_LineOfCreditLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone"  dangerouslySetInnerHTML={{__html: lineOfCreditInterestElementsHtmlContent}}>
                        </div>
                        <div id='TolerenceElements_LineOfCreditLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: commonTolerenceElementsHtmlContent}}>
                        </div>
                        <div id='AccountingElements_LineOfCreditLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: commonAccountingElementsHtmlContent}}>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="divForErrorMessages" className="slds-form--horizontal maxWidth60rem marginTop2Percent displayNone">
                    <p id="showErrorMessage" className="slds-truncate errorText"></p>
                  </div>
                  <div className="slds-form--horizontal maxWidth60rem marginTop2Percent">
                    <button id="navigationBackBtn" className="slds-button slds-button--neutral slds-not-selected displayNone" onClick={e => this.navigateBetweenPagesGoBack(e, this)}>Back</button>
                    <button id="navigationNextBtn" className="slds-button slds-button--neutral slds-not-selected"  onClick={e => this.navigateBetweenPages(e, this)}>Next</button>
                    <button id="saveLendingProductBtn" className="slds-button slds-button--neutral slds-not-selected"  onClick={e => this.submitForm(e)}>Save</button>
                  </div>
                </div>
              </div>
              <div id="SimpleLendingProductCmpMainDiv" className="displayNone">

                <div>
                  <div id="InnerleftDiv" className="">
                    <div id="InnerleftDiv_TOP" className="slds-modal__header">
                      <p className="slds-text-heading--medium slds-truncate" id="creatingNewLendingProductHeading_" title="Exisiting Lending Product"></p>
                    </div>
                    <div id="InnerleftDiv_BOTTOM" className="">

                      <div id="newSimpleLendingProduct">
                        <div dangerouslySetInnerHTML={{__html: simpleBreadCrumbNavContent}}>
                        </div>
                        <div id='ProfileElements_SimpleLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: simpleProfileElementsHtmlContent}}>
                        </div>
                        <div id='FeesElements_SimpleLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: commonFeesElementsHtmlContent}}>
                        </div>
                        <div id='TermElements_SimpleLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone"  dangerouslySetInnerHTML={{__html: simpleTermElementsHtmlContent}}>
                        </div>
                        <div id='InterestElements_SimpleLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: simpleInterestElementsHtmlContent}}>
                        </div>
                        <div  id='ProtectElements_SimpleLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: simpleProtectElementsHtmlContent}}>
                        </div>
                        <div id='FundingElements_SimpleLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone"  dangerouslySetInnerHTML={{__html: simpleFundingElementsHtmlContent}}>
                        </div>
                        <div id='TolerenceElements_SimpleLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: commonTolerenceElementsHtmlContent}}>
                        </div>
                        <div id='AccountingElements_SimpleLP_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: commonAccountingElementsHtmlContent}}>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="divForErrorMessages" className="slds-form--horizontal maxWidth60rem marginTop2Percent displayNone">
                    <p id="showErrorMessage" className="slds-truncate errorText"></p>
                  </div>
                  <div className="slds-form--horizontal maxWidth60rem marginTop2Percent">
                    <button id="navigationBackBtn" className="slds-button slds-button--neutral slds-not-selected displayNone" onClick={e => this.navigateBetweenPagesGoBack(e, this)}>Back</button>
                    <button id="navigationNextBtn" className="slds-button slds-button--neutral slds-not-selected"  onClick={e => this.navigateBetweenPages(e, this)}>Next</button>
                    <button id="saveLendingProductBtn" className="slds-button slds-button--neutral slds-not-selected"  onClick={e => this.submitForm(e)}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="rightDiv" className="slds-modal--form maxWidth40rem floatRight width35">
            <div id="rightDiv_TOP" className="slds-modal__header">
              <p className="slds-text-heading--medium slds-truncate" title="Exisiting Lending Product">Help Text</p>
            </div>
            <div className="slds-card">
              <div className="slds-card__body" id="simple_loan_product_help_content">
                <div id="HelpTextValue">
                </div>
              </div>
            </div>
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

  createExisitingLoanProductsTable() {
    // <tr className="slds-hint-parent">
    //   <td data-label="COLUMN 1" className="width50 paddingLeftZeroImp paddingRightOneImp">
    //     <div className="slds-truncate" title="Cloudhub">Cloudhub</div>
    //   </td>
    //   <td data-label="COLUMN 2" className="width50 paddingLeftZeroImp paddingRightOneImp">
    //     <div className="slds-truncate" title="4/14/2015">4/14/2015</div>
    //   </td>
    // </tr>

    // loop through the list of Exisiting Loan Products and create Rows
    // this.state.SetOfAllExisitingLoanProducts.existingLoanProducts
    let exisitingLoanProducts = this.state.SetOfAllExisitingLoanProducts.existingLoanProducts;
    // console.log('%%%%%%%%%%%%%%%%',exisitingLoanProducts);
    let finalSetOfRows = "";
    if(exisitingLoanProducts.length > 0) {
      for(let i=0;i<exisitingLoanProducts.length; i++) {
          finalSetOfRows += "<tr className='slds-hint-parent'>";
          finalSetOfRows += "<td data-label='COLUMN 1' className='width50 paddingLeftZeroImp paddingRightOneImp'>"
          finalSetOfRows += "<div className='slds-truncate' title='" + exisitingLoanProducts[i].Name + "'>" + exisitingLoanProducts[i].Name + "</div>"
          finalSetOfRows += "</td>";
          finalSetOfRows += "<td data-label='COLUMN 2' className='width50 paddingLeftZeroImp paddingRightOneImp'>";
          finalSetOfRows += "<div className='slds-truncate' title='" + exisitingLoanProducts[i].loan__Loan_Product_Type__c + "'>" + exisitingLoanProducts[i].loan__Loan_Product_Type__c + "</div>"
          finalSetOfRows += "</td>";
          finalSetOfRows += "</tr>";
      }
    }

    return finalSetOfRows;
  },

  newLendingProductSelectionEvent(e) {
    console.log('Clicked', e.target.id);

    //toggle Display between New LP Creation Divs
    if(e.target.id === "amortizationLP") {
      $('#' + e.target.name).removeClass('displayNone');
      $('#LineOfCreditLendingProductCmpMainDiv').addClass('displayNone');
      $('#SimpleLendingProductCmpMainDiv').addClass('displayNone');
    }
    else if(e.target.id === "lineOfCreditLP") {
      $('#exisitingLendingProductsTable').addClass('displayNone');
      $('#' + e.target.name).removeClass('displayNone');
      $('#AmortizationLendingProductCmpMainDiv').addClass('displayNone');
      $('#SimpleLendingProductCmpMainDiv').addClass('displayNone');
      let heading = e.target.name.replace("CmpMainDiv","");

      $('#creatingNewLendingProductHeading').text(heading);
    }
    else if(e.target.id === "simpleLP") {
      console.log('TRIGGED', e.target.name);
      $('#exisitingLendingProductsTable').addClass('displayNone');
      $('#' + e.target.name).removeClass('displayNone');
      $('#LineOfCreditLendingProductCmpMainDiv').addClass('displayNone');
      $('#AmortizationLendingProductCmpMainDiv').addClass('displayNone');
      console.log('TRIGGED END');
      let heading = e.target.name.replace("CmpMainDiv","");

      $('#creatingNewLendingProductHeading_').text(heading);
    }



    this.setState({
      billingData : this.state.billingData,
      basicData : this.state.basicData,
      interestData : this.state.interestData,
      accountingData : this.state.accountingData,
      allEnterData : this.state.allEnterData,
      isLoading: false,
      reRenderElements: false,
      currentPage: this.state.currentPage,
      ProtectType: this.state.ProtectType,
      confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
      feeSetUrl: this.state.feeSetUrl,
      exisitingfeeSets : this.state.exisitingfeeSets,
      HelpTextData: this.state.HelpTextData,
      ProtectType: this.state.ProtectType,
      SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
      currentLPType: e.target.id
    })

  },

  // onChange event for All Elements
  onChangeForAllElements(e) {
    // have to check whether the concerned page's isRequired values are filled or not.
    // store each and every element's value in a json obj and set state

    //create json

    // console.log(e.target.name);
    let jsonVal = this.state.allEnterData;





    // console.log(jsonVal);

    // checking whether the value entered has any 'White Spaces'
    if(e.target.value.trim()) {
      //check for validations


      console.log(e.target.id);
      // console.log('ENTERED KNOWN TERRITORY');
      if(e.target.type === "checkbox") {
        jsonVal.allData[e.target.id] = $("#" + e.target.id).is(':checked');
      }
      else {
        jsonVal.allData[e.target.id] = e.target.value;
      }
      $('#divForErrorMessages').addClass('displayNone');
      $('#showErrorMessage').text('');

    }
    else {
      // console.log('ENTERED UNKNOWN TERRITORY');
      // show error saying the value is not entered

      $('#divForErrorMessages').removeClass('displayNone');
      $('#showErrorMessage').text('Enter Correct Values');
      $('#' + e.target.id).val('');
      $('#' + e.target.id).focus();

      if(jsonVal.allData.hasOwnProperty(e.target.id)) {
        delete jsonVal.allData[e.target.id];
        console.log('STATE . ALLENTERDATA: ',jsonVal);
      }
      // $('#navigationNextBtn').attr('disabled', true);
    }
    //set state
    // console.log('INTEREST DATA FROM CMP PROPS', data);
    // if(!jsonVal.allData.hasOwnProperty(e.target.id)) {
    // delete jsonVal.allData[e.target.id];

    this.setState({
      billingData : this.state.billingData,
      basicData : this.state.basicData,
      interestData : this.state.interestData,
      accountingData : this.state.accountingData,
      allEnterData : this.state.allEnterData,
      isLoading: false,
      reRenderElements: false,
      currentPage: e.target.name,
      ProtectType: this.state.ProtectType,
      confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
      feeSetUrl: this.state.feeSetUrl,
      exisitingfeeSets : this.state.exisitingfeeSets,
      HelpTextData: this.state.HelpTextData,
      SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
      currentLPType: this.state.currentLPType
    })
    // $('#navigationNextBtn').removeAttr('disabled');
    // }
    // console.log(this.state.allEnterData);
  },

  // This is for handling onClick event for FeeSet Radio Button
  // onClickForFeeSet(e) {
  //   // console.log('FeeSet Clicked');
  //   if(e.target.id === "createNewFeeSetBtn")
  //   {
  //     if(this.state.feeSetUrl) {
  //       // console.log(this.state.feeSetUrl.feeSetUrl);
  //       // window.open(this.state.feeSetUrl.feeSetUrl,'popUpWindow','height=60%,width=80%,left=10,top=10,,scrollbars=yes,menubar=no');
  //       window.open(this.state.feeSetUrl.feeSetUrl);
  //       return false;
  //     }
  //   }
  //   else if(e.target.id === "existingFeeSetSelect")
  //   {
  //     // setState with the data
  //
  //     // if(jsonVal.allData.hasOwnProperty(e.target.name)) {
  //     //   delete jsonVal.allData[e.target.id];
  //     //   console.log(jsonVal);
  //     // }
  //     let jsonVal = this.state.allEnterData;
  //     jsonVal.allData[e.target.name] = e.target.value;
  //     // console.log(e.target);
  //     this.setState({
  //       basicData : this.state.basicData,
  //       interestData : this.state.interestData,
  //       accountingData : this.state.accountingData,
  //       allEnterData : jsonVal,
  //       isLoading: false,
  //       reRenderElements: false,
  //       currentPage: this.state.currentPage,
  //       confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
  //       feeSetUrl: this.state.feeSetUrl,
  //       ProtectType: this.state.ProtectType
  //     })
  //   }
  // },

  // onClickForProtectType(e) {
  //   // setState with the data
  //
  //   let jsonVal = this.state.allEnterData;
  //   jsonVal.allData[e.target.id] = e.target.value;
  //   console.log('############', jsonVal);
  //   this.setState({
  //     basicData : this.state.basicData,
  //     interestData : this.state.interestData,
  //     accountingData : this.state.accountingData,
  //     allEnterData : jsonVal,
  //     isLoading: false,
  //     reRenderElements: false,
  //     currentPage: this.state.currentPage,
  //     confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
  //     feeSetUrl: this.state.feeSetUrl,
  //     ProtectType: this.state.ProtectType
  //   })
  // },

  // On Click event for all Elements - used for handling and swapping HelpText Data
  onClickForAllElements(e) {
    // console.log(this.state.basicData.basicsData);
    // console.log(e.target.parentNode.parentNode.childNodes[0].innerHTML);
    // console.log(e.target.name);


    // get the help text from state.existinglendingProducts.HelpTextData and populate it in help text div

    let helpTextFound = this.getElementHelpText(e.target.id, this);
    // console.log(helpTextFound);
    if(helpTextFound[0].helpText) {
      $('#HelpTextValue').text(helpTextFound[0].helpText);
    }
    if(e.target.id === "loan__protect_enabled__c") {
      if($('#' + e.target.id).is(':checked')) {
        $('#loan__Protect_Type__c').removeClass('displayNone');
      }
      else {
        $('#loan__Protect_Type__c').addClass('displayNone');
      }
    }
  },

  // getting HelpText Data from Props
  getElementHelpText(elementId, thisVal) {
    let data = thisVal.state.HelpTextData.helpTextWithElementId;
    return data.filter(
      function(data){
        return data.elementId === elementId;
      }
    );
  },

  /*
  here I am checking whether all IsRequired values are fullfilled or not
  and then move the execution to the next page
  */

  // Next Button
  navigateBetweenPages(e, thisVal) {
    e.preventDefault();
    if(thisVal.state.currentPage !== "") {
      let currentLPTypeForData = {};



      if(this.state.currentLPType === "simpleLP") {
        currentLPTypeForData = simpleLPFields;
      }
      else if(this.state.currentLPType === "lineOfCreditLP") {
        currentLPTypeForData = lineOfCreditLPFields;
      }
      else if(this.state.currentLPType === "") {

      }
      console.log('``````````````', currentLPTypeForData);
      console.log('``````````````', thisVal.state.currentPage);
      //clearing error messages if any
      $('#divForErrorMessages').addClass('displayNone');
      $('#showErrorMessage').text('');

      let checkWhetherAllIsRequiredElementsAreAnswered = false;
      let checkWhetherIsRequiredElementIsInvoked = false;
      let arrayToCheckWhetherAreThereAnyisRequiredElements = [];
      // console.log(thisVal.state.currentPage);
      for(let i=0; i < currentLPTypeForData.default[thisVal.state.currentPage].length; i++) {
        let individualElement = currentLPTypeForData.default[thisVal.state.currentPage][i];
        if(individualElement.isRequired) {
          // arrayToCheckWhetherAreThereAnyisRequiredElements.push(true);
          console.log('!!!!!!!!!!!!!!!',thisVal.state.allEnterData);
          if(thisVal.state.allEnterData.allData.hasOwnProperty(individualElement.id)) {
            checkWhetherAllIsRequiredElementsAreAnswered = true;
            checkWhetherIsRequiredElementIsInvoked = true;
          }
          else {
            checkWhetherAllIsRequiredElementsAreAnswered = false;
            arrayToCheckWhetherAreThereAnyisRequiredElements = [];
            break;
          }
        }
        else {
          //for elements which does not have isRequired at all
          if(!checkWhetherIsRequiredElementIsInvoked) {
            arrayToCheckWhetherAreThereAnyisRequiredElements.push(false);
          }
        }
      }

      console.log('Check for IsRequired DONE');
      console.log('arrayToCheckWhetherAreThereAnyisRequiredElements', arrayToCheckWhetherAreThereAnyisRequiredElements);
      console.log('checkWhetherAllIsRequiredElementsAreAnswered', checkWhetherAllIsRequiredElementsAreAnswered);

      if((arrayToCheckWhetherAreThereAnyisRequiredElements.length !== 0 && arrayToCheckWhetherAreThereAnyisRequiredElements.indexOf(false) !== -1)|| checkWhetherAllIsRequiredElementsAreAnswered) {
        // set State those who does not have any isRequired at all
        //move to next div

        let checkForAnyValidationErrors = false;

        //check for validations

        console.log('@@@@@@@@@@@@@', currentLPTypeForData.default[thisVal.state.currentPage]);
        loop1:
        for(let i=0; i<currentLPTypeForData.default[thisVal.state.currentPage].length; i++) {
          let individualElementOfThisPage = currentLPTypeForData.default[thisVal.state.currentPage][i];
          // console.log('@@@@@@@@@@@@@@', individualElementOfThisPage);
          // console.log('THE NEXT EXEC IS FOR PAGES WITH VALIDATIONS');

          if(individualElementOfThisPage.validations !== undefined) {
            console.log('INSIDE THE EXEC - PAGES WITH VALIDATIONS');
            loop2:
            for(let j=0;j<individualElementOfThisPage.validations.length;j++) {
              //get details of validators

              //clearing error messages
              $('#divForErrorMessages').addClass('displayNone');
              $('#showErrorMessage').text(null);
              $('#' + individualElementOfThisPage.id).removeClass('errorElement');

              let validatorId = individualElementOfThisPage.validations[j].comparisionVal;
              let validatorValue = thisVal.state.allEnterData.allData[validatorId];
              // console.log('validatorValue', validatorValue);

              // get comarision symbol
              let comparisionSymbol = individualElementOfThisPage.validations[j].symbol;


              // get details of validatee
              // individualElementOfThisPage
              let validateeValue = thisVal.state.allEnterData.allData[individualElementOfThisPage.id];
              // console.log('validateeValue', validateeValue);

              if(comparisionSymbol == '>') {
                if(Number(validateeValue) > Number(validatorValue)) {
                  console.log('VALIDATION ">" SUCCESS BETWEEN ' + validatorId + ' AND ' + individualElementOfThisPage.id);
                  // $('#divForErrorMessages').addClass('displayNone');
                  // $('#showErrorMessage').text(null);

                }
                else {
                  console.log('VALIDATION ">" FAILED BETWEEN ' + validatorId + ' AND ' + individualElementOfThisPage.id);
                  checkForAnyValidationErrors = true;
                  $('#divForErrorMessages').removeClass('displayNone');
                  $('#' + individualElementOfThisPage.id).addClass('errorElement');
                  if($('#showErrorMessage').text() === "") {
                    $('#showErrorMessage').text(individualElementOfThisPage.validations[j].message);
                  }
                  else {
                    $('#showErrorMessage').append(' <br> AND ');
                    $('#showErrorMessage').append(individualElementOfThisPage.validations[j].message);
                  }
                  break loop1;
                }
              }
              else {
                if(Number(validateeValue) < Number(validatorValue)) {
                  console.log('VALIDATION "<" SUCCESS BETWEEN ' + validatorId + ' AND ' + individualElementOfThisPage.id);
                  // $('#divForErrorMessages').addClass('displayNone');
                  // $('#showErrorMessage').text(null);
                  $('#' + individualElementOfThisPage.id).removeClass('errorElement');
                }
                else {
                  console.log('VALIDATION "<" FAILED BETWEEN ' + validatorId + ' AND ' + individualElementOfThisPage.id);
                  checkForAnyValidationErrors = true;
                  $('#divForErrorMessages').removeClass('displayNone');
                  $('#' + individualElementOfThisPage.id).addClass('errorElement');
                  console.log('ERROR MESSAGE: ', $('#showErrorMessage').text());
                  if($('#showErrorMessage').text() === "") {
                    $('#showErrorMessage').text(individualElementOfThisPage.validations[j].message);
                  }
                  else {
                    $('#showErrorMessage').append(' <br> AND ');
                    $('#showErrorMessage').append(individualElementOfThisPage.validations[j].message);
                  }
                  break loop1;
                }
              }
            }
          }
          // console.log('DID NOT ENTER INSIDE AS THIS PAGE DOESN"T HAVE ANY VALIDATIONS');
        }

        if(!checkForAnyValidationErrors) {
          console.log('INSIDE EXEC - CHECK WHETHER ANY VALIDATIONS FAILED AND NEXT PAGE FUNCTIONALITY');
          $('#divForErrorMessages').addClass('displayNone');
          $('#showErrorMessage').text(null);
          // $('#' + individualElementOfThisPage.id).removeClass('errorElement');
          let currentPageIndex = currentLPTypeForData.default.AllPages.indexOf(thisVal.state.currentPage);
          console.log('#############', currentPageIndex);
          if(currentPageIndex === 0) {
            $('#navigationBackBtn').removeClass('displayNone');
          }

          if(currentPageIndex + 1 === currentLPTypeForData.default.AllPages.length - 1) {
            $('#navigationNextBtn').addClass('displayNone');
          }
          console.log('#############', currentLPTypeForData.default.AllPages[currentPageIndex + 1]);
          console.log('#############', currentLPTypeForData.default.AllPages[currentPageIndex]);

          $('#' + currentLPTypeForData.default.AllPages[currentPageIndex + 1] + '_MainDiv').addClass('displayBlock').removeClass('displayNone');
          $('#' + currentLPTypeForData.default.AllPages[currentPageIndex] + '_MainDiv').addClass('displayNone').removeClass('displayBlock');

          console.log('');

          //set state
          // console.log('INTEREST DATA FROM CMP PROPS', data);
          thisVal.setState({
            basicData : this.state.basicData,
            interestData : this.state.interestData,
            accountingData : this.state.accountingData,
            allEnterData : this.state.allEnterData,
            isLoading: false,
            reRenderElements: false,
            currentPage: currentLPTypeForData.default.AllPages[currentPageIndex + 1],
            ProtectType: this.state.ProtectType,
            confirmationFromSFAfterInsertingLoan: this.state.confirmationFromSFAfterInsertingLoan,
            feeSetUrl: this.state.feeSetUrl,
            exisitingfeeSets : this.state.exisitingfeeSets,
            HelpTextData: this.state.HelpTextData,
            ProtectType: this.state.ProtectType,
            SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
            currentLPType: this.state.currentLPType
          })

          // this is previous
          $('#' + currentLPTypeForData.default.AllPages[currentPageIndex] + '_NavBtn').removeClass('backGroundBlueColor');
          $('#' + currentLPTypeForData.default.AllPages[currentPageIndex] + '_NavBtn').addClass('backGroundGreenColor');
          $('#' + currentLPTypeForData.default.AllPages[currentPageIndex] + '_NavBtn').addClass('colorWhite');

          //this is current
          $('#' + currentLPTypeForData.default.AllPages[currentPageIndex + 1] + '_NavBtn').addClass('backGroundBlueColor');
          $('#' + simpleLPFields.default.AllPages[currentPageIndex + 1] + '_NavBtn').addClass('colorWhite');
        }
        else {
          console.log('ERROR ERROR');
        }
      }
      else {
        $('#divForErrorMessages').removeClass('displayNone');
        $('#showErrorMessage').text('Enter Required Values');
      }
    }
    else {
      $('#divForErrorMessages').removeClass('displayNone');
      $('#showErrorMessage').text('Enter Values');
    }
  },

  // Back Button
  navigateBetweenPagesGoBack(e, thisVal) {
    let currentLPTypeForData = {};

    if(this.state.currentLPType === "simpleLP") {
      currentLPTypeForData = simpleLPFields;
    }
    else if(this.state.currentLPType === "lineOfCreditLP") {
      currentLPTypeForData = lineOfCreditLPFields;
    }
    else if(this.state.currentLPType === "") {

    }

    $('#divForErrorMessages').addClass('displayNone');
    $('#showErrorMessage').text(null);
    let currentPageIndex = currentLPTypeForData.default.AllPages.indexOf(thisVal.state.currentPage);
    if(currentPageIndex === 1) {
      $('#navigationBackBtn').addClass('displayNone');
    }
    if(currentPageIndex < currentLPTypeForData.default.AllPages.length) {
      $('#navigationNextBtn').removeClass('displayNone');
    }
    $('#' + currentLPTypeForData.default.AllPages[currentPageIndex - 1] + '_MainDiv').addClass('displayBlock').removeClass('displayNone');
    $('#' + currentLPTypeForData.default.AllPages[currentPageIndex] + '_MainDiv').addClass('displayNone').removeClass('displayBlock');

    thisVal.setState({
      billingData : this.state.billingData,
      basicData : this.state.basicData,
      interestData : this.state.interestData,
      accountingData : this.state.accountingData,
      allEnterData : this.state.allEnterData,
      isLoading: false,
      reRenderElements: false,
      currentPage: currentLPTypeForData.default.AllPages[currentPageIndex - 1],
      confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
      feeSetUrl: this.state.feeSetUrl,
      ProtectType: this.state.ProtectType,
      exisitingfeeSets : this.state.exisitingfeeSets,
      HelpTextData: this.state.HelpTextData,
      SetOfAllExisitingLoanProducts: this.state.SetOfAllExisitingLoanProducts,
      currentLPType: this.state.currentLPType
    })


    // this is earlier
    $('#' + currentLPTypeForData.default.AllPages[currentPageIndex - 1] + '_NavBtn').removeClass('backGroundGreenColor');
    $('#' + currentLPTypeForData.default.AllPages[currentPageIndex - 1] + '_NavBtn').addClass('backGroundBlueColor');
    $('#' + currentLPTypeForData.default.AllPages[currentPageIndex - 1] + '_NavBtn').addClass('colorWhite');

    // this is current page
    $('#' + currentLPTypeForData.default.AllPages[currentPageIndex] + '_NavBtn').removeClass('backGroundBlueColor');
    $('#' + currentLPTypeForData.default.AllPages[currentPageIndex] + '_NavBtn').removeClass('colorWhite');
  },

  // Submit the whole Data
  submitForm(e) {
    e.preventDefault();
    //accessing values with ref's

    //const author = this.refs.author.value;
    // have to access state (JSON DATA) in here
    // and add obj name to the same JSON

    // this.state.allEnterData['sobjectType'] = 'loan__Loan_Product__c';

    // if(JSON.stringify(this.state.allEnterData.completed).indexOf('false') !== -1) {
    //   console.log('False is Present');
    // }
    // else {
    //   console.log('False is Not Present');
    //   this.props.submitForm(this.state.allEnterData);
    // }

    // console.log(this.state.allEnterData.allData);
    this.props.submitForm(this.state.allEnterData.allData);
    //call the required action


    // console.log('VALUE:', this.loanProdNametxt.value);
  },

  // getting data from DB, this method is the main method to bring out all of the data from DB
  getAllPickListData() {

    // console.log(simpleLPFields.default.Pages_Select_Element_Ids.AccountingPage);
    let AccountingPage = simpleLPFields.default.Pages_Select_Element_Ids.AccountingPage;
    // console.log(simpleLPFields.default.Pages_Select_Element_Ids.InterestPage);
    let InterestPage = simpleLPFields.default.Pages_Select_Element_Ids.InterestPage;
    // console.log(simpleLPFields.default.Pages_Select_Element_Ids.BasicsPage);
    let BasicsPage = simpleLPFields.default.Pages_Select_Element_Ids.BasicsPage;
    console.log('Billing DATA',lineOfCreditLPFields.default.Pages_Select_Element_Ids.BillingPage);
    let BillingPage = lineOfCreditLPFields.default.Pages_Select_Element_Ids.BillingPage;

    // Get All Exisiting Loan Products From DB
    this.props.getAllExisitingLoanProductsFromDB();

    //Get the HelpText Data from DB

    // get all the id values from 'simpleLPFields' JSON

    let jsonWithAllElementIds = [];

    /*
    "elementId" : "",
    "HelpText" :
    */



    let simpleLPFieldsArray = Object.keys(simpleLPFields.default);

    for(let i=1;i<simpleLPFieldsArray.length;i++) {
      for(let j=0;j<simpleLPFields.default[simpleLPFieldsArray[i]].length;j++) {
        jsonWithAllElementIds.push({
          "elementId" : simpleLPFields.default[simpleLPFieldsArray[i]][j].id,
          "HelpText" : ""
        });

        // if(simpleLPFields.default[simpleLPFieldsArray[i]][j].name) {
        //   jsonWithAllElementIds.push({
        //     "elementId" : simpleLPFields.default[simpleLPFieldsArray[i]][j].name,
        //     "HelpText" : ""
        //   });
        // }
      }
    }

    let lineOfCreditLPFieldsArray = Object.keys(lineOfCreditLPFields.default);

    for(let i=1;i<lineOfCreditLPFieldsArray.length;i++) {
      for(let j=0;j<lineOfCreditLPFields.default[lineOfCreditLPFieldsArray[i]].length;j++) {
        jsonWithAllElementIds.push({
          "elementId" : lineOfCreditLPFields.default[lineOfCreditLPFieldsArray[i]][j].id,
          "HelpText" : ""
        });

        // if(simpleLPFields.default[simpleLPFieldsArray[i]][j].name) {
        //   jsonWithAllElementIds.push({
        //     "elementId" : simpleLPFields.default[simpleLPFieldsArray[i]][j].name,
        //     "HelpText" : ""
        //   });
        // }
      }
    }
    // console.log('FINAL JSON WITH ALL ELEMENT IDS', jsonWithAllElementIds);

    this.props.getHelpTextOfAllElementsFromDB(JSON.stringify(jsonWithAllElementIds));


    // this.props.getDataFromDB(AccountingPage, InterestPage, BasicsPage);

    this.props.getBillingDataFromDB(BillingPage);
    this.props.getBasicsDataFromDB(BasicsPage);
    this.props.getInterestDataFromDB(InterestPage);
    this.props.getAccountingDataFromDB();

    // get fee set URL
    this.props.getFeeSetUrlFromDB();

    //get exisiting fee set data
    this.props.getExisitingFeeSetsFromDB();

    //get exisiting Protect Type
    //getProtectTypeFromDB(elementId, isPickList)
    this.props.getProtectTypeFromDB('loan__Protect_Type__c', true);
  },

  // This is for creating the Bread Crumb that is like showing the status of which pages
  // data is entered or completed
  createBreadCrumbElements(thisVal, elementJSON) {
    // let finalReturnValue = '<ol class="slds-list--horizontal">';
    // for(let i=0; i<elementJSON.default.AllPages.length; i++) {
    //   let navHeading = elementJSON.default.AllPages[i].replace("Elements", "");
    //   finalReturnValue += '<li class=" slds-text-heading--label cursorPointer"><a href="javascript:void(0);" id="'+navHeading+'_Heading" class="slds-button" >'+ navHeading +'</a></li>';
    //   // $(document).on('click', '#' + navHeading + '_Heading', this.testClick);
    // }
    // finalReturnValue+= ' </ol>';
    // // console.log(finalReturnValue);
    // return finalReturnValue;
    let finalReturnValue = "";
    for(let i=0; i<elementJSON.default.AllPages.length; i++) {
      // let navHeading = elementJSON.default.AllPages[i].replace("Elements", "");
      let navHeading =  elementJSON.default.AllPages[i].split('_')[0];
      navHeading = navHeading.replace("Elements", "");
      // finalReturnValue += '<li class=" slds-text-heading--label cursorPointer"><a href="javascript:void(0);" id="'+navHeading+'_Heading" class="slds-button" >'+ navHeading +'</a></li>';
      finalReturnValue += '<button id="' + elementJSON.default.AllPages[i] + '_NavBtn" class="slds-button slds-button--neutral cursorNone noBorder marginZero minWidth12Point5 marginLeftZero borderRadiusZero">' + navHeading + '</button>';
      // $(document).on('click', '#' + navHeading + '_Heading', this.testClick);
    }
    // <button class="slds-button slds-button--neutral">Refresh</button>
    // <button class="slds-button slds-button--neutral">Edit</button>
    // <button class="slds-button slds-button--neutral">Save</button>
    return finalReturnValue;
  },

  // Accepts
  //1. type : type of data to be retrieved from Whole JSON
  //2. wholeDatsOfThisType: the whole data for creating options
  //3. thisVal : this keyword

  getTemplateStructure(type, wholeDatsOfThisType, fieldList, thisVal) {
    // template has all of the json
    // console.log('template', template);

    // check if the json is valid

    // read json - START

    //read Inner HTML Array
    // this.readJson(template.default.Elements, this);

    // let finalHtmlViewWithFields = "<div>";

    let finalHtmlViewWithFields = "";

    // console.log('fieldList', fieldList.default[type]);

    // load LP Fields
    let pickListValues;


    // console.log(fieldList.default);
    // console.log(type);


    if(fieldList.default[type].length > 0) {

      fieldList.default[type].map(function(eachField) {
        let eachElementHtmlContent = thisVal.createTheElement(type, eachField, wholeDatsOfThisType, thisVal);
        // console.log('eachElementHtmlContent', eachElementHtmlContent);
        finalHtmlViewWithFields += eachElementHtmlContent;
      });
    }
    // console.log('finalHtmlViewWithFields',finalHtmlViewWithFields);

    return ( finalHtmlViewWithFields );
  },

  // For creating options for Pick List Elements
  createOptionsForPickList(arrayOfOptions) {
    // pickListValues
    let finalOptionsList = "";

    for(let i=0;i<arrayOfOptions.length;i++) {
      let idVal = i;
      let Value = arrayOfOptions[i];
      if(arrayOfOptions[i].Id) {
        idVal = arrayOfOptions[i].Id;
      }
      if(arrayOfOptions[i].Name) {
        Value = arrayOfOptions[i].Name;
      }
      let individualOption = "<option value='" + idVal + "'>" + Value + "</option>";
      finalOptionsList += individualOption;
    }
    return finalOptionsList;
  },

  // Creating the Elements - which will in deed call
  // CreatingStartingElement - For creating starting tag of the element
  // CreatingEndingElement - For creating ending tag of the element

  createTheElement(type, objectData, wholeDatsOfThisType, thisVal) {
    // console.log('objectData', objectData);

    let buttonString = null;
    let labelForElement = null;
    let htmlStartElement = null;
    let htmlEndElement = null;

    htmlStartElement = thisVal.createStartingElement(objectData, thisVal, type);
    if(objectData.type === "checkbox" || objectData.type === "radio") {
      //because certain elements does not have 'type' attribute at all
    }
    else {
      htmlEndElement = thisVal.createEndingElement(objectData.element);
    }

    if(objectData.label) {
      labelForElement = thisVal.createLabelForConcernedElement(objectData.label, objectData.id, objectData.labelClassName, thisVal, objectData.isRequired);
    }

    let finalElement = "<div class='slds-form-element'>";

    if(labelForElement) {
      finalElement += labelForElement;
    }

    finalElement += "<div class='slds-form-element__control'>";
    finalElement += htmlStartElement;



    // These conditions are for processing individual type of elements
    if(objectData.type === "button") {
      finalElement += objectData.text;
      finalElement += htmlEndElement;
      finalElement += "</div>";
    }
    else if(objectData.type === "checkbox" || objectData.type === "radio") {
      finalElement += "</div>";
      if(objectData.dependentElements) {
        for(let dependentElementCount = 0; dependentElementCount < objectData.dependentElements.length; dependentElementCount++) {
          let dependentElement = "";
          if(objectData.dependentElements[dependentElementCount].id === "loan__Fee_Set__c") {
            dependentElement = thisVal.createTheElement(type, objectData.dependentElements[dependentElementCount], this.state.exisitingfeeSets.existingFeeSets, thisVal);
          }
          if(objectData.dependentElements[dependentElementCount].id === "loan__Protect_Type__c") {
            dependentElement = thisVal.createTheElement(type, objectData.dependentElements[dependentElementCount], this.state.ProtectType.customFieldDetails, thisVal);
          }
          if(objectData.dependentElements[dependentElementCount].id === "createNewFeeSetBtn") {
            dependentElement = thisVal.createTheElement(type, objectData.dependentElements[dependentElementCount], this.state.feeSetUrl.feeSetUrl, thisVal);
          }
          finalElement += dependentElement;
        }
      }
    }
    else {
      if(objectData.element === "select" && wholeDatsOfThisType != undefined && type != "AccountingElements") {

        let resultVal;
        if(objectData.label) {
          resultVal = thisVal.searchArray(wholeDatsOfThisType, objectData.label, 'label');
        }
        else {
          resultVal = wholeDatsOfThisType;
        }

        let optionsForPickList;
        if(resultVal) {
          if(resultVal.picklist) {
            optionsForPickList = thisVal.createOptionsForPickList(resultVal.picklist);
          }
          else {
            optionsForPickList = thisVal.createOptionsForPickList(resultVal);
          }
        }

        finalElement += optionsForPickList;
      }
      else if(objectData.element === "select" && wholeDatsOfThisType != undefined && type === "AccountingElements") {
        finalElement += wholeDatsOfThisType;
      }
      finalElement += htmlEndElement;
      finalElement += "</div>";
    }

    finalElement += "</div>";
    return finalElement;
  },

  // Creating the Starting of the element
  createStartingElement(objectData, thisVal, pageType) {
    const spaceVariable = ' ';
    const quotesVariable = '"';
    let finalStartingElementStructure;
    finalStartingElementStructure = '<' + objectData.element + spaceVariable;
    if(objectData.type) {
      finalStartingElementStructure += 'type=' + quotesVariable + objectData.type + quotesVariable + spaceVariable;
    }
    if(objectData.selected) {
      finalStartingElementStructure += 'checked=' + quotesVariable + 'checked' + quotesVariable + spaceVariable;
    }


    finalStartingElementStructure += 'ref=' + quotesVariable + objectData.id + quotesVariable + spaceVariable;
    finalStartingElementStructure += 'name=' + quotesVariable + pageType + quotesVariable + spaceVariable;
    finalStartingElementStructure += 'id=' + quotesVariable + objectData.id + quotesVariable + spaceVariable;

    //using JQuery for on Change event
    if(objectData.handleChangeEvent == false) {

    }
    else {
      $(document).on('change', '#'+objectData.id, this.onChangeForAllElements);
      $(document).on('click', '#'+objectData.id, this.onClickForAllElements);
      $(document).on('focus', '#'+objectData.id, this.onClickForAllElements);
    }
    if(objectData.handleClickEvent_Separately) {
      $('#'+objectData.id).on('click', function(e) {
        console.log(e);
        if(e.target.id === "createNewFeeSetBtn") {
          //this.state.feeSetUrl
          window.open(thisVal.state.feeSetUrl.feeSetUrl);
          let helpTextFound = this.getElementHelpText("loan__Fee_Set__c", this);
          if(helpTextFound[0].helpText) {
            $('#HelpTextValue').text(helpTextFound[0].helpText);
          }
        }
        else if(e.target.id === "newFeeSetRbn") {
          // This is for handling Fee Set Radio button Display Swap
          $('#createNewFeeSetBtn').removeClass('displayNone');
          $('#loan__Fee_Set__c').addClass('displayNone');
          let helpTextFound = this.getElementHelpText("loan__Fee_Set__c", this);
          if(helpTextFound[0].helpText) {
            $('#HelpTextValue').text(helpTextFound[0].helpText);
          }
        }
        else if(e.target.id === "existingFeeSetRdbtn") {
          $('#loan__Fee_Set__c').removeClass('displayNone');
          $('#createNewFeeSetBtn').addClass('displayNone');
          let helpTextFound = this.getElementHelpText("loan__Fee_Set__c", this);
          if(helpTextFound[0].helpText) {
            $('#HelpTextValue').text(helpTextFound[0].helpText);
          }
        }
      }.bind(thisVal));
    }

    // This is for handling Fee Set Radio button Display Swap
    // if(e.target.id === "existingFeeSetRdbtn") {
    //   $('#existingFeeSetSelect').removeClass('displayNone');
    //   $('#createNewFeeSetBtn').addClass('displayNone');
    // }
    // else if(e.target.id === "loan__Fee_Set__c") {
    //   $('#createNewFeeSetBtn').removeClass('displayNone');
    //   $('#existingFeeSetSelect').addClass('displayNone');
    // }


    // onChangeForAllElements


    //adding classNames
    if(objectData.elementClassName) {
      finalStartingElementStructure += thisVal.loopThroughClassNamesAndAddtoString(objectData.elementClassName);
    }

    if(objectData.type === "checkbox" || objectData.type === "radio") {
      finalStartingElementStructure += '/>';
    }
    else {
      finalStartingElementStructure += '>';
    }

    return finalStartingElementStructure;
  },

  // Creating Ending of the element
  // No hard code Values
  createEndingElement(type) {

    let finalEndingElementStructure;
    finalEndingElementStructure = '</' + type + '>';
    return finalEndingElementStructure;
  },

  // Creating Label for the concerned Element
  // No hard code Values
  createLabelForConcernedElement(labelValue, labelForId, listOfClasses, thisVal, isRequired) {
    let labelElement;
    //<label for="female">Female</label>
    labelElement = '<label for="' + labelForId + '"';
    if(listOfClasses) {
      labelElement += thisVal.loopThroughClassNamesAndAddtoString(listOfClasses);
    }
    labelElement += '>';
    //listOfClasses
    let isRequiredSpan = "";
    if(isRequired) {
      isRequiredSpan = "<span style='color: red'>*</span>";
    }
    labelElement += isRequiredSpan + labelValue;
    labelElement += '</label>';
    return labelElement;
  },

  // Elements and their concerned Labels some times have many class names,
  // this method will loop through those classNames and add them to a string
  // which will add back to the element start tag

  // No hard code Values
  loopThroughClassNamesAndAddtoString(listOfClassNames) {
    let finalValueToReturn = 'class="';
    listOfClassNames.map(function(individualClassName) {
      finalValueToReturn +=individualClassName + ' ';
    });
    finalValueToReturn += '"';
    return finalValueToReturn;
  },

  // No hard code Values
  searchArray(array, key, prop) {
    // console.log('$$$$$$$$$$$');
    // console.log(array);
    // console.log(key);
    // console.log(prop);
    // console.log('$$$$$$$$$$$');
    if(array != undefined) {
      prop = (typeof prop === 'undefined') ? 'name' : prop;

      for (var i=0; i < array.length; i++) {
        // console.log('VAL with PROP',array[i][prop]);
        // console.log('key',key);
        if (array[i][prop] === key) {
          // console.log('FINAL RESULT',array[i]);
          // if(key=='Accural Start Basis') {
          // console.log('@@@@@@@@',array[i]);
          // }

          // console.log('*******');
          // console.log(array[i]);
          // console.log('*******');
          return array[i];
        }
      }
    }
  }

});

export default lendingProduct;
