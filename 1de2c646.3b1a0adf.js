(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(7),i=(n(0),n(119)),o={id:"publishing",title:"(Internal docs) Publishing",sidebar_label:"(Internal docs) Publishing"},c={id:"publishing",title:"(Internal docs) Publishing",description:"### Publishing new versions",source:"@site/docs/Publishing.md",permalink:"/docs/publishing",sidebar_label:"(Internal docs) Publishing",sidebar:"docs",previous:{title:"Contact",permalink:"/docs/contact"}},l=[{value:"Publishing new versions",id:"publishing-new-versions",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"publishing-new-versions"},"Publishing new versions"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note: This doc is mainly useful for the Tasit team to publish new versions of the Tasit SDK, not for a team using the Tasit SDK.")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a publish issue on GitHub (with the desired new version number in the name).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a new branch (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"feature/publish-1-2-3"),") from an updated ",Object(i.b)("inlineCode",{parentName:"p"},"develop")," branch.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm run publish")," script"),Object(i.b)("p",{parentName:"li"},"This script will clean packages, install dependencies, compile and test all packages. If all these steps run without error, the ",Object(i.b)("inlineCode",{parentName:"p"},"lerna publish")," routine will be called and a prompt will be shown:"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"```\n? Select a new version (currently 0.0.7) (Use arrow keys)\n\u276f Patch (0.0.8)\n  Minor (0.1.0)\n  Major (1.0.0)\n  Prepatch (0.0.8-alpha.0)\n  Preminor (0.1.0-alpha.0)\n  Premajor (1.0.0-alpha.0)\n  Custom Prerelease\n  Custom Version\n```\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"After the selection of the correct option, the packages that are about to have new versions published are listed:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"```\n? Select a new version (currently 0.0.7) Patch (0.0.8)\n\nChanges:\n - tasit-account: 0.0.7 => 0.0.8\n - tasit-action: 0.0.7 => 0.0.8\n - tasit-contracts: 0.0.7 => 0.0.8\n - tasit-sdk: 0.0.7 => 0.0.8\n\n? Are you sure you want to publish these packages? (ynH)\n```\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If that's correct, press ",Object(i.b)("inlineCode",{parentName:"p"},"y")," to publish the packages.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"During the publishing process, Lerna will update the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," files with the new version and push changes to the GitHub repository (and to npm, of course).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If that was successful, create a new PR that auto-closes the issue created in step 1."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Troubleshooting")),Object(i.b)("p",null,"Sometimes during the ",Object(i.b)("inlineCode",{parentName:"p"},"lerna bootstrap")," process, the file ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," can be changed, and that will make ",Object(i.b)("inlineCode",{parentName:"p"},"lerna publish")," abort. Publishing will only be done if there are no unstaged files in the ",Object(i.b)("inlineCode",{parentName:"p"},"git")," repo. To solve that, commit the file and run the ",Object(i.b)("inlineCode",{parentName:"p"},"publish")," script again."),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/home"}),"Go back")," to the home page of the docs."),Object(i.b)("p",null,"See something that can be improved on this page? ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tasitlabs/tasit-sdk/blob/develop/packages/docs/docs/Publishing.md"}),"Edit it here"),"."))}p.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),h=r,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);