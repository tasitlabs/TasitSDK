(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(1),n=(a(0),a(119));const i={id:"other-features",title:"Other features",sidebar_label:"Other features"},o={id:"other-features",title:"Other features",description:"#### Onboarding",source:"@site/docs/OtherFeatures.md",permalink:"/docs/other-features",sidebar_label:"Other features",sidebar:"docs",previous:{title:"Project layout",permalink:"/docs/project-layout"},next:{title:"Contact",permalink:"/docs/contact"}},l=[],c={rightToc:l};function p({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h4",{id:"onboarding"},"Onboarding"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Simple integration of fiat onramps that let users use Apple Pay and Google pay")),Object(n.b)("h4",{id:"ongoing-ux"},"Ongoing UX"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ENS support"),Object(n.b)("li",{parentName:"ul"},"Meta-transaction support"),Object(n.b)("li",{parentName:"ul"},"Support for querying data using the The Graph")),Object(n.b)("h4",{id:"mobile-features"},"Mobile features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Push notifications"),Object(n.b)("li",{parentName:"ul"},"Biometric auth"),Object(n.b)("li",{parentName:"ul"},"Deep linking")),Object(n.b)("h4",{id:"devex"},"DevEx"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#configurable-json-rpc-client"}),"Configurable JSON-RPC client"))),Object(n.b)("h4",{id:"future-features"},"Future features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#eth-2-support"}),"Eth 2.0 support")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#l2-support"}),"L2 support")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#a-cli-for-scaffolding-a-mobile-dapp"}),"A CLI for scaffolding a mobile dapp")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#a-library-of-native-mobile-dapp-components"}),"A library of native mobile dapp components"))),Object(n.b)("h4",{id:"configurable-json-rpc-client"},"Configurable JSON-RPC client"),Object(n.b)("p",null,"We realize that different developers have different takes on whether it's an acceptable compromise to use Infura in the way that MetaMask does in the browser or whether a local Ethereum light client is warranted more like in the original version of Status or Augur. We anticipate that in the short term, almost all developers using this SDK will use Infura. It's a good stopgap solution for now."),Object(n.b)("p",null,"We leave the JSON-RPC provider configurable so that the SDK doesn't take an opinionated stance on this."),Object(n.b)("p",null,"There are a couple projects working to make it simple to spin up your own high-availability, high-performance JSON-RPC client(s) (including Infura) or to use a decentralized and incentivized network of full nodes, so that should decentralize things a bit until we get to Eth 2.0. See ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://dappnode.io/"}),"DAppNode"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ChainSafeSystems/denode"}),"denode"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://vipnode.org/"}),"Vipnode"),", and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://slock.it/incubed.html"}),"Incubed")," by slock.it."),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/packages/action/"}),Object(n.b)("inlineCode",{parentName:"a"},"tasit-action")," is the child package")," that implements these features for the Tasit SDK."),Object(n.b)("h5",{id:"in-the-future"},"In the future"),Object(n.b)("p",null,"We have no plans until Eth 2.0 to make a special abstraction for running a local light geth node like Status did originally. The Tasit SDK works with whatever JSON-RPC client you point it at, but we won't be adding an abstraction for using a light client within the native mobile dapp until Eth 2.0. People have had too many issues with this on mobile: dropped network connections, using all disk space, battery usage, etc."),Object(n.b)("p",null,"Looking towards the future, light and ultralight client projects we're tracking for first-class support in this SDK include:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://nimbus.status.im/"}),"Nimbus")," by Status"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.musteka.la/"}),"Mustekala")," by MetaMask"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/paritytech/js-libs/tree/master/packages/light.js"}),"LightJS")," by Parity")),Object(n.b)("h4",{id:"eth-20-support"},"Eth 2.0 support"),Object(n.b)("p",null,"The Tasit SDK will work with the Ethereum 2.0 release. We support Ethereum-based dapps to start, and in the long run the Tasit SDK will work with any blockchain that uses EVM and/or eWASM."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"In order for the Tasit SDK to make a difference for current and future users of Ethereum, it will need to support future versions of the EVM.")),Object(n.b)("h4",{id:"l2-support"},"L2 support"),Object(n.b)("p",null,"We're keeping an eye on various zk rollup projects and optimistic rollup projects like the OVM by ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://optimism.io/"}),"Optimism"),"."),Object(n.b)("h4",{id:"automatic-scaffolding-using-the-tasit-cli"},"Automatic scaffolding using the Tasit CLI"),Object(n.b)("p",null,"Are you starting a project from scratch? Let the Tasit CLI scaffold out your project for you. More details on this ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tasitlabs/tasit#automatic-scaffolding-using-the-tasit-cli"}),"here"),"."),Object(n.b)("p",null,"The Decentraland app generated using ",Object(n.b)("inlineCode",{parentName:"p"},"tasit init --nft")," ship with styled-but-customizable React Native components for using each feature of the dapp, leveraging the js middleware."),Object(n.b)("p",null,"This feature lives over in our ",Object(n.b)("inlineCode",{parentName:"p"},"tasit")," repo - ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tasitlabs/tasit#automatic-scaffolding-using-the-tasit-cli"}),"details here")," - since it's tightly integrated with the React Native mobile dapp codebase."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"This also makes the experience for new developers working on a mobile app with the Tasit SDK simpler, which also means more mobile dapps for end users.")),Object(n.b)("h4",{id:"a-library-of-native-mobile-dapp-components"},"A library of native mobile dapp components"),Object(n.b)("p",null,"This feature lives over in our ",Object(n.b)("inlineCode",{parentName:"p"},"tasit")," repo - ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tasitlabs/tasit/tree/develop/shared"}),"here")," - since it's tightly integrated with the React Native mobile dapp codebase."),Object(n.b)("hr",null),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/home"}),"Go back")," to the home page of the docs."),Object(n.b)("p",null,"See something that can be improved on this page? ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tasitlabs/tasit-sdk/blob/develop/packages/docs/docs/OtherFeatures.md"}),"Edit it here"),"."))}p.isMDXComponent=!0},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),h=r,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return a?n.a.createElement(d,l({ref:t},p,{components:a})):n.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);