(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(p,".").concat(m)]||b[m]||s[m]||l;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},528:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(2809)),p=["components"],o={},i={unversionedId:"puppeteer.page._eval",id:"version-5.4.0/puppeteer.page._eval",isDocsHomePage:!1,title:"puppeteer.page._eval",description:"Home &gt; puppeteer &gt; Page &gt; $eval",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.page._eval.md",slug:"/puppeteer.page._eval",permalink:"/testing2/docs/puppeteer.page._eval",version:"5.4.0"},c=[{value:"Page.$eval() method",id:"pageeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,p);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/testing2/docs/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.page"},"Page")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.page._eval"},"$eval")),Object(l.b)("h2",{id:"pageeval-method"},"Page.$eval() method"),Object(l.b)("p",null,"This method runs ",Object(l.b)("inlineCode",{parentName:"p"},"document.querySelector")," within the page and passes the result as the first argument to the ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"$eval<ReturnType>(selector: string, pageFunction: (element: Element, ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"selector"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"the ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," to query for")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(l.b)("td",{parentName:"tr",align:null},"(element: Element, ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),Object(l.b)("td",{parentName:"tr",align:null},"the function to be evaluated in the page context. Will be passed the result of ",Object(l.b)("code",null,"document.querySelector(selector)")," as its first argument.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"args"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/testing2/docs/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(l.b)("td",{parentName:"tr",align:null},"any additional arguments to pass through to ",Object(l.b)("code",null,"pageFunction"),".")))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),Object(l.b)("p",null,"The result of calling ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),". If it returns an element it is wrapped in an ",Object(l.b)("a",{parentName:"p",href:"/testing2/docs/puppeteer.elementhandle"},"ElementHandle"),", else the raw value itself is returned."),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"If no element is found matching ",Object(l.b)("inlineCode",{parentName:"p"},"selector"),", the method will throw an error."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a promise ",Object(l.b)("inlineCode",{parentName:"p"},"$eval")," will wait for the promise to resolve and then return its value."),Object(l.b)("h2",{id:"example-1"},"Example 1"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"const searchValue = await page.$eval('#search', el => el.value);\nconst preloadHref = await page.$eval('link[rel=preload]', el => el.href);\nconst html = await page.$eval('.main-container', el => el.outerHTML);\n\n")),Object(l.b)("p",null,"If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),". By default it is typed as ",Object(l.b)("inlineCode",{parentName:"p"},"Element"),", but you may need to provide a more specific sub-type:"),Object(l.b)("h2",{id:"example-2"},"Example 2"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"// if you don't provide HTMLInputElement here, TS will error\n// as `value` is not on `Element`\nconst searchValue = await page.$eval('#search', (el: HTMLInputElement) => el.value);\n\n")),Object(l.b)("p",null,"The compiler should be able to infer the return type from the ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction")," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",Object(l.b)("inlineCode",{parentName:"p"},"$eval"),":"),Object(l.b)("h2",{id:"example-3"},"Example 3"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"// The compiler can infer the return type in this case, but if it can't\n// or if you want to be more explicit, provide it as the generic type.\nconst searchValue = await page.$eval<string>(\n '#search', (el: HTMLInputElement) => el.value\n);\n\n")))}b.isMDXComponent=!0}}]);