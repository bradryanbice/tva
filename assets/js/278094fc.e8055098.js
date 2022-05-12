"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[674],{167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(411);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4697:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(411),r=n(2238),o="tabItem_zjxH";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5292:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3830),r=n(411),o=n(2419),i=n(2184),l=n(8626),s=n(4726),u=n(2238),p="tabList_EvpL",c="tabItem_s6SZ";function m(e){var t,n,o,m=e.lazy,d=e.block,h=e.defaultValue,y=e.values,g=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=y?y:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===h?h:null!=(t=null!=h?h:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),P=N.tabGroupChoices,x=N.setTabGroupChoices,S=(0,r.useState)(k),B=S[0],T=S[1],j=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var D=P[g];null!=D&&D!==B&&b.some((function(e){return e.value===D}))&&T(D)}var O=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==B&&(C(t),T(a),null!=g&&x(g,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":B===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(f.filter((function(e){return e.props.value===B}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==B})}))))}function d(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},7402:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(3830),r=n(2056),o=(n(411),n(167)),i=n(5292),l=n(4697),s=["components"],u={sidebar_position:7,tags:["Development","Getting Started","Migration","PSDS Classic"]},p="Migration",c={unversionedId:"development/getting-started/migration",id:"development/getting-started/migration",title:"Migration",description:"Learn how to migrate from PSDS Classic.",source:"@site/docs/development/getting-started/migration.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/migration",permalink:"/docs/development/getting-started/migration",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/getting-started/migration.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Getting Started",permalink:"/docs/tags/getting-started"},{label:"Migration",permalink:"/docs/tags/migration"},{label:"PSDS Classic",permalink:"/docs/tags/psds-classic"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:7,frontMatter:{sidebar_position:7,tags:["Development","Getting Started","Migration","PSDS Classic"]},sidebar:"development",previous:{title:"Support",permalink:"/docs/development/getting-started/support"},next:{title:"Intro",permalink:"/docs/development/packages/tokens/intro"}},m={},d=[{value:"Why should you migrate?",id:"why-should-you-migrate",level:2},{value:"Step by step",id:"step-by-step",level:2},{value:"Step 1 - Installation",id:"step-1---installation",level:3},{value:"Step 2 - Create",id:"step-2---create",level:3},{value:"Step 2 - Create (CSS-in-JS example)",id:"step-2---create-css-in-js-example",level:3},{value:"Step 3 - Replace",id:"step-3---replace",level:3},{value:"General Advices",id:"general-advices",level:2},{value:"Migrate slowly",id:"migrate-slowly",level:3},{value:"You do you",id:"you-do-you",level:3}],h={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration"},"Migration"),(0,o.kt)("p",{class:"page-subheadline",markdown:"1"},"Learn how to migrate from ",(0,o.kt)("a",{href:"https://github.com/pluralsight/design-system",target:"_blank",rel:"noopener noreferrer"},"PSDS Classic"),"."),(0,o.kt)("p",null,"Any major release or new framework has its breaking changes and PD isn't the exception. However, since this is a completely different design it should be easy to transition on your own terms - no matter the size or complexity of your project. To make this process more efficient we've listed below the recommended migrations steps, along with soutions for the most common problems you might face."),(0,o.kt)("h2",{id:"why-should-you-migrate"},"Why should you migrate?"),(0,o.kt)("p",null,"In a few words, upgrading to PD is critical to a fast and stable UI experience. Numerous bugs are naturally fixed since Classic, and we no longer expect to build new features in Classic. ",(0,o.kt)("strong",{parentName:"p"},"Even if you don't plan to use the entire PD suite")," your projects will still get benefits from the upgrade."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Small components (Button, etc.) will provide an improved experience to both your projects and customer experiences"),(0,o.kt)("li",{parentName:"ul"},"A renewed focus on performances and good practices (we plan on having a public dashboard soon)"),(0,o.kt)("li",{parentName:"ul"},"Improved user experience for various projects (scalable and framework agnostic)"),(0,o.kt)("li",{parentName:"ul"},"New capabilities (can work with any tech stack so you can pivot easier)")),(0,o.kt)("p",null,"And of course a very active development cycle."),(0,o.kt)("h2",{id:"step-by-step"},"Step by step"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Don't worry if your team or project isn't quite ready for the full PD takeover just yet! This guide will let you migrate ",(0,o.kt)("strong",{parentName:"p"},"without introducing breaking changes"),"."))),(0,o.kt)("p",null,"The biggest benefit of PD is that it ",(0,o.kt)("em",{parentName:"p"},"only owns styles and accessbility")," and ",(0,o.kt)("em",{parentName:"p"},"is not a component library")," which means you will own the components and can scale or customize to whatever your situation may require."),(0,o.kt)("p",null,'Below we\'ll look at migrating the Button component which will be the same pattern you can use for all the PD "components".'),(0,o.kt)("h3",{id:"step-1---installation"},"Step 1 - Installation"),(0,o.kt)("p",null,"In order to use PD, we need to get it into your project first. For most projects, you will only need to install the components and icons packages."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/headless-styles @pluralsight/icons\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/headless-styles @pluralsight/icons\n")))),(0,o.kt)("p",null,"All of our packages are lightweight because they only use vanilla JS/TS, so you don't have to worry about adding additional overhead to your bundle size."),(0,o.kt)("h3",{id:"step-2---create"},"Step 2 - Create"),(0,o.kt)("p",null,"Since PD is headless library and not a component one, you will (and should) create a new Button component in your project. This will allow you to have full control while not worrying about styles and accessiblity."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is considered a React/Component library best practice to create Button components with a ",(0,o.kt)("strong",{parentName:"p"},"specific purpose"),'. An example would be to create an "EditButton" or "PrimaryButton". This helps you to create components that will contain less props which will have better performance and scale easier.'))),(0,o.kt)("p",null,"In this example, we are creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"PrimaryButton")," for your project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/PrimaryButton.tsx"',title:'"components/PrimaryButton.tsx"'},"import { getButtonProps } from '@pluralsight/headless-styles'\nimport type { ButtonHTMLAttributes } from 'react'\n\ntype Props = ButtonHTMLAttributes<HTMLButtonElement>\n\nexport default function PrimaryButton(props: Props) {\n  const psProps = getButtonProps({\n    kind: 'default',\n    size: props.size || 'm',\n  })\n  const classes = `${props.className} ${psProps.className}`\n\n  return (\n    <button {...props} {...psProps} className={classes}>\n      {props.children}\n    </button>\n  )\n}\n")),(0,o.kt)("p",null,"Now, you can migrate all your Primary buttons over to use the PS created ones which will also give you more control as a team. This approach allows you to have a easier and low risk migration path without forcing a tech-debt lump that must ship everything at once."),(0,o.kt)("h3",{id:"step-2---create-css-in-js-example"},"Step 2 - Create (CSS-in-JS example)"),(0,o.kt)("p",null,"If you are a team that uses CSS-in-JS, you can just as easily use the same strategy above with your preferred tech stack. In this example, we'll use React with styled components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/PrimaryButton.tsx"',title:'"components/PrimaryButton.tsx"'},"import styled from 'styled-components'\nimport { getButtonProps } from '@pluralsight/headless-styles'\n\nconst PrimaryButton = styled.button`\n  ${getJSButtonProps().cssProps},\n`\n\nexport default PrimaryButton\n")),(0,o.kt)("h3",{id:"step-3---replace"},"Step 3 - Replace"),(0,o.kt)("p",null,"Now that you have created your new component, depending on your migration strategy, you can search all for ",(0,o.kt)("inlineCode",{parentName:"p"},"appearance={Button.appearances.primary}")," and update the code with your new ",(0,o.kt)("inlineCode",{parentName:"p"},"PrimaryButton"),". If you follow the examples we have, your ",(0,o.kt)("inlineCode",{parentName:"p"},"PrimaryButtons")," will automatically accept all HTML Button properties which means that you will have a new Button API that is more flexible and easier to read/maintain for all developers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Old Button"',title:'"Old','Button"':!0},"import Button from '@pluralsight/ps-design-system-button'\n\n...\n\n<Button appearance={Button.appearances.primary} onClick={handleClick} type=\"submit\">\n  Do something\n</Button>\n")),(0,o.kt)("p",null,"Now becomes..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="New Button"',title:'"New','Button"':!0},"import PrimaryButton from 'components/PrimaryButton'\n\n...\n\n<PrimaryButton onClick={handleClick} type=\"submit\">\n  Do something\n</PrimaryButton>\n")),(0,o.kt)("h2",{id:"general-advices"},"General Advices"),(0,o.kt)("h3",{id:"migrate-slowly"},"Migrate slowly"),(0,o.kt)("p",null,"At the end of the day, all migration is tech-debt. Don't overwhelm yourself or your team by approaching a mass migration. Taking that route not only sucks the life from your team but also risks introducing bugs through natural human error of being overwhelmed by large PR's or rubber stamping."),(0,o.kt)("h3",{id:"you-do-you"},"You do you"),(0,o.kt)("p",null,'Every project is different and part of the biggest benefit of PD is the flexibility. All of our docs will provide examples for our "components" but only ',(0,o.kt)("strong",{parentName:"p"},"your team")," knows what is best for your project. When your team are preparing for your migration use our examples as that - examples - and build your components for what makes the most sense in your project (for maintainability and scalability)."),(0,o.kt)("p",null,"We will always have you covered for styles and accessbility, but your team will be the ones maintaining your project which means you know the best path for creation."))}y.isMDXComponent=!0}}]);