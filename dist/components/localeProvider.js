!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.juggle=t(require("react")):e.juggle=t(e.react)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getLanguage=t.pkgNames=void 0;var o=n(2),u=r(o),i=n(3),a=r(i),c={enUS:u.default,zhCN:a.default};t.pkgNames=Object.keys(c),t.getLanguage=function(e){var t=c[e];if(void 0!==t)return t;throw new Error("Unknown language package: "+e+", please check it")};t.default="enUS"},function(e,t){e.exports={hello:{text:"hello world"}}},function(e,t){e.exports={hello:{text:"你好，世界"}}},,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),l=r(c),f=n(1),p=r(f),s=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"getChildContext",value:function(){var e=this.props.locale;return{language:(0,f.getLanguage)(e),exist:!0}}},{key:"render",value:function(){var e=this.props.children;return l.default.Children.only(e)}}]),t}(c.PureComponent);s.propTypes={locale:c.PropTypes.oneOf(f.pkgNames),children:c.PropTypes.element},s.defaultProps={locale:p.default,children:void 0},s.childContextTypes={language:c.PropTypes.object,exist:c.PropTypes.bool},t.default=s}])});