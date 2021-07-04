(window.webpackJsonp=window.webpackJsonp||[]).push([[1112],{1181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(2809)),c=["components"],p={},l={unversionedId:"puppeteer.browserfetcher",id:"puppeteer.browserfetcher",isDocsHomePage:!1,title:"puppeteer.browserfetcher",description:"Home &gt; puppeteer &gt; BrowserFetcher",source:"@site/docs\\puppeteer.browserfetcher.md",slug:"/puppeteer.browserfetcher",permalink:"/testing2/docs/next/puppeteer.browserfetcher",version:"current",sidebar:"docs",previous:{title:"puppeteer.puppeteer.unregistercustomqueryhandler",permalink:"/testing2/docs/next/puppeteer.puppeteer.unregistercustomqueryhandler"},next:{title:"puppeteer.browserfetcher.candownload",permalink:"/testing2/docs/next/puppeteer.browserfetcher.candownload"}},i=[{value:"BrowserFetcher class",id:"browserfetcher-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],b={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/next/puppeteer.browserfetcher"},"BrowserFetcher")),Object(o.b)("h2",{id:"browserfetcher-class"},"BrowserFetcher class"),Object(o.b)("p",null,"BrowserFetcher can download and manage different versions of Chromium and Firefox."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class BrowserFetcher \n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"BrowserFetcher operates on revision strings that specify a precise version of Chromium, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'"533271"'),". Revision strings can be obtained from ",Object(o.b)("a",{parentName:"p",href:"http://omahaproxy.appspot.com/"},"omahaproxy.appspot.com"),". In the Firefox case, BrowserFetcher downloads Firefox Nightly and operates on version numbers such as ",Object(o.b)("inlineCode",{parentName:"p"},'"75"'),"."),Object(o.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(o.b)("inlineCode",{parentName:"p"},"BrowserFetcher")," class."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example of using BrowserFetcher to download a specific version of Chromium and running Puppeteer against it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const browserFetcher = puppeteer.createBrowserFetcher();\nconst revisionInfo = await browserFetcher.download('533271');\nconst browser = await puppeteer.launch({executablePath: revisionInfo.executablePath})\n\n")),Object(o.b)("p",null,"*","*","NOTE","*","*"," BrowserFetcher is not designed to work concurrently with other instances of BrowserFetcher that share the same downloads directory."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Method"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.browserfetcher.candownload"},"canDownload(revision)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Initiates a HEAD request to check if the revision is available.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.browserfetcher.download"},"download(revision, progressCallback)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Initiates a GET request to download the revision from the host.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.browserfetcher.host"},"host()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.browserfetcher.localrevisions"},"localRevisions()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.browserfetcher.platform"},"platform()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.browserfetcher.product"},"product()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.browserfetcher.remove"},"remove(revision)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/next/puppeteer.browserfetcher.revisioninfo"},"revisionInfo(revision)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},2809:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(m,p(p({ref:t},i),{},{components:r})):a.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);