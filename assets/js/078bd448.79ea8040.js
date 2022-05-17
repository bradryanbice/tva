"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4350],{167:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(411);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9296:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(3830),a=r(2056),o=(r(411),r(167)),i=["components"],s={sidebar_position:2,tags:["Development","Discover More","Versions","Version Strategy","Release frequency","Deprecation Policy"]},l="Versions",c={unversionedId:"development/discover-more/versions",id:"development/discover-more/versions",title:"Versions",description:"Learn how we approach versioning and releases for Pluralsight Design.",source:"@site/docs/development/discover-more/versions.md",sourceDirName:"development/discover-more",slug:"/development/discover-more/versions",permalink:"/docs/development/discover-more/versions",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/discover-more/versions.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Discover More",permalink:"/docs/tags/discover-more"},{label:"Versions",permalink:"/docs/tags/versions"},{label:"Version Strategy",permalink:"/docs/tags/version-strategy"},{label:"Release frequency",permalink:"/docs/tags/release-frequency"},{label:"Deprecation Policy",permalink:"/docs/tags/deprecation-policy"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Discover More","Versions","Version Strategy","Release frequency","Deprecation Policy"]},sidebar:"development",previous:{title:"Roadmap",permalink:"/docs/development/discover-more/roadmap"},next:{title:"Vision",permalink:"/docs/development/discover-more/vision"}},p={},u=[{value:"Version strategy",id:"version-strategy",level:2},{value:"Release frequency",id:"release-frequency",level:2},{value:"Deprecation practices",id:"deprecation-practices",level:2},{value:"Deprecation policy",id:"deprecation-policy",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"versions"},"Versions"),(0,o.kt)("p",null,"Learn how we approach versioning and releases for Pluralsight Design."),(0,o.kt)("h2",{id:"version-strategy"},"Version strategy"),(0,o.kt)("p",null,"Stability ensures that reusable components and libraries, tutorials, tools, and learned practices don't become obsolete unexpectedly. Stability is essential for the ecosystem around Pluralsight Design to thrive."),(0,o.kt)("p",null,"This page contains the practices we follow to provide you with a leading-edge library, balanced with stability, ensuring that future changes are always introduced in a predictable way."),(0,o.kt)("p",null,"Pluralsight Design follows ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0"),". Pluralsight Design version numbers have three parts ",(0,o.kt)("inlineCode",{parentName:"p"},"major.minor.patch"),". These numbers increase based on the level of change introduced in a release."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Major releases")," contain new features. Some developer assistance may be expected during the update although we strive to stay backwards compatible. When upgrading to a new major release, you may need to run update scripts, refactor code, run additional tests, and learn new APIs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minor releases")," contain important new features. Minor releases are fully backwards-compatible; no developer assistance is expected during update, but you can optionally modify your apps and libraries to begin using new APIs, features, and capabilities that were added in the release."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Patch releases")," are low risk and contain mostly bugfixes. There may be very high level (unrecognizable) new features. No developer assistance is expected during and update.")),(0,o.kt)("h2",{id:"release-frequency"},"Release frequency"),(0,o.kt)("p",null,"A regular schedule of releases helps you plan and coordinate your updates with the continuing evolution of Pluralsight Design."),(0,o.kt)("p",null,"In general, you can expect the following release cycle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"major")," release every 12 months."),(0,o.kt)("li",{parentName:"ul"},"1-3 ",(0,o.kt)("strong",{parentName:"li"},"minor")," releases for each major release."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"patch")," release every week (anytime for urgent bugfixes).")),(0,o.kt)("p",null,"You can follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/milestones"},"milestones")," for a detailed review of what releases contain."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The development, releases, and timing of any features or functionality remains at the sole discretion of Pluralsight Design. The roadmap does not represent a commitment, obligation, or promise to deliver at any time."))),(0,o.kt)("h2",{id:"deprecation-practices"},"Deprecation practices"),(0,o.kt)("p",null,"Sometimes ",(0,o.kt)("strong",{parentName:"p"},'"breaking changes"'),", such as the removal of support for select APIs and features, are necessary."),(0,o.kt)("p",null,"To make these transitions as easy as possible:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of breaking changes is minimized, and migration tools are provided when possible."),(0,o.kt)("li",{parentName:"ul"},"The deprecation policy described below is followed, so that you have time to update your apps to the latest APIs and best practices.")),(0,o.kt)("h3",{id:"deprecation-policy"},"Deprecation policy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deprecated features are announced in the changelog, and when possible, will include warnings at runtime."),(0,o.kt)("li",{parentName:"ul"},"When a deprecation is announced a recommended update path is provided."),(0,o.kt)("li",{parentName:"ul"},"Existing use of a stable API during the deprecation period is supported, so your code will keep working during that period."),(0,o.kt)("li",{parentName:"ul"},"Peer dependency updates that require changes to your apps are only made in a major release.")))}m.isMDXComponent=!0}}]);