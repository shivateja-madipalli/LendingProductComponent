import React from 'react';
let $ = require ('jquery');


const IndividualBatchJobs = React.createClass({

  getInitialState() {
    // FIRST
    // console.log('getInitialState in Child Component');
    return {
      "heading": this.props.heading,
      "tagline": this.props.tagline,
      "id": this.props.id,
      "batch_job_className": this.props.batch_job_className,
      "batch_job_idObj": this.props.batch_job_idObj,
      "value": this.props.value,
      "nextJobMessage": this.props.nextJobMessage,
      "idForAborting": this.props.idForAborting,
      "isLoading": true,
      "idForHelpText" : this.props.idForHelpText
    }
  },

  componentWillMount() {
    // SECOND
    // console.log('componentWillMount in Child Component');
  },

  render() {
    // Third
    // console.log('RENDER in CHILD INDIVIDUAL BATCH JOB', this.state);
    let individualData = this.state;
    let submitId = "submitBtn_" + this.state.id;
    let submitName = "submitBtn_" + this.state.batch_job_className;
    let submitRef = "submitBtn_" + this.state.batch_job_idObj;

    let inputId = "timeInput_" + this.state.id;
    let inputName = this.state.idForHelpText;
    let inputRef = "timeRef_" + this.state.batch_job_idObj;
    let inputValue = this.state.value;

    let messageText = this.state.nextJobMessage;
    return (
      <div className="slds-card">
        <div className="slds-card__header slds-grid">
          <div className="slds-media slds-media--center slds-has-flexi-truncate">
            <div className="slds-media__body">
              <h3 className="slds-text-heading--small slds-truncate">{individualData.heading}</h3>
            </div>
          </div>
          <div className="slds-no-flex">
            <button className="slds-button slds-button--neutral" name={submitName} ref={submitRef} id = {submitId} type="button" onClick={e => this.submitClick(e)}>Submit</button>
          </div>
        </div>
        <div className="slds-card__body padding5Percentage backGroundWhiteColor">
          <label className="slds-form-element__label" htmlFor={inputId}>
            {individualData.tagline}
          </label>
          <div className="slds-form-element__control">
            <input className="slds-input" type="time" id={inputId} name={inputName} ref={inputRef} onClick={e => this.valueOfTimeChanged(e)} defaultValue={inputValue} onFocus={e => this.valueOfTimeChanged(e)}></input>
          </div>

          <div className="slds-form-element__control">
            {messageText}
          </div>
        </div>
      </div>
    )
  },

  valueOfTimeChanged(e) {
    // this.props.onValueChange(e.target.name);
    this.props.callParentToPassElementId(e.target.name);
    if(e.target.value) {
      $('#submitBtn_'+this.state.id).prop("disabled",false);
    }
    else {
      $('#submitBtn_'+this.state.id).prop("disabled",true);
    }
  },

  submitClick(e) {
    // console.log($('#timeInput_'+this.state.id).val());

    console.log('SUBMIT CLICK, WHY MANY TIMES?', e.target.id);

    let currentTime = $('#timeInput_'+this.state.id).val();
    // console.log("timeval: " + currentTime)

    let jobName = this.state.batch_job_className;
    let id_obj = this.state.batch_job_idObj;

    let timeval_splits = currentTime.split(":");
    let h = timeval_splits[0];
    let m = timeval_splits[1];
    let s = 0;
    let crontime = s + " " + parseInt(m) + " " + parseInt(h) + " ? * MON-SUN *";
    console.log('crontime', crontime);
    if(this.state.idForAborting) {
      this.props.saveJob(this.state.idForAborting, crontime, jobName);
    }
    else {
      this.props.saveJob(null, crontime, jobName);
    }

    // if(this.state.idForAborting) {
    //   this.props.onSaveConfirm(this.state.idForAborting, crontime, jobName);
    // }
    // else {
    //   this.props.onSaveConfirm(null, crontime, jobName);
    // }

  },

  handleChangeforEveryElement: function(e) {
    
  },

  componentDidMount() {
    // FOURTH
    console.log('COMPONENT DID UPDATE IN FRACTIONALIZATION');
    // $('#submitBtn_'+this.state.id).prop("disabled",true);
  },

  componentWillReceiveProps(NextProps) {

    console.log('INSIDE COMPONENT WILL RECEIVE PROPS IN FRACTIONALIZATION', NextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    // Sixth
    console.log('SHOULD COMPONENT UPDATE IN FRACTIONALIZATION');
    return this.state.isLoading;
  },

  componentWillUnmount() {
    // LAST
    // console.log('componentWillUnmount in Child Component');
  }

});

export default IndividualBatchJobs;
