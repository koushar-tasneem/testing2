(window.webpackJsonp=window.webpackJsonp||[]).push([[919],{2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,d=b["".concat(p,".").concat(s)]||b[s]||m[s]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},988:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(2809)),p=["components"],o={},c={unversionedId:"puppeteer.eventemitter.emit",id:"puppeteer.eventemitter.emit",isDocsHomePage:!1,title:"puppeteer.eventemitter.emit",description:"Home &gt; puppeteer &gt; EventEmitter &gt; emit",source:"@site/docs\\puppeteer.eventemitter.emit.md",slug:"/puppeteer.eventemitter.emit",permalink:"/testing2/docs/next/puppeteer.eventemitter.emit",version:"current",sidebar:"docs",previous:{title:"puppeteer.eventemitter.addlistener",permalink:"/testing2/docs/next/puppeteer.eventemitter.addlistener"},next:{title:"puppeteer.eventemitter.addlistener",permalink:"/testing2/docs/next/puppeteer.eventemitter.addlistener"}},l=[{value:"EventEmitter.emit() method",id:"eventemitteremit-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,p);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/testing2/docs/next/index"},"Home")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.eventemitter.emit"},"emit")),Object(i.b)("h2",{id:"eventemitteremit-method"},"EventEmitter.emit() method"),Object(i.b)("p",null,"Emit an event and call any associated listeners."),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"emit(event: EventType, eventData?: unknown): boolean;\n")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"event"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.eventtype"},"EventType")),Object(i.b)("td",{parentName:"tr",align:null},"the event you'd like to emit")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"eventData"),Object(i.b)("td",{parentName:"tr",align:null},"unknown"),Object(i.b)("td",{parentName:"tr",align:null},"any data you'd like to emit with the event")))),Object(i.b)("b",null,"Returns:"),Object(i.b)("p",null,"boolean"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"true")," if there are any listeners, ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if there are not."))}b.isMDXComponent=!0}}]);