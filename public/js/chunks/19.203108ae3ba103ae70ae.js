(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{TCz6:function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),s=e.n(r);function i(t,n,e,r,s,i,a){try{var c=t[i](a),o=c.value}catch(t){return void e(t)}c.done?n(o):Promise.resolve(o).then(r,s)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,s){var a=t.apply(n,e);function c(t){i(a,r,s,c,o,"next",t)}function o(t){i(a,r,s,c,o,"throw",t)}c(void 0)}))}}var c,o,u={name:"NewsIndex",data:function(){return{news:[{content:""}]}},computed:{all_news:function(){return this.$store.getters.all_news}},created:(o=a(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchNews();case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),methods:{fetchNews:(c=a(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this,t.next=3,n.$store.dispatch("fetchNews").then((function(){n.filterSingleNews()}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),filterSingleNews:function(){var t=this;t.news=t.all_news.filter((function(n){return parseInt(n.id)===parseInt(t.$route.params.id)}))}}},f=e("KHd+"),h=Object(f.a)(u,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("vx-card",[n("div",{domProps:{innerHTML:this._s(this.news[0].content)}})])],1)}),[],!1,null,"1c99faba",null);n.default=h.exports}}]);