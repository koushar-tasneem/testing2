(window.webpackJsonp=window.webpackJsonp||[]).push([[2245],{2314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(2809)),s=["components"],i={},c={unversionedId:"puppeteer.accessibility.snapshot",id:"version-10.0.0/puppeteer.accessibility.snapshot",isDocsHomePage:!1,title:"puppeteer.accessibility.snapshot",description:"Home &gt; puppeteer &gt; Accessibility &gt; snapshot",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.accessibility.snapshot.md",slug:"/puppeteer.accessibility.snapshot",permalink:"/testing2/docs/10.0.0/puppeteer.accessibility.snapshot",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.accessibility",permalink:"/testing2/docs/10.0.0/puppeteer.accessibility"},next:{title:"puppeteer.filechooser",permalink:"/testing2/docs/10.0.0/puppeteer.filechooser"}},p=[{value:"Accessibility.snapshot() method",id:"accessibilitysnapshot-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,s);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.accessibility"},"Accessibility")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.accessibility.snapshot"},"snapshot")),Object(o.b)("h2",{id:"accessibilitysnapshot-method"},"Accessibility.snapshot() method"),Object(o.b)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"snapshot(options?: SnapshotOptions): Promise<SerializedAXNode>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/testing2/docs/10.0.0/puppeteer.snapshotoptions"},"SnapshotOptions")),Object(o.b)("td",{parentName:"tr",align:null})))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/testing2/docs/10.0.0/puppeteer.serializedaxnode"},"SerializedAXNode"),">"),Object(o.b)("p",null,"An AXNode object representing the snapshot."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"*","*","NOTE","*","*"," The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Puppeteer will discard them as well for an easier to process tree, unless ",Object(o.b)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("p",null,"An example of dumping the entire accessibility tree:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n\n")),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("p",null,"An example of logging the focused node's name:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n\n")))}b.isMDXComponent=!0},2809:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);