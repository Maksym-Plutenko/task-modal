/*! For license information please see 854.21197a71.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[854],{854:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var r,o,i,a,c,l,u,s,d,h,p,f,g=e(164),m=e(168),x=e(791),v=e(867),y=e(53),b=e(329),w=v.ZP.div(r||(r=(0,m.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1000;\n  transform: translate(-50%, -50%) scale(1);\n  background-color: #ffffff;\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-top: 48px;\n  padding-bottom: 40px;\n  border: 1px solid #dce3e5cc;\n  border-radius: 8px;\n  box-shadow: 0px 4px 16px 0px #1111111a;\n\n  @media screen and (min-width: 768px) {\n    padding-left: 28px;\n    padding-right: 28px;\n    padding-top: 40px;\n  }\n"]))),j=v.ZP.button(o||(o=(0,m.Z)(["\n  position: absolute;\n  right: 14px;\n  top: 14px;\n  border: none;\n  outline: none;\n  background: none;\n  padding: 6px;\n"]))),k=function(n){var t=n.close,e=n.children;return(0,x.useEffect)((function(){var n=function(n){"Escape"===n.key&&t()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[t]),(0,b.jsxs)(w,{children:[(0,b.jsx)(j,{onClick:function(n){t()},children:(0,b.jsx)(y.nfZ,{size:12})}),e]})},N=e(861),E=e(705),L=e(820),C=e(126),_=function(n){var t=n.split(":");return 2===t.length&&2===t[0].length&&2===t[1].length&&!Number.isNaN(Number(t[0]))&&!Number.isNaN(Number(t[1]))},z=function(n){var t={};return n.title?n.title.length>250&&(t.title="Must be 250 characters or less"):t.title="Required",n.start?_(n.start)||(t.start="XX:YY format only"):t.start="Required",n.end?_(n.end)?function(n,t){var e=n.split(":"),r=60*Number(e[0])+Number(e[1]),o=t.split(":");return 60*Number(o[0])+Number(o[1])>r}(n.start,n.end)||(t.end="End must be after start"):t.end="XX:YY format only":t.end="Required","low"!==n.priority&&"medium"!==n.priority&&"high"!==n.priority&&(t.priority="Wrong checkbox selected"),t},Z="#3e85f3",O="#ffffff",S="#72c2f8",P="#f3b249",Y="#ea3d65",F=v.zo.label(i||(i=(0,m.Z)(["\n  display: block;\n  width: 100%;\n\n  font-family: Inter;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  letter-spacing: 0em;\n  color: #343434cc;\n"]))),G=v.zo.input(a||(a=(0,m.Z)(["\n  display: block;\n  min-width: 10px;\n  width: 100%;\n\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 14px;\n  padding-right: 14px;\n  border-radius: 8px;\n  background-color: #f6f6f6;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: #343434;\n\n  border: none;\n  outline: none;\n\n  margin-top: 8px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 14px;\n    padding-bottom: 14px;\n    padding-left: 18px;\n    padding-right: 18px;\n  }\n"]))),I=v.zo.div(c||(c=(0,m.Z)(["\n  display: flex;\n  gap: 15px;\n  max-width: 267px;\n\n  margin-top: 16px;\n  margin-bottom: 16px;\n\n  @media screen and (min-width: 375px) {\n    width: 267px;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 14px;\n    width: 340px;\n    max-width: 340px;\n    margin-top: 18px;\n    margin-bottom: 28px;\n  }\n"]))),X=v.zo.div(l||(l=(0,m.Z)(["\n  display: flex;\n  gap: 16px;\n  padding-left: 3px;\n  margin-bottom: 32px;\n"]))),T=v.zo.input(u||(u=(0,m.Z)(["\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n\n  &:checked + label::before {\n    outline: 3px solid ",";\n  }\n\n  &:checked + label[for='medium']::before {\n    outline-color: ",";\n  }\n\n  &:checked + label[for='high']::before {\n    outline-color: ",";\n  }\n"])),S+"80",P+"80",Y+"80"),A=v.zo.label(s||(s=(0,m.Z)(["\n  font-family: Inter;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: #343434;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    width: 9px;\n    height: 9px;\n    border-radius: 50%;\n    background-color: ",";\n    border: 1px solid white;\n    margin-right: 5px;\n\n    @media screen and (min-width: 768px) {\n      width: 11px;\n      height: 11px;\n    }\n  }\n\n  &[for='medium']::before {\n    background-color: ",";\n  }\n\n  &[for='high']::before {\n    background-color: ",";\n  }\n"])),S,P,Y),R=v.zo.div(d||(d=(0,m.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),q="\n  width: 100%;\n  padding: 8px;\n  border-radius: 8px;\n\n  border: none;\n  outline: none;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    padding: 10px;\n  }\n",M=v.zo.button(h||(h=(0,m.Z)(["\n  ","\n  color: ",";\n  background-color: ",";\n"])),q,O,Z),H=v.zo.button(p||(p=(0,m.Z)(["\n  ","\n  color: #111111;\n  background-color: #efefef;\n"])),q),J=v.zo.p(f||(f=(0,m.Z)(["\n  font-family: Inter;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: red;\n"])));function V(){V=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,r=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(_){l=function(n,t,e){return n[t]=e}}function u(n,t,e,o){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),c=new E(o||[]);return r(a,"_invoke",{value:w(n,e,c)}),a}function s(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(_){return{type:"throw",arg:_}}}n.wrap=u;var d={};function h(){}function p(){}function f(){}var g={};l(g,i,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(L([])));x&&x!==t&&e.call(x,i)&&(g=x);var v=f.prototype=h.prototype=Object.create(g);function y(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function b(n,t){function o(r,i,a,c){var l=s(n[r],n,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&e.call(d,"__await")?t.resolve(d.__await).then((function(n){o("next",n,a,c)}),(function(n){o("throw",n,a,c)})):t.resolve(d).then((function(n){u.value=n,a(u)}),(function(n){return o("throw",n,a,c)}))}c(l.arg)}var i;r(this,"_invoke",{value:function(n,e){function r(){return new t((function(t,r){o(n,e,t,r)}))}return i=i?i.then(r,r):r()}})}function w(n,t,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return C()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=s(n,t,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}function j(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,j(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=s(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function k(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function N(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function E(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(k,this),this.reset(!0)}function L(n){if(n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,o=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,r(v,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:p,configurable:!0}),p.displayName=l(f,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,f):(n.__proto__=f,l(n,c,"GeneratorFunction")),n.prototype=Object.create(v),n},n.awrap=function(n){return{__await:n}},y(b.prototype),l(b.prototype,a,(function(){return this})),n.AsyncIterator=b,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new b(u(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},y(v),l(v,c,"Generator"),l(v,i,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=L,E.prototype={constructor:E,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return a.type="throw",a.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),l=e.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),d},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),N(e),d}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:L(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},n}var W=function(n){var t=n.close,e=n.create,r=n.task,o=(0,x.useRef)(""),i=(0,E.TA)({initialValues:{title:r.title||"Enter text",start:r.start||"09:00",end:r.end||"09:30",priority:r.priority||"low"},validate:z,onSubmit:function(n){alert(JSON.stringify(n,null,2))}});(0,x.useEffect)((function(){var n=i.values.start;n.length>o.current.length&&(n=function(n){var t=n;if(1===n.length){var e=Number(n);Number.isNaN(e)||e>2&&(t="0"+n+":")}if(2===n.length){var r=Number(n);Number.isNaN(r)||(t=r>24?"24:":n+":")}if(4===n.length){var o=n.split(":"),i=Number(o[1]);Number.isNaN(i)||i>5&&(t=o[0]+":0"+o[1])}return 7===n.length&&(t=n.slice(0,6)),t}(n),i.values.start=n),o.current=n}));var a=function(){var n=(0,N.Z)(V().mark((function n(t){return V().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=function(){var n=(0,N.Z)(V().mark((function n(t){return V().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,b.jsxs)("form",{onSubmit:i.handleSubmit,children:[(0,b.jsxs)("div",{role:"group",children:[(0,b.jsxs)(F,{children:["Title",(0,b.jsx)(G,{id:"title",name:"title",type:"text",onChange:i.handleChange,value:i.values.title,placeholder:"Enter text"}),i.errors.title&&(0,b.jsx)(J,{children:i.errors.title})]}),(0,b.jsxs)(I,{children:[(0,b.jsxs)(F,{children:["Start",(0,b.jsx)(G,{id:"start",name:"start",type:"text",onChange:i.handleChange,value:i.values.start,placeholder:"XX:YY"}),i.errors.start&&(0,b.jsx)(J,{children:i.errors.start})]}),(0,b.jsxs)(F,{children:["End",(0,b.jsx)(G,{id:"end",name:"end",type:"text",onChange:i.handleChange,value:i.values.end,placeholder:"XX:YY"}),i.errors.end&&(0,b.jsx)(J,{children:i.errors.end})]})]}),(0,b.jsxs)(X,{children:[(0,b.jsx)(T,{id:"low",name:"priority",type:"radio",onChange:i.handleChange,value:"low",checked:"low"===i.values.priority}),(0,b.jsx)(A,{htmlFor:"low",children:"Low"}),(0,b.jsx)(T,{id:"medium",name:"priority",type:"radio",onChange:i.handleChange,value:"medium",checked:"medium"===i.values.priority}),(0,b.jsx)(A,{htmlFor:"medium",children:"Medium"}),(0,b.jsx)(T,{id:"high",name:"priority",type:"radio",onChange:i.handleChange,value:"high",checked:"high"===i.values.priority}),(0,b.jsx)(A,{htmlFor:"high",children:"High"})]}),i.errors.priority&&(0,b.jsx)(J,{children:i.errors.priority})]}),e?(0,b.jsxs)(R,{children:[(0,b.jsxs)(M,{type:"submit",onClick:a,children:[(0,b.jsx)(L.Lfi,{}),"Add"]}),(0,b.jsx)(H,{type:"button",onClick:function(n){t(),console.log(i.errors)},children:"Cansel"})]}):(0,b.jsxs)(M,{type:"submit",onClick:c,children:[(0,b.jsx)(C.jox,{}),"Edit"]})]})},B=function(n){var t=n.close,e=n.create,r=n.task;return(0,g.createPortal)((0,b.jsx)(k,{close:t,children:(0,b.jsx)(W,{close:t,create:e,task:r})}),document.body)}}}]);
//# sourceMappingURL=854.21197a71.chunk.js.map