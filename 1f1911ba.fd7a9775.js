(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,s=m["".concat(l,".").concat(d)]||m[d]||b[d]||c;return n?a.a.createElement(s,o(o({ref:t},i),{},{components:n})):a.a.createElement(s,o({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},410:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),c=(n(0),n(2809)),l=["components"],o={},p={unversionedId:"puppeteer.elementhandle.click",id:"version-5.4.0/puppeteer.elementhandle.click",isDocsHomePage:!1,title:"puppeteer.elementhandle.click",description:"Home &gt; puppeteer &gt; ElementHandle &gt; click",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.elementhandle.click.md",slug:"/puppeteer.elementhandle.click",permalink:"/testing2/docs/puppeteer.elementhandle.click",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.elementhandle.boxmodel",permalink:"/testing2/docs/puppeteer.elementhandle.boxmodel"},next:{title:"puppeteer.elementhandle.contentframe",permalink:"/testing2/docs/puppeteer.elementhandle.contentframe"}},i=[{value:"ElementHandle.click() method",id:"elementhandleclick-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:i};function m(e){var t=e.components,n=Object(a.a)(e,l);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/testing2/docs/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.elementhandle.click"},"click")),Object(c.b)("h2",{id:"elementhandleclick-method"},"ElementHandle.click() method"),Object(c.b)("p",null,"This method scrolls element into view if needed, and then uses ",Object(c.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If the element is detached from DOM, the method throws an error."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"click(options?: ClickOptions): Promise<void>;\n")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"options"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/testing2/docs/puppeteer.clickoptions"},"ClickOptions")),Object(c.b)("td",{parentName:"tr",align:null})))),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0}}]);