(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},KcSJ:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("A2+M"),a=n("7ljp"),i=n("MhRC"),u=(n("hZTp"),{pre:function(t){return o.a.createElement("div",t)},code:i.a}),p=function(t){var e=t.children,n=e;return"string"==typeof n&&(n=o.a.createElement(c.MDXRenderer,null,e)),o.a.createElement(a.MDXProvider,{components:u},n)};e.a=function(t){return o.a.createElement("div",null,o.a.createElement(p,null,t.children))}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),c=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||c(t)||a()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),c=n("lSNA"),a=n("8OQS");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=n("q1tI"),s=n("7ljp"),f=s.useMDXComponents,l=s.mdx,m=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,i=a(t,["scope","components","children"]),s=f(n),b=m(e),d=p.useMemo((function(){if(!c)return null;var t=u({React:p,mdx:l},b),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,e]);return p.createElement(d,u({components:s},i))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function c(e,n,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c},uiUt:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return p})),n.d(e,"default",(function(){return l}));var r=n("zLVn"),o=(n("q1tI"),n("7ljp")),c=n("KcSJ"),a=n("mwIZ"),i=n.n(a),u=n("BXwR"),p={},s={_frontmatter:p},f=c.a;function l(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.mdx)(f,Object.assign({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Spinner"),Object(o.mdx)(u.a,{frontmatter:i()(n,"pageContext.frontmatter")?n.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",{style:{fontSize:"1.5em"}},"This is a pass through component from React-Bootstrap.",Object(o.mdx)("br",null),Object(o.mdx)("a",{href:"https://react-bootstrap.github.io/components/spinners",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),Object(o.mdx)("h5",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Spinner animation="border" variant="primary" />\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-spinner-mdx-0ce1bc37d51451376c0b.js.map