(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{2809:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,s=b["".concat(p,".").concat(m)]||b[m]||d[m]||l;return a?r.a.createElement(s,c(c({ref:t},i),{},{components:a})):r.a.createElement(s,c({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<l;i++)p[i]=a[i];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},363:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(2809)),p=["components"],c={},o={unversionedId:"puppeteer.frame.evaluatehandle",id:"version-5.4.0/puppeteer.frame.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.frame.evaluatehandle",description:"Home &gt; puppeteer &gt; Frame &gt; evaluateHandle",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.frame.evaluatehandle.md",slug:"/puppeteer.frame.evaluatehandle",permalink:"/testing2/docs/puppeteer.frame.evaluatehandle",version:"5.4.0"},i=[{value:"Frame.evaluateHandle() method",id:"frameevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,p);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/testing2/docs/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.frame"},"Frame")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.frame.evaluatehandle"},"evaluateHandle")),Object(l.b)("h2",{id:"frameevaluatehandle-method"},"Frame.evaluateHandle() method"),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandlerType extends JSHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<HandlerType>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/testing2/docs/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),Object(l.b)("td",{parentName:"tr",align:null},"a function that is run within the frame")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"args"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/testing2/docs/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(l.b)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<","HandlerType",">"),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"The only difference between ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.frame.evaluate"},"Frame.evaluate()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"frame.evaluateHandle")," is that ",Object(l.b)("inlineCode",{parentName:"p"},"evaluateHandle")," will return the value wrapped in an in-page object."),Object(l.b)("p",null,"This method behaves identically to ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()")," except it's run within the context of the ",Object(l.b)("inlineCode",{parentName:"p"},"frame"),", rather than the entire page."))}b.isMDXComponent=!0}}]);