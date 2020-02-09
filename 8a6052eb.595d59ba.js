(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(0);var a=n(108);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const o={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},i=[{value:"Getting started",id:"getting-started",children:[]}],c={rightToc:i},s="wrapper";function p({components:e,...t}){return Object(a.b)(s,r({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"getting-started"},"Getting started"),Object(a.b)("p",null,"You can use the Tasit SDK to create user-friendly mobile iOS and Android apps for a dapp using React Native."),Object(a.b)("p",null,"Looking for the entry point for the ",Object(a.b)("inlineCode",{parentName:"p"},"tasit-sdk")," package? ",Object(a.b)("a",r({parentName:"p"},{href:"/packages/sdk/"}),"That's here"),". The Tasit SDK is a collection of smaller packages exported as one using ",Object(a.b)("a",r({parentName:"p"},{href:"https://lernajs.io/"}),"lerna"),"."),Object(a.b)("h4",{id:"installation"},"Installation"),Object(a.b)("p",null,"Getting started is as simple as running"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npm install --save tasit-sdk")),Object(a.b)("h4",{id:"usage"},"Usage"),Object(a.b)("p",null,"Are you looking to add functionality to a pre-existing app using the Tasit SDK?"),Object(a.b)("p",null,"Using the Tasit SDK from within your app is simple.\nIn ",Object(a.b)("inlineCode",{parentName:"p"},"App.js")," or the appropriate React Native component, import whichever APIs you need from the Tasit SDK."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { Account } from \"tasit-sdk\";\nconst ephemeralWallet = Account.create();\nconsole.log(ephemeralWallet.address); // '0x...'\n// ...\n")),Object(a.b)("p",null,"Or maybe you want to interact with a contract:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import { Contract } from "tasit-sdk";\n\nconst { NFT } = Contract;\n\n// const contractAddress = \'0x0E86...333\'\n\nconst contract = new NFT(contractAddress);\n\nconst action = contract.safeTransferfrom(/*...*/);\naction.on("error", errorListener);\naction.on("enoughConfirmations", successListener);\naction.sendForFree(); // meta-tx broadcast\n\n// Do optimistic UI updates immediately, while making sure\n// to update the UI again when there are enough\n// confirmations for your use case\n// ...\n')),Object(a.b)("h4",{id:"automatic-scaffolding-using-the-tasit-cli"},"Automatic scaffolding using the Tasit CLI"),Object(a.b)("p",null,"Are you starting a project from scratch? Let the Tasit CLI scaffold out your project for you. More details on this ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/tasitlabs/tasit#automatic-scaffolding-using-the-tasit-cli"}),"here"),"."),Object(a.b)("p",null,"The code for the CLI lives over in the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/tasitlabs/tasit"}),Object(a.b)("inlineCode",{parentName:"a"},"tasit")," repo")," with the code for the mobile apps, because it heavily uses the React Native components there when generating the scaffolding."),Object(a.b)("h4",{id:"modular"},"Modular"),Object(a.b)("p",null,"The Tasit SDK is designed with modularity in mind. Are you only planning on using the Tasit SDK for generating an ephemeral Ethereum acccount in your app? That works too!"),Object(a.b)("p",null,"You can install ",Object(a.b)("inlineCode",{parentName:"p"},"tasit-account")," directly and keep your app's dependencies leaner."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"npm install --save tasit-account\n")),Object(a.b)("p",null,"Then the usage example from before becomes:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import Account from "tasit-account";\n// ...\n')),Object(a.b)("p",null,"...with the rest of the code remaining the same."),Object(a.b)("p",null,"Or maybe you just want to use the simple abstraction for interacting with smart contracts. Then just install ",Object(a.b)("inlineCode",{parentName:"p"},"tasit-action")," directly instead."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"npm install --save tasit-action\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import { Contract } from "tasit-action";\n// ...\n')),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"/docs/home"}),"Go back to the home page of the docs")))}p.isMDXComponent=!0},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=i(n),u=a,b=l[c+"."+u]||l[u]||p[u]||o;return n?r.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);