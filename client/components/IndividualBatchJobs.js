import React from 'react';
let $ = require ('jquery');


const IndividualBatchJobs = React.createClass({

  getInitialState() {
    // FIRST
    console.log('getInitialState');
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
    console.log('componentWillMount');
  },

  render() {
    // Third
    console.log('RENDER in INDIVIDUAL BATCH JOB', this.state);
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
        <div className="slds-card marginTop2Percent">
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
      // console.log('CRAP CRAP CRAP', e.target.value.trim());
      this.props.onValueChange(e.target.name);
      if(e.target.value) {
        $('#submitBtn_'+this.state.id).prop("disabled",false);
      }
      else {
        $('#submitBtn_'+this.state.id).prop("disabled",true);
      }
    },

    submitClick(e) {
      // console.log($('#timeInput_'+this.state.id).val());

      let currentTime = $('#timeInput_'+this.state.id).val();
      // console.log("timeval: " + currentTime)

      let jobName = this.state.batch_job_className;
      let id_obj = this.state.batch_job_idObj;

      let timeval_splits = currentTime.split(":");
      let h = timeval_splits[0];
      let m = timeval_splits[1];
      let s = 0;
      let crontime = s + " " + parseInt(m) + " " + parseInt(h) + " ? * MON-SUN *";
      // console.log('crontime', crontime);
      if(this.state.idForAborting) {
        this.props.saveJob(this.state.idForAborting, crontime, jobName);
      }
      else {
        this.props.saveJob(null, crontime, jobName);
      }

    },

    handleChangeforEveryElement: function(e) {
      this.props.onValueChange('fuck this');
    },

    componentDidMount() {
      // FOURTH
      console.log('componentDidMount');
      // $('#submitBtn_'+this.state.id).prop("disabled",true);
    },

    componentWillReceiveProps(NextProps) {
      // Fifth
      // console.log('componentWillReceiveProps', NextProps);
      // handle Save click return promise here
      // in that update state

      if(NextProps.returnValueAfterSavingBatchJob) {
        NextProps.returnValueAfterSavingBatchJob.then(function(data) {
          console.log(data.resultAfterSave[1]);
          console.log(this.state.batch_job_className);
          if(this.state.batch_job_className === data.resultAfterSave[1]) {

            location.reload();

            // let changedVal = $("#timeInput_" + this.state.id).val();
            // console.log(changedVal);
            //
            // let idForAborting = data.resultAfterSave[0];
            //
            // let message = "The next <b>" + data.resultAfterSave[1] + "</b> Batch Job is scheduled to run on <b>" + changedVal;
            //
            // this.setState({
            //   "heading": this.state.heading,
            //   "tagline": this.state.tagline,
            //   "id": this.state.id,
            //   "batch_job_className": this.state.batch_job_className,
            //   "batch_job_idObj": this.state.batch_job_idObj,
            //   "value": changedVal,
            //   "nextJobMessage": this.props.nextJobMessage,
            //   "idForAborting": idForAborting,
            //   "isLoading" : false
            // })
          }
          // console.log('JINTHAAA JINTHAA', this.state);
        }.bind(this));
      }

    },

    shouldComponentUpdate(nextProps, nextState) {
      // Sixth
      console.log('shouldComponentUpdate');
      return this.state.isLoading;
    },

    componentWillUnmount() {
      // LAST
      console.log('componentWillUnmount');
    }

  });

  export default IndividualBatchJobs;



  // <div className="slds-card">
  //    <div className="slds-card__header slds-grid">
  //       <div className="slds-media slds-media--center slds-has-flexi-truncate" >
  //          <div className="slds-media__body" >
  //             <h2 className="slds-text-heading--small slds-truncate">{individualData.heading}</h2>
  //          </div>
  //       </div>
  //    </div>
  //    <div className="slds-card__body" id="astp_product_content_ba">
  //       <div className="batj_warning displayNone" id="batj_warning">
  //          We only support 1 scheduled Batch Job for Start of Day Job. Please remove all scheduled jobs which were configured outside the installer before scheduling it here.
  //       </div>
  //       <div className="batj_content_area" >
  //          <div className="batj_content" id="batj_content_ba">
  //             <div className="slds-form-element helper_field">
  //                <span className="slds-form-element__help displayNone">This field is required</span>
  //                <label className="slds-form-element__label" for="loan__eodj_time" >
  //                  {individualData.tagline}
  //                </label>
  //                <div className="slds-form-element__control">
  //                  <input className="slds-input" type="time" id="loan__eodj_time">
  //                  </input>
  //               </div>
  //             </div>
  //          </div>
  //          <div id="scheduled_info"></div>
  //       </div>
  //       <div className="batj_buttons_area">
  //         <button className="slds-button slds-button--neutral btn batj_btn" id="batj_submit">
  //           Submit
  //         </button>
  //       </div>
  //    </div>
  // </div>
