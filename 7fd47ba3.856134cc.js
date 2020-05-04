(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(1),r=(a(0),a(119));const o={id:"main-features",title:"Main features",sidebar_label:"Main features"},s={id:"main-features",title:"Main features",description:"#### Onboarding",source:"@site/docs/MainFeatures.md",permalink:"/docs/main-features",sidebar_label:"Main features",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Why",permalink:"/docs/why"}},i=[{value:"Onboarding with ephemeral accounts and contract-based accounts",id:"onboarding-with-ephemeral-accounts-and-contract-based-accounts",children:[]},{value:"A pub/sub API for Ethereum contracts perfect for optimistic updates",id:"a-pubsub-api-for-ethereum-contracts-perfect-for-optimistic-updates",children:[]},{value:"Advanced support for popular ERC standards and well-known contracts",id:"advanced-support-for-popular-erc-standards-and-well-known-contracts",children:[]}],c={rightToc:i};function p({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"onboarding"},"Onboarding"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onboarding-with-ephemeral-accounts-and-contract-based-accounts"}),"Onboarding with ephemeral accounts and contract-based accounts"))),Object(r.b)("h4",{id:"ongoing-ux"},"Ongoing UX"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#a-pubsub-api-for-ethereum-contracts-perfect-for-optimistic-updates"}),"A pub/sub API for Ethereum contracts perfect for optimistic updates"))),Object(r.b)("h4",{id:"helper-libraries"},"Helper libraries"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#advanced-support-for-popular-erc-standards-and-heavily-used-contracts"}),"Advanced support for popular ERC standards and well-known contracts"))),Object(r.b)("h3",{id:"onboarding-with-ephemeral-accounts-and-contract-based-accounts"},"Onboarding with ephemeral accounts and contract-based accounts"),Object(r.b)("p",null,"Apps built with the Tasit SDK use an autogenerated in-app ephemeral account for the user to start with. We call it ephemeral (or burner or whatever you like) because it should never be the main place you hold your funds, and we don't ask you to back up the seed phrase for it. This brings the benefits of contract-based wallets like Gnosis Safe and Argent to dapps."),Object(r.b)("p",null,"Once you have enough value that you shouldn't hold it with that account, it can either be added as a signer to a contract-based account or move funds back and forth to a mobile wallet through deep linking."),Object(r.b)("p",null,"This SDK takes an opinionated approach to onboarding (although since it's a modular repo, you still retain the ability to use other child packages and not the onboarding-related ones if you prefer). The SDK supports read-only mode, meta-transactions, smart-contract-based accounts, and connecting with your mobile Ethereum wallet."),Object(r.b)("h4",{id:"read-only-for-as-long-as-possible"},"Read-only for as long as possible"),Object(r.b)("p",null,"A native mobile dapp should be read-only for as long as possible. The user shouldn't know there's a blockchain involved or see anything about an account, and an Ethereum account shouldn't even be created until it becomes necessary. Why go through an onboarding flow at all right away?"),Object(r.b)("p",null,"This flow for reading data from contracts without onboarding first just works with no special configuration. So in a sense ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/packages/action/"}),Object(r.b)("inlineCode",{parentName:"a"},"tasit-action")," is the child package")," that implements these features, but really these are just the basic features of that child package we've already discussed."),Object(r.b)("h4",{id:"ephemeral-account-and-private-key-generation"},"Ephemeral account and private key generation"),Object(r.b)("p",null,"Using the Tasit SDK, you can generate a new Ethereum account and private key."),Object(r.b)("p",null,"The Tasit SDK makes it simple for a new account to be instantiated in each mobile app it is used in."),Object(r.b)("p",null,"The intended UX is that this account should NOT have any significant amount of ETH, ERC20, or ERC721 tokens sent to it. This app is NOT a wallet. Instead, this address should be authorized to perform actions on behalf of a smart-contract-based account or software wallet a user already has with some ETH or tokens. This is an ephemeral account for that app on the device, and as the user gets more familiar with it their account can be progressively upgraded to a personal DAO later or their funds can be stored in their preferred primary software wallet."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/packages/account/"}),Object(r.b)("inlineCode",{parentName:"a"},"tasit-account")," is the child package")," that implements these features for the Tasit SDK."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This means fewer steps that need to be taken to onboard a new user.")),Object(r.b)("h4",{id:"for-users-new-to-ethereum-with-no-funds"},"For users new to Ethereum with no funds"),Object(r.b)("p",null,"For users without any ETH or tokens, any costs the user incurs at first should be subsidized. Give them a smart-contract-based account so that the UX around securing keys and recovering funds is simpler."),Object(r.b)("p",null,"This can be done using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@austin_48503/ethereum-meta-transactions-90ccf0859e84"}),"meta-transactions")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://universallogin.io/"}),"UniversalLoginSDK (ERC 1077 and 1078)")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://safe.gnosis.io/"}),"GnosisSafe")," or an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://blog.aragon.one/enter-the-world-of-personal-daos"}),"Aragon personal DAO"),"."),Object(r.b)("p",null,"The approach with meta-transactions (and universal login) is that the user's account is only used to sign messages, and then as a developer you can use your preferred centralized or decentralized solution to relay that as an Ethereum tx and pay and/or be rewarded as each solution sees fit."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/packages/contract-based-account/"}),Object(r.b)("inlineCode",{parentName:"a"},"tasit-contract-based-account")," is the child package")," that implements these features for the Tasit SDK."),Object(r.b)("h4",{id:"for-users-that-do-have-funds"},"For users that do have funds"),Object(r.b)("p",null,"Connects with your preferred mobile Ethereum wallet. Using ERC20+721 approvals or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://walletconnect.org/"}),"WalletConnect"),"."),Object(r.b)("p",null,"Users can continue to keep their funds in a proper wallet with better security guarantees if they do already have ETH, tokens, etc. and use them with this dapp."),Object(r.b)("p",null,"A user flow where a dapp's ephemeral account requests an approval for X ERC20 tokens of type A or one ERC721 token of type B is supported in the SDK."),Object(r.b)("p",null,"Through compatibility with WalletConnect, any standalone dapp can be authorized to take actions in a way that has only been possible in wallet apps to date. The wallet might be the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.gnosis.pm/announcing-the-gnosis-safe-beta-personal-edition-19a69a4453e8"}),"Gnosis Safe personal edition"),", the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/ricburton/status/1038772498756714496"}),"Balance wallet"),", Status, Coinbase Wallet, Argent, BRD, etc."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/packages/link-wallet/"}),Object(r.b)("inlineCode",{parentName:"a"},"tasit-link-wallet")," is the child package")," that implements these features for the Tasit SDK."),Object(r.b)("h4",{id:"wrapping-up-onboarding"},"Wrapping up onboarding"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This means a flow that users will be used to which decreases the friction for onboarding people who have used other Ethereum dapps.")),Object(r.b)("p",null,"Have a strong opinion on which onboarding flow we should prioritize the most? Please ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/contact"}),"reach out"),"!"),Object(r.b)("h3",{id:"a-pubsub-api-for-ethereum-contracts-perfect-for-optimistic-updates"},"A pub/sub API for Ethereum contracts perfect for optimistic updates"),Object(r.b)("p",null,"The Tasit SDK provides JavaScript/TypeScript middleware for reading from and writing to smart contracts (and listening to events) through an expressive pub/sub API. Meta-transactions are a first-class feature of the API for interacting with contracts."),Object(r.b)("p",null,"As a mobile developer, using the Tasit SDK to interact with the backend should be as simple as using Firebase as a backend-as-a-service. This library is written in such a way that the developer using the SDK can just think about writing data and listening for more data. The fact that there's a blockchain powering this is an implementation detail that is abstracted away."),Object(r.b)("p",null,"This middleware wraps the core ethers.js contract API for making JSON-RPC requests."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/packages/action/README.md"}),"Here is a lot more info")," about how this can be used."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/packages/action/"}),Object(r.b)("inlineCode",{parentName:"a"},"tasit-action")," is the child package")," that implements these features for the Tasit SDK."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This makes the experience for new developers working on a mobile app with the Tasit SDK simpler, which means more mobile dapps for end users.")),Object(r.b)("h3",{id:"advanced-support-for-popular-erc-standards-and-well-known-contracts"},"Advanced support for popular ERC standards and well-known contracts"),Object(r.b)("p",null,"Classes of smart contracts we support include ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://erc721.org/"}),"NFTs"),", with more to come. There\u2019s an ERC-standard-specific JavaScript/TypeScript API wrapping the lower-level Tasit SDK API for reading and writing and listening for data so that the function-names in the Tasit SDK are tailored to that type of dapp. As long as we\u2019ve built the tooling to interact with that class of dapp at least once before, the Tasit SDK can \u201cautomagically\u201d support any new dapp of that type."),Object(r.b)("p",null,"We also track the latest ABI and interface address for the most well-known dapp projects directly via their open-source GitHub repos."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/packages/contracts/"}),Object(r.b)("inlineCode",{parentName:"a"},"tasit-contracts")," is the child package")," that implements these features for the Tasit SDK."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This makes it simpler to customize the autogenerated app for a certain ERC standard and swap it to use with your own smart contracts or the already-on-chain smart contracts for a different dapp of that same ERC-type. This also means there\u2019s a network effect for the Tasit SDK, so once we have a few apps using it, it will be much faster to make new apps with it.")),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/home"}),"Go back")," to the home page of the docs."),Object(r.b)("p",null,"See something that can be improved on this page? ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tasitlabs/tasit-sdk/blob/develop/packages/docs/docs/MainFeatures.md"}),"Edit it here"),"."))}p.isMDXComponent=!0},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),h=n,d=b["".concat(s,".").concat(h)]||b[h]||u[h]||o;return a?r.a.createElement(d,i({ref:t},p,{components:a})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);