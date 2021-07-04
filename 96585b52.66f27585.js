(window.webpackJsonp=window.webpackJsonp||[]).push([[1638],{1707:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),p=n(7),o=(n(0),n(2809)),a=["components"],c={},i={unversionedId:"puppeteer.puppeteernode.connect",id:"version-6.0.0/puppeteer.puppeteernode.connect",isDocsHomePage:!1,title:"puppeteer.puppeteernode.connect",description:"Home &gt; puppeteer &gt; PuppeteerNode &gt; connect",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.puppeteernode.connect.md",slug:"/puppeteer.puppeteernode.connect",permalink:"/testing2/docs/6.0.0/puppeteer.puppeteernode.connect",version:"6.0.0"},u=[{value:"PuppeteerNode.connect() method",id:"puppeteernodeconnect-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:u};function l(e){var t=e.components,n=Object(p.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.puppeteernode"},"PuppeteerNode")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.puppeteernode.connect"},"connect")),Object(o.b)("h2",{id:"puppeteernodeconnect-method"},"PuppeteerNode.connect() method"),Object(o.b)("p",null,"This method attaches Puppeteer to an existing browser instance."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"connect(options: ConnectOptions): Promise<Browser>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/6.0.0/puppeteer.connectoptions"},"ConnectOptions")),Object(o.b)("td",{parentName:"tr",align:null},"Set of configurable options to set on the browser.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.browser"},"Browser"),">"),Object(o.b)("p",null,"Promise which resolves to browser instance."),Object(o.b)("h2",{id:"remarks"},"Remarks"))}l.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),p=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var u=p.a.createContext({}),b=function(e){var t=p.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return p.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=b(n),d=r,m=l["".concat(a,".").concat(d)]||l[d]||s[d]||o;return n?p.a.createElement(m,c(c({ref:t},u),{},{components:n})):p.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return p.a.createElement.apply(null,a)}return p.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);