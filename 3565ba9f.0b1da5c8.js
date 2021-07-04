(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{2809:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),s=a,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||o;return r?n.a.createElement(f,i(i({ref:t},l),{},{components:r})):n.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},652:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(2809)),p=["components"],i={},c={unversionedId:"puppeteer.frame.waitforxpath",id:"version-10.0.0/puppeteer.frame.waitforxpath",isDocsHomePage:!1,title:"puppeteer.frame.waitforxpath",description:"Home &gt; puppeteer &gt; Frame &gt; waitForXPath",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.frame.waitforxpath.md",slug:"/puppeteer.frame.waitforxpath",permalink:"/testing2/docs/10.0.0/puppeteer.frame.waitforxpath",version:"10.0.0"},l=[{value:"Frame.waitForXPath() method",id:"framewaitforxpath-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,p);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.frame.waitforxpath"},"waitForXPath")),Object(o.b)("h2",{id:"framewaitforxpath-method"},"Frame.waitForXPath() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitForXPath(xpath: string, options?: WaitForSelectorOptions): Promise<ElementHandle | null>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"xpath"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"the XPath expression to wait for.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.waitforselectoroptions"},"WaitForSelectorOptions")),Object(o.b)("td",{parentName:"tr",align:null},"options to configure the visiblity of the element and how long to wait before timing out.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle")," ","|"," null",">"),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Wait for the ",Object(o.b)("inlineCode",{parentName:"p"},"xpath")," to appear in page. If at the moment of calling the method the ",Object(o.b)("inlineCode",{parentName:"p"},"xpath")," already exists, the method will return immediately. If the xpath doesn't appear after the ",Object(o.b)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),Object(o.b)("p",null,"For a code example, see the example for ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.frame.waitforselector"},"Frame.waitForSelector()"),". That function behaves identically other than taking a CSS selector rather than an XPath."))}u.isMDXComponent=!0}}]);