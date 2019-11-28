(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/office/Office.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/office/Office.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Office",
  data: function data() {
    return {
      academic: 1,
      faqSearchQuery: '',
      faqFilter: 1,
      categories: [{
        id: 1,
        name: 'All',
        color: 'grey'
      }, {
        id: 2,
        name: 'General',
        color: 'primary'
      }, {
        id: 3,
        name: 'Licenses',
        color: 'success'
      }, {
        id: 4,
        name: 'Company usage',
        color: 'warning'
      }, {
        id: 5,
        name: 'Trademark use',
        color: 'danger'
      }],
      faqs: [{
        id: 1,
        categoryId: 2,
        question: 'What does royalty free mean?',
        ans: 'Royalty free means you just need to pay for rights to use the item once per end product. You don\'t need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses.'
      }, {
        id: 2,
        categoryId: 2,
        question: 'What do you mean by item and end product?',
        ans: 'The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template; the end product is the finalized business card. The item is a button graphic; the end product is an app using the button graphic in the app\'s interface.'
      }, {
        id: 3,
        categoryId: 2,
        question: 'Am I allowed to modify the item that I purchased?',
        ans: 'Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client.'
      }, {
        id: 4,
        categoryId: 2,
        question: 'What does non-exclusive mean?',
        ans: 'Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item.'
      }, {
        id: 5,
        categoryId: 3,
        question: 'Is the Regular License the same thing as an editorial license?',
        ans: 'No, our Regular License is for a free end product (whether or not the item is used in the end product in an editorial way). And our Extended License is for an end product that\'s sold (whether or not the item is used in the end product in an editorial way). If you want to use an item in an editorial way in your end product, choose the Regular License if your end product is distributed for free, and choose the Extended License if your end product is sold to the end customer.'
      }, {
        id: 6,
        categoryId: 3,
        question: 'Which license do I need for an end product that is only accessible to paying users?',
        ans: 'If the end users need to pay to see the end product, you need an Extended License. There can be more than one end user as long as there is only one end product. Example: A website that requires money before you can access the content.'
      }, {
        id: 7,
        categoryId: 3,
        question: 'Which license do I need to use an item in a commercial?',
        ans: 'You only need a Regular License where the end product is an advertisement, as the audience does not have to pay to view it. It doesn\'t matter if the advertisement is for things that are being sold. Example: An After Effects template used to produce a TV commercial would only need the Regular License'
      }, {
        id: 8,
        categoryId: 3,
        question: 'Can I re-distribute an item? What about under an Extended License?',
        ans: 'No. You can\'t license items and then make them available to others "as-is" (that is, as a stand-alone item or as stock), regardless of which license you purchase. Example: You can\'t buy a business card template and distribute it as a template, source files and all.'
      }, {
        id: 9,
        categoryId: 4,
        question: 'Can multiple people within my company have access to the item?',
        ans: 'Yes. If you purchased a single-use license, access should only be given to people working on the single end product incorporating that item.'
      }, {
        id: 10,
        categoryId: 4,
        question: 'Can I store the item on an intranet so everyone has access?',
        ans: 'No, items must be stored in a location where only those who need them have access. If you purchased a single-use license, once the item has been used in a single end product, the only place you should store it is in the archive files for that end product.'
      }, {
        id: 11,
        categoryId: 5,
        question: 'Does this apply to all items from Envato Market?',
        ans: 'No. This only applies to items with real-world products and trademarks in the actual item. This is most likely in product mock-ups (graphics items), product promos (motion graphics project files) and 3D items. This does not apply to PhotoDune items, which are available for commercial use. This also does not apply to images of products and trademarks used illustratively in item previews, as they\'re not included in the item you download.'
      }, {
        id: 12,
        categoryId: 5,
        question: 'What does \'editorial use\' mean?',
        ans: 'Editorial use means using an item only for news or journalistic purposes like in blogs, magazine and newspaper editorial applications.'
      }, {
        id: 13,
        categoryId: 5,
        question: 'Is this item still \'royalty free\'?',
        ans: 'Yes. Royalty free means you pay for the item once for each end product, and you don\'t need to pay any additional or ongoing fees for each person who sees or uses it. This is separate to whether you need a clearance from the owner of rights in the real world product or trademark within an item.'
      }],
      supporters: [{
        id: 1,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-1.jpg */ "./resources/assets/images/portrait/small/avatar-s-1.jpg"),
        name: 'Boyce Shene',
        profession: 'Web Developer'
      }, {
        id: 2,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-2.jpg */ "./resources/assets/images/portrait/small/avatar-s-2.jpg"),
        name: 'Margie Sevy',
        profession: 'Web Designer'
      }, {
        id: 3,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-3.jpg */ "./resources/assets/images/portrait/small/avatar-s-3.jpg"),
        name: 'Cyndi Navas',
        profession: 'Web Developer'
      }, {
        id: 4,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-4.jpg */ "./resources/assets/images/portrait/small/avatar-s-4.jpg"),
        name: 'Chi Petrusky',
        profession: 'Web Developer'
      }, {
        id: 5,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-5.jpg */ "./resources/assets/images/portrait/small/avatar-s-5.jpg"),
        name: 'Shanel Dumag',
        profession: 'Web Designer'
      }]
    };
  },
  computed: {
    filteredFaq: function filteredFaq() {
      var _this = this;

      return this.faqs.filter(function (faq) {
        if (_this.faqFilter == 1) return faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase());else if (_this.faqFilter == 2) return faq.categoryId == 2 && (faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()));else if (_this.faqFilter == 3) return faq.categoryId == 3 && (faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()));else if (_this.faqFilter == 4) return faq.categoryId == 4 && (faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()));else if (_this.faqFilter == 5) return faq.categoryId == 5 && (faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/office/Office.vue?vue&type=template&id=2a572116&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/office/Office.vue?vue&type=template&id=2a572116&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vx-row" }, [
    _c(
      "div",
      { staticClass: "vx-col w-full mb-3" },
      [
        _c(
          "vs-select",
          {
            staticClass: "w-full",
            attrs: { autocomplete: "", label: "Select Academic" },
            model: {
              value: _vm.academic,
              callback: function($$v) {
                _vm.academic = $$v
              },
              expression: "academic"
            }
          },
          _vm._l(_vm.categories, function(item, index) {
            return _c("vs-select-item", {
              key: index,
              attrs: { value: item.id, text: item.name }
            })
          }),
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg" },
      [
        _c("vx-card", [
          _c(
            "ul",
            { staticClass: "faq-topics mt-4" },
            _vm._l(_vm.categories, function(category) {
              return _c(
                "li",
                {
                  key: category.id,
                  staticClass: "p-2 font-medium flex items-center",
                  on: {
                    click: function($event) {
                      _vm.faqFilter = category.id
                    }
                  }
                },
                [
                  _c("div", {
                    staticClass: "h-3 w-3 rounded-full mr-2",
                    class: "bg-" + category.color
                  }),
                  _c("span", { staticClass: "cursor-pointer" }, [
                    _vm._v(_vm._s(category.name))
                  ])
                ]
              )
            }),
            0
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0" },
      [
        _c(
          "vs-collapse",
          { staticClass: "p-0", attrs: { accordion: "", type: "margin" } },
          _vm._l(_vm.filteredFaq, function(que, index) {
            return _c(
              "vs-collapse-item",
              {
                key: que.id,
                staticClass: "faq-bg rounded-lg",
                class: { "mt-0": !index }
              },
              [
                _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                  _c("h5", [_vm._v(_vm._s(que.question))])
                ]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(que.ans))])
              ]
            )
          }),
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/portrait/small/avatar-s-1.jpg":
/*!***************************************************************!*\
  !*** ./resources/assets/images/portrait/small/avatar-s-1.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-1.jpg?680013ab3532206ec659173923b17b69";

/***/ }),

/***/ "./resources/assets/images/portrait/small/avatar-s-2.jpg":
/*!***************************************************************!*\
  !*** ./resources/assets/images/portrait/small/avatar-s-2.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-2.jpg?fc2135e130e396cfc30cec9b6e9861af";

/***/ }),

/***/ "./resources/assets/images/portrait/small/avatar-s-3.jpg":
/*!***************************************************************!*\
  !*** ./resources/assets/images/portrait/small/avatar-s-3.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-3.jpg?7ed1da4ad8611b35f46c43992d08833d";

/***/ }),

/***/ "./resources/assets/images/portrait/small/avatar-s-4.jpg":
/*!***************************************************************!*\
  !*** ./resources/assets/images/portrait/small/avatar-s-4.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-4.jpg?6a665e7ccedce6cfb58f17aafae574ef";

/***/ }),

/***/ "./resources/assets/images/portrait/small/avatar-s-5.jpg":
/*!***************************************************************!*\
  !*** ./resources/assets/images/portrait/small/avatar-s-5.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-5.jpg?99691e543d9e33cf745f6ac56f5800b8";

/***/ }),

/***/ "./resources/js/src/views/office/Office.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/office/Office.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Office_vue_vue_type_template_id_2a572116_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Office.vue?vue&type=template&id=2a572116&scoped=true& */ "./resources/js/src/views/office/Office.vue?vue&type=template&id=2a572116&scoped=true&");
/* harmony import */ var _Office_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Office.vue?vue&type=script&lang=js& */ "./resources/js/src/views/office/Office.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Office_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Office_vue_vue_type_template_id_2a572116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Office_vue_vue_type_template_id_2a572116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a572116",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/office/Office.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/office/Office.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/office/Office.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Office.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/office/Office.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/office/Office.vue?vue&type=template&id=2a572116&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/office/Office.vue?vue&type=template&id=2a572116&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_template_id_2a572116_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Office.vue?vue&type=template&id=2a572116&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/office/Office.vue?vue&type=template&id=2a572116&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_template_id_2a572116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_template_id_2a572116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);