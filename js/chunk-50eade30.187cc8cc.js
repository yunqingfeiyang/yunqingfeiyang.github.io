(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50eade30"],{1537:function(t,a,i){"use strict";var s=i("589b"),e=i.n(s);e.a},"589b":function(t,a,i){},f4f5:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"box",class:t.animateClass},[i("Head",{attrs:{title:"影院"}}),i("div",{staticClass:"c-list"},t._l(t.cinemaList,(function(a,s){return i("router-link",{key:s,staticClass:"c-item",attrs:{to:{name:"yydetail",params:{cinemaId:a.cinemaId}}}},[i("div",{staticClass:"c-left"},[i("h4",[t._v(t._s(a.name))]),i("h6",[t._v(t._s(a.address))])]),i("div",{staticClass:"c-right"},[i("p",[t._v(t._s(t._f("price")(a.lowPrice/100)))]),i("strong",[t._v("距离未知")])])])})),1)],1)},e=[],c=i("ed08"),n={mixins:[c["c"],c["a"]],data:function(){return{cinemaList:[]}},mounted:function(){var t=this;this.$axios.get("/maizuo/gateway?ticketFlag=1&k=635051",{params:{cityId:this.city.cityId},headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"15729643184239132721923","bc":"110100"}',"X-Host":"mall.film-ticket.cinema.list"}}).then((function(a){t.cinemaList=a.data.data.cinemas}))}},l=n,r=(i("1537"),i("4023")),o=Object(r["a"])(l,s,e,!1,null,"08ac86cc",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-50eade30.187cc8cc.js.map