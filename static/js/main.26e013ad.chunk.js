(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{121:function(e,a,t){e.exports={wrapInput:"InputWithText_wrapInput__1OYfO",textInput:"InputWithText_textInput__sQbHU",input:"InputWithText_input__2ps_-"}},133:function(e,a,t){e.exports={baseContent:"AngleCalcuation_baseContent__2iNdH",imageWrapper:"AngleCalcuation_imageWrapper__K1zW2",input:"AngleCalcuation_input__2i7lO",inputWrapp:"AngleCalcuation_inputWrapp__2QOed"}},134:function(e,a,t){e.exports={radioButton:"ToleranceTable_radioButton__3BksN"}},170:function(e,a,t){e.exports=t.p+"static/media/fragment1.f20739fd.png"},202:function(e,a,t){e.exports=t(363)},208:function(e,a,t){},209:function(e,a,t){},210:function(e,a,t){},260:function(e,a,t){},265:function(e,a,t){},363:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),i=t.n(r),u=(t(207),t(208),t(209),t(138)),c=(t(210),t(365)),o=t(369),m=t(367),s=t(376),p=t(377),d=t(74),v=t(373),f=t(374),h=t(375),g=t(24),E=t(88),b=o.a.Title;var k=function(){return l.a.createElement("div",null,l.a.createElement(b,{level:4},"Home page"),l.a.createElement(b,{level:1},"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435..."))},y=t(54);var C=function(){return l.a.createElement("div",null,l.a.createElement(y.a,{description:"Page not found"}))},x=(t(260),t(133)),O=t.n(x),V=t(170),j=t.n(V),I=t(368),S=t(119),T=t(371),_=t(372),D=t(364),N=t(49),A=t(111),B=t(112),w=t(6),P=t(35);var q=function(){return{outsideD:H({name:"outside",type:"diameter"},{minValue:1,maxValue:1e3,required:!0}),innersideD:H({name:"innerside",type:"diameter"},{minValue:0,maxValue:1e3,required:!0}),angleA:H({name:"angleA",type:"angle"},{minValue:0,maxValue:90,required:!0}),angleB:H({name:"angleB",type:"angle"},{minValue:0,maxValue:90,required:!0}),legB:H({name:"legB",type:"leg"})}};function H(e,a){return Object(P.a)(Object(P.a)({},e),{},{validation:a,valid:!a,value:0})}function z(){return Object(P.a)(Object(P.a)({},{h8:M([0,-.014],[0,-.018],[0,-.022],[0,-.027],[0,-.033],[0,-.039],[0,-.046],[0,-.054],[0,-.063]),h9:M([0,-.025],[0,-.03],[0,-.036],[0,-.043],[0,-.052],[0,-.062],[0,-.074],[0,-.087],[0,-.1]),h10:M([0,-.04],[0,-.048],[0,-.058],[0,-.07],[0,-.084],[0,-.1],[0,-.12],[0,-.14],[0,-.16]),h11:M([0,-.06],[0,-.075],[0,-.09],[0,-.11],[0,-.13],[0,-.16],[0,-.19],[0,-.22],[0,-.25]),h12:M([0,-.1],[0,-.12],[0,-.15],[0,-.18],[0,-.21],[0,-.25],[0,-.3],[0,-.35],[0,-.4]),h13:M([0,-.14],[0,-.18],[0,-.22],[0,-.27],[0,-.33],[0,-.39],[0,-.46],[0,-.54],[0,-.63]),h14:M([0,-.25],[0,-.3],[0,-.36],[0,-.43],[0,-.52],[0,-.62],[0,-.74],[0,-.87],[0,-1])}),{H8:M([.014,0],[.018,0],[.022,0],[.027,0],[.033,0],[.039,0],[.046,0],[.054,0],[.063,0]),H9:M([.025,0],[.03,0],[.036,0],[.043,0],[.052,0],[.062,0],[.074,0],[.087,0],[.1,0]),H10:M([.04,0],[.048,0],[.058,0],[.07,0],[.084,0],[.1,0],[.12,0],[.14,0],[.16,0]),H11:M([.06,0],[.075,0],[.09,0],[.11,0],[.13,0],[.16,0],[.19,0],[.22,0],[.25,0]),H12:M([.1,0],[.12,0],[.15,0],[.18,0],[.21,0],[.25,0],[.3,0],[.35,0],[.4,0]),H13:M([.14,0],[.18,0],[.22,0],[.27,0],[.33,0],[.39,0],[.46,0],[.54,0],[.63,0]),H14:M([.25,0],[.3,0],[.36,0],[.43,0],[.52,0],[.62,0],[.74,0],[.87,0],[1,0])})}function M(){for(var e=[{min:0,max:3},{min:3,max:6},{min:6,max:10},{min:10,max:18},{min:18,max:30},{min:30,max:50},{min:50,max:80},{min:80,max:120},{min:120,max:180}],a=[],t=0;t<e.length;t++){var n=e[t],l=t<0||arguments.length<=t?void 0:arguments[t];if(void 0===l)break;a.push(Object(P.a)(Object(P.a)({},n),{},{upperDeviation:l[0],bottomDeviation:l[1]}))}return a}console.log(z());var W=function(){function e(){Object(A.a)(this,e),this.partParameters=q(),this.searchSide=1}return Object(B.a)(e,[{key:"calculateBevel",value:function(){var e=this.partParameters,a=e.outsideD,t=e.innersideD,n=e.angleB,l=e.legB,r=Math.abs(a.value-t.value)/2,i=n.value*Math.PI/180,u=r*Math.tan(i),c=Math.round(10*u)/10;l.value=c}},{key:"setSearchSide",value:function(e){this.searchSide=e}},{key:"setInputsData",value:function(e,a){var t=this.partParameters[a];t.value=e,t.valid=this.parametrValidate(e,t.validation)}},{key:"clearInputsData",value:function(){for(var e in this.partParameters){this.partParameters[e].value=0}}},{key:"equilibrationAngle",value:function(){var e=this.partParameters,a=e.angleA,t=e.angleB;0===a.value&&0===t.value||(0!==t.value&&(a.value=90-t.value),0!==a.value&&(t.value=90-a.value))}},{key:"checkParametr",value:function(e,a){}},{key:"getMaxValueAngle",value:function(e){var a=this.partParameters.angleA,t=this.partParameters.angleB;"angleA"===e?t.validation.maxValue=90-a.value:a.validation.maxValue=90-t.value}},{key:"parametrValidate",value:function(e,a){if(!a)return!0;var t=!0;return a.minValue&&(t=a.minValue<=e&&t),a.maxValue&&(t=a.maxValue>=e&&t),t}}]),e}();Object(w.j)(W,{partParameters:w.o,searchSide:w.o,calculateBevel:w.f,setInputsData:w.f,clearInputsData:w.f});var U=function(){function e(){var a=this;Object(A.a)(this,e),this.dataTolerance=z(),this.currentValue={formType:"shaft",toleranceClass:"",size:0,upperDeviation:0,bottomDeviation:0},this.currentActiveCell=null,this.columns=[{title:"",dataIndex:"quality",key:"quality"},{title:"f",dataIndex:"f",key:"f",onCell:function(){return{onClick:function(e){return a.onClickCell(e.target)}}}},{title:"g",dataIndex:"g",key:"g",onCell:function(){return{onClick:function(e){return a.onClickCell(e.target)}}}},{title:"h",dataIndex:"h",key:"h",onCell:function(){return{onClick:function(e){return a.onClickCell(e.target)}}}},{title:"k",dataIndex:"k",key:"k",onCell:function(){return{onClick:function(e){return a.onClickCell(e.target)}}}}],this.data=[{key:1,quality:"8",f:"f8",g:"g8",h:"h8",k:"k8"},{key:2,quality:"9",f:"f9",g:"g9",h:"h9",k:"k9"},{key:3,quality:"10",f:"f10",g:"g10",h:"h10",k:"k10"},{key:4,quality:"11",f:"f11",g:"g11",h:"h11",k:"k11"}],this.nominalArr=[0,3,6,10,18,30,50,80,120,180]}return Object(B.a)(e,[{key:"onClickCell",value:function(e){this.currentActiveCell&&this.currentActiveCell.classList.remove("table-select"),e.classList.add("table-select"),this.currentActiveCell=e,this.currentValue.toleranceClass=e.textContent}},{key:"setFormType",value:function(e){this.currentValue.formType=e}},{key:"setSize",value:function(e){this.currentValue.size=e.trim()}},{key:"outputError",value:function(e){switch(e){case 10:console.log("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 \u043e\u0442 0 \u0434\u043e 120");break;default:console.log("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")}}},{key:"getTolerance",value:function(){var e=this,a=this.currentValue.toleranceClass,t=this.nominalArr.findIndex((function(a){return a>e.currentValue.size}));if(-1===t)return this.outputError(10);if(this.dataTolerance.hasOwnProperty(a)){var n=this.dataTolerance[a];this.currentValue.upperDeviation=n[t-1].upperDeviation,this.currentValue.bottomDeviation=n[t-1].bottomDeviation}}},{key:"getColumns",get:function(){return"hole"===this.currentValue.formType?this.columns.map((function(e,a){return 0===a?Object(P.a)({},e):Object(P.a)(Object(P.a)({},e),{},{title:e.title.toUpperCase(),key:e.key.toUpperCase()})})):this.columns}},{key:"getData",get:function(){return"hole"===this.currentValue.formType?this.data.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{f:e.f.toUpperCase(),g:e.g.toUpperCase(),h:e.h.toUpperCase(),k:e.k.toUpperCase()})})):this.data}}]),e}();Object(w.j)(U,{dataTolerance:w.o,currentValue:w.o,setFormType:w.f,setSize:w.f,getColumns:w.g,getData:w.g});var F=Object(n.createContext)({bevelStore:new W,toleranceStore:new U}),K=function(){return Object(n.useContext)(F)},G=t(171),J=function(e){return Object(G.a)(e)};var L=J((function(){var e=K().bevelStore,a=Object.keys(e.partParameters).map((function(a){var t=e.partParameters[a],n=t.name,r=t.value,i=t.type,u=t.validation,c=1===e.searchSide&&"leg"===i?"unknown-side":"",o=u?u.maxValue:100;return l.a.createElement("div",{key:n,className:"dimension-".concat(n)},"diameter"===i?l.a.createElement("span",{className:"label-".concat(i)},"\u2300"):null,l.a.createElement(I.a,{className:c,size:"small",value:r,min:0,max:o,type:"number",onChange:function(t){return function(a,t){e.setInputsData(a,t)}(t,a)}}),"angle"===i?l.a.createElement("span",{className:"label-".concat(i)},"\xb0"):null)}));return l.a.createElement("div",{className:"wrapper-content"},l.a.createElement(o.a.Title,{level:3},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0435\u0442\u0430\u043b\u0438"),l.a.createElement(S.a.Group,{onChange:function(a){return e.setSearchSide(a.target.value)},value:e.searchSide},l.a.createElement(S.a,{value:1},"A"),l.a.createElement(S.a,{value:2},"B")),l.a.createElement(T.a,{justify:"center",align:"middle",className:O.a.baseContent},l.a.createElement(_.a,null,l.a.createElement("div",{className:O.a.imageWrapper},l.a.createElement("img",{src:j.a,alt:"\u044d\u0441\u043a\u0438\u0437"}),l.a.createElement("div",null,a)))),l.a.createElement(D.a,null),l.a.createElement(T.a,{gutter:16,justify:"end"},l.a.createElement(_.a,null,l.a.createElement(N.a,{onClick:function(){return e.clearInputsData()}},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c")),l.a.createElement(_.a,null,l.a.createElement(N.a,{type:"primary",onClick:function(){e.equilibrationAngle(),e.calculateBevel()}},"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0444\u0430\u0441\u043a\u0443"))))})),Q=t(134),Y=t.n(Q),R=(t(265),t(366)),X=function(e){var a=e.columns,t=e.data;return l.a.createElement(R.a,{columns:a,dataSource:t,rowClassName:"row-square",className:"table-square",bordered:!0,pagination:!1,size:"middle"})},Z=t(121),$=t.n(Z),ee=t(370),ae=function(e){var a=e.disabled,t=void 0!==a&&a,n=e.text,r=e.value,i=void 0===r?"":r,u=e.handleChange,c=void 0===u?null:u;return l.a.createElement("div",{className:$.a.wrapInput},l.a.createElement(o.a.Text,{className:$.a.textInput},n),l.a.createElement(ee.a,{size:"small",value:i,disabled:t,className:$.a.input,onChange:c}))};var te=[{name:"home",url:"/",component:k,exact:!0},{name:"angle",url:"/angle",component:L,exact:!0},{name:"table",url:"/table",component:J((function(){var e=K().toleranceStore,a=e.currentValue,t=a.formType,n=a.toleranceClass,r=a.size,i=a.upperDeviation,u=a.bottomDeviation;return l.a.createElement("div",{className:"wrapper-content"},l.a.createElement(o.a.Title,{level:3},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043e\u043f\u0443\u0441\u043a\u043e\u0432"),l.a.createElement(T.a,{gutter:[16,16]},l.a.createElement(_.a,null,l.a.createElement(S.a.Group,{defaultValue:t,onChange:function(a){return e.setFormType(a.target.value)},buttonStyle:"solid"},l.a.createElement(S.a.Button,{className:Y.a.radioButton,value:"shaft"},"\u0412\u0430\u043b"),l.a.createElement(S.a.Button,{className:Y.a.radioButton,value:"hole"},"\u041e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435")))),l.a.createElement(T.a,{gutter:[16,16]},l.a.createElement(_.a,{xs:24,sm:12},l.a.createElement(ae,{text:"\u041d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440:",value:r,handleChange:function(a){return e.setSize(a.target.value)}}),l.a.createElement(ae,{text:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441:",value:n,disabled:!0}),l.a.createElement(ae,{text:"\u0412\u0435\u0440\u0445\u043d\u0435\u0435 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435:",value:i,disabled:!0}),l.a.createElement(ae,{text:"\u041d\u0438\u0436\u043d\u0435\u0435 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435:",value:u,disabled:!0})),l.a.createElement(_.a,{xs:24,sm:12},l.a.createElement(X,{columns:e.getColumns,data:e.getData}))),l.a.createElement(D.a,null),l.a.createElement(T.a,null,l.a.createElement(_.a,null,l.a.createElement(N.a,{type:"primary",onClick:function(){e.getTolerance()}},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"))))})),exact:!0},{url:"**",component:C}],ne={};te.forEach((function(e){e.hasOwnProperty("name")&&(ne[e.name]=e.url)}));var le=te;var re=function(e){var a=Object(g.f)();return l.a.createElement(d.a,{mode:"inline",defaultSelectedKeys:[a.pathname]},l.a.createElement(d.a.Item,{key:ne.home,icon:l.a.createElement(v.a,null),onClick:e.clickMenuItem},l.a.createElement(E.b,{to:ne.home},"Home")),l.a.createElement(d.a.Item,{key:ne.table,icon:l.a.createElement(f.a,null),onClick:e.clickMenuItem},l.a.createElement(E.b,{to:ne.table},"Table")),l.a.createElement(d.a.Item,{key:ne.angle,icon:l.a.createElement(h.a,null),onClick:e.clickMenuItem},l.a.createElement(E.b,{to:ne.angle},"\u0424\u0430\u0441\u043a\u0430")))},ie=c.a.Sider,ue=c.a.Header,ce=c.a.Content,oe=c.a.Footer,me=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{className:"logo"}))};var se=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),r=t[0],i=t[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),v=d[0],f=d[1],h=function(){f((function(e){return!e}))};return l.a.createElement("div",{className:"wrapper-base"},l.a.createElement(c.a,null,l.a.createElement(ue,{className:"header"},r?l.a.createElement(p.a,{className:"trigger",onClick:h}):l.a.createElement(me,null),l.a.createElement(o.a.Title,{level:3,className:"header-name"},"\u0427\u041f\u0423 \u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442")),l.a.createElement(c.a,null,l.a.createElement(ie,{className:"site-layout-background",breakpoint:"md",collapsedWidth:"0",trigger:null,onCollapse:function(e){i(e)}},l.a.createElement(re,null)),l.a.createElement(c.a,null,l.a.createElement(ce,{style:{margin:"24px\t16px 0"}},l.a.createElement("div",{className:"main-content site-layout-background"},e.children)),l.a.createElement(oe,{style:{textAlign:"center",padding:"15px 0"}},"Apogei Corp \xa92020 Created by Karpov Dmitryi"))),l.a.createElement(m.a,{title:l.a.createElement(me,null),placement:"left",closable:!1,onClose:h,visible:v,getContainer:!1,style:{position:"absolute"},bodyStyle:{padding:0},headerStyle:{padding:"19px 24px"}},l.a.createElement(re,{clickMenuItem:function(){v&&h()}}))))};var pe=function(){var e=le.map((function(e){var a=e.url,t=e.component,n=e.exact;return l.a.createElement(g.a,{key:a,path:a,component:t,exact:n})}));return l.a.createElement(E.a,null,l.a.createElement(se,null,l.a.createElement(g.c,null,e)))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(pe,null)),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.26e013ad.chunk.js.map