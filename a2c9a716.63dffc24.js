(window.webpackJsonp=window.webpackJsonp||[]).push([[1759],{1828:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(2809)),p=["components"],o={},i={unversionedId:"puppeteer.elementhandle._eval",id:"version-10.0.0/puppeteer.elementhandle._eval",isDocsHomePage:!1,title:"puppeteer.elementhandle._eval",description:"Home &gt; puppeteer &gt; ElementHandle &gt; $eval",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.elementhandle._eval.md",slug:"/puppeteer.elementhandle._eval",permalink:"/testing2/docs/10.0.0/puppeteer.elementhandle._eval",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.elementhandle.__eval",permalink:"/testing2/docs/10.0.0/puppeteer.elementhandle.__eval"},next:{title:"puppeteer.elementhandle._x",permalink:"/testing2/docs/10.0.0/puppeteer.elementhandle._x"}},c=[{value:"ElementHandle.$eval() method",id:"elementhandleeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,p);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.elementhandle._eval"},"$eval")),Object(l.b)("h2",{id:"elementhandleeval-method"},"ElementHandle.$eval() method"),Object(l.b)("p",null,"This method runs ",Object(l.b)("inlineCode",{parentName:"p"},"document.querySelector")," within the element and passes it as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),". If there's no element matching ",Object(l.b)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",Object(l.b)("inlineCode",{parentName:"p"},"frame.$eval")," would wait for the promise to resolve and return its value."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"$eval<ReturnType>(selector: string, pageFunction: (element: Element, ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"selector"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(l.b)("td",{parentName:"tr",align:null},"(element: Element, ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"args"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const tweetHandle = await page.$('.tweet');\nexpect(await tweetHandle.$eval('.like', node => node.innerText)).toBe('100');\nexpect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe('10');\n\n")))}b.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,s=b["".concat(p,".").concat(d)]||b[d]||m[d]||l;return n?a.a.createElement(s,o(o({ref:t},c),{},{components:n})):a.a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);