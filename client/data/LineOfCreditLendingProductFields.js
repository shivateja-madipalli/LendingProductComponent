const LineOfCreditLendingProductFields = {
  "AllPages": [
    "BasicsElements",
    "BillingElements",
    "AdvanceElements",
    "FeesElements",
    "TermElements",
    "InterestElements",
    "TolerenceElements",
    "AccountingElements"
  ],

  "BasicsElements": [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "Name",
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
      "label": "Payment Application Mode",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : false
    }
  ],
  "BillingElements": [
    {
      "element": "select",
      "elementClassName": [
        "slds-select_container",
        "slds-select"
      ],
      "id": "loan__Draw_Billing_Method__c",
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
      "label": "Repayment Term Payment %",
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
      "id": "loan__Pre_Bill_Days__c",
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
      "label": "Minimum Bill Amount",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : true
    }
  ],

  "AdvanceElements" : [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Maximum_Draw_Amount__c",
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
  "FeesElements" : [
    {
      "element": "input",
      "type": "radio",
      "elementClassName": [
        "slds-radio",
        "marginTop05"
      ],
      "id": "existingFeeSetRdbtn",
      "name": "loan__Fee_Set__c",
      "label": "Choose Existing Fee Set",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : false,
      "selected" : false
    },
    {
      "element": "input",
      "type": "radio",
      "elementClassName": [
        "slds-radio",
        "marginTop05"
      ],
      "id": "loan__Fee_Set__c",
      "name": "loan__Fee_Set__c",
      "label": "Create New Fee Set",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : false,
      "selected" : true,
      "dependentElements" : [
        {
          "element": "button",
          "type": "button",
          "elementClassName": [

          ],
          "id": "createNewFeeSetBtn",
          "name": "feeSetUrl",
          "label": "Click to Create new Fee Set",
          "labelClassName" : [
            "slds-form-element__label",
            "clearBoth"
          ]
        }
      ]
    }
  ],
  "TermElements" : [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Min_Number_of_Installments__c",
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
  "InterestElements" : [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Min_Interest_Rate__c",
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
  "TolerenceElements" : [
    {
      "element": "input",
      "type": "text",
      "elementClassName": [
        "slds-input"
      ],
      "id": "loan__Late_Charge_Grace_Days__c",
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
      "label": "Write Off Tolerance Amount",
      "labelClassName" : [
        "slds-form-element__label",
        "clearBoth"
      ],
      "isRequired" : false
    }
  ],
  "AccountingElements" : [
    {
      "element": "select",
      "elementClassName": [
        "slds-select_container",
        "slds-select"
      ],
      "id": "loan__Product_Asset_Account__c",
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