(window.webpackJsonp=window.webpackJsonp||[]).push([[2526],{2595:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),p=(n(0),n(2809)),o=["components"],i={},c={unversionedId:"puppeteer.eventemitter.listenercount",id:"puppeteer.eventemitter.listenercount",isDocsHomePage:!1,title:"puppeteer.eventemitter.listenercount",description:"Home &gt; puppeteer &gt; EventEmitter &gt; listenerCount",source:"@site/docs\\puppeteer.eventemitter.listenercount.md",slug:"/puppeteer.eventemitter.listenercount",permalink:"/testing2/docs/next/puppeteer.eventemitter.listenercount",version:"current",sidebar:"docs",previous:{title:"puppeteer.eventemitter.addlistener",permalink:"/testing2/docs/next/puppeteer.eventemitter.addlistener"},next:{title:"puppeteer.eventemitter.off",permalink:"/testing2/docs/next/puppeteer.eventemitter.off"}},u=[{value:"EventEmitter.listenerCount() method",id:"eventemitterlistenercount-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.eventemitter.listenercount"},"listenerCount")),Object(p.b)("h2",{id:"eventemitterlistenercount-method"},"EventEmitter.listenerCount() method"),Object(p.b)("p",null,"Gets the number of listeners for a given event."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"listenerCount(event: EventType): number;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"event"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.eventtype"},"EventType")),Object(p.b)("td",{parentName:"tr",align:null},"the event to get the listener count for")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"number"),Object(p.b)("p",null,"the number of listeners bound to the given event"))}b.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||p;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<p;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);