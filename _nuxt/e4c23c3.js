(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{260:function(n,t,e){var content=e(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(72).default)("2cbcf53a",content,!0,{sourceMap:!1})},268:function(n,t,e){"use strict";var r=e(11),o=e(0),c=e(3),f=e(107),l=e(18),d=e(13),v=e(189),_=e(40),m=e(106),h=e(188),x=e(4),N=e(73).f,I=e(32).f,y=e(16).f,E=e(269),w=e(270).trim,A="Number",F=o.Number,S=F.prototype,k=o.TypeError,V=c("".slice),T=c("".charCodeAt),M=function(n){var t=h(n,"number");return"bigint"==typeof t?t:C(t)},C=function(n){var t,e,r,o,c,f,l,code,d=h(n,"number");if(m(d))throw k("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=w(d),43===(t=T(d,0))||45===t){if(88===(e=T(d,2))||120===e)return NaN}else if(48===t){switch(T(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(f=(c=V(d,2)).length,l=0;l<f;l++)if((code=T(c,l))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(f(A,!F(" 0o1")||!F("0b1")||F("+0x1"))){for(var O,R=function(n){var t=arguments.length<1?0:F(M(n)),e=this;return _(S,e)&&x((function(){E(e)}))?v(Object(t),e,R):t},j=r?N(F):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;j.length>z;z++)d(F,O=j[z])&&!d(R,O)&&y(R,O,I(F,O));R.prototype=S,S.constructor=R,l(o,A,R)}},269:function(n,t,e){var r=e(3);n.exports=r(1..valueOf)},270:function(n,t,e){var r=e(3),o=e(21),c=e(12),f=e(271),l=r("".replace),d="["+f+"]",v=RegExp("^"+d+d+"*"),_=RegExp(d+d+"*$"),m=function(n){return function(t){var e=c(o(t));return 1&n&&(e=l(e,v,"")),2&n&&(e=l(e,_,"")),e}};n.exports={start:m(1),end:m(2),trim:m(3)}},271:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},272:function(n,t,e){"use strict";e(260)},273:function(n,t,e){var r=e(71)((function(i){return i[1]}));r.push([n.i,'/*purgecss start ignore*/\n[data-v-44b7536c]:root{\n  font-family:"Nunito",Helvetica,Arial\n}\n*[data-v-44b7536c],[data-v-44b7536c]:after,[data-v-44b7536c]:before{\n  box-sizing:border-box\n}\nh1[data-v-44b7536c]{\n  font-size:24px;\n  font-weight:700;\n  line-height:130%;\n  color:#fff\n}\n.app_header__main-container[data-v-44b7536c]{\n  display:flex;\n  justify-content:space-between\n}\n.app_header__back-button[data-v-44b7536c]{\n  width:24px;\n  height:24px;\n  color:#fff\n}\n.app_header__logo[data-v-44b7536c]{\n  margin-left:auto\n}\n.debit-card__main-container[data-v-44b7536c]{\n  background-color:#0c365a;\n  padding:24px\n}\n.debit-card__balance-title[data-v-44b7536c]{\n  font-size:14px;\n  margin-top:24px\n}\n.login-page__main-container[data-v-44b7536c]{\n  background-color:#43976c;\n  color:rgba(64,37,52,.37254901960784315)\n}\n.main-container[data-v-44b7536c]{\n  display:flex;\n  align-items:center\n}\n.currency-container[data-v-44b7536c]{\n  background-color:#01d167;\n  width:40px;\n  height:22px;\n  border-radius:4px;\n  font-weight:700;\n  color:#fff\n}\n\n/*purgecss end ignore*/',""]),r.locals={},n.exports=r},278:function(n,t,e){"use strict";e.r(t);e(268);var r={props:{currencyValue:{type:Number,required:!1,default:3e3}},computed:{currencyValueFormatted:function(){return new Intl.NumberFormat("en-IN",{maximumSignificantDigits:3}).format(this.currencyValue)}}},o=(e(272),e(46)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"currency-container text-center"},[n._v("\n     S$  \n ")]),n._v(" "),e("h1",{staticClass:"ml-2"},[n._v("\n     "+n._s(n.currencyValueFormatted)+"\n ")])])}),[],!1,null,"44b7536c",null);t.default=component.exports}}]);