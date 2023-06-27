/*! For license information please see 896.7fa731b9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[896],{896:function(t,n,e){e.r(n),e.d(n,{default:function(){return z}});var r,o,i,a,c,u,l,s,h,p=e(164),f=e(168),d=e(791),v=e(867),g=e(329),y=v.ZP.div(r||(r=(0,f.Z)(["\nposition: absolute;\nleft: 50%;\ntop: 50%;\ntransform: translate(-50%, -50%) scale(1);\nbackground color: #ffffff;\npadding-left: 28px;\npadding-right: 28px;\npadding-top: 40px;\npadding-bottom: 40px;\nborder: 1px solid #DCE3E5CC;\nborder-radius: 8px;\nbox-shadow: 0px 4px 16px 0px #1111111A;\n"]))),x=v.ZP.button(o||(o=(0,f.Z)(["\n  position: absolute;\n  right: 14px;\n  top: 14px;\n"]))),m=function(t){var n=t.close,e=t.children;return(0,d.useEffect)((function(){var t=function(t){"Escape"===t.key&&n()};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[n]),(0,g.jsxs)(y,{children:[(0,g.jsx)(x,{onClick:function(t){n()},children:(0,g.jsx)("svg",{width:"24px",height:"24px",children:(0,g.jsx)("use",{href:"../../images/svg/sprite.svg#x-close"})})}),e]})},w=e(861),b=e(705);function j(){j=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(Z){u=function(t,n,e){return t[n]=e}}function l(t,n,e,o){var i=n&&n.prototype instanceof p?n:p,a=Object.create(i.prototype),c=new C(o||[]);return r(a,"_invoke",{value:b(t,e,c)}),a}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=l;var h={};function p(){}function f(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(_([])));y&&y!==n&&e.call(y,i)&&(v=y);var x=d.prototype=p.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function o(r,i,a,c){var u=s(t[r],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return i=i?i.then(r,r):r()}})}function b(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=s(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function k(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,k(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=d,r(x,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:f,configurable:!0}),f.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},m(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new w(l(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var k=v.zo.label(i||(i=(0,f.Z)(["\n  display: block;\n  width: 100%;\n\n  font-family: Inter;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  letter-spacing: 0em;\n  color: #343434cc;\n"]))),E=v.zo.input(a||(a=(0,f.Z)(["\n  display: block;\n  min-width: 10px;\n  width: 100%;\n  height: 46px;\n\n  padding-left: 18px;\n  padding-right: 18px;\n  background-color: #f6f6f6;\n  border-radius: 8px;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: #343434;\n\n  border: none;\n  outline: none;\n\n  margin-top: 8px;\n"]))),L=v.zo.div(c||(c=(0,f.Z)(["\n  display: flex;\n  gap: 14px;\n  width: 340px;\n\n  margin-top: 18px;\n  margin-bottom: 28px;\n"]))),C=v.zo.div(u||(u=(0,f.Z)(["\n  display: flex;\n  gap: 16px;\n  width: 340px;\n\n  margin-bottom: 32px;\n"]))),_=v.zo.label(l||(l=(0,f.Z)(["\nfont-family: Inter;\nfont-size: 14px;\nfont-weight: 600;\nline-height: 18px;\nletter-spacing: 0em;\ncolor: #343434;\n\n"]))),O=v.zo.div(s||(s=(0,f.Z)(["\n  display: flex;\n  gap: 14px;\n  width: 340px;\n"]))),Z=v.zo.button(h||(h=(0,f.Z)(["\n  width: 100%;\n  padding: 14px;\n  color: white;\n  background-color: #3e85f3;\n  border-radius: 8px;\n\n  border: none;\n  outline: none;\n"]))),S=function(t){var n=t.close,e=t.create,r=t.task,o=(0,b.TA)({initialValues:{title:r.title||"",start:r.start||"09:00",end:r.end||"09:30",priority:r.priority||"low"},onSubmit:function(t){alert(JSON.stringify(t,null,2))}}),i=function(){var t=(0,w.Z)(j().mark((function t(n){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),a=function(){var t=(0,w.Z)(j().mark((function t(n){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,g.jsxs)("form",{onSubmit:o.handleSubmit,children:[(0,g.jsxs)("div",{role:"group",children:[(0,g.jsxs)(k,{children:["Title",(0,g.jsx)(E,{id:"title",name:"title",type:"text",onChange:o.handleChange,value:o.values.title,placeholder:"Enter text"})]}),(0,g.jsxs)(L,{children:[(0,g.jsxs)(k,{children:["Start",(0,g.jsx)(E,{id:"start",name:"start",type:"text",onChange:o.handleChange,value:o.values.start})]}),(0,g.jsxs)(k,{children:["End",(0,g.jsx)(E,{id:"end",name:"end",type:"text",onChange:o.handleChange,value:o.values.end})]})]}),(0,g.jsxs)(C,{children:[(0,g.jsxs)(_,{children:["Low",(0,g.jsx)("input",{name:"priority",type:"radio",onChange:o.handleChange,value:"low",checked:"low"===o.values.priority})]}),(0,g.jsxs)(_,{children:["Medium",(0,g.jsx)("input",{name:"priority",type:"radio",onChange:o.handleChange,value:"medium",checked:"medium"===o.values.priority})]}),(0,g.jsxs)(_,{children:["High",(0,g.jsx)("input",{name:"priority",type:"radio",onChange:o.handleChange,value:"high",checked:"high"===o.values.priority})]})]})]}),e?(0,g.jsxs)(O,{children:[(0,g.jsx)(Z,{type:"submit",onClick:i,children:"Add"}),(0,g.jsx)(Z,{type:"button",onClick:function(t){n(),console.log(o.errors)},children:"Cansel"})]}):(0,g.jsx)(Z,{type:"submit",onClick:a,children:"Edit"})]})},z=function(t){var n=t.close,e=t.create,r=t.task;return(0,p.createPortal)((0,g.jsx)(m,{close:n,children:(0,g.jsx)(S,{close:n,create:e,task:r})}),document.body)}}}]);
//# sourceMappingURL=896.7fa731b9.chunk.js.map