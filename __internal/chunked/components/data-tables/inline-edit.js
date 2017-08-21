var SLDS=webpackJsonpSLDS([80,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141],{0:function(e,t){e.exports=React},76:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var l=n(a(0)),c=n(a(4)),o=a(20),d=["Name","Account Name","Close Date","Stage","Confidence","Amount","Contact"],r=[{recordName:"Acme - 1,200 Widgets",accountName:"Acme",closeDate:"4/10/15",stage:"Value Proposition",confidence:"30%",amount:"$25,000,000",contact:"jrogers@acme.com"},{recordName:"Acme - 200 Widgets",accountName:"Acme",closeDate:"1/31/15",stage:"Prospecting",confidence:"60%",amount:"$5,000,000",contact:"bob@acme.com"},{recordName:"salesforce.com - 1,000 Widgets",accountName:"salesforce.com",closeDate:"1/31/15 3:45PM",stage:"Id. Decision Makers",confidence:"70%",amount:"$25,000",contact:"nathan@salesforce.com"}];t.default=l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{className:"slds-no-cell-focus",isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,focusableCell:"recordName"})}))));t.states=[{id:"with-link",label:"Cell focused - Link (Actionable mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem",actionableMode:!0}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,focusableCell:"recordName",focusedCell:"recordName",actionableMode:!0})})))),script:"\n      document.getElementById('link-01').focus()\n    "},{id:"checkbox",label:"Cell focused - Checkbox (Actionable mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem",actionableMode:!0}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,focusableCell:"selectRow",focusedCell:"selectRow",actionableMode:!0})})))),script:"\n      document.getElementById('checkbox-01').focus()\n    "},{id:"focused",label:"Cell focused (Navigation mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,focusableCell:"accountName",focusedCell:"accountName"})}))))},{id:"edit",label:"Cell edit (Actionable mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem",actionableMode:!0}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,actionableMode:!0,showEdit:!0})})))),script:"\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "},{id:"required",label:"Cell edit — Required (Actionable mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{actionableMode:!0,columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,actionableMode:!0,showEdit:!0,showEditRequired:!0})})))),script:"\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "},{id:"error",label:"Cell edit — Error (Actionable mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{actionableMode:!0,columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,actionableMode:!0,showEdit:!0,showEditRequired:!0,showEditError:!0})})))),script:"\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "},{id:"edited",label:"Cell edited (Actionable mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{actionableMode:!0,columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,actionableMode:!0,showEditedCell:!0})}))))},{id:"row-error",label:"Error - Row level on save (Actionable mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{actionableMode:!0,columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,actionableMode:!0,focusableCell:"accountName",focusedCell:"accountName",showCellError:!0,showRowError:!0})})))),script:"\n      document.getElementById('button-01').focus()\n    "},{id:"row-error-focused",label:"Error indicator - Focused (Actionable mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{actionableMode:!0,columns:d,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact,actionableMode:!0,focusableCell:"error",focusedCell:"error",showCellError:!0,showRowError:!0,showRowErrorTooltip:!0})}))),l.default.createElement(o.ErrorTooltip,null)),script:"\n      document.getElementById('error-01').focus()\n    "},{id:"header-cell-focused",label:"Header cell focused (Navigation mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{columns:d,hasErrorColumn:!0,hasFocus:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact})}))))},{id:"header-cell-marked",label:"Header cell marked (Navigation mode)",element:l.default.createElement(o.InlineEditTableContainer,null,l.default.createElement(o.AdvancedDataTable,{className:"slds-no-cell-focus",isEditable:!0,style:{width:"66.75rem"}},l.default.createElement(o.Thead,{columns:d,hasErrorColumn:!0,hasFocus:!0,mainColumnWidth:"8.75rem"}),l.default.createElement("tbody",null,c.default.times(r.length,function(e){return l.default.createElement(o.InlineEditTr,{key:e,index:e+1,recordName:r[e].recordName,accountName:r[e].accountName,closeDate:r[e].closeDate,stage:r[e].stage,confidence:r[e].confidence,amount:r[e].amount,contact:r[e].contact})}))))}]}},[76]);