(window.webpackJsonp=window.webpackJsonp||[]).push([[995],{1064:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(2809)),p=["components"],c={},i={unversionedId:"puppeteer.mouse.draganddrop",id:"version-5.4.0/puppeteer.mouse.draganddrop",isDocsHomePage:!1,title:"puppeteer.mouse.draganddrop",description:"Home &gt; puppeteer &gt; Mouse &gt; dragAndDrop",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.mouse.draganddrop.md",slug:"/puppeteer.mouse.draganddrop",permalink:"/testing2/docs/puppeteer.mouse.draganddrop",version:"5.4.0"},d=[{value:"Mouse.dragAndDrop() method",id:"mousedraganddrop-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:d};function l(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.mouse"},"Mouse")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.mouse.draganddrop"},"dragAndDrop")),Object(o.b)("h2",{id:"mousedraganddrop-method"},"Mouse.dragAndDrop() method"),Object(o.b)("p",null,"Performs a drag, dragenter, dragover, and drop in sequence."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"dragAndDrop(start: Point, target: Point, options?: {\n        delay?: number;\n    }): Promise<void>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"start"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/puppeteer.point"},"Point")),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"target"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/puppeteer.point"},"Point")),Object(o.b)("td",{parentName:"tr",align:null},"point to drag from")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},"{ delay?: number; }"),Object(o.b)("td",{parentName:"tr",align:null},"An object of options. Accepts delay which, if specified, is the time to wait between ",Object(o.b)("code",null,"dragover")," and ",Object(o.b)("code",null,"drop")," in milliseconds. Defaults to 0. ","`","`","`")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","void",">"))}l.isMDXComponent=!0},2809:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=u(r),s=n,m=l["".concat(p,".").concat(s)]||l[s]||b[s]||o;return r?a.a.createElement(m,c(c({ref:t},d),{},{components:r})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var d=2;d<o;d++)p[d]=r[d];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);