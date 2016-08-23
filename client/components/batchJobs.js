import React from 'react';
let $ = require ('jquery');

// importing individualBatchJobs
import IndividualBatchJobContainer from '../containers/IndividualBatchJobContainer';

// imports from toolsBox
// import helpTextTools from '../toolsBox/helpTextTools';
// import jsonTools from '../toolsBox/jsonTools';

import {getThekeysOfJSON, getValueForPassed} from '../toolsBox/jsonTools';
import {getJSONwithIdsForHelpText} from '../toolsBox/helpTextTools';

const batchJobs = React.createClass({

  getInitialState() {
    // FIRST
    console.log('getInitialState in PARENT');
    return {
      batchData: this.props.batchData,
      batchJobsData: this.props.batchJobData,
      isLoading: true,
      eodBatchjobCount: {},
      reRenderElements: false,
      "helpTextOfAllElements" : {}
    }
  },

  componentWillMount() {
    // SECOND
    console.log('componentWillMount in PARENT');
  },

  render() {
    // Third
    console.log('RENDER in PARENT', this.state);
    if(!this.state.isLoading && this.state.reRenderElements) {
      let batchData = this.state.batchData;

      // console.log('INSIDE RENDER DATA IN PARENT', batchData);
      let objKeys = Object.keys(batchData);
      let that = this;
      return (
        <div>
          <div className="">
          {objKeys.map(function(individualBatchData){
            return (
              <IndividualBatchJobContainer key= {batchData[individualBatchData].id} {...batchData[individualBatchData]} onValueChange={that.getElementIdForHelpText} onSaveConfirm={that.handleSaveJobFromParent} callParentToPassElementId = {that.props.callParentToPassElementId}/>
            )
          })}
        </div>

        </div>
      )
    }
    else {
      return (
        <div>
          <p> Loading! </p>
        </div>
      )
    }

    // return (
    //   <div>
    //     <IndividualBatchJobContainer/>
    //   </div>
    // )
  },

  getElementIdForHelpText(val) {

    for(let i=0; i<this.state.helpTextOfAllElements.length; i++) {
      if(this.state.helpTextOfAllElements[i].elementId === val) {
        $('#HelpTextValue').text(this.state.helpTextOfAllElements[i].helpText);
      }
    }

  },

  // return <indiBatchJobsComponent key= {individualBatchData.name} {...individualBatchData} />
  componentDidMount() {
    // FOURTH
    console.log('componentDidMount IN PARENT');
    // creating a array (batch job names) for getting batch job data
    // let batchData = this.props.batchData.default;
    // let batchJobNames = Object.keys(batchData);



    // let batchJobNames = this.getTheNamesOfAllBatchJobs(this);

    //****** Method being called from toolsBox
    let batchJobKeys = getThekeysOfJSON(this.props.batchData.default);
    let batchJobNames = getValueForPassed(this.props.batchData.default, batchJobKeys, 'batch_job_className');
    console.log('!@!@!@!!@@!@! batchJobNames', batchJobNames);
    console.log('!@!@!@!!@@!@!');
    //******

    // let jsonWithElementIds = JSON.stringify(this.getJSONwithIdsForHelpText(this));

    //****** Method being called from toolsBox
    let jsonWithElementIds = JSON.stringify(getJSONwithIdsForHelpText(this.state.batchData.default));
    //******

    this.props.getHelpTextFromDB(jsonWithElementIds);
    this.props.getBatchJobValues(batchJobNames);
    this.props.getEODBatchJobsCountFromDB();
  },

  // handleSaveJobFromParent(idToAbort, cronTime, jobName) {
  // handleSaveJobFromParent(boolForsetState, idOfTheConcerned, selectedTime, resultDataFromDB) {
  //   console.log('CALLING SET STATE IN PARENT FOR RELOADING CHILD COMPONENT');
  //   let stateValueForChanging = this.state;
  //   let idForAborting = resultDataFromDB[1];
  //   let batchJobClassName = resultDataFromDB[0];
  //
  //   let selectedTimeSplits = selectedTime.split(":");
  //
  //   let minutes = selectedTimeSplits[1];
  //   if (minutes.length == 1) {
  //     minutes = "0" + minutes;
  //   }
  //   let hours = selectedTimeSplits[0];
  //   if (hours.length == 1) {
  //     hours = "0" + hours;
  //   }
  //   let timetoset = hours + ":" + minutes + ":00";
  //   stateValueForChanging[idOfTheConcerned].value = timetoset;
  //   stateValueForChanging[idOfTheConcerned].idForAborting = idForAborting;
  //   stateValueForChanging[idOfTheConcerned].nextJobMessage = "The next " + batchJobClassName + " Batch Job is scheduled to run on";
  //   // stateValueForChanging[idOfTheConcerned].value =
  //   if(boolForsetState) {
  //     // have to alter batchData
  //     this.setState({
  //       batchData: this.state.batchData,
  //       batchJobsData: this.state.batchJobsData,
  //       isLoading: isLoading,
  //       eodBatchjobCount: this.state.eodBatchjobCount,
  //       reRenderElements: reRenderElements,
  //       helpTextOfAllElements: data.HelpTextData
  //     });
  //   }
  //   else {
  //
  //   }
  //
  //
  //   // this.props.saveJob(idToAbort, cronTime, jobName);
  //   // this method is for set state - so that child component will reload with new values
  // },

  componentWillReceiveProps(NextProps) {
    // Fifth
    let batchData = this.props.batchData.default;
    let isLoading = true;
    let reRenderElements = false;
    console.log('COMPONENT WILL RECEIVE PROPS IN PARENT', NextProps);
    if(NextProps.batchJobData) {
      NextProps.batchJobData.then(function(data) {
        console.log('INSIDE BATCH JOB DATA PROMISE HANDLER  IN PARENT');
        isLoading = false;
        reRenderElements = true;
        let batchDataforChanges = this.addDataToState(this, data);
        this.setState({
          batchData: batchDataforChanges,
          batchJobsData: {},
          isLoading: isLoading,
          eodBatchjobCount: {},
          reRenderElements: reRenderElements,
          helpTextOfAllElements: this.state.helpTextOfAllElements
        });

        // for(let i=0; i<batchJobNames.length; i++) {
        //   // console.log(batchData[batchJobNames[i]]);
        //   if()
        // }
      }.bind(this));
    }

    let eodBatchjobCount = {};
    if(NextProps.eodBatchjobCount) {
      // if eodBatchjobCount is not NULL or ZERO then we need to show a error message stating that
      // this is not valid
      console.log('INSIDE THE EOD BATCH JOB COUNT PROMISE HANDLER  IN PARENT');
      eodBatchjobCount = NextProps.eodBatchjobCount.count;
      isLoading = true;
      reRenderElements = false;
    }

    if(NextProps.helpTextData) {
      NextProps.helpTextData.then(function(data) {
        console.log('INSIDE HELP TEXT DATA PROMISE HANDLER  IN PARENT');
        isLoading = false;
        reRenderElements = false;
        this.setState({
          batchData: this.state.batchData,
          batchJobsData: this.state.batchJobsData,
          isLoading: isLoading,
          eodBatchjobCount: this.state.eodBatchjobCount,
          reRenderElements: reRenderElements,
          helpTextOfAllElements: data.HelpTextData
        });
      }.bind(this));
    }

    // if(NextProps.dataAfterSave){
    //   NextProps.dataAfterSave.then(function(data){
    //     console.log('PROMISE HANDLER AFTER SAVING DATA', data);
    //   });
    // }
  },


  addDataToState(thisVal, data) {
    // console.log('INSIDE THE ADD DATA TO STATE PROMISE HANDLER', data);

    // let batchDataforChanges = thisVal.state.batchData;
    let batchDataforChanges = this.props.batchData.default;

    for(let i=0; i<data.listOfBatchJobData.length; i++) {

      let batchJobName = data.listOfBatchJobData[i].batchJobName;
      let batchJobId = thisVal.getIdWithNameOfBatchJob(batchJobName, this);
      if(data.listOfBatchJobData[i]['batchJobDetails']) {
        let batchJobDetails = data.listOfBatchJobData[i]['batchJobDetails'][0];
        if(data.listOfBatchJobData[i]['batchJobDetails'].length > 1) {
          //error
        }
        else if(data.listOfBatchJobData[i]['batchJobDetails'].length == 1) {

          batchDataforChanges[batchJobId].idForAborting = batchJobDetails.Id;

          let cronexp = batchJobDetails.CronExpression;
          let splits = cronexp.split(" ");
          let minutes = splits[1];
          if (minutes.length == 1) {
            minutes = "0" + minutes;
          }
          let hours = splits[2];
          if (hours.length == 1) {
            hours = "0" + hours;
          }
          let timetoset = hours + ":" + minutes + ":00";
          batchDataforChanges[batchJobId].value = timetoset;

          // processing message
          let nextfireTime = batchJobDetails.NextFireTime;
          console.log('nextfireTime', nextfireTime);
          let myDate= new Date(nextfireTime);
          let date_str = myDate.toString();

          // let date = date_str.substring(0,15);
          // let time = date_str.substring(16, 24);
          let msg = "The next <b>" +batchJobName + " Batch Job is scheduled to run on " + date_str;

          batchDataforChanges[batchJobId].nextJobMessage = msg;

          // console.log('FINAL RESULT',batchDataforChanges[batchJobId]);
        }
        // console.log('##', data.listOfBatchJobData[i].batchJobName);

      }
      else {
        // console.log('NO VALUES AVAILABLE', data.listOfBatchJobData[i].batchJobName);
      }

    }

    // console.log('BEFORE SET STATE', batchDataforChanges);
    return batchDataforChanges;
  },

  // getThekeysOfAllBatchJobs(batchData) {
  //   // let batchData = thisVal.props.batchData.default;
  //   let batchJobKeys = Object.keys(batchData);
  //   return batchJobKeys;
  // },
  //
  // getTheNamesOfAllBatchJobs(thisVal) {
  //   let batchData = thisVal.props.batchData.default;
  //   let batchJobNames = [];
  //   let batchKeys = thisVal.getThekeysOfAllBatchJobs(batchData);
  //   for(let i=0;i<batchKeys.length;i++) {
  //     batchJobNames.push(batchData[batchKeys[i]].batch_job_className);
  //   }
  //   return batchJobNames;
  // },


  // getJSONwithIdsForHelpText(thisVal) {
  //   let jsonWithHelpTextId = [];
  //
  //   let batchJobKeys = thisVal.getThekeysOfAllBatchJobs(thisVal.state.batchData.default);
  //   for(let i=0;i< batchJobKeys.length; i++) {
  //     jsonWithHelpTextId.push(
  //       {
  //          "elementId" : thisVal.state.batchData.default[batchJobKeys[i]].idForHelpText,
  //          "helpText" : ""
  //       }
  //     )
  //   }
  //   return jsonWithHelpTextId;
  // },

  getIdWithNameOfBatchJob(batchJobName, thisVal) {
    let batchData = thisVal.props.batchData.default;
    let batchJobId = "";
    // let batchKeys = thisVal.getThekeysOfAllBatchJobs(batchData);

    //****** Method being called from toolsBox
    let batchKeys = getThekeysOfJSON(batchData);
    console.log('!@!@@!@!@@!@!@!@!@ batchKeys', batchKeys);
    console.log('!@!@@!@!@@!@!@!@!@');
    //******

    for(let i=0;i<batchKeys.length;i++) {
      if(batchData[batchKeys[i]].batch_job_className === batchJobName) {
        return batchKeys[i];
      }
    }
  },




  shouldComponentUpdate(nextProps, nextState) {
    // Sixth
    // console.log('shouldComponentUpdate', nextState);
    if(!nextState.isLoading) {
      return true;
    }
    else {
      return false;
    }
  },

  componentWillUnmount() {
    // LAST
    console.log('componentWillUnmount IN PARENT');
  }

});

export default batchJobs;
