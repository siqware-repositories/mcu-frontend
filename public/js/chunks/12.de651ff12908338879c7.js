(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{mSMc:function(e,t,i){"use strict";i.r(t);var s=i("o0o1"),a=i.n(s),n=(i("RVtD"),i("chKg"));function c(e,t,i,s,a,n,c){try{var r=e[n](c),o=r.value}catch(e){return void i(e)}r.done?t(o):Promise.resolve(o).then(s,a)}var r,o,l={name:"Academic",components:{swiper:n.swiper,swiperSlide:n.swiperSlide},data:function(){return{swiperOptionNews:{slidesPerView:4,slidesPerColumn:3,spaceBetween:30,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20}}},academic:"Faculty of Science and Technology",academicOnly:[],newsOnly:[],major_index:0,filteredAcademic:[{id:1,name:"Faculty of Arts, Humanities , and Language",content:"អត្ថបទ",created_at:"2019-12-06 07:40:58",updated_at:"2019-12-06 07:40:58",majors:[]}],is_home:!0,is_major:!1,is_activity:!1}},computed:{all_aoc:function(){return this.$store.getters.all_aoc},all_news:function(){return this.$store.getters.all_news},academic_only:function(){return this.all_aoc.filter((function(e){return e.majors.length}))}},created:(r=a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchNews();case 2:return e.next=4,this.fetchAoc();case 4:case"end":return e.stop()}}),e,this)})),o=function(){var e=this,t=arguments;return new Promise((function(i,s){var a=r.apply(e,t);function n(e){c(a,i,s,n,o,"next",e)}function o(e){c(a,i,s,n,o,"throw",e)}n(void 0)}))},function(){return o.apply(this,arguments)}),methods:{fetchNews:function(){var e=this;e.$store.dispatch("fetchNews").then((function(){e.filterNews(e.academic)}))},fetchAoc:function(){var e=this;e.$store.dispatch("fetchAoc").then((function(){e.filterAcademic(e.academic)}))},filterAcademic:function(e){this.academicOnly=this.all_aoc.filter((function(e){return e.majors.length})),this.filteredAcademic=this.academicOnly.filter((function(t){return t.name===e}))},filterNews:function(e){this.newsOnly=this.all_news.filter((function(t){return t.category===e}))},majorIndex:function(e){this.major_index=e}}},d=i("KHd+"),u=Object(d.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("vx-card",{attrs:{"no-radius":"","no-shadow":""}},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full mb-3"},[i("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"Select About Us"},on:{input:function(t){e.filterAcademic(e.academic),e.filterNews(e.academic)}},model:{value:e.academic,callback:function(t){e.academic=t},expression:"academic"}},e._l(e.academic_only,(function(e,t){return i("vs-select-item",{key:t,attrs:{value:e.name,text:e.name}})})),1)],1),e._v(" "),i("div",{staticClass:"vx-col w-full lg:w-1/4 rounded-lg"},[i("vx-card",[i("ul",{staticClass:"faq-topics mt-4"},[i("li",{staticClass:"p-2 font-medium flex items-center",on:{click:function(t){e.is_home=!0,e.is_major=!1,e.is_activity=!1}}},[i("div",{staticClass:"h-3 w-3 rounded-full mr-2 bg-danger-gradient"}),i("span",{staticClass:"cursor-pointer"},[e._v("Home")])]),e._v(" "),e._l(e.filteredAcademic[0].majors,(function(t,s){return i("li",{key:s,staticClass:"p-2 font-medium flex items-center",on:{click:function(t){e.majorIndex(s),e.is_home=!1,e.is_major=!0,e.is_activity=!1}}},[i("div",{staticClass:"h-3 w-3 rounded-full mr-2 bg-success"}),i("span",{staticClass:"cursor-pointer"},[e._v(e._s(t.major))])])})),e._v(" "),i("li",{staticClass:"p-2 font-medium flex items-center",on:{click:function(t){e.is_home=!1,e.is_major=!1,e.is_activity=!0}}},[i("div",{staticClass:"h-3 w-3 rounded-full mr-2 bg-success"}),i("span",{staticClass:"cursor-pointer"},[e._v("Activities")])])],2)])],1),e._v(" "),i("div",{staticClass:"vx-col w-full lg:w-3/4 mt-12 md:mt-0"},[e.is_home?i("vx-card",[i("h4",{staticClass:"mb-2"},[e._v(e._s(e.filteredAcademic[0].name))]),e._v(" "),i("div",{domProps:{innerHTML:e._s(e.filteredAcademic[0].content)}})]):e._e(),e._v(" "),e.is_major?i("vx-card",[i("vs-tabs",[i("vs-tab",{attrs:{label:"Home"}},[i("div",{domProps:{innerHTML:e._s(e.filteredAcademic[0].majors[e.major_index].content)}})]),e._v(" "),i("vs-tab",{attrs:{label:"Curriculum"}},[i("div",{domProps:{innerHTML:e._s(e.filteredAcademic[0].majors[e.major_index].curriculum)}})]),e._v(" "),i("vs-tab",{attrs:{label:"Schedule"}},[i("div",{domProps:{innerHTML:e._s(e.filteredAcademic[0].majors[e.major_index].schedule)}})])],1)],1):e._e(),e._v(" "),e.is_activity?i("vx-card",{attrs:{title:"Activities"}},[i("swiper",{attrs:{options:e.swiperOptionNews}},e._l(e.newsOnly,(function(t,s){return i("swiper-slide",{key:s},[i("router-link",{attrs:{to:"news/"+t.id+"/"+e.slugable(t.title)}},[i("img",{staticClass:"responsive mb-3",attrs:{src:"https://mcu.backend.siqware.app"+t.thumb,alt:"news"}}),e._v(" "),i("a",{staticClass:"mb-3 text-xl",attrs:{href:"#"}},[e._v("\n                            "+e._s(t.title)+"\n                        ")])])],1)})),1)],1):e._e()],1)])])}),[],!1,null,"671269c8",null);t.default=u.exports}}]);