(window.webpackJsonp=window.webpackJsonp||[]).push([[1406],{1475:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(2809)),l=["components"],p={},c={unversionedId:"puppeteer.customqueryhandler",id:"version-10.0.0/puppeteer.customqueryhandler",isDocsHomePage:!1,title:"puppeteer.customqueryhandler",description:"Home &gt; puppeteer &gt; CustomQueryHandler",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.customqueryhandler.md",slug:"/puppeteer.customqueryhandler",permalink:"/testing2/docs/10.0.0/puppeteer.customqueryhandler",version:"10.0.0"},u=[{value:"CustomQueryHandler interface",id:"customqueryhandler-interface",children:[]},{value:"Properties",id:"properties",children:[]}],i={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.customqueryhandler"},"CustomQueryHandler")),Object(o.b)("h2",{id:"customqueryhandler-interface"},"CustomQueryHandler interface"),Object(o.b)("p",null,"Contains two functions ",Object(o.b)("inlineCode",{parentName:"p"},"queryOne")," and ",Object(o.b)("inlineCode",{parentName:"p"},"queryAll")," that can be ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.puppeteer.registercustomqueryhandler"},"registered")," as alternative querying strategies. The functions ",Object(o.b)("inlineCode",{parentName:"p"},"queryOne")," and ",Object(o.b)("inlineCode",{parentName:"p"},"queryAll")," are executed in the page context. ",Object(o.b)("inlineCode",{parentName:"p"},"queryOne")," should take an ",Object(o.b)("inlineCode",{parentName:"p"},"Element")," and a selector string as argument and return a single ",Object(o.b)("inlineCode",{parentName:"p"},"Element")," or ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if no element is found. ",Object(o.b)("inlineCode",{parentName:"p"},"queryAll")," takes the same arguments but should instead return a ",Object(o.b)("inlineCode",{parentName:"p"},"NodeListOf<Element>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Array<Element>")," with all the elements that match the given query selector."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export interface CustomQueryHandler \n")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.customqueryhandler.queryall"},"queryAll?")),Object(o.b)("td",{parentName:"tr",align:null},"(element: Element ","|"," Document, selector: string) =",">"," Element","[","]"," ","|"," NodeListOf","<","Element",">"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("i",null,"(Optional)"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.customqueryhandler.queryone"},"queryOne?")),Object(o.b)("td",{parentName:"tr",align:null},"(element: Element ","|"," Document, selector: string) =",">"," Element ","|"," null"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("i",null,"(Optional)"))))))}b.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=i(n),m=r,d=b["".concat(l,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(d,p(p({ref:t},u),{},{components:n})):a.a.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);