(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20813a"],{a2f9:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box",class:a.animateClass},[e("Head",{attrs:{title:"资讯"}}),e("div",{domProps:{innerHTML:a._s(a.page)}})],1)},s=[],i=e("ed08"),o={mixins:[i["a"]],data:function(){return{page:""}},mounted:function(){var a=this;this.$axios.get("/maizuo/gateway?actId=ElzMZU125260",{headers:{"X-Host":"mall.act.static-page.info"}}).then((function(t){a.page=t.data.data.data.content,console.log(a.page)}))}},c=o,l=e("4023"),d=Object(l["a"])(c,n,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20813a.65a24fc0.js.map