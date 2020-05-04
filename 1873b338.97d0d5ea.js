(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"Highlight",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(7),o=(n(0),n(119)),i={id:"home",title:"Tasit SDK",sidebar_label:"Home"},c={id:"home",title:"Tasit SDK",description:'<div align="left">',source:"@site/docs/Home.md",permalink:"/docs/home",sidebar_label:"Home",sidebar:"docs",next:{title:"Getting started",permalink:"/docs/getting-started"}},s=[{value:"Introduction",id:"introduction",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={rightToc:s,Highlight:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{align:"left"},Object(o.b)("img",{src:"/img/TasitLogoSvg.svg",width:"200"})),Object(o.b)("h3",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The ",Object(o.b)(p,{color:"rgb(0, 154, 115)",mdxType:"Highlight"},"Tasit SDK")," is a JavaScript/TypeScript SDK for making mobile Ethereum dapps using React Native."),Object(o.b)("p",null,"Development of the Tasit SDK is supported in part by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://ecosystem.support/"}),"Ethereum Foundation")," as well as by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gnosis.io/"}),"Gnosis")," through their ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gnosis/GECO"}),"GECO")," grant initiative."),Object(o.b)("p",null,"This project is open-source and in need of funding to sustain work on it. If you're able to contribute, please consider ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitcoin.co/grants/183/tasit-native-mobile-ethereum-dapps"}),"supporting the project on Gitcoin Grants")," or sending ETH or DAI to the Tasit project's Aragon Agent address:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"0x7d888a9036b5a96f77b433e65b9be1b122f8a499")," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://etherscan.io/address/0x7d888a9036b5a96f77b433e65b9be1b122f8a499"}),"Etherscan"),")"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Disclaimer:")," The alpha version of this SDK is under active development. We encourage you to try it out today for hackathons, etc., but it's not ready for anything involving real funds on mainnet. If you'd prefer to wait for a more battle-tested release, please watch ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tasitlabs/tasit-sdk"}),"this repo")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"Releases only")," setting and/or sign up to be notified about our releases on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tasit.io"}),"tasit.io")," website."),Object(o.b)("hr",null),Object(o.b)("p",null,"See something that can be improved on this page? ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tasitlabs/tasit-sdk/blob/develop/packages/docs/docs/Home.md"}),"Edit it here"),"."),Object(o.b)("p",null,"Check out the link below for a quick guide on how to get started with making a native mobile Ethereum dapp using the Tasit SDK!"))}l.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return n?a.a.createElement(f,c({ref:t},p,{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);