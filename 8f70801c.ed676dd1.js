(window.webpackJsonp=window.webpackJsonp||[]).push([[1558],{1627:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),p=(n(0),n(2809)),i=["components"],a={},c={unversionedId:"puppeteer.puppeteer.networkconditions copy",id:"version-6.0.0/puppeteer.puppeteer.networkconditions copy",isDocsHomePage:!1,title:"puppeteer.puppeteer.networkconditions copy",description:"Home &gt; puppeteer &gt; Puppeteer &gt; networkConditions",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.puppeteer.networkconditions copy.md",slug:"/puppeteer.puppeteer.networkconditions copy",permalink:"/testing2/docs/6.0.0/puppeteer.puppeteer.networkconditions copy",version:"6.0.0"},u=[{value:"Puppeteer.networkConditions property",id:"puppeteernetworkconditions-property",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,i);return Object(p.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.puppeteer"},"Puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.puppeteer.networkconditions"},"networkConditions")),Object(p.b)("h2",{id:"puppeteernetworkconditions-property"},"Puppeteer.networkConditions property"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"get networkConditions(): PredefinedNetworkConditions;\n")),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Returns a list of network conditions to be used with ",Object(p.b)("inlineCode",{parentName:"p"},"page.emulateNetworkConditions(networkConditions)"),". Actual list of predefined conditions can be found in ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/common/NetworkConditions.ts"},"src/common/NetworkConditions.ts"),"."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\nconst slow3G = puppeteer.networkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n\n")))}l.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||p;return n?o.a.createElement(m,a(a({ref:t},u),{},{components:n})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<p;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);