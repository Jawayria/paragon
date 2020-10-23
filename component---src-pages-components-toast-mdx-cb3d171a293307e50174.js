(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"A2+M":function(t,n,e){var r=e("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,n,e){var r=e("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},KcSJ:function(t,n,e){"use strict";var r=e("q1tI"),o=e.n(r),a=e("A2+M"),c=e("7ljp"),s=e("MhRC"),u=(e("hZTp"),{pre:function(t){return o.a.createElement("div",t)},code:s.a}),i=function(t){var n=t.children,e=n;return"string"==typeof e&&(e=o.a.createElement(a.MDXRenderer,null,n)),o.a.createElement(c.MDXProvider,{components:u},e)};n.a=function(t){return o.a.createElement("div",null,o.a.createElement(i,null,t.children))}},RIqP:function(t,n,e){var r=e("Ijbi"),o=e("EbDI"),a=e("ZhPi"),c=e("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||c()}},SksO:function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},WkPL:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},X8hv:function(t,n,e){var r=e("sXyB"),o=e("RIqP"),a=e("lSNA"),c=e("8OQS");function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var i=e("q1tI"),l=e("7ljp"),p=l.useMDXComponents,f=l.mdx,m=e("BfwJ").useMDXScope;t.exports=function(t){var n=t.scope,e=t.components,a=t.children,s=c(t,["scope","components","children"]),l=p(e),b=m(n),d=i.useMemo((function(){if(!a)return null;var t=u({React:i,mdx:f},b),n=Object.keys(t),e=n.map((function(n){return t[n]}));return r(Function,["_fn"].concat(o(n),[""+a])).apply(void 0,[{}].concat(o(e)))}),[a,n]);return i.createElement(d,u({components:l},s))}},ZhPi:function(t,n,e){var r=e("WkPL");t.exports=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},b48C:function(t,n){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},biq7:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return p})),e.d(n,"default",(function(){return b}));var r=e("zLVn"),o=(e("q1tI"),e("7ljp")),a=e("KcSJ"),c=e("Wbzz"),s=e("mwIZ"),u=e.n(s),i=e("NJaX"),l=e("BXwR"),p={},f={_frontmatter:p},m=a.a;function b(t){var n=t.components,e=Object(r.a)(t,["components"]);return Object(o.mdx)(m,Object.assign({},f,e,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Toast"),Object(o.mdx)(l.a,{frontmatter:u()(e,"pageContext.frontmatter")?e.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(o.mdx)("h5",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'() => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <Toast\n        onClose={() => setShow(false)}\n        show={show}\n      >\n        Example of a basic Toast.\n      </Toast>\n\n      <Button variant="primary" onClick={() => setShow(true)}>Show Toast</Button>\n    </>\n  );\n}\n')),Object(o.mdx)("h5",null,"With Button"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'() => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <Toast\n        action={{\n          label: "Optional Button",\n          onClick: () => console.log(\'You clicked the action button.\')\n        }}\n        onClose={() => setShow(false)}\n        show={show}\n      >\n        Success! Example of a Toast with a button.\n      </Toast>\n\n      <Button variant="primary" onClick={() => setShow(true)}>Show Toast</Button>\n    </>\n  );\n}\n')),Object(o.mdx)("h5",null,"With Link"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'() => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <Toast\n        action={{\n          label: "Optional Link",\n          href: "#"\n        }}\n        onClose={() => setShow(false)}\n        show={show}\n      >\n        Success! Example of a Toast with a link.\n      </Toast>\n\n      <Button variant="primary" onClick={() => setShow(true)}>Show Toast</Button>\n    </>\n  );\n}\n')),Object(o.mdx)("h5",null,"Props"),Object(o.mdx)(c.StaticQuery,{query:"3954045067",render:function(t){var n=t.componentMetadata;return null==n?null:Object(o.mdx)(i.a,{propMetaData:n.props,mdxType:"PropsTable"})},mdxType:"StaticQuery"}))}b.isMDXComponent=!0},lSNA:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},sXyB:function(t,n,e){var r=e("SksO"),o=e("b48C");function a(n,e,c){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,n,e){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(t,o));return e&&r(a,e.prototype),a},a.apply(null,arguments)}t.exports=a}}]);
//# sourceMappingURL=component---src-pages-components-toast-mdx-cb3d171a293307e50174.js.map