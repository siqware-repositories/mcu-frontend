(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"IW/z":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".image[data-v-bbf3c674] {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}[dir] .image[data-v-bbf3c674] {\n  background-size: cover;\n  cursor: pointer;\n  margin: 5px;\n  border-radius: 3px;\n  border: 1px solid lightgray;\n}\n",""])},YgAq:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),i=n("BnyB");function s(t,e,n,r,a,i,s){try{var l=t[i](s),o=l.value}catch(t){return void n(t)}l.done?e(o):Promise.resolve(o).then(r,a)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function l(t){s(i,r,a,l,o,"next",t)}function o(t){s(i,r,a,l,o,"throw",t)}l(void 0)}))}}var o,c,u={name:"GalleryIndex",components:{gallery:n.n(i).a},data:function(){return{images:[],index:null,galleries:[{gallery_album:[]}]}},computed:{all_galleries:function(){return this.$store.getters.all_galleries}},created:(c=l(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchGalleries();case 2:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),methods:{fetchGalleries:(o=l(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.next=3,e.$store.dispatch("fetchGalleries").then((function(){e.filterSingleGallery(),e.imagePathOnly()}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),filterSingleGallery:function(){var t=this;t.galleries=t.all_galleries.filter((function(e){return parseInt(e.id)===parseInt(t.$route.params.id)}))},imagePathOnly:function(){var t=this;t.galleries[0].gallery_album.forEach((function(e,n){t.images.push("https://mcu.backend.siqware.app".concat(e.path))}))}}},f=(n("xSBC"),n("KHd+")),d=Object(f.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("vx-card",[n("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),n("div",{staticClass:"vx-row"},t._l(t.images,(function(e,r){return n("div",{key:r,staticClass:"vx-col md:w-1/3 sm:w-1/2 w-full"},[n("img",{staticClass:"image shadow-md",attrs:{src:e,alt:"gallery"},on:{click:function(e){t.index=r}}})])})),0)],1)],1)}),[],!1,null,"bbf3c674",null);e.default=d.exports},ts5I:function(t,e,n){var r=n("IW/z");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(t.exports=r.locals)},xSBC:function(t,e,n){"use strict";var r=n("ts5I");n.n(r).a}}]);