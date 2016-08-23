import React, { Component } from 'react';
import LendingProductContainer from '../containers/LendingProductContainer.js';
import BatchJobsContainer from '../containers/BatchJobsContainer.js';
// import CMWContainer from '../containers/CMWContainer.js';

// importing batch job data
let batchJobData = require('../data/BatchJobData');

// importing lending product json data
let simpleLPFields = require('../data/SimpleLendingProductFields');

let lineOfCreditLPFields = require('../data/LineOfCreditLendingProductFields');


// importing helpTextTools
import {getJSONwithIdsForHelpText} from '../toolsBox/helpTextTools';

// import jquery
let $ = require ('jquery');

const MainPage = React.createClass ({

  getInitialState() {
    return {
      "helpTextDataofAllElements" : [],
      "isLoading" : true,
      "reRenderElements" : false
    }
  },

  render() {
    let that = this;
    if(!this.state.isLoading && this.state.reRenderElements) {
      return (
        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div id="heading" className="slds-col--padded slds-size--1-of-1">
            <div className="slds-grid">
              <div className="slds-col slds-has-flexi-truncate">
                <div className="slds-media slds-media--center slds-no-space slds-grow">
                  <div className="slds-media__figure">
                    <img className="maxHeight50 width50" alt="CL_ICON" src="/resource/CL_Icon" />
                  </div>
                </div>
              </div>
              <div className="slds-col slds-no-flex slds-grid slds-align-bottom">
                <button className="slds-button slds-button--neutral slds-not-selected" aria-live="assertive">
                  <a href="https://loaninstaller-dev-ed.my.salesforce.com" className="removeTextDecorationImportant" id="back_to_salesforce_container">
                    Back to CL Loan
                  </a>
                </button>
              </div>
            </div>
            <div className="slds-container slds-type-focus slds-no-space removeTextDecorationImportant cursorNone">
              <h1 className="slds-text-heading--large slds-truncate colorLochmaraImportant" title="Config Manager Wizard">CONFIG MANAGER WIZARD</h1>
            </div>
          </div>

          <div id="leftNavBar" className="slds-col--padded width15 floatLeft marginTop2Percent">
            <div id="rightDiv_TOP" className="slds-modal__header backGroundLochmaraColor colorWhite">
              <p className="slds-text-heading--medium slds-truncate" title="Step">STEPS</p>
            </div>
            <div aria-hidden="false" role="dialog" class="slds-action-overflow--touch">
              <div class="slds-action-overflow--touch__container">
                <div class="slds-action-overflow--touch__content">
                  <div class="slds-action-overflow--touch__body">
                    <ul role="menu" class="slds-has-block-links--space slds-has-dividers--bottom">
                      <li className="slds-item marginZero">
                          <a onClick={e => this.onClickNavBtn(e, this)} name="LendingProductContainerDiv" className="removeTextDecorationImportant slds-button slds-button--neutral width100" id="back_to_salesforce_container">
                            Lending Product
                          </a>
                      </li>
                      <li className="slds-item marginZero">
                          <a onClick={e => this.onClickNavBtn(e, this)} name="BatchJobsContainerDiv" className="removeTextDecorationImportant slds-button slds-button--neutral width100" id="back_to_salesforce_container">
                            Batch Job
                          </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="middleContent" className="slds-col--padded width65 floatLeft marginTop2Percent">
            <div id="BatchJobsContainerDiv" className="displayNone">
              <BatchJobsContainer batchData={batchJobData} isLoading={true} callParentToPassElementId = {that.getRequiredHelpTextData}/>
            </div>
            <div id="LendingProductContainerDiv">
              <LendingProductContainer callParentToPassElementId = {that.getRequiredHelpTextData}/>
            </div>
          </div>

          <div id="rightHelpText" className="slds-col--padded width20 floatLeft marginTop2Percent">
            <div>
              <div >
                <div  id="simple_loan_product_help_content">
                  <div className="">
                    <div id="rightDiv_TOP" className="slds-modal__header backGroundLochmaraColor colorWhite">
                      <p className="slds-text-heading--medium slds-truncate" title="Help Text">HELP TEXT</p>
                    </div>
                    <div className="slds-card">
                      <div className="slds-card__body" id="simple_loan_product_help_content">
                        <div id="HelpTextValue">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <p>Loading!</p>
        </div>
      )
    }
  },

  componentDidMount() {
    console.log('componentDidMount in MAIN PAGE');
    // call the required method from here
    // let jsonWithElementIds = JSON.stringify(getJSONwithIdsForHelpText(batchJobData.default));
    // this.props.getHelpTextFromDB(jsonWithElementIds);

    this.props.getHelpTextOfAllElementsFromDB(this.addElementIdsToRetrieveHelpTextFromDB());
  },

  addElementIdsToRetrieveHelpTextFromDB() {

    let jsonWithAllElementIds = [];

    jsonWithAllElementIds = getJSONwithIdsForHelpText(batchJobData.default);

    let simpleLPFieldsArray = Object.keys(simpleLPFields.default);



    for(let i=1;i<simpleLPFieldsArray.length;i++) {
      for(let j=0;j<simpleLPFields.default[simpleLPFieldsArray[i]].length;j++) {
        jsonWithAllElementIds.push({
          "elementId" : simpleLPFields.default[simpleLPFieldsArray[i]][j].id,
          "HelpText" : ""
        });
      }
    }

    let lineOfCreditLPFieldsArray = Object.keys(lineOfCreditLPFields.default);

    for(let i=1;i<lineOfCreditLPFieldsArray.length;i++) {
      for(let j=0;j<lineOfCreditLPFields.default[lineOfCreditLPFieldsArray[i]].length;j++) {
        jsonWithAllElementIds.push({
          "elementId" : lineOfCreditLPFields.default[lineOfCreditLPFieldsArray[i]][j].id,
          "HelpText" : ""
        });
      }
    }

    return JSON.stringify(jsonWithAllElementIds);

  },

  componentWillReceiveProps(NextProps) {
    console.log('COMPONENT WILL RECEIVE PROPS IN MAIN PAGE');
    if(NextProps.helpTextData) {
      NextProps.helpTextData.then(function(data) {
        console.log('INSIDE HELP TEXT DATA PROMISE HANDLER IN MAIN PAGE COMPONENT', this.state);
        let reRenderElements = true;
        this.setState({
          helpTextDataofAllElements: data.helpTextWithElementId,
          isLoading: false,
          reRenderElements: reRenderElements
        });
        console.log('RIGHT AFTER SET STATE', this.state);
      }.bind(this));
    }

    // console.log('componentWillReceiveProps in MAIN PAGE');
    // if(NextProps.helpTextData) {
    //   NextProps.helpTextData.then(function(data) {
    //     console.log('INSIDE HELP TEXT DATA PROMISE HANDLER IN MAIN PAGE COMPONENT', this.state);
    //
    //     this.setState({
    //       helpTextDataofAllElements: data.HelpTextData,
    //       isLoading: false,
    //       reRenderElements: reRenderElements
    //     });
    //     console.log('RIGHT AFTER SET STATE', this.state);
    //   }.bind(this));
    // }
  },

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate in MAIN PAGE', this.state);
    if(!nextState.isLoading) {
      console.log('inside true');
      return true;
    }
    else {
      return false;
    }
  },

  getRequiredHelpTextData(idForHelpText) {
    console.log('ID FOR RETRIEVING HELPTEXT DATA', idForHelpText);
    for(let i=0; i<this.state.helpTextDataofAllElements.length; i++) {
      if(this.state.helpTextDataofAllElements[i].elementId === idForHelpText) {
        $('#HelpTextValue').text(this.state.helpTextDataofAllElements[i].helpText);
      }
    }
  },

  onClickNavBtn(e) {
    console.log('NAV BTN CLICK', e.target.name);
    if(e.target.name === "BatchJobsContainerDiv") {
      $('#LendingProductContainerDiv').addClass('displayNone');
      $('#BatchJobsContainerDiv').removeClass('displayNone');
    }
    else if (e.target.name === "LendingProductContainerDiv") {
      $('#BatchJobsContainerDiv').addClass('displayNone');
      $('#LendingProductContainerDiv').removeClass('displayNone');
    }
  }

});

export default MainPage;
