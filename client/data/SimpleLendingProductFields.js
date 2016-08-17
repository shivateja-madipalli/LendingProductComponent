const SimpleLendingProductFields = {

  "InitialState" : {
    "basicData" : {},
    "interestData" : {},
    "accountingData" : {},
    "allEnterData" :
    {
      "allData": {},
      "completed":
      [{
        "name":"ProfileElements_SimpleLP",
        "value" : false
      },
  		{
        "name": "FeesElements_SimpleLP",
        "value": false
      },
      {
        "name":"TermElements_SimpleLP",
        "value": false
      },
      {
        "name":"InterestElements_SimpleLP",
        "value": false
      },
      {
        "name":"ProtectElements_SimpleLP",
        "value": false
      },
      {
        "name":"FundingElements_SimpleLP",
        "value": false
      },
      {
        "name":"TolerenceElements_SimpleLP",
        "value": false
      },
      {
        "name":"AccountingElements_SimpleLP",
        "value": false
      }]
    },
    "isLoading" : true,
    "reRenderElements" : false,
    "currentPage": "",
    "confirmationFromSFAfterInsertingLoan": {},
    "feeSetUrl": "",
    "exisitingfeeSets" : {},
    "HelpTextData": {}
  },

  "Pages_Select_Element_Ids": {
    "AccountingPage": [
      "loan__Product_Asset_Account__c",
      "loan__Product_Loan_Control_Account__c",
      "loan__Product_Interest_Income_Account__c",
      "loan__Product_Interest_Amortization_Account__c",
      "loan__Product_Loan_Loss_Provision_Account__c",
      "loan__Product_Loan_Loss_Reserve_Account__c",
      "loan__Product_Loan_Purchase_Payable_Account__c",
      "loan__Product_Loan_Purchase_Receivable_Account__c",
      "loan__Product_Service_Fee_Income_Account__c",
      "loan__Product_Excess_Account__c",
      "loan__Product_Write_Off_Recovery_Account__c"
    ],
    "InterestPage": [
      "loan__Interest_Rate_Type__c"
    ],
    "BasicsPage": [
      "loan__Interest_Calculation_Method__c",
      "loan__Frequency_of_Loan_Payment__c",
      "loan__Time_Counting_Method__c",
      "loan__Accrual_Start_Basis__c",
      "loan__Payment_Application_Mode__c"
    ]
  },

  "AllPages": [
		"ProfileElements_SimpleLP",
		"FeesElements_SimpleLP",
    "TermElements_SimpleLP",
    "InterestElements_SimpleLP",
    "ProtectElements_SimpleLP",
    "FundingElements_SimpleLP",
    "TolerenceElements_SimpleLP",
    "AccountingElements_SimpleLP"
	],


"ProfileElements_SimpleLP": [
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "Name",
    "name": "ProfileElements_SimpleLP",
    "label": "Loan Product Name",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Interest_Calculation_Method__c",
    "name": "ProfileElements_SimpleLP",
    "label": "Billing Method",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"

    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Frequency_of_Loan_Payment__c",
    "name": "ProfileElements_SimpleLP",
    "label": "Payment Frequency",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ]
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Time_Counting_Method__c",
    "name": "ProfileElements_SimpleLP",
    "label": "Time Counting Method",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Accrual_Start_Basis__c",
    "name": "ProfileElements_SimpleLP",
    "label": "Accural Start Basis",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Payment_Application_Mode__c",
    "name": "ProfileElements_SimpleLP",
    "label": "Payment Application Mode",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Interest_Only_Period__c",
    "name": "ProfileElements_SimpleLP",
    "label": "Interest Only Period",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "input",
    "type": "checkbox",
    "elementClassName": [
      "slds-checkbox",
      "marginTop09"
    ],
    "id": "loan__Actual_Interest_Only_Payments__c",
    "name": "ProfileElements_SimpleLP",
    "label": "Actual Interest Only Payments",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Pre_Bill_Days__c",
    "name": "ProfileElements_SimpleLP",
    "label": "Pre Bill Days",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  }
],
"FeesElements_SimpleLP" : [
  {
    "element": "input",
    "type": "radio",
    "elementClassName": [
      "slds-radio",
      "marginTop05"
    ],
    "id": "existingFeeSetRdbtn",
    "name": "FeesElements_SimpleLP",
    "label": "Choose Existing Fee Set",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false,
    "selected" : false,
    "handleChangeEvent" : false,
    "handleClickEvent_Separately" : true,
    "dependentElements" : [
      {
        "element": "select",
        "elementClassName": [
          "slds-select_container",
          "slds-select",
          "Width30Imp",
          "displayNone",
          "marginTop2Percent"
        ],
        "id": "loan__Fee_Set__c",
        "name": "FeesElements_SimpleLP",
        "isRequired" : false
      }
    ]
  },
  {
    "element": "input",
    "type": "radio",
    "elementClassName": [
      "slds-radio",
      "marginTop05"
    ],
    "id": "newFeeSetRbn",
    "name": "FeesElements_SimpleLP",
    "label": "Create New Fee Set",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false,
    "selected" : true,
    "handleChangeEvent" : false,
    "handleClickEvent_Separately" : true,
    "dependentElements" : [
      {
        "element": "button",
        "type": "button",
        "elementClassName": [
          "slds-button"
        ],
        "id": "createNewFeeSetBtn",
        "name": "FeesElements_SimpleLP",
        "text": "Click to Create new Fee Set",
        "labelClassName" : [
          "slds-form-element__label",
          "clearBoth"
        ],
        "handleChangeEvent" : false,
        "handleClickEvent_Separately" : true
      }
    ]
  }
],

"TermElements_SimpleLP" : [
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Min_Number_of_Installments__c",
    "name": "TermElements_SimpleLP",
    "label": "Min Term",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true,
    "validations" : [
      {
        "symbol" : "<",
        "comparisionVal": "loan__Max_Number_of_Installments__c",
        "message" : "Min Term Must be Less than Max Term"
      },
      {
        "symbol" : "<",
        "comparisionVal": "loan__Default_Number_of_Installments__c",
        "message" : "Min Term Must be Less than Default Term"
      }
    ]
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Max_Number_of_Installments__c",
    "name": "TermElements_SimpleLP",
    "label": "Max Term",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true,
    "validations" : [
      {
        "symbol" : ">",
        "comparisionVal": "loan__Min_Number_of_Installments__c",
        "message" : "Max Term Must be More than Min Term"
      },
      {
        "symbol" : ">",
        "comparisionVal": "loan__Default_Number_of_Installments__c",
        "message" : "Max Term Must be More than Default Term"
      }
    ]
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Default_Number_of_Installments__c",
    "name": "TermElements_SimpleLP",
    "label": "Default Term",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true,
    "validations" : [
      {
        "symbol" : "<",
        "comparisionVal": "loan__Max_Number_of_Installments__c",
        "message" : "Default Term Must be Less than Max Term"
      },
      {
        "symbol" : ">",
        "comparisionVal": "loan__Min_Number_of_Installments__c",
        "message" : "Default Term Must be More than Min Term"
      }
    ]
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Amortization_Term__c",
    "name": "TermElements_SimpleLP",
    "label": "Amortization Term",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true
  }
],
"InterestElements_SimpleLP" : [
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Interest_Rate_Type__c",
    "name": "InterestElements_SimpleLP",
    "label": "Interest Type",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Min_Interest_Rate__c",
    "name": "InterestElements_SimpleLP",
    "label": "Min Interest Rate",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true,
    "validations" : [
      {
        "symbol" : "<",
        "comparisionVal": "loan__Max_Interest_Rate__c",
        "message" : "Min Interest Rate Must be Less than Max Interest Rate"
      },
      {
        "symbol" : "<",
        "comparisionVal": "loan__Default_Interest_Rate__c",
        "message" : "Min Interest Rate Must be Less than Default Interest Rate"
      }
    ]
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Max_Interest_Rate__c",
    "name": "InterestElements_SimpleLP",
    "label": "Max Interest Rate",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true,
    "validations" : [
      {
        "symbol" : ">",
        "comparisionVal": "loan__Min_Interest_Rate__c",
        "message" : "Max Interest Rate Must be More than Min Interest Rate"
      },
      {
        "symbol" : ">",
        "comparisionVal": "loan__Default_Interest_Rate__c",
        "message" : "Max Interest Rate Must be More than Default Interest Rate"
      }
    ]
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Default_Interest_Rate__c",
    "name": "InterestElements_SimpleLP",
    "label": "Default Interest Rate",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true,
    "validations" : [
      {
        "symbol" : ">",
        "comparisionVal": "loan__Min_Interest_Rate__c",
        "message" : "Default Interest Rate Must be More than Min Interest Rate"
      },
      {
        "symbol" : "<",
        "comparisionVal": "loan__Max_Interest_Rate__c",
        "message" : "Default Interest Rate Must be Less than Max Interest Rate"
      }
    ]
  }
],
"ProtectElements_SimpleLP" : [
  {
    "element": "input",
    "type": "checkbox",
    "elementClassName": [
      "slds-checkbox",
      "marginTop09"
    ],
    "id": "loan__protect_enabled__c",
    "name": "ProtectElements_SimpleLP",
    "label": "Protect Enabled",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false,
    "dependentElements" : [
      {
        "element": "select",
        "elementClassName": [
          "slds-select_container",
          "slds-select",
          "Width30Imp",
          "displayNone",
          "marginTop2Percent"
        ],
        "id": "loan__Protect_Type__c",
        "name": "ProtectElements_SimpleLP",
        "isRequired" : false
      }
    ]
  }
],
"FundingElements_SimpleLP" : [
  {
    "element": "input",
    "type": "checkbox",
    "elementClassName": [
      "slds-checkbox",
      "marginTop09"
    ],
    "id": "loan__Funding_in_Tranches__c",
    "name": "FundingElements_SimpleLP",
    "label": "Funding in Tranches",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Min_Loan_Amount__c",
    "name": "FundingElements_SimpleLP",
    "label": "Min Financed Amount",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true,
    "validations" : [
      {
        "symbol" : "<",
        "comparisionVal": "loan__Max_Loan_Amount__c",
        "message" : "Min Financed Amount Must be Less than Max Financed Amount"
      }
    ]
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Max_Loan_Amount__c",
    "name": "FundingElements_SimpleLP",
    "label": "Max Financed Amount",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : true,
    "validations" : [
      {
        "symbol" : ">",
        "comparisionVal": "loan__Min_Loan_Amount__c",
        "message" : "Max Financed Amount Must be More than Min Financed Amount"
      }
    ]
  }
],
"TolerenceElements_SimpleLP" : [
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Late_Charge_Grace_Days__c",
    "name": "TolerenceElements_SimpleLP",
    "label": "Late Charge Grace Days",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
    {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Delinquency_Grace_Days__c",
    "name": "TolerenceElements_SimpleLP",
    "label": "Delinquency Grace Days",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "input",
    "type": "text",
    "elementClassName": [
      "slds-input"
    ],
    "id": "loan__Write_off_Tolerance_Amount__c",
    "name": "TolerenceElements_SimpleLP",
    "label": "Write Off Tolerance Amount",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  }
],

"AccountingElements_SimpleLP" : [
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Asset_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Asset Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Loan_Control_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Loan Control Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Interest_Income_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Interest Income Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Interest_Amortization_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Interest Receivable Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Loan_Loss_Provision_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Loan Loss Provision Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Loan_Loss_Reserve_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Loan Loss Reserve Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Loan_Purchase_Payable_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Loan Purchase Payable Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Loan_Purchase_Receivable_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Loan Purchase Receivable Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Service_Fee_Income_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Service Fee Income Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Excess_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Excess Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  },
  {
    "element": "select",
    "elementClassName": [
      "slds-select_container",
      "slds-select"
    ],
    "id": "loan__Product_Write_Off_Recovery_Account__c",
    "name": "AccountingElements_SimpleLP",
    "label": "Product Write-Off Recovery Account",
    "labelClassName" : [
      "slds-form-element__label",
      "clearBoth"
    ],
    "isRequired" : false
  }
]
};

export default SimpleLendingProductFields;
