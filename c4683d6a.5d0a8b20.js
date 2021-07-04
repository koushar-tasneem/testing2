(window.webpackJsonp=window.webpackJsonp||[]).push([[2125],{2195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),p=(n(0),n(2809)),o=["components"],c={},i={unversionedId:"puppeteer.page.setrequestinterception",id:"puppeteer.page.setrequestinterception",isDocsHomePage:!1,title:"puppeteer.page.setrequestinterception",description:"Home &gt; puppeteer &gt; Page &gt; setRequestInterception",source:"@site/docs\\puppeteer.page.setrequestinterception.md",slug:"/puppeteer.page.setrequestinterception",permalink:"/testing2/docs/next/puppeteer.page.setrequestinterception",version:"current"},s=[{value:"Page.setRequestInterception() method",id:"pagesetrequestinterception-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.page.setrequestinterception"},"setRequestInterception")),Object(p.b)("h2",{id:"pagesetrequestinterception-method"},"Page.setRequestInterception() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"setRequestInterception(value: boolean): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"value"),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},"Whether to enable request interception.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Activating request interception enables ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.httprequest.abort"},"HTTPRequest.abort()"),", ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.httprequest.continue"},"HTTPRequest.continue()")," and ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.httprequest.respond"},"HTTPRequest.respond()")," methods. This provides the capability to modify network requests that are made by a page."),Object(p.b)("p",null,"Once request interception is enabled, every request will stall unless it's continued, responded or aborted; or completed using the browser cache."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("p",null,"An example of a na\xefve request interceptor that aborts all image requests:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setRequestInterception(true);\n  page.on('request', interceptedRequest => {\n    if (interceptedRequest.url().endsWith('.png') ||\n        interceptedRequest.url().endsWith('.jpg'))\n      interceptedRequest.abort();\n    else\n      interceptedRequest.continue();\n    });\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n\n")))}l.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||p;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<p;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);