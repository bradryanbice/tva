"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3085],{280:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(3830),r=t(2056),l=t(411),i=t(2238),c=t(3653),o=t(6299),s="anchorWithStickyNavbar_JNi5",u="anchorWithHideOnScrollNavbar_JLbY",m=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,r.Z)(e,m),f=(0,o.L)().navbar.hideOnScroll;return"h1"!==n&&t?l.createElement(n,(0,a.Z)({},d,{className:(0,i.Z)("anchor",f?u:s),id:t}),d.children,l.createElement("a",{className:"hash-link",href:"#"+t,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,a.Z)({},d,{id:void 0}))}},7542:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(411),r=t(167),l=t(3830),i=t(2056),c=t(8056),o=["mdxType","originalType"];var s=t(3882);var u=t(8348);var m=t(2238),d=t(2419),f=t(2487),v="details_LInr",p="isBrowser_Dw6M",h="collapsibleContent_s60m",g=["summary","children"];function E(e){return!!e&&("SUMMARY"===e.tagName||E(e.parentElement))}function N(e,n){return!!e&&(e===n||N(e.parentElement,n))}function Z(e){var n=e.summary,t=e.children,r=(0,i.Z)(e,g),l=(0,d.Z)(),c=(0,a.useRef)(null),o=(0,f.u)({initialState:!r.open}),s=o.collapsed,u=o.setCollapsed,Z=(0,a.useState)(r.open),L=Z[0],b=Z[1];return a.createElement("details",Object.assign({},r,{ref:c,open:L,"data-collapsed":s,className:(0,m.Z)(v,l&&p,r.className),onMouseDown:function(e){E(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;E(n)&&N(n,c.current)&&(e.preventDefault(),s?(u(!1),b(!0)):u(!0))}}),n||a.createElement("summary",null,"Details"),a.createElement(f.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),b(!e)}},a.createElement("div",{className:h},t)))}var L="details_DlAH";function b(e){var n=Object.assign({},e);return a.createElement(Z,(0,l.Z)({},n,{className:(0,m.Z)("alert alert--info",L,n.className)}))}var y=t(280);function k(e){return a.createElement(y.Z,e)}var C="img_k2O3";var H={head:function(e){var n=a.Children.map(e.children,(function(e){return function(e){var n,t;if(null!=e&&null!=(n=e.props)&&n.mdxType&&null!=e&&null!=(t=e.props)&&t.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,i.Z)(r,o));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(c.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(s.Z,e)},a:function(e){return a.createElement(u.Z,e)},pre:function(e){var n;return a.createElement(s.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(n=e.children)?void 0:n.props:Object.assign({},e))},details:function(e){var n=a.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),r=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return a.createElement(b,(0,l.Z)({},e,{summary:t}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(n=e.className,(0,m.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&"clean-list"))}));var n},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(n=e.className,(0,m.Z)(n,C))}));var n},h1:function(e){return a.createElement(k,(0,l.Z)({as:"h1"},e))},h2:function(e){return a.createElement(k,(0,l.Z)({as:"h2"},e))},h3:function(e){return a.createElement(k,(0,l.Z)({as:"h3"},e))},h4:function(e){return a.createElement(k,(0,l.Z)({as:"h4"},e))},h5:function(e){return a.createElement(k,(0,l.Z)({as:"h5"},e))},h6:function(e){return a.createElement(k,(0,l.Z)({as:"h6"},e))}};function x(e){var n=e.children;return a.createElement(r.Zo,{components:H},n)}},6689:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(411),r=t(2238),l=t(3279),i=t(7542),c=t(6794),o=t(8059),s=t(40),u="mdxPageWrapper_pBoz";function m(e){var n=e.content,t=n.metadata,m=t.title,d=t.description,f=t.frontMatter,v=f.wrapperClassName,p=f.hide_table_of_contents;return a.createElement(o.FG,{className:(0,r.Z)(null!=v?v:s.k.wrapper.mdxPages,s.k.page.mdxPage)},a.createElement(o.d,{title:m,description:d}),a.createElement(l.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",u)},a.createElement("div",{className:(0,r.Z)("col",!p&&"col--8")},a.createElement(i.Z,null,a.createElement(n,null))),!p&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(c.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},6794:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(3830),r=t(2056),l=t(411),i=t(2238),c=t(4793),o="tableOfContents_poYq",s=["className"];function u(e){var n=e.className,t=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},l.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4793:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(3830),r=t(2056),l=t(411);function i(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var c=l.memo(i),o=["parentIndex"];function s(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,r.Z)(e,o);t>=0?n[t].children.push(l):a.push(l)})),a}function u(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}var m=t(6299);function d(e){var n=e.getBoundingClientRect();return n.top===n.bottom?d(e.parentNode):n}function f(e,n){var t,a,r=n.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(t=e[e.length-1])?t:null}function v(){var e=(0,l.useRef)(0),n=(0,m.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function p(e){var n=(0,l.useRef)(void 0),t=v();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=f(c,{anchorTopOffset:t.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var a;n.current&&n.current!==e&&(null==(a=n.current)||a.classList.remove(r)),e.classList.add(r),n.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,f=e.linkActiveClassName,v=void 0===f?void 0:f,g=e.minHeadingLevel,E=e.maxHeadingLevel,N=(0,r.Z)(e,h),Z=(0,m.L)(),L=null!=g?g:Z.tableOfContents.minHeadingLevel,b=null!=E?E:Z.tableOfContents.maxHeadingLevel,y=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return u({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:L,maxHeadingLevel:b});return p((0,l.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:b}}),[d,v,L,b])),l.createElement(c,(0,a.Z)({toc:y,className:i,linkClassName:d},N))}}}]);