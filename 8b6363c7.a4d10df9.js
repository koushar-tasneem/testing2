(window.webpackJsonp=window.webpackJsonp||[]).push([[1499],{1568:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),p=(n(0),n(2809)),o=["components"],c={},l={unversionedId:"puppeteer.puppeteernode",id:"version-10.0.0/puppeteer.puppeteernode",isDocsHomePage:!1,title:"puppeteer.puppeteernode",description:"Home &gt; puppeteer &gt; PuppeteerNode",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.puppeteernode.md",slug:"/puppeteer.puppeteernode",permalink:"/testing2/docs/10.0.0/puppeteer.puppeteernode",version:"10.0.0"},b=[{value:"PuppeteerNode class",id:"puppeteernode-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],i={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.puppeteernode"},"PuppeteerNode")),Object(p.b)("h2",{id:"puppeteernode-class"},"PuppeteerNode class"),Object(p.b)("p",null,"Extends the main ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.puppeteer"},"Puppeteer")," class with Node specific behaviour for fetching and downloading browsers."),Object(p.b)("p",null,"If you're using Puppeteer in a Node environment, this is the class you'll get when you run ",Object(p.b)("inlineCode",{parentName:"p"},"require('puppeteer')")," (or the equivalent ES ",Object(p.b)("inlineCode",{parentName:"p"},"import"),")."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class PuppeteerNode extends Puppeteer \n")),Object(p.b)("b",null,"Extends:")," [Puppeteer](/testing2/docs/10.0.0/puppeteer.puppeteer)",Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"The most common method to use is ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.puppeteernode.launch"},"launch"),", which is used to launch and connect to a new browser instance."),Object(p.b)("p",null,"See ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.puppeteer"},"the main Puppeteer class")," for methods common to all environments, such as ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"PuppeteerNode")," class."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("p",null,"The following is a typical example of using Puppeteer to drive automation:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n\n")),Object(p.b)("p",null,"Once you have created a ",Object(p.b)("inlineCode",{parentName:"p"},"page")," you have access to a large API to interact with the page, navigate, or find certain elements in that page. The ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.page"},"`","page","`"," documentation")," lists all the available methods."),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Property"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.puppeteernode.product"},"product")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},"The name of the browser that is under automation (",Object(p.b)("code",null,'"',"chrome",'"')," or ",Object(p.b)("code",null,'"',"firefox",'"'),")")))),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.puppeteernode.connect"},"connect(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method attaches Puppeteer to an existing browser instance.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.puppeteernode.createbrowserfetcher"},"createBrowserFetcher(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.puppeteernode.defaultargs"},"defaultArgs(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.puppeteernode.executablepath"},"executablePath()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.puppeteernode.launch"},"launch(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Launches puppeteer and launches a browser instance with given arguments and options when specified.")))))}u.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||p;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<p;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);