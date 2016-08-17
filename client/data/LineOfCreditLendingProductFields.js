const LineOfCreditLendingProductFields = {

  "Pages_Select_Element_Ids": {
    "BillingPage": [
      "loan__Draw_Billing_Method__c",
      "loan__Repayment_Billing_Method__c",
      "loan__Draw_Period_Interest_Calculation__c",
      "loan__Repayment_Period_Interest_Calculation__c"
    ]
  },

  "AllPages": [
    "BasicsElements_LineOfCreditLP",
    "BillingElements_LineOfCreditLP",
    "AdvanceElements_LineOfCreditLP",
    "FeesElements_LineOfCreditLP",
    "TermElements_LineOfCreditLP",
    "InterestElements_LineOfCreditLP",
    "TolerenceElements_LineOfCreditLP",
    "AccountingElements_LineOfCreditLP"
  ],

  "BasicsElements_LineOfCreditLP": [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "Name",
      "name": "BasicsElements_LineOfCreditLP",
      "label": "Loan Product Name",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : true
    },
    {
      "element": "input",
      "type": "checkbox",
      "elementClassName": [
        "slds-checkbox",
        "marginTop09"
      ],
      "id": "loan__Funding_in_Tranches__c",
      "name": "BasicsElements_LineOfCreditLP",
      "label": "Funding in Tranches",
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
      "name": "BasicsElements_LineOfCreditLP",
      "label": "Payment Frequency",
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
      "id": "loan__Time_Counting_Method__c",
      "name": "BasicsElements_LineOfCreditLP",
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
      "id": "loan__Payment_Application_Mode__c",
      "name": "BasicsElements_LineOfCreditLP",
      "label": "Payment Application Mode",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : false
    }
  ],
  "BillingElements_LineOfCreditLP": [
    {
      "element": "select",
      "elementClassName": [
        "slds-select_container",
        "slds-select"
      ],
      "id": "loan__Draw_Billing_Method__c",
      "name": "BillingElements_LineOfCreditLP",
      "label": "Draw Billing Method",
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
      "id": "loan__Repayment_Billing_Method__c",
      "name": "BillingElements_LineOfCreditLP",
      "label": "Repayment Billing Method",
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
      "id": "loan__Draw_Period_Interest_Calculation__c",
      "name": "BillingElements_LineOfCreditLP",
      "label": "Draw Period Interest Calculation",
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
      "id": "loan__Repayment_Period_Interest_Calculation__c",
      "name": "BillingElements_LineOfCreditLP",
      "label": "Repayment Period Interest Calculation",
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
      "id": "loan__Draw_Term_Payment_Percent__c",
      "name": "BillingElements_LineOfCreditLP",
      "label": "Draw Term Payment %",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : true
    },
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Repayment_Term_Payment_Percent__c",
      "name": "BillingElements_LineOfCreditLP",
      "label": "Repayment Term Payment %",
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
      "name": "BillingElements_LineOfCreditLP",
      "label": "Pre Bill Days",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : true
    },
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Minimum_Installment_Amount__c",
      "name": "BillingElements_LineOfCreditLP",
      "label": "Minimum Bill Amount",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : false
    }
  ],

  "AdvanceElements_LineOfCreditLP" : [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Maximum_Draw_Amount__c",
      "name": "AdvanceElements_LineOfCreditLP",
      "label": "Maximum Draw Amount",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : true,
      "validations" : [
        {
          "symbol" : ">",
          "comparisionVal": "loan__Minimum_Draw_Amount__c",
          "message" : "Max Draw Must be More than Min Draw"
        }
      ]
    },
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Minimum_Draw_Amount__c",
      "name": "AdvanceElements_LineOfCreditLP",
      "label": "Minimum Draw Amount",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : true,
      "validations" : [
        {
          "symbol" : "<",
          "comparisionVal": "loan__Maximum_Draw_Amount__c",
          "message" : "Min Draw Must be Less than Min Draw"
        }
      ]
    },
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Min_Loan_Amount__c",
      "name": "AdvanceElements_LineOfCreditLP",
      "label": "Minimum Financed Amount",
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
      "name": "AdvanceElements_LineOfCreditLP",
      "label": "Maximum Financed Amount",
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
  "FeesElements_LineOfCreditLP" : [
    {
      "element": "input",
      "type": "radio",
      "elementClassName": [
        "slds-radio",
        "marginTop05"
      ],
      "id": "existingFeeSetRdbtn",
      "name": "FeesElements_LineOfCreditLP",
      "name": "loan__Fee_Set__c",
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
          "name":"FeesElements_LineOfCreditLP",
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
      "name": "FeesElements_LineOfCreditLP",
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
          "name": "FeesElements_LineOfCreditLP",
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
  "TermElements_LineOfCreditLP" : [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Min_Number_of_Installments__c",
      "name": "TermElements_LineOfCreditLP",
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
      "name": "TermElements_LineOfCreditLP",
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
      "name": "TermElements_LineOfCreditLP",
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
    }
  ],
  "InterestElements_LineOfCreditLP" : [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Min_Interest_Rate__c",
      "name": "InterestElements_LineOfCreditLP",
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
      "name": "InterestElements_LineOfCreditLP",
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
      "name": "InterestElements_LineOfCreditLP",
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
  "TolerenceElements_LineOfCreditLP" : [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Late_Charge_Grace_Days__c",
      "name:": "TolerenceElements_LineOfCreditLP",
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
      "name:": "TolerenceElements_LineOfCreditLP",
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
      "name:": "TolerenceElements_LineOfCreditLP",
      "label": "Write Off Tolerance Amount",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : false
    }
  ],
  "AccountingElements_LineOfCreditLP" : [
    {
      "element": "select",
      "elementClassName": [
        "slds-select_container",
        "slds-select"
      ],
      "id": "loan__Product_Asset_Account__c",
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
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
      "name": "AccountingElements_LineOfCreditLP",
      "label": "Product Write-Off Recovery Account",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : false
    }
  ]
};


export default LineOfCreditLendingProductFields;
