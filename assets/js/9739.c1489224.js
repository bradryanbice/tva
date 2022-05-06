/*! For license information please see 9739.c1489224.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9739],{4697:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(411),o=n(2238),a="tabItem_zjxH";function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,u),hidden:n},t)}},5292:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3830),o=n(411),a=n(2419),u=n(2184),i=n(8626),l=n(4726),c=n(2238),s="tabList_EvpL",f="tabItem_s6SZ";function d(e){var t,n,a,d=e.lazy,p=e.block,v=e.defaultValue,b=e.values,y=e.groupId,h=e.className,m=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=b?b:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.l)(_,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===v?v:null!=(t=null!=v?v:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==w&&!_.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+_.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,i.U)(),P=O.tabGroupChoices,j=O.setTabGroupChoices,S=(0,o.useState)(w),D=S[0],k=S[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var T=P[y];null!=T&&T!==D&&_.some((function(e){return e.value===T}))&&k(T)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=_[n].value;r!==D&&(E(t),k(r),null!=y&&j(y,r))},$=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.currentTarget)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},h)},_.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return x.push(e)},onKeyDown:$,onFocus:C,onClick:C},a,{className:(0,c.Z)("tabs__item",f,null==a?void 0:a.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),d?(0,o.cloneElement)(m.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function p(e){var t=(0,a.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},629:function(e,t,n){n.r(t),t.default={base:"base_PcJQ",text:"text_lf0n base_PcJQ",textWeak:"textWeak_uoQ7 base_PcJQ",weak:"weak_jnRm base_PcJQ",medium:"medium_T3al base_PcJQ",strong:"strong_ogwA base_PcJQ",xs:"xs_BgGO base_PcJQ",s:"s_A7bA base_PcJQ",l:"l_vg6m base_PcJQ",textDanger:"textDanger_EO_z base_PcJQ",mediumDanger:"mediumDanger_tQTW base_PcJQ",strongDanger:"strongDanger_ElJj base_PcJQ",light:"light_GFNA"}},4735:function(e,t,n){t._m=t.UX=void 0;const r=n(4550),o=n(369),a=n(5703),u=(0,r.__importDefault)(n(629));function i(e,t){return"svelte"===e.tech?(0,a.createSvelteObj)(t.svelteClass):{className:t.defaultClass,type:"button"}}t.UX=function(e){const t=(0,o.getDefaultDangerOptions)(e),{kind:n,size:r}=t,a=`${n}Danger`;return i(t,{defaultClass:`ps-danger-btn ${u.default[a]} ${u.default[r]}`,svelteClass:`base ${n}Danger ${r}`})},t._m=function(e){const t=(0,o.getDefaultOptions)(e),{kind:n,size:r}=t;return i(t,{defaultClass:`ps-btn ${u.default[n]} ${u.default[r]}`,svelteClass:`base ${n} ${r}`})}},369:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultDangerOptions=t.defaultDangerButtonOptions=t.getDefaultOptions=t.defaultButtonOptions=void 0,t.defaultButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultOptions=function(e){var n,r,o;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultButtonOptions.kind,size:null!==(r=null==e?void 0:e.size)&&void 0!==r?r:t.defaultButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultButtonOptions.tech}},t.defaultDangerButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultDangerOptions=function(e){var n,r,o;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultDangerButtonOptions.kind,size:null!==(r=null==e?void 0:e.size)&&void 0!==r?r:t.defaultDangerButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultDangerButtonOptions.tech}}},5703:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.transformStyles=t.createJSProps=t.createCSSObj=t.createSvelteObj=void 0;const r=(0,n(4550).__importDefault)(n(8118));t.createSvelteObj=function(e=""){return{class:e}},t.createCSSObj=function(e,t){return Object.assign({className:e},t)},t.createJSProps=function(e,t,n){return Object.assign({cssProps:e,styles:t},n)},t.transformStyles=function(e){return Object.keys(e).reduce(((t,n)=>{const o=function(e){return e.includes("&")?e:`${(0,r.default)(e)}:`}(n);return`\n      ${t.trim()}\n      ${o} ${a=e[n],"string"==typeof a?`${a.trim()};`:`{${Object.keys(a).reduce(((e,t)=>`\n      ${e.trim()}\n      ${(0,r.default)(t)}: ${a[t]};\n    `),"")}}`}\n    `;var a}),"").trim().replace(/^ {2,12}/gm,"")}},8118:function(e,t){var n=/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,r=/-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;e.exports=t=function(e){return e.replace(n,(function(e){return"-"+e.toLowerCase()}))},t.reverse=function(e){return e.replace(r,(function(e){return e.slice(1).toUpperCase()}))}},4550:function(e,t,n){n.r(t),n.d(t,{__assign:function(){return a},__asyncDelegator:function(){return w},__asyncGenerator:function(){return g},__asyncValues:function(){return O},__await:function(){return _},__awaiter:function(){return s},__classPrivateFieldGet:function(){return k},__classPrivateFieldSet:function(){return x},__createBinding:function(){return d},__decorate:function(){return i},__exportStar:function(){return p},__extends:function(){return o},__generator:function(){return f},__importDefault:function(){return D},__importStar:function(){return S},__makeTemplateObject:function(){return P},__metadata:function(){return c},__param:function(){return l},__read:function(){return b},__rest:function(){return u},__spread:function(){return y},__spreadArray:function(){return m},__spreadArrays:function(){return h},__values:function(){return v}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function i(e,t,n,r){var o,a=arguments.length,u=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(a<3?o(u):a>3?o(t,n,u):o(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u}function l(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,a){function u(e){try{l(r.next(e))}catch(t){a(t)}}function i(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}l((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)u.push(r.value)}catch(i){o={error:i}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return u}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],u=0,i=a.length;u<i;u++,o++)r[o]=a[u];return r}function m(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function _(e){return this instanceof _?(this.v=e,this):new _(e)}function g(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||i(e,t)}))})}function i(e,t){try{(n=o[e](t)).value instanceof _?Promise.resolve(n.value.v).then(l,c):s(a[0][2],n)}catch(r){s(a[0][3],r)}var n}function l(e){i("next",e)}function c(e){i("throw",e)}function s(e,t){e(t),a.shift(),a.length&&i(a[0][0],a[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:_(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return j(t,e),t}function D(e){return e&&e.__esModule?e:{default:e}}function k(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function x(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);