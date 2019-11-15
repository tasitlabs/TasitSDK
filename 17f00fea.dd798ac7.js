(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return h}));a(58),a(31),a(22),a(23),a(59),a(0);var n=a(160);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={id:"why",title:"Why",sidebar_label:"Why"},i=[{value:"Why should this thing exist?",id:"why-should-this-thing-exist",children:[]}],s={rightToc:i},l="wrapper";function h(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"why-should-this-thing-exist"},"Why should this thing exist?"),Object(n.b)("h4",{id:"a-bit-skeptical-about-the-need-for-mobile-dapps"},"A bit skeptical about the need for mobile dapps?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",o({parentName:"p"},{href:"/docs/why#why-from-the-users-perspective"}),"Why (from the user's perspective)?"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",o({parentName:"p"},{href:"/docs/why#why-from-a-developers--ethereum-enthusiasts-perspective"}),"Why (from a developer's / Ethereum enthusiast\u2019s perspective)?"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",o({parentName:"p"},{href:"/docs/why#why-react-native"}),"Why React Native?")))),Object(n.b)("h4",{id:"why-from-the-users-perspective"},"Why (from the user's perspective)?"),Object(n.b)("p",null,"Today, using a dapp from a phone is painful. Almost no dapps have standalone mobile apps, and you're not easily able to use the dapp without ETH/tokens or with the ETH/tokens you have in another wallet. We lose mainstream people from the onboarding funnel because of this. Some dapps can be used inside a single app like Coinbase Wallet or Status that serves as a dapp browser, but this feels like a terribly broken UX for anyone who has been using a mobile phone for a while, and it also feels like broken UX for people who are used to using web-based dapps with MetaMask (where the wallet mostly stays out of the way until you need it). The ideal UX would be installing each mobile dapp in a way that feels the same as installing any mobile app, and giving it permission to take actions during onboarding with the costs subsidized by others or with your ETH/tokens held in a separate wallet."),Object(n.b)("p",null,"The idea is that the Tasit SDK would be used by many different mobile apps on a user's device. Once the Tasit SDK is around, more dapps will have dedicated mobile apps. This will remove a key barrier to mainstream adoption of Ethereum dapps."),Object(n.b)("h5",{id:"right-to-exit-for-users"},"Right to exit for users"),Object(n.b)("p",null,"A single company's financial incentives determining how a software product works is a bummer for users. See Facebook's newsfeed changing to clickbait, or see Twitter users clamoring for simple changes to the product like spambot or harassment detection to no avail."),Object(n.b)("h4",{id:"why-from-a-developers--ethereum-enthusiasts-perspective"},"Why (from a developer's / Ethereum enthusiast's perspective)?"),Object(n.b)("p",null,"The user-facing answer for \"Why?\" focused on the UX/product, since that's the main thing that mainstream users care about. Here we'll touch on more technical/ideological arguments for why it's important that the Ethereum community creates more mobile dapps."),Object(n.b)("p",null,'One major reason most dapps don\u2019t have standalone mobile apps today is because it\u2019s hard for developers to build mobile Ethereum dapps. There isn\u2019t much good tooling for it. This SDK provides that tooling so that developers can focus on the "business logic" for their dapp.'),Object(n.b)("p",null,"Developers shouldn't need to reinvent the wheel for each new dapp: account and private key generation, linking to another wallet or adding meta-transaction support, etc. Let the Tasit SDK handle those parts for you."),Object(n.b)("p",null,"There's no reason building an Ethereum dapp should feel much different for the front-end developer than building an app using Firebase as the back end - with the Tasit SDK, that's the case."),Object(n.b)("p",null,"If you want to see the Ethereum ecosystem grow, mobile is critical for making that happen, because that's where all the users are."),Object(n.b)("h5",{id:"proof-of-decentralization"},"Proof of decentralization"),Object(n.b)("p",null,'Tasit will serve as "proof of decentralization" for the dapps we support. Vitalik Buterin once tweeted \'One simple litmus test for whether or not a blockchain project is truly decentralized: can a third party independently make a client for it, and do everything that the "official" client can?\'. We agree. It\'s time for major decoupling of "back end" and front end.'),Object(n.b)("h5",{id:"no-platform-risk"},"No platform risk"),Object(n.b)("p",null,'What\'s unique about the Ethereum ecosystem is that making a 3rd-party client is fully permissionless and interoperable, which means there\'s no risk that the developers of a smart contract can suddenly "throttle" users of their "API" in the way that would have been possible in web 2.0.'),Object(n.b)("h4",{id:"why-react-native"},"Why React Native?"),Object(n.b)("p",null,"The web-based front ends for most dapps these days are written with React, so using React Native for the native mobile version is a natural fit."),Object(n.b)("p",null,"It's a common misconception that React Native is good for prototyping but not production - this isn't true! It's out of scope for this README to go into that, but we'd recommend doing some research to decide for yourself (setting aside any preconceived notions you may have first)."),Object(n.b)("p",null,"Most younger developers building interesting new mobile apps these days use React Native (and often Expo) to automatically support both iOS and Android, but there is little-to-no tooling for Ethereum in the React Native ecosystem."),Object(n.b)("hr",null),Object(n.b)("p",null,Object(n.b)("a",o({parentName:"p"},{href:"/docs/home"}),"Go back to the home page of the docs")))}h.isMDXComponent=!0},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));var n=a(0),o=a.n(n),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=i(a),c=n,u=p[s+"."+c]||p[c]||h[c]||r;return a?o.a.createElement(u,Object.assign({},{ref:t},l,{components:a})):o.a.createElement(u,Object.assign({},{ref:t},l))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);