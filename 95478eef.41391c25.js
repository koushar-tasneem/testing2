(window.webpackJsonp=window.webpackJsonp||[]).push([[1627],{1696:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(2809)),o=["components"],c={},l={unversionedId:"puppeteer.page._",id:"version-6.0.0/puppeteer.page._",isDocsHomePage:!1,title:"puppeteer.page._",description:"Home &gt; puppeteer &gt; Page &gt; $",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.page._.md",slug:"/puppeteer.page._",permalink:"/testing2/docs/6.0.0/puppeteer.page._",version:"6.0.0"},i=[{value:"Page.$() method",id:"page-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.page._"},"$")),Object(p.b)("h2",{id:"page-method"},"Page.$() method"),Object(p.b)("p",null,"Runs ",Object(p.b)("inlineCode",{parentName:"p"},"document.querySelector")," within the page. If no element matches the selector, the return value resolves to ",Object(p.b)("inlineCode",{parentName:"p"},"null"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"$<T extends Element = Element>(selector: string): Promise<ElementHandle<T> | null>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"selector"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},"A ",Object(p.b)("code",null,"selector")," to query page for ",Object(p.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," to query page for.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.elementhandle"},"ElementHandle"),"<","T",">"," ","|"," null",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Shortcut for ",Object(p.b)("a",{parentName:"p",href:"/testing2/docs/6.0.0/puppeteer.frame._"},"Page.mainFrame().$(selector)"),"."))}b.isMDXComponent=!0},2809:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||p;return r?a.a.createElement(d,c(c({ref:t},i),{},{components:r})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);