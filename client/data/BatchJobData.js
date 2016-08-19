const batchJobData = {
  "astp_product_content_ba" : {
    "heading": "Start of day Job",
    "tagline": "Please select a time for Start of Day Job",
    "id": "astp_product_content_ba",
    "batch_job_className": "EndOfDayJob_InstallerWizard",
    "batch_job_idObj": "batch_job_id",
    "value": "00:00:00",
    "nextJobMessage": "",
    "idForAborting": "",
    "idForHelpText" : "loan__eodj_time"
  },
  "astp_product_content_lptcj" : {
    "heading": "Loan Payment Transaction Creation Job",
    "tagline": "Please select a time for Loan Payment Transaction Creation Job",
    "id": "astp_product_content_lptcj",
    "batch_job_className": "LoanPaymentTransactionCreationJob_InstallerWizard",
    "batch_job_idObj": "lptc_job_id",
    "value": "00:00:00",
    "nextJobMessage": "",
    "idForAborting": "",
    "idForHelpText" : "loan__lptcj_time"
  },
  "astp_product_content_lpaj" : {
    "heading": "Loan Payment Accounting Job",
    "tagline": "Please select a time for Loan Payment Accounting Job",
    "id": "astp_product_content_lpaj",
    "batch_job_className": "LoanPaymentAccountingJob_InstallerWizard",
    "batch_job_idObj": "lpa_job_id",
    "value": "00:00:00",
    "nextJobMessage": "",
    "idForAborting": "",
    "idForHelpText" : "loan__ldpa_time"
  },
  "astp_product_content_ldj" : {
    "heading": "Loan Diagnostics Job",
    "tagline": "Please select a time for Loan Diagnostics Job",
    "id": "astp_product_content_ldj",
    "batch_job_className": "LoanDiagnosticsJob_InstallerWizard",
    "batch_job_idObj": "ld_job_id",
    "value": "00:00:00",
    "nextJobMessage": "",
    "idForAborting": "",
    "idForHelpText" : "loan__ldj_time"
  }
};

export default batchJobData;
