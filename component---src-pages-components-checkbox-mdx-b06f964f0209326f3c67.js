(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},KcSJ:function(e,t,n){"use strict";var r=n("q1tI"),c=n.n(r),o=n("A2+M"),a=n("7ljp"),l=n("MhRC"),i=(n("hZTp"),{pre:function(e){return c.a.createElement("div",e)},code:l.a}),u=function(e){var t=e.children,n=t;return"string"==typeof n&&(n=c.a.createElement(o.MDXRenderer,null,t)),c.a.createElement(a.MDXProvider,{components:i},n)};t.a=function(e){return c.a.createElement("div",null,c.a.createElement(u,null,e.children))}},RIqP:function(e,t,n){var r=n("Ijbi"),c=n("EbDI"),o=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||c(e)||o(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),c=n("RIqP"),o=n("lSNA"),a=n("8OQS");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),s=n("7ljp"),p=s.useMDXComponents,m=s.mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,l=a(e,["scope","components","children"]),s=p(n),b=f(t),d=u.useMemo((function(){if(!o)return null;var e=i({React:u,mdx:m},b),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+o])).apply(void 0,[{}].concat(c(n)))}),[o,t]);return u.createElement(d,i({components:s},l))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},etYa:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n("zLVn"),c=(n("q1tI"),n("7ljp")),o=n("KcSJ"),a=n("Wbzz"),l=n("mwIZ"),i=n.n(l),u=n("NJaX"),s=n("BXwR"),p={},m={_frontmatter:p},f=o.a;function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.mdx)(f,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",null,"Checkbox"),Object(c.mdx)(s.a,{frontmatter:i()(n,"pageContext.frontmatter")?n.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(c.mdx)("h5",null,"Basic usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<CheckBox\n  name="checkbox"\n  label="check me out!"\n/>\n')),Object(c.mdx)("h5",null,"Disabled"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<CheckBox\n  name="checkbox"\n  label="you cannot check me out"\n  disabled\n/>\n')),Object(c.mdx)("h5",null,"Default checked"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<CheckBox\n  name="checkbox"\n  label="(un)check me out"\n  checked\n/>\n')),Object(c.mdx)("h5",null,"Call a function"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<CheckBox\n  name="checkbox"\n  label="check out the console"\n  onChange={() => console.log(\'the checkbox changed state\')}\n/>\n')),Object(c.mdx)("h5",null,"Controlled example"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'class CheckBoxWrapper extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.toggleCheckBox = this.toggleCheckBox.bind(this);\n\n    this.state = {\n      checked: false,\n    };\n  }\n\n  toggleCheckBox() {\n    this.setState({\n      checked: !this.state.checked,\n    });\n  }\n\n  render() {\n    return (\n      <div className="d-flex align-items-center">\n        <Button\n          variant="light"\n          className="mr-3"\n          onClick={this.toggleCheckBox}\n        >\n          Click me to toggle the check box!\n        </Button>\n        <CheckBox\n          name="checkbox"\n          label="click the button"\n          checked={this.state.checked}\n        />\n      </div>\n    );\n  }\n}\n')),Object(c.mdx)("h5",null,"Props"),Object(c.mdx)(a.StaticQuery,{query:"3214452616",render:function(e){var t=e.componentMetadata;return null==t?null:Object(c.mdx)(u.a,{propMetaData:t.props,mdxType:"PropsTable"})},mdxType:"StaticQuery"}))}b.isMDXComponent=!0},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var r=n("SksO"),c=n("b48C");function o(t,n,a){return c()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,n){var c=[null];c.push.apply(c,t);var o=new(Function.bind.apply(e,c));return n&&r(o,n.prototype),o},o.apply(null,arguments)}e.exports=o}}]);
//# sourceMappingURL=component---src-pages-components-checkbox-mdx-b06f964f0209326f3c67.js.map