(window.webpackJsonp=window.webpackJsonp||[]).push([[1486],{1555:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(2809)),l=["components"],p={},c={unversionedId:"puppeteer.webworker.evaluatehandle",id:"puppeteer.webworker.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.webworker.evaluatehandle",description:"Home &gt; puppeteer &gt; WebWorker &gt; evaluateHandle",source:"@site/docs\\puppeteer.webworker.evaluatehandle.md",slug:"/puppeteer.webworker.evaluatehandle",permalink:"/testing2/docs/next/puppeteer.webworker.evaluatehandle",version:"current",sidebar:"docs",previous:{title:"puppeteer.webworker.evaluate",permalink:"/testing2/docs/next/puppeteer.webworker.evaluate"},next:{title:"puppeteer.webworker.executioncontext",permalink:"/testing2/docs/next/puppeteer.webworker.executioncontext"}},u=[{value:"WebWorker.evaluateHandle() method",id:"webworkerevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.webworker"},"WebWorker")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.webworker.evaluatehandle"},"evaluateHandle")),Object(o.b)("h2",{id:"webworkerevaluatehandle-method"},"WebWorker.evaluateHandle() method"),Object(o.b)("p",null,"The only difference between ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," is that ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns in-page object (JSHandle). If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," would wait for the promise to resolve and return its value. Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"await worker.executionContext()).evaluateHandle(pageFunction, ...args)")),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandlerType extends JSHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<JSHandle>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),Object(o.b)("td",{parentName:"tr",align:null},"Function to be evaluated in the page context.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"args"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(o.b)("td",{parentName:"tr",align:null},"Arguments to pass to ",Object(o.b)("code",null,"pageFunction"),".")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.jshandle"},"JSHandle"),">"),Object(o.b)("p",null,"Promise which resolves to the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"pageFunction"),"."))}b.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=i(n),s=r,m=b["".concat(l,".").concat(s)]||b[s]||d[s]||o;return n?a.a.createElement(m,p(p({ref:t},u),{},{components:n})):a.a.createElement(m,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);