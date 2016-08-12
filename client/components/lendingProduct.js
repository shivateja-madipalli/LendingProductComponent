import React from 'react';
let $ = require ('jquery');
let Select = require('react-select');

// let template = require('../data/TemplateStructure');

let LPFields = require('../data/LendingProductPageFields');

//importing commonStyles
// let commonCss = require('../styles/commonCss.js');

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
    console.log('getInitialState');

    // console.log('the Keys:', Object.keys(LPFields.default));
    let LPFieldsArray = Object.keys(LPFields.default);
    let completedData = {
      completed: [],
      allData: {

      }
    };


    LPFieldsArray.map(function(individualPage) {
      completedData.completed.push (
        {
          'FieldName' : individualPage,
          'value' : false
        }
      );
    });
    return {
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
      HelpTextData: {}
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
    // console.log('componentWillReceiveProps', NextProps);

    if(NextProps.existinglendingProducts.HelpTextData) {
      NextProps.existinglendingProducts.HelpTextData.then(function(data) {
        console.log('HelpText DATA FROM CMP PROPS', data);
        this.setState({
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
          HelpTextData : data
        })
      }.bind(this));
    }

    if(NextProps.existinglendingProducts.basicData) {
      NextProps.existinglendingProducts.basicData.then(function(data) {
        console.log('BASIC DATA FROM CMP PROPS', data);
        this.setState({
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
          HelpTextData: this.state.HelpTextData
        })
      }.bind(this));
    }

    if(NextProps.existinglendingProducts.interestData) {
      NextProps.existinglendingProducts.interestData.then(function(data) {
        // console.log('INTEREST DATA FROM CMP PROPS', data);
        this.setState({
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
          HelpTextData: this.state.HelpTextData
        })
      }.bind(this));
    }

    if(NextProps.existinglendingProducts.accountingData) {
      NextProps.existinglendingProducts.accountingData.then(function(data) {
        // console.log('ACCOUNTING DATA FROM CMP PROPS', data);
        this.setState({
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
          HelpTextData: this.state.HelpTextData
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
          HelpTextData: this.state.HelpTextData
        })
      }.bind(this));
    }
    //feeSetUrl
    if(NextProps.existinglendingProducts.feeSetUrl) {
      NextProps.existinglendingProducts.feeSetUrl.then(function(data) {
        console.log('FEE SET URL FROM CMP PROPS', data);
        this.setState({
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
          HelpTextData: this.state.HelpTextData
        })
      }.bind(this));
    }

    //Exisiting feeSet Data
    if(NextProps.existinglendingProducts.exisitingfeeSets) {
      NextProps.existinglendingProducts.exisitingfeeSets.then(function(data) {
        console.log('Exisiting FEE SET URL FROM CMP PROPS', data);
        this.setState({
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
          HelpTextData: this.state.HelpTextData
        })
      }.bind(this));
    }

  },

  componentWillUnmount() {
    console.log('componentWillUnmount');
    alert('componentWillUnmount');
  },

  componentDidUpdate() {
    // Display True The First Div
    console.log('componentDidUpdate');
    // div show
    // LPFields.default[thisVal.state.currentPage]
    // $('#' + LPFields.default['AllPages'][0] + '_MainDiv').show();
    $('#' + LPFields.default.AllPages[0] + '_MainDiv').addClass('displayBlock').removeClass('displayNone');
    $('#' + LPFields.default.AllPages[0] + '_NavBtn').addClass('backGroundBlueColor');
    $('#' + LPFields.default.AllPages[0] + '_NavBtn').addClass('colorWhite');
    // $('#navigationNextBtn').attr('disabled', true);
    // $('#saveLendingProductBtn').attr('disabled', true);
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


      // retrieve ProfileElements Elements
      let breadCrumbNavContent = this.createBreadCrumbElements(this);
      let profileElementsHtmlContent = this.getTemplateStructure('ProfileElements', this.state.basicData.basicsData, this);
      let feesElementsHtmlContent = this.getTemplateStructure('FeesElements', undefined, this);
      let termElementsHtmlContent = this.getTemplateStructure('TermElements',undefined, this);
      let interestElementsHtmlContent = this.getTemplateStructure('InterestElements', this.state.interestData.interestData, this);
      let protectElementsHtmlContent = this.getTemplateStructure('ProtectElements', undefined, this);
      let fundingElementsHtmlContent = this.getTemplateStructure('FundingElements', undefined, this);
      let tolerenceElementsHtmlContent = this.getTemplateStructure('TolerenceElements', undefined, this);
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

      let accountingElementsHtmlContent = this.getTemplateStructure('AccountingElements', finalAccountingElementsOptionsList, this);

      /*
      <li dangerouslySetInnerHTML={{__html: profileElementsHtmlContent}}>
      'dangerouslySetInnerHTML' is a type where we can insert HTML DATA on need.
      */

      return (
        <div id="LendingProductCmpMainDiv" className="">

        <div className="width70 floatLeft ">
        <div id="leftDiv" className="maxWidth60rem">
        <div id="leftDiv_TOP" className="slds-modal__header">
        <p className="slds-text-heading--medium slds-truncate" title="Exisiting Lending Product">Creating a new Lending Product</p>
        </div>
        <div id="leftDiv_BOTTOM" className="">

        <div id="creatingNewLendingProduct" className="">
        <div dangerouslySetInnerHTML={{__html: breadCrumbNavContent}}>

        </div>

        <div id='ProfileElements_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: profileElementsHtmlContent}}>
        </div>
        <div id='FeesElements_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: feesElementsHtmlContent}}>
        </div>
        <div id='TermElements_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone"  dangerouslySetInnerHTML={{__html: termElementsHtmlContent}}>
        </div>
        <div id='InterestElements_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: interestElementsHtmlContent}}>
        </div>
        <div  id='ProtectElements_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: protectElementsHtmlContent}}>
        </div>
        <div id='FundingElements_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone"  dangerouslySetInnerHTML={{__html: fundingElementsHtmlContent}}>
        </div>
        <div id='TolerenceElements_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: tolerenceElementsHtmlContent}}>
        </div>
        <div id='AccountingElements_MainDiv' className="slds-form--horizontal marginTop2Percent displayNone" dangerouslySetInnerHTML={{__html: accountingElementsHtmlContent}}>
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
        <div id="rightDiv" className="slds-modal--form maxWidth40rem floatRight width25">
        <div id="rightDiv_TOP" className="slds-modal__header">
        <p className="slds-text-heading--medium slds-truncate" title="Exisiting Lending Product">Help Text</p>
        </div>
        <div id="HelpTextValue">
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

  // onChange event
  onChangeForAllElements(e) {
    // have to check whether the concerned page's isRequired values are filled or not.
    // store each and every element's value in a json obj and set state

    // todo: validation on elements

    //create json

    // console.log(e.target.name);
    let jsonVal = this.state.allEnterData;

    // console.log(jsonVal);

    // !arr[i].trim()
    if(e.target.value.trim()) {
      //check for validations
      if(e.target.id !== "existingFeeSetRdbtn" && e.target.id !== "loan__Fee_Set__c") {
        jsonVal.allData[e.target.id] = e.target.value;
        $('#divForErrorMessages').addClass('displayNone');
        $('#showErrorMessage').text('');
      }
    }
    else {

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
      basicData : this.state.basicData,
      interestData : this.state.interestData,
      accountingData : this.state.accountingData,
      allEnterData : jsonVal,
      isLoading: false,
      reRenderElements: false,
      currentPage: e.target.name,
      confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
      feeSetUrl: this.state.feeSetUrl
    })
    // $('#navigationNextBtn').removeAttr('disabled');
    // }
    // console.log(this.state.allEnterData);
  },

  onClickForFeeSet(e) {
    // console.log('FeeSet Clicked');
    if(e.target.id === "createNewFeeSetBtn")
    {

      if(this.state.feeSetUrl){
        // console.log(this.state.feeSetUrl.feeSetUrl);
        // window.open(this.state.feeSetUrl.feeSetUrl,'popUpWindow','height=60%,width=80%,left=10,top=10,,scrollbars=yes,menubar=no');
        window.open(this.state.feeSetUrl.feeSetUrl);
        return false;
      }
    }
    else if(e.target.id === "existingFeeSetSelect")
    {
      // setState with the data

      // if(jsonVal.allData.hasOwnProperty(e.target.name)) {
      //   delete jsonVal.allData[e.target.id];
      //   console.log(jsonVal);
      // }
      let jsonVal = this.state.allEnterData;
      jsonVal.allData[e.target.name] = e.target.value;
      // console.log(e.target);
      this.setState({
        basicData : this.state.basicData,
        interestData : this.state.interestData,
        accountingData : this.state.accountingData,
        allEnterData : jsonVal,
        isLoading: false,
        reRenderElements: false,
        currentPage: this.state.currentPage,
        confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
        feeSetUrl: this.state.feeSetUrl
      })
    }
  },

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

    if(e.target.id === "existingFeeSetRdbtn") {
      $('#existingFeeSetSelect').removeClass('displayNone');
      $('#createNewFeeSetBtn').addClass('displayNone');
    }
    else if(e.target.id === "loan__Fee_Set__c") {
      $('#createNewFeeSetBtn').removeClass('displayNone');
      $('#existingFeeSetSelect').addClass('displayNone');
    }
  },

  getElementHelpText(elementId, thisVal) {
    let data = thisVal.state.HelpTextData.helpTextWithElementId;
    return data.filter(
        function(data){
          return data.elementId === elementId;
        }
    );
  },

  ///a2Y61000000YgWCEA0

  /*
  here I am checking whether all IsRequired values are fullfilled or not
  and then move the execution to the next page
  */

  // Next Button
  navigateBetweenPages(e, thisVal) {
    e.preventDefault();
    if(thisVal.state.currentPage !== "") {

      //clearing error messages if any
      $('#divForErrorMessages').addClass('displayNone');
      $('#showErrorMessage').text('');

      let checkWhetherAllIsRequiredAreAnswered = false;
      let checkWhetherIsRequiredIsInvoked = false;
      let arrayToCheckWhetherAreThereAnyisRequired = [];
      // console.log(thisVal.state.currentPage);
      for(let i=0; i < LPFields.default[thisVal.state.currentPage].length; i++) {
        let individualElement = LPFields.default[thisVal.state.currentPage][i];
        if(individualElement.isRequired) {
          // arrayToCheckWhetherAreThereAnyisRequired.push(true);
          if(thisVal.state.allEnterData.allData.hasOwnProperty(individualElement.id)) {
            checkWhetherAllIsRequiredAreAnswered = true;
            checkWhetherIsRequiredIsInvoked = true;
          }
          else {
            checkWhetherAllIsRequiredAreAnswered = false;
            arrayToCheckWhetherAreThereAnyisRequired = [];
            break;
          }
        }
        else {
          //for elements which does not have isRequired at all
          if(!checkWhetherIsRequiredIsInvoked) {
            arrayToCheckWhetherAreThereAnyisRequired.push(false);
          }
        }
      }

      if((arrayToCheckWhetherAreThereAnyisRequired.length !== 0 && arrayToCheckWhetherAreThereAnyisRequired.indexOf(false) !== -1)|| checkWhetherAllIsRequiredAreAnswered) {
        // set State those who does not have any isRequired at all
        //move to next div

        let checkForAnyValidationErrors = false;

        //check for validations
        // LPFields.default[thisVal.state.currentPage].map(function(individualElementOfThisPage) {

        loop1:
        for(let i=0; i<LPFields.default[thisVal.state.currentPage].length; i++) {
          let individualElementOfThisPage = LPFields.default[thisVal.state.currentPage][i];
          if(individualElementOfThisPage.validations !== undefined) {
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
        }
        // });

        if(!checkForAnyValidationErrors) {
          $('#divForErrorMessages').addClass('displayNone');
          $('#showErrorMessage').text(null);
          // $('#' + individualElementOfThisPage.id).removeClass('errorElement');
          let currentPageIndex = LPFields.default.AllPages.indexOf(thisVal.state.currentPage);
          if(currentPageIndex === 0) {
            $('#navigationBackBtn').removeClass('displayNone');
          }

          if(currentPageIndex + 1 === LPFields.default.AllPages.length - 1) {
            $('#navigationNextBtn').addClass('displayNone');
          }
          $('#' + LPFields.default.AllPages[currentPageIndex + 1] + '_MainDiv').addClass('displayBlock').removeClass('displayNone');
          $('#' + LPFields.default.AllPages[currentPageIndex] + '_MainDiv').addClass('displayNone').removeClass('displayBlock');

          //set state
          // console.log('INTEREST DATA FROM CMP PROPS', data);
          thisVal.setState({
            basicData : this.state.basicData,
            interestData : this.state.interestData,
            accountingData : this.state.accountingData,
            allEnterData : this.state.allEnterData,
            isLoading: false,
            reRenderElements: false,
            currentPage: LPFields.default.AllPages[currentPageIndex + 1]
          })

          // this is previous
          $('#' + LPFields.default.AllPages[currentPageIndex] + '_NavBtn').removeClass('backGroundBlueColor');
          $('#' + LPFields.default.AllPages[currentPageIndex] + '_NavBtn').addClass('backGroundGreenColor');
          $('#' + LPFields.default.AllPages[currentPageIndex] + '_NavBtn').addClass('colorWhite');

          //this is current
          $('#' + LPFields.default.AllPages[currentPageIndex + 1] + '_NavBtn').addClass('backGroundBlueColor');
          $('#' + LPFields.default.AllPages[currentPageIndex + 1] + '_NavBtn').addClass('colorWhite');
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
  // let moveTheDiv = true;
  // // console.log(this.state.allEnterData.completed);
  // // moveTheDiv = this.state.allEnterData.completed.map(function(individualData) {
  // for(let i=0;i<this.state.allEnterData.completed.length;i++) {
  //   let individualData = this.state.allEnterData.completed[i];
  //   // console.log('individualData', individualData);
  //   if(!individualData.value) {
  //
  //     // check if the elements with 'isRequired' under indi_Data are written are not
  //     // console.log(LPFields.default[individualData.FieldName]);
  //
  //     let arrayOfTrueFalse = [];
  //     let arrayOfIsRequiredFalse = [];
  //
  //     LPFields.default[individualData.FieldName].map(function(fieldOfIndividualObject) {
  //       // console.log('fieldOfIndividualObject', fieldOfIndividualObject);
  //       if(fieldOfIndividualObject.isRequired) {
  //           if(thisVal.state.allEnterData.allData.hasOwnProperty(fieldOfIndividualObject.id)) {
  //             // set state with 'indi_Data' = true
  //             let jsonVal = thisVal.state.allEnterData;
  //             // console.log(jsonVal.completed);
  //
  //               jsonVal.completed.map(function(indi_jsonVal) {
  //                 if(indi_jsonVal.FieldName === individualData.FieldName) {
  //                   indi_jsonVal.value = true;
  //                   // return jsonVal;
  //                 }
  //               });
  //
  //               // console.log(jsonVal);
  //
  //               thisVal.setState({
  //                 basicData : thisVal.state.basicData,
  //                 interestData : thisVal.state.interestData,
  //                 accountingData : thisVal.state.accountingData,
  //                 allEnterData : jsonVal,
  //                 isLoading: false,
  //                 reRenderElements: false
  //               })
  //
  //               // close the current div and open a new div
  //               arrayOfTrueFalse.push(true);
  //           }
  //           else {
  //             // Show error
  //             // thisVal.state.allEnterData.completed[individualData] = false;
  //             let jsonVal = thisVal.state.allEnterData;
  //             jsonVal.completed.map(function(indi_jsonVal) {
  //               if(indi_jsonVal.FieldName === individualData.FieldName) {
  //                 indi_jsonVal.value = false;
  //                 // return jsonVal;
  //               }
  //             });
  //
  //             // console.log(jsonVal);
  //
  //             thisVal.setState({
  //               basicData : thisVal.state.basicData,
  //               interestData : thisVal.state.interestData,
  //               accountingData : thisVal.state.accountingData,
  //               allEnterData : jsonVal,
  //               isLoading: false,
  //               reRenderElements: false
  //             })
  //             console.log('RIGHT RIGHT RIGHT RIGHT');
  //             arrayOfTrueFalse.push(false);
  //           }
  //         arrayOfIsRequiredFalse.push(false);
  //       }
  //       else {
  //         arrayOfIsRequiredFalse.push(true);
  //       }
  //     });
  //     if(arrayOfIsRequiredFalse.length !== 0 && arrayOfIsRequiredFalse.indexOf(false)) {
  //
  //     }
  //     if(arrayOfTrueFalse.length !== 0 && arrayOfTrueFalse.indexOf(false) === -1) {
  //       console.log('WHAT THE FUCK FUCK FUCK FUCK');
  //       // return true;
  //       break;
  //     }
  //     else {
  //       // return false;
  //       break;
  //     }
  //   }
  // // });
  // }
  //
  // if(moveTheDiv) {
  //     //move div
  //     console.log('MOVE MOVE MOVE');
  // }
  // else {
  //   //show error on
  //   console.log('SHOW ERROR ERROR ERROR');
  // }
  // console.log('thisVal.state.allEnterData.completed', thisVal.state.allEnterData.completed);

  // Back Button
  navigateBetweenPagesGoBack(e, thisVal) {
    $('#divForErrorMessages').addClass('displayNone');
    $('#showErrorMessage').text(null);
    let currentPageIndex = LPFields.default.AllPages.indexOf(thisVal.state.currentPage);
    if(currentPageIndex === 1) {
      $('#navigationBackBtn').addClass('displayNone');
    }
    if(currentPageIndex < LPFields.default.AllPages.length) {
      $('#navigationNextBtn').removeClass('displayNone');
    }
    $('#' + LPFields.default.AllPages[currentPageIndex - 1] + '_MainDiv').addClass('displayBlock').removeClass('displayNone');
    $('#' + LPFields.default.AllPages[currentPageIndex] + '_MainDiv').addClass('displayNone').removeClass('displayBlock');

    thisVal.setState({
      basicData : this.state.basicData,
      interestData : this.state.interestData,
      accountingData : this.state.accountingData,
      allEnterData : this.state.allEnterData,
      isLoading: false,
      reRenderElements: false,
      currentPage: LPFields.default.AllPages[currentPageIndex - 1],
      confirmationFromSFAfterInsertingLoan : this.state.confirmationFromSFAfterInsertingLoan,
      feeSetUrl: this.state.feeSetUrl
    })

    // this is earlier
    $('#' + LPFields.default.AllPages[currentPageIndex - 1] + '_NavBtn').removeClass('backGroundGreenColor');
    $('#' + LPFields.default.AllPages[currentPageIndex - 1] + '_NavBtn').addClass('backGroundBlueColor');
    $('#' + LPFields.default.AllPages[currentPageIndex - 1] + '_NavBtn').addClass('colorWhite');

    // this is current page
    $('#' + LPFields.default.AllPages[currentPageIndex] + '_NavBtn').removeClass('backGroundBlueColor');
    $('#' + LPFields.default.AllPages[currentPageIndex] + '_NavBtn').removeClass('colorWhite');
  },

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

    this.props.submitForm(this.state.allEnterData.allData);
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
      'loan__Accrual_Start_Basis__c',
      'loan__Payment_Application_Mode__c'

    ]


    //Get the HelpText Data from DB

    // get all the id values from 'LPFields' JSON

    let jsonWithAllElementIds = [];

    /*
      "elementId" : "",
      "HelpText" :
    */



    let LPFieldsArray = Object.keys(LPFields.default);

    for(let i=1;i<LPFieldsArray.length;i++) {
      for(let j=0;j<LPFields.default[LPFieldsArray[i]].length;j++) {
        // jsonWithAllElementIds[LPFields.default[LPFieldsArray[i]][j].id] = "";
        jsonWithAllElementIds.push({
          "elementId" : LPFields.default[LPFieldsArray[i]][j].id,
          "HelpText" : ""
        });
      }
    }
    // console.log('FINAL JSON WITH ALL ELEMENT IDS', jsonWithAllElementIds);

    this.props.getHelpTextOfAllElementsFromDB(JSON.stringify(jsonWithAllElementIds));


    //These three are the working things

    // this.props.getDataFromDB(AccountingPage, InterestPage, BasicsPage);

    this.props.getBasicsDataFromDB(BasicsPage);
    this.props.getInterestDataFromDB(InterestPage);
    this.props.getAccountingDataFromDB();

    // get fee set URL
    this.props.getFeeSetUrlFromDB();

    //get exisiting fee set data
    this.props.getExisitingFeeSetsFromDB();
  },

  // processPickListValues(individualPageData, htmlElement, dataLabelName, selfVal) {
  //   //Billing Method
  //   let optionsForThisSelect = {};
  //   individualPageData.basicsData.map(function(singleTabData) {
  //   if(singleTabData.label === dataLabelName) {
  //       optionsForThisSelect = selfVal.creatOptions(singleTabData.picklist, selfVal);
  //     }
  //   });
  //
  //   //creating good options
  //
  //   return (
  //     <Select
  //       name="form-field-name"
  //       value="one"
  //       options={optionsForThisSelect}
  //     />
  //   )
  // },

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


  createBreadCrumbElements(thisVal) {
    // let finalReturnValue = '<ol class="slds-list--horizontal">';
    // for(let i=0; i<LPFields.default.AllPages.length; i++) {
    //   let navHeading = LPFields.default.AllPages[i].replace("Elements", "");
    //   finalReturnValue += '<li class=" slds-text-heading--label cursorPointer"><a href="javascript:void(0);" id="'+navHeading+'_Heading" class="slds-button" >'+ navHeading +'</a></li>';
    //   // $(document).on('click', '#' + navHeading + '_Heading', this.testClick);
    // }
    // finalReturnValue+= ' </ol>';
    // // console.log(finalReturnValue);
    // return finalReturnValue;
    let finalReturnValue = "";
    for(let i=0; i<LPFields.default.AllPages.length; i++) {
      let navHeading = LPFields.default.AllPages[i].replace("Elements", "");
      // finalReturnValue += '<li class=" slds-text-heading--label cursorPointer"><a href="javascript:void(0);" id="'+navHeading+'_Heading" class="slds-button" >'+ navHeading +'</a></li>';
      finalReturnValue += '<button id="' + LPFields.default.AllPages[i] + '_NavBtn" class="slds-button slds-button--neutral cursorNone noBorder marginZero minWidth12Point5 marginLeftZero borderRadiusZero">' + navHeading + '</button>';
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

  getTemplateStructure(type, wholeDatsOfThisType, thisVal) {
    // template has all of the json
    // console.log('template', template);

    // check if the json is valid

    // read json - START

    //read Inner HTML Array
    // this.readJson(template.default.Elements, this);

    // let finalHtmlViewWithFields = "<div>";

    let finalHtmlViewWithFields = "";

    // console.log('LPFields', LPFields.default[type]);

    // load LP Fields
    let pickListValues;

    if(LPFields.default[type].length > 0) {

      LPFields.default[type].map(function(eachField) {
        let eachElementHtmlContent = thisVal.createTheElement(type, eachField, wholeDatsOfThisType, thisVal);
        // console.log('eachElementHtmlContent', eachElementHtmlContent);
        finalHtmlViewWithFields += eachElementHtmlContent;
      });
    }
    // finalHtmlViewWithFields += "</div>";
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

  createTheElement(type, objectData, wholeDatsOfThisType, thisVal) {
    // console.log('objectData', objectData);

    let buttonString = null;
    let labelForElement = null;
    let htmlStartElement = null;
    let htmlEndElement = null;

    htmlStartElement = thisVal.createStartingElement(objectData, thisVal, type);
    if(objectData.type === "checkbox" || objectData.type === "radio") {
    }
    else {
      htmlEndElement = thisVal.createEndingElement(objectData.element);



    }

    labelForElement = thisVal.createLabelForConcernedElement(objectData.label, objectData.id, objectData.labelClassName, thisVal, objectData.isRequired);

    let finalElement = "<div class='slds-form-element'>";


    if(objectData.type === "checkbox" || objectData.type === "radio") {
      // console.log(objectData.type);
      finalElement += "<div class='slds-form-element__control'>";
      finalElement += htmlStartElement;
      // finalElement += htmlEndElement;
      finalElement += "</div>";
      finalElement += labelForElement;
      // console.log(objectData.id);
      let createNewFeeSetBtn = "";
      let selectForExisitingFeeSetData = "";
      if(objectData.id === "loan__Fee_Set__c") {
        //creating button
        //this is temp solution
        createNewFeeSetBtn = "<button id='createNewFeeSetBtn' class='slds-button--neutral slds-button floatLeft marginTop2Percent' name='feeSetUrl' type='button'>Click to Create new Fee Set</button>";
        // console.log(createNewFeeSetBtn);
        $(document).on('click', '#createNewFeeSetBtn', this.onClickForFeeSet);
        finalElement += createNewFeeSetBtn;
      }
      else if(objectData.id == "existingFeeSetRdbtn") {
        //create drop down list with exisiting options
        // let selectForExisitingFeeSetData = "<div>";

        selectForExisitingFeeSetData = '<select id="existingFeeSetSelect" name="loan__Fee_Set__c" class="clearBoth displayNone slds-select Width15">';

        //access data from state
        if(this.state.exisitingfeeSets.existingFeeSets) {
          // console.log(this.state.exisitingfeeSets.existingFeeSets);



          selectForExisitingFeeSetData += thisVal.createOptionsForPickList(this.state.exisitingfeeSets.existingFeeSets);
        }
        selectForExisitingFeeSetData +='</select>';
        $(document).on('click', '#existingFeeSetSelect', this.onClickForFeeSet);
        // selectForExisitingFeeSetData +='</div>';

        // console.log(selectForExisitingFeeSetData);
        finalElement += selectForExisitingFeeSetData;
      }

      finalElement += "</div>";
    }
    else {
      // if(objectData.type === 'button') {
      //   finalElement += "<div class='slds-form-element__control'>";
      //   finalElement += buttonString;
      // }
      // else {
      finalElement += labelForElement;
      finalElement += "<div class='slds-form-element__control'>";
      finalElement += htmlStartElement;
      // }

      if(objectData.element === "select" && wholeDatsOfThisType != undefined && type != "AccountingElements") {
        let resultVal = thisVal.searchArray(wholeDatsOfThisType, objectData.label, 'label');

        // if(objectData.id == "loan__Accrual_Start_Basis__c") {
        //   console.log('#######################');
        //   console.log(objectData);
        //   console.log(wholeDatsOfThisType);
        //   console.log('#######################');
        // }

        // pickListValues = resultVal.picklist;
        let optionsForPickList;
        if(resultVal) {



          optionsForPickList = thisVal.createOptionsForPickList(resultVal.picklist);
        }
        finalElement += optionsForPickList;
      }
      else if(objectData.element === "select" && wholeDatsOfThisType != undefined && type === "AccountingElements") {
        finalElement += wholeDatsOfThisType;
      }
      // if(objectData.type !== 'button') {
      finalElement += htmlEndElement;
      // }
      finalElement += "</div>";
      finalElement += "</div>";
    }
    // return (labelForElement + htmlStartElement + htmlEndElement);
    // console.log(finalElement);
    return finalElement;
  },

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
    // if(objectData.dependentElements) {
    //   objectData.dependentElements.map(function(individualDependentElement) {
    //     //get data from state
    //     if(thisVal.state[individualDependentElement.name]) {
    //       let data = thisVal.state[individualDependentElement.name].feeSetUrl;
    //       finalStartingElementStructure += thisVal.createTheElement(individualDependentElement.type, individualDependentElement, data, thisVal);
    //     }
    //     //
    //   });
    // }
    finalStartingElementStructure += 'ref=' + quotesVariable + objectData.id + quotesVariable + spaceVariable;
    finalStartingElementStructure += 'name=' + quotesVariable + pageType + quotesVariable + spaceVariable;
    finalStartingElementStructure += 'id=' + quotesVariable + objectData.id + quotesVariable + spaceVariable;

    // onChange={this.handleChange.bind(this, 'input1')}

    // finalStartingElementStructure += 'onChange=' + quotesVariable  + this.onChangeForAllElements +  quotesVariable + spaceVariable;

    // finalStartingElementStructure += 'onChange=' + quotesVariable  + this.props.testActiontoTestRetrievingDataFromSalesForce() +  quotesVariable + spaceVariable;

    //using JQuery for on Change event
    $(document).on('change', '#'+objectData.id, this.onChangeForAllElements);
    $(document).on('click', '#'+objectData.id, this.onClickForAllElements);


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

  createEndingElement(type) {

    let finalEndingElementStructure;
    finalEndingElementStructure = '</' + type + '>';
    return finalEndingElementStructure;
  },

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

  loopThroughClassNamesAndAddtoString(listOfClassNames) {
    let finalValueToReturn = 'class="';
    listOfClassNames.map(function(individualClassName) {
      finalValueToReturn +=individualClassName + ' ';
    });
    finalValueToReturn += '"';
    return finalValueToReturn;
  },

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
          return array[i];
        }
      }
    }
  }

});

export default lendingProduct;
