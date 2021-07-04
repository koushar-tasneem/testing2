(window.webpackJsonp=window.webpackJsonp||[]).push([[2408],{2477:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(2809)),c=["components"],p={},s={unversionedId:"puppeteer.coverage.startjscoverage",id:"version-10.0.0/puppeteer.coverage.startjscoverage",isDocsHomePage:!1,title:"puppeteer.coverage.startjscoverage",description:"Home &gt; puppeteer &gt; Coverage &gt; startJSCoverage",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.coverage.startjscoverage.md",slug:"/puppeteer.coverage.startjscoverage",permalink:"/testing2/docs/10.0.0/puppeteer.coverage.startjscoverage",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.coverage.startcsscoverage",permalink:"/testing2/docs/10.0.0/puppeteer.coverage.startcsscoverage"},next:{title:"puppeteer.coverage.stopcsscoverage",permalink:"/testing2/docs/10.0.0/puppeteer.coverage.stopcsscoverage"}},i=[{value:"Coverage.startJSCoverage() method",id:"coveragestartjscoverage-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.coverage"},"Coverage")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.coverage.startjscoverage"},"startJSCoverage")),Object(o.b)("h2",{id:"coveragestartjscoverage-method"},"Coverage.startJSCoverage() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"startJSCoverage(options?: JSCoverageOptions): Promise<void>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.jscoverageoptions"},"JSCoverageOptions")),Object(o.b)("td",{parentName:"tr",align:null},"Set of configurable options for coverage defaults to ",Object(o.b)("code",null,"{ resetOnNavigation : true, reportAnonymousScripts : false }"))))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","void",">"),Object(o.b)("p",null,"Promise that resolves when coverage is started."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",Object(o.b)("inlineCode",{parentName:"p"},"eval")," or ",Object(o.b)("inlineCode",{parentName:"p"},"new Function"),". If ",Object(o.b)("inlineCode",{parentName:"p"},"reportAnonymousScripts")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", anonymous scripts will have ",Object(o.b)("inlineCode",{parentName:"p"},"__puppeteer_evaluation_script__")," as their URL."))}u.isMDXComponent=!0},2809:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=n,m=u["".concat(c,".").concat(g)]||u[g]||b[g]||o;return r?a.a.createElement(m,p(p({ref:t},i),{},{components:r})):a.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);