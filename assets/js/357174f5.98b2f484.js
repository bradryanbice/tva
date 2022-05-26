/*! For license information please see 357174f5.98b2f484.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9453,8935],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(20411);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54697:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(20411),r=n(52238),o="tabItem_zjxH";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},45292:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(43830),r=n(20411),o=n(12419),i=n(52184),s=n(8626),l=n(54726),u=n(52238),c="tabList_EvpL",p="tabItem_s6SZ";function d(e){var t,n,o,d=e.lazy,m=e.block,h=e.defaultValue,f=e.values,v=e.groupId,y=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),_=N.tabGroupChoices,S=N.setTabGroupChoices,O=(0,r.useState)(w),x=O[0],C=O[1],j=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=_[v];null!=T&&T!==x&&b.some((function(e){return e.value===T}))&&C(T)}var z=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==x&&(P(t),C(a),null!=v&&S(v,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},y)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:z,onClick:z},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},48951:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(20411),r=n(60002),o="icon_t5Zl",i="npmIcon_uVGz icon_t5Zl",s="link_GZb0";var l=a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 496 512",focusable:"false",height:"1rem",width:"1rem",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),u=a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 576 512",focusable:"false",height:"2rem",width:"2rem",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"})),c=(0,r._m)({kind:"weak",size:"s"}).className;function p(e){var t="github"===e.icon,n=t?o:i,r=t?l:u;return a.createElement("a",{className:c+" "+s,href:e.href,rel:"noopener",target:"_blank"},a.createElement("span",{className:n},r)," ",e.children)}},9346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var a=n(43830),r=n(32056),o=(n(20411),n(70167)),i=n(45292),s=n(54697),l=n(48951),u=["components"],c={sidebar_position:1,tags:["Development","Packages","Components","Headless Styles","Chakra"]},p="Intro",d={unversionedId:"development/packages/headless-styles/intro",id:"development/packages/headless-styles/intro",title:"Intro",description:"This is unreleased documentation for headless-styles package.",source:"@site/docs/development/packages/headless-styles/intro.mdx",sourceDirName:"development/packages/headless-styles",slug:"/development/packages/headless-styles/intro",permalink:"/docs/development/packages/headless-styles/intro",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/packages/headless-styles/intro.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Chakra",permalink:"/docs/tags/chakra"}],version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Components","Headless Styles","Chakra"]},sidebar:"development",previous:{title:"Colors",permalink:"/docs/development/packages/tokens/colors"},next:{title:"Badge",permalink:"/docs/development/packages/headless-styles/Badge"}},m={},h=[{value:"npm",id:"npm",level:2},{value:"Headless design",id:"headless-design",level:2},{value:"Examples",id:"examples",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"CSS &amp; CSS-in-JS",id:"css--css-in-js",level:2},{value:"Themeing",id:"themeing",level:3},{value:"CSS Modules",id:"css-modules",level:3},{value:"CSS-in-JS",id:"css-in-js",level:3},{value:"Chakra UI",id:"chakra-ui",level:3},{value:"Recommendation",id:"recommendation",level:2}],f={toc:h};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is ",(0,o.kt)("strong",{parentName:"p"},"unreleased")," documentation for ",(0,o.kt)("strong",{parentName:"p"},"headless-styles")," package."))),(0,o.kt)("p",{className:"page-subheadline",markdown:"1"},"Install Pluralsight's headless UI framework that works with any library or tech stack."),(0,o.kt)(l.Z,{href:"https://www.npmjs.com/package/@pluralsight/headless-styles",mdxType:"ViewSourceLink"},"@pluralsight/headless-styles"),(0,o.kt)("h2",{id:"npm"},"npm"),(0,o.kt)("p",null,"To use Headless Styles install the package with your preferred manager."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/headless-styles@alpha\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/headless-styles@alpha\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some component examples use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/packages/icons/intro"},"Icons")," package. Not all components require icons, so we do not include it in the above install recommendation."))),(0,o.kt)("h2",{id:"headless-design"},"Headless design"),(0,o.kt)("p",null,"The Headless Styles library is a component-less tool that allows you to obtain all the styles needed for components without dictating a tech-stack for your team to use. This means that you can theoretically use any combination of technology (i.e. React, Svelte, MUI, etc.) and the library should still work successfully for your team."),(0,o.kt)("p",null,"Having said that, it will always be impossible to cover every single use case so if your team comes across an instance where the styles are not matching the doc examples, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+"},"file a bug report")," so we can make sure that use case is covered."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"For each component, we provide mutliple examples using the most popular libraries. Out of the box, we provide examples for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://styled-components.com/"},"styled-components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chakra-ui.com/"},"Chakra UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mui.com/"},"MUI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://svelte.dev/"},"Svelte"))),(0,o.kt)("p",null,"If there is an additional library you would like to see provided in the examples, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/categories/polls"},"start a poll")," and if it receives enough support, we will be happy to add it in. \ud83d\ude04"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Headless Styles requires the use of our fonts and normalize setup. Please see the ",(0,o.kt)("a",{parentName:"p",href:"../../getting-started/installation"},"installation guide")," for more information."))),(0,o.kt)("h2",{id:"css--css-in-js"},"CSS & CSS-in-JS"),(0,o.kt)("p",null,"Each of our Headless Styles components will deliver APIs for both CSS and CSS-in-JS use cases. Both APIs also come with some requirements for your project that you should be aware of for the most success."),(0,o.kt)("h3",{id:"themeing"},"Themeing"),(0,o.kt)("p",null,"Internally, we use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/packages/tokens/intro"},"Design Tokens")," to control all the colors presented. Our suite comes with ",(0,o.kt)("a",{parentName:"p",href:"../tokens/colors#themes"},"multiple themes")," that work natively for ",(0,o.kt)("strong",{parentName:"p"},"CSS environments"),". This means that if your team uses CSS-in-JS, you will need to include a ",(0,o.kt)("a",{parentName:"p",href:"#css-in-js"},"provider")," to use theming."),(0,o.kt)("h3",{id:"css-modules"},"CSS Modules"),(0,o.kt)("p",null,"For the CSS APIs, we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS modules")," which allow us to deliver the best experience regarding performance and scalability. Most tools come with CSS module support baked in (i.e. ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),", ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"NextJS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),")."),(0,o.kt)("p",null,"If you are using a bundler with a custom config via ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," (or any other), you will need to make sure you add a ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/css-loader/#modules"},"loader")," which should be available for any tool you are using."),(0,o.kt)("h3",{id:"css-in-js"},"CSS-in-JS"),(0,o.kt)("p",null,'Our CSS-in-JS APIs source a generated style Object we create internally which delivers the "dark" theme by default. If you want to use a custom theme, please see our ',(0,o.kt)("a",{parentName:"p",href:"../tokens/colors#js-custom-theming"},"theme customization")," in the Tokens docs."),(0,o.kt)("p",null,'The easiest solution is to just extend this library with whatever tool you prefer to use (i.e. React, styled-components, etc.) by following each components "extending" section example.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you would like the Design System to provide a ThemeProvider solution, please contribute to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/198"},"discussion poll"),"."))),(0,o.kt)("h3",{id:"chakra-ui"},"Chakra UI"),(0,o.kt)("p",null,"We prefer not to cater to frameworks (which is the reason we designed this package the way we have). However, Chakra does provide a way for us to deliver ",(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/theming/component-style"},"style objects")," to overwrite their UI while not having to add it as a dependency to ours. \ud83d\udca5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Because of this, all of our "components" will return Chakra style objects instead of using a prop-getter function.')),(0,o.kt)("p",null,"If you use Chakra, please be mindful of this and all the examples we provide (which should work in your favor)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="How to use with Chakra"',title:'"How',to:!0,use:!0,with:!0,'Chakra"':!0},"import { theme } from '@chakra-ui/react'\nimport { chakraPSTheme } from '@pluralsight/headless-styles'\n\nconst theme = extendTheme(chakraPSTheme)\n")),(0,o.kt)("p",null,"Once you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," you can use Chakra-UI components and the ones our Web UI Kit supports will automatically be styled for you!"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some components (like the ",(0,o.kt)("a",{parentName:"p",href:"./Skeleton"},"Skeleton"),") will require some additional configuration setup to the theme config (see the Chakra example) due to the nature of Chakra being tightly coupled with Emotion."))),(0,o.kt)("h2",{id:"recommendation"},"Recommendation"),(0,o.kt)("p",null,"Our recommendation for the best user experience is to stay 3rd-party free and just stick with your Native library (i.e. React, Svelte, etc.) which will yield the best experience of our library."),(0,o.kt)("p",null,"Having said that, we know people are very passionate about UI libraries and believe they must be used in a project. Whatever your decision is, Headless-Styles aims to work with as many libraries as possible - there just may be a little extra work you will have to put in, whether updating ",(0,o.kt)("inlineCode",{parentName:"p"},"types")," or customizing for CSS animations."),(0,o.kt)("p",null,"This is due to our decision to stay as light-weight as possible and not require any additional requirements for you to use our project (i.e. you will not have to install any other package to use any of our libraries)."))}v.isMDXComponent=!0},42049:function(e,t,n){n.r(t),t.default={base:"base_b4WC",text:"text_T9m6 base_b4WC",textWeak:"textWeak_JrY8 base_b4WC",weak:"weak_lbC8 base_b4WC",medium:"medium_Nacj base_b4WC",strong:"strong_ObFT base_b4WC",xs:"xs_EoPg base_b4WC",s:"s_T4L0 base_b4WC",l:"l_s5nQ base_b4WC",textDanger:"textDanger_Hxgm base_b4WC",mediumDanger:"mediumDanger_a8uu base_b4WC",strongDanger:"strongDanger_P60J base_b4WC",light:"light_ug6Z"}},60002:function(e,t,n){t._m=t.UX=void 0;const a=n(94550),r=n(91205),o=n(41101),i=(0,a.__importDefault)(n(42049));function s(e,t){return"svelte"===e.tech?(0,o.createSvelteObj)(t.svelteClass):{className:t.defaultClass,type:"button"}}t.UX=function(e){const t=(0,r.getDefaultDangerOptions)(e),{kind:n,size:a}=t,o=`${n}Danger`;return s(t,{defaultClass:`ps-danger-btn ${i.default[o]} ${i.default[a]}`,svelteClass:`base ${n}Danger ${a}`})},t._m=function(e){const t=(0,r.getDefaultOptions)(e),{kind:n,size:a}=t;return s(t,{defaultClass:`ps-btn ${i.default[n]} ${i.default[a]}`,svelteClass:`base ${n} ${a}`})}},91205:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultDangerOptions=t.defaultDangerButtonOptions=t.getDefaultOptions=t.defaultButtonOptions=void 0,t.defaultButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultOptions=function(e){var n,a,r;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultButtonOptions.kind,size:null!==(a=null==e?void 0:e.size)&&void 0!==a?a:t.defaultButtonOptions.size,tech:null!==(r=null==e?void 0:e.tech)&&void 0!==r?r:t.defaultButtonOptions.tech}},t.defaultDangerButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultDangerOptions=function(e){var n,a,r;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:t.defaultDangerButtonOptions.kind,size:null!==(a=null==e?void 0:e.size)&&void 0!==a?a:t.defaultDangerButtonOptions.size,tech:null!==(r=null==e?void 0:e.tech)&&void 0!==r?r:t.defaultDangerButtonOptions.tech}}},41101:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.transformStyles=t.createJSProps=t.createCSSObj=t.createSvelteObj=void 0;const a=(0,n(94550).__importDefault)(n(98118));t.createSvelteObj=function(e=""){return{class:e}},t.createCSSObj=function(e,t){return Object.assign({className:e},t)},t.createJSProps=function(e,t,n){return Object.assign({cssProps:e,styles:t},n)},t.transformStyles=function(e){return Object.keys(e).reduce(((t,n)=>{const r=function(e){return e.includes("&")?e:`${(0,a.default)(e)}:`}(n);return`\n      ${t.trim()}\n      ${r} ${o=e[n],"string"==typeof o?`${o.trim()};`:`{${Object.keys(o).reduce(((e,t)=>`\n      ${e.trim()}\n      ${(0,a.default)(t)}: ${o[t]};\n    `),"")}}`}\n    `;var o}),"").trim().replace(/^ {2,12}/gm,"")}},98118:function(e,t){var n=/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,a=/-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;e.exports=t=function(e){return e.replace(n,(function(e){return"-"+e.toLowerCase()}))},t.reverse=function(e){return e.replace(a,(function(e){return e.slice(1).toUpperCase()}))}},94550:function(e,t,n){n.r(t),n.d(t,{__assign:function(){return o},__asyncDelegator:function(){return w},__asyncGenerator:function(){return k},__asyncValues:function(){return N},__await:function(){return b},__awaiter:function(){return c},__classPrivateFieldGet:function(){return C},__classPrivateFieldSet:function(){return j},__createBinding:function(){return d},__decorate:function(){return s},__exportStar:function(){return m},__extends:function(){return r},__generator:function(){return p},__importDefault:function(){return x},__importStar:function(){return O},__makeTemplateObject:function(){return _},__metadata:function(){return u},__param:function(){return l},__read:function(){return f},__rest:function(){return i},__spread:function(){return v},__spreadArray:function(){return g},__spreadArrays:function(){return y},__values:function(){return h}});var a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)};function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};function i(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}function s(e,t,n,a){var r,o=arguments.length,i=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function l(e,t){return function(n,a){t(n,a,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function c(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function s(e){try{l(a.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((a=a.apply(e,t||[])).next())}))}function p(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var d=Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]};function m(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(s){r={error:s}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,s=o.length;i<s;i++,r++)a[r]=o[i];return a}function g(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function k(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,r=n.apply(e,t||[]),o=[];return a={},i("next"),i("throw"),i("return"),a[Symbol.asyncIterator]=function(){return this},a;function i(e){r[e]&&(a[e]=function(t){return new Promise((function(n,a){o.push([e,t,n,a])>1||s(e,t)}))})}function s(e,t){try{(n=r[e](t)).value instanceof b?Promise.resolve(n.value.v).then(l,u):c(o[0][2],n)}catch(a){c(o[0][3],a)}var n}function l(e){s("next",e)}function u(e){s("throw",e)}function c(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function w(e){var t,n;return t={},a("next"),a("throw",(function(e){throw e})),a("return"),t[Symbol.iterator]=function(){return this},t;function a(a,r){t[a]=e[a]?function(t){return(n=!n)?{value:b(e[a](t)),done:"return"===a}:r?r(t):t}:r}}function N(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t);function a(n){t[n]=e[n]&&function(t){return new Promise((function(a,r){(function(e,t,n,a){Promise.resolve(a).then((function(t){e({value:t,done:n})}),t)})(a,r,(t=e[n](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var S=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return S(t,e),t}function x(e){return e&&e.__esModule?e:{default:e}}function C(e,t,n,a){if("a"===n&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)}function j(e,t,n,a,r){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?r.call(e,n):r?r.value=n:t.set(e,n),n}}}]);