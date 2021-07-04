(window.webpackJsonp=window.webpackJsonp||[]).push([[2407],{2476:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),l=(n(0),n(2809)),p=["components"],o={},i={unversionedId:"puppeteer.elementhandle.uploadfile",id:"version-5.4.0/puppeteer.elementhandle.uploadfile",isDocsHomePage:!1,title:"puppeteer.elementhandle.uploadfile",description:"Home &gt; puppeteer &gt; ElementHandle &gt; uploadFile",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.elementhandle.uploadfile.md",slug:"/puppeteer.elementhandle.uploadfile",permalink:"/testing2/docs/puppeteer.elementhandle.uploadfile",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.elementhandle.type",permalink:"/testing2/docs/puppeteer.elementhandle.type"},next:{title:"puppeteer.httprequest",permalink:"/testing2/docs/puppeteer.httprequest"}},c=[{value:"ElementHandle.uploadFile() method",id:"elementhandleuploadfile-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,p);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/testing2/docs/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.elementhandle.uploadfile"},"uploadFile")),Object(l.b)("h2",{id:"elementhandleuploadfile-method"},"ElementHandle.uploadFile() method"),Object(l.b)("p",null,"This method expects ",Object(l.b)("inlineCode",{parentName:"p"},"elementHandle")," to point to an ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element"),"."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"uploadFile(...filePaths: string[]): Promise<void>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"filePaths"),Object(l.b)("td",{parentName:"tr",align:null},"string","[","]"),Object(l.b)("td",{parentName:"tr",align:null},"Sets the value of the file input to these paths. If some of the ",Object(l.b)("code",null,"filePaths")," are relative paths, then they are resolved relative to the ",Object(l.b)("a",{parentName:"td",href:"https://nodejs.org/api/process.html#process_process_cwd"},"current working directory"))))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<","void",">"))}d.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(p,".").concat(b)]||d[b]||s[b]||l;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);