(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,s=m["".concat(p,".").concat(d)]||m[d]||b[d]||l;return n?a.a.createElement(s,c(c({ref:t},i),{},{components:n})):a.a.createElement(s,c({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<l;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},968:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),l=(n(0),n(2809)),p=["components"],c={},o={unversionedId:"puppeteer.elementhandle._",id:"puppeteer.elementhandle._",isDocsHomePage:!1,title:"puppeteer.elementhandle._",description:"Home &gt; puppeteer &gt; ElementHandle &gt; $",source:"@site/docs\\puppeteer.elementhandle._.md",slug:"/puppeteer.elementhandle._",permalink:"/testing2/docs/next/puppeteer.elementhandle._",version:"current",sidebar:"docs",previous:{title:"puppeteer.elementhandle",permalink:"/testing2/docs/next/puppeteer.elementhandle"},next:{title:"puppeteer.elementhandle.__",permalink:"/testing2/docs/next/puppeteer.elementhandle.__"}},i=[{value:"ElementHandle.$() method",id:"elementhandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:i};function m(e){var t=e.components,n=Object(a.a)(e,p);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/testing2/docs/next/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.elementhandle._"},"$")),Object(l.b)("h2",{id:"elementhandle-method"},"ElementHandle.$() method"),Object(l.b)("p",null,"Runs ",Object(l.b)("inlineCode",{parentName:"p"},"element.querySelector")," within the page. If no element matches the selector, the return value resolves to ",Object(l.b)("inlineCode",{parentName:"p"},"null"),"."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"$<T extends Element = Element>(selector: string): Promise<ElementHandle<T> | null>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"selector"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.elementhandle"},"ElementHandle"),"<","T",">"," ","|"," null",">"))}m.isMDXComponent=!0}}]);