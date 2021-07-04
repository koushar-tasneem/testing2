(window.webpackJsonp=window.webpackJsonp||[]).push([[1645],{1714:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(2809)),p=["components"],c={},i={unversionedId:"puppeteer.browsercontext.waitfortarget",id:"version-6.0.0/puppeteer.browsercontext.waitfortarget",isDocsHomePage:!1,title:"puppeteer.browsercontext.waitfortarget",description:"Home &gt; puppeteer &gt; BrowserContext &gt; waitForTarget",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.browsercontext.waitfortarget.md",slug:"/puppeteer.browsercontext.waitfortarget",permalink:"/testing2/docs/6.0.0/puppeteer.browsercontext.waitfortarget",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.browsercontext.targets",permalink:"/testing2/docs/6.0.0/puppeteer.browsercontext.targets"},next:{title:"puppeteer.webworker",permalink:"/testing2/docs/6.0.0/puppeteer.webworker"}},b=[{value:"BrowserContext.waitForTarget() method",id:"browsercontextwaitfortarget-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],l={toc:b};function s(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.browsercontext.waitfortarget"},"waitForTarget")),Object(o.b)("h2",{id:"browsercontextwaitfortarget-method"},"BrowserContext.waitForTarget() method"),Object(o.b)("p",null,"This searches for a target in this specific browser context."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitForTarget(predicate: (x: Target) => boolean, options?: {\n        timeout?: number;\n    }): Promise<Target>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"predicate"),Object(o.b)("td",{parentName:"tr",align:null},"(x: ",Object(o.b)("a",{parentName:"td",href:"/testing2/docs/6.0.0/puppeteer.target"},"Target"),") =",">"," boolean"),Object(o.b)("td",{parentName:"tr",align:null},"A function to be run for every target")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},"{ timeout?: number; }"),Object(o.b)("td",{parentName:"tr",align:null},"An object of options. Accepts a timout, which is the maximum wait time in milliseconds. Pass ",Object(o.b)("code",null,"0")," to disable the timeout. Defaults to 30 seconds.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.target"},"Target"),">"),Object(o.b)("p",null,"Promise which resolves to the first target found that matches the ",Object(o.b)("inlineCode",{parentName:"p"},"predicate")," function."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example of finding a target for a page opened via ",Object(o.b)("inlineCode",{parentName:"p"},"window.open"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browserContext.waitForTarget(target => target.url() === 'https://www.example.com/');\n\n")))}s.isMDXComponent=!0},2809:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?a.a.createElement(d,c(c({ref:t},b),{},{components:r})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var b=2;b<o;b++)p[b]=r[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);