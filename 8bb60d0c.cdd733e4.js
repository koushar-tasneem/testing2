(window.webpackJsonp=window.webpackJsonp||[]).push([[1505],{1574:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(2809)),c=["components"],p={},i={unversionedId:"puppeteer.browserfetcher.candownload",id:"version-6.0.0/puppeteer.browserfetcher.candownload",isDocsHomePage:!1,title:"puppeteer.browserfetcher.candownload",description:"Home &gt; puppeteer &gt; BrowserFetcher &gt; canDownload",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.browserfetcher.candownload.md",slug:"/puppeteer.browserfetcher.candownload",permalink:"/testing2/docs/6.0.0/puppeteer.browserfetcher.candownload",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.browserfetcher",permalink:"/testing2/docs/6.0.0/puppeteer.browserfetcher"},next:{title:"puppeteer.browserfetcher.download",permalink:"/testing2/docs/6.0.0/puppeteer.browserfetcher.download"}},l=[{value:"BrowserFetcher.canDownload() method",id:"browserfetchercandownload-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.browserfetcher"},"BrowserFetcher")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.browserfetcher.candownload"},"canDownload")),Object(o.b)("h2",{id:"browserfetchercandownload-method"},"BrowserFetcher.canDownload() method"),Object(o.b)("p",null,"Initiates a HEAD request to check if the revision is available."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"canDownload(revision: string): Promise<boolean>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"revision"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"The revision to check availability for.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","boolean",">"),Object(o.b)("p",null,"A promise that resolves to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the revision could be downloaded from the host."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"This method is affected by the current ",Object(o.b)("inlineCode",{parentName:"p"},"product"),"."))}s.isMDXComponent=!0},2809:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(f,p(p({ref:t},l),{},{components:r})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);