(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
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
  data: function data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      },
      swiperOptionNews: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }
      },
      swiperOptionCorporation: {
        slidesPerView: 8,
        slidesPerColumn: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 6,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      }
    };
  },
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("vx-card", { attrs: { "no-shadow": "" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col lg:w-2/3 w-full mb-3" },
                [
                  _c(
                    "swiper",
                    { attrs: { options: _vm.swiperOption } },
                    [
                      _c("swiper-slide", [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-16.jpg */ "./resources/assets/images/pages/carousel/banner-16.jpg"),
                            alt: "banner"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("swiper-slide", [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-19.jpg */ "./resources/assets/images/pages/carousel/banner-19.jpg"),
                            alt: "banner"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("swiper-slide", [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-5.jpg */ "./resources/assets/images/pages/carousel/banner-5.jpg"),
                            alt: "banner"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("swiper-slide", [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-9.jpg */ "./resources/assets/images/pages/carousel/banner-9.jpg"),
                            alt: "banner"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "swiper-pagination",
                        attrs: { slot: "pagination" },
                        slot: "pagination"
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col lg:w-1/3 w-full mb-3" },
                [
                  _c(
                    "vx-card",
                    { staticClass: "overlay-card overflow-hidden w-full" },
                    [
                      _c("template", { slot: "no-body" }, [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-16.jpg */ "./resources/assets/images/pages/carousel/banner-16.jpg"),
                            alt: "user-profile-cover"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "card-overlay text-white flex flex-col justify-between"
                          },
                          [
                            _c("h4", { staticClass: "text-white mb-4" }, [
                              _vm._v("Tactic")
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Welcome to tactic")])
                          ]
                        )
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "vx-card",
                    { staticClass: "overlay-card overflow-hidden w-full mt-2" },
                    [
                      _c("template", { slot: "no-body" }, [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-16.jpg */ "./resources/assets/images/pages/carousel/banner-16.jpg"),
                            alt: "user-profile-cover"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "card-overlay text-white flex flex-col justify-between"
                          },
                          [
                            _c("h4", { staticClass: "text-white mb-4" }, [
                              _vm._v("Tactic")
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Welcome to tactic")])
                          ]
                        )
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c("div", { staticClass: "vx-col lg:w-1/3 w-full" }, [
                _c("iframe", {
                  staticClass: "responsive",
                  attrs: {
                    src: "https://www.youtube.com/embed/CVe3ABsiOU8",
                    frameborder: "0",
                    allowfullscreen: ""
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-col lg:w-2/3 w-full" }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col lg:w-3/4 w-full" }, [
                    _c("a", { staticClass: "text-2xl", attrs: { href: "#" } }, [
                      _vm._v("Welcome Message")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                            23 Feb 2017 - Tiramisu soufflé gummies ice cream liquorice gingerbread sweet roll. Cake\n                            cotton candy candy ice cream muffin donut soufflé danish. Dessert jelly beans wafer\n                            cheesecake. Sugar plum gingerbread caramels candy canes gummi bears...\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col lg:w-1/4 w-full" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src:
                          "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/search-result.94483d7a.jpg",
                        alt: ""
                      }
                    })
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "vx-card",
            {
              staticClass: "mt-3",
              attrs: { title: "Latest News", "no-shadow": "" }
            },
            [
              _c(
                "swiper",
                { attrs: { options: _vm.swiperOptionNews } },
                [
                  _vm._l(10, function(item, index) {
                    return _c("swiper-slide", { key: index }, [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("img", {
                          staticClass: "responsive mb-3",
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-31.jpg */ "./resources/assets/images/pages/carousel/banner-31.jpg"),
                            alt: "graphic"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "mb-3 text-xl", attrs: { href: "#" } },
                          [
                            _vm._v(
                              "\n                        Working fine " +
                                _vm._s(index) +
                                " ...\n                    "
                            )
                          ]
                        )
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "swiper-pagination",
                    attrs: { slot: "pagination" },
                    slot: "pagination"
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            {
              staticClass: "mt-3",
              attrs: { title: "Latest Video", "no-shadow": "" }
            },
            [
              _c(
                "swiper",
                { attrs: { options: _vm.swiperOptionNews } },
                [
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-31.jpg */ "./resources/assets/images/pages/carousel/banner-31.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-32.jpg */ "./resources/assets/images/pages/carousel/banner-32.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-33.jpg */ "./resources/assets/images/pages/carousel/banner-33.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-34.jpg */ "./resources/assets/images/pages/carousel/banner-34.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-35.jpg */ "./resources/assets/images/pages/carousel/banner-35.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-23.jpg */ "./resources/assets/images/pages/carousel/banner-23.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-37.jpg */ "./resources/assets/images/pages/carousel/banner-37.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-38.jpg */ "./resources/assets/images/pages/carousel/banner-38.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-39.jpg */ "./resources/assets/images/pages/carousel/banner-39.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-40.jpg */ "./resources/assets/images/pages/carousel/banner-40.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "swiper-pagination",
                    attrs: { slot: "pagination" },
                    slot: "pagination"
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            {
              staticClass: "mt-3",
              attrs: { title: "Latest Gallery", "no-shadow": "" }
            },
            [
              _c(
                "swiper",
                { attrs: { options: _vm.swiperOptionNews } },
                [
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-31.jpg */ "./resources/assets/images/pages/carousel/banner-31.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-32.jpg */ "./resources/assets/images/pages/carousel/banner-32.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-33.jpg */ "./resources/assets/images/pages/carousel/banner-33.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-34.jpg */ "./resources/assets/images/pages/carousel/banner-34.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-35.jpg */ "./resources/assets/images/pages/carousel/banner-35.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-23.jpg */ "./resources/assets/images/pages/carousel/banner-23.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-37.jpg */ "./resources/assets/images/pages/carousel/banner-37.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-38.jpg */ "./resources/assets/images/pages/carousel/banner-38.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-39.jpg */ "./resources/assets/images/pages/carousel/banner-39.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: {
                        src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-40.jpg */ "./resources/assets/images/pages/carousel/banner-40.jpg"),
                        alt: "banner"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "swiper-pagination",
                    attrs: { slot: "pagination" },
                    slot: "pagination"
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("Corporations")]),
      _vm._v(" "),
      _c(
        "swiper",
        {
          staticClass: "mt-3",
          attrs: { options: _vm.swiperOptionCorporation }
        },
        [
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-31.jpg */ "./resources/assets/images/pages/carousel/banner-31.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-32.jpg */ "./resources/assets/images/pages/carousel/banner-32.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-33.jpg */ "./resources/assets/images/pages/carousel/banner-33.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-34.jpg */ "./resources/assets/images/pages/carousel/banner-34.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-35.jpg */ "./resources/assets/images/pages/carousel/banner-35.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-23.jpg */ "./resources/assets/images/pages/carousel/banner-23.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-37.jpg */ "./resources/assets/images/pages/carousel/banner-37.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-38.jpg */ "./resources/assets/images/pages/carousel/banner-38.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-39.jpg */ "./resources/assets/images/pages/carousel/banner-39.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              staticClass: "responsive",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/pages/carousel/banner-40.jpg */ "./resources/assets/images/pages/carousel/banner-40.jpg"),
                alt: "banner"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "swiper-pagination",
            attrs: { slot: "pagination" },
            slot: "pagination"
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-16.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-16.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-16.jpg?494b2830711b92086bda4ef504fbe2cb";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-19.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-19.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-19.jpg?a633b7c96e32e22b3a2c023d00a91494";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-23.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-23.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-23.jpg?a1cc4c357dd9ec800c0e585a1acf43cc";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-31.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-31.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-31.jpg?3650843bb01f6d681cdfde18ce92118c";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-32.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-32.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-32.jpg?6a935d9ec99af1d8919daefbdb596637";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-33.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-33.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-33.jpg?175a6d83cce8590c75e2cf7076012e8d";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-34.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-34.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-34.jpg?096d1a93d7d78d6128884231456a1e6c";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-35.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-35.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-35.jpg?5d7e9c3ee9103c392c270d1cc0ce0006";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-37.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-37.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-37.jpg?e450701c2e4dd200be0d4ee16d0ddb89";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-38.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-38.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-38.jpg?f836f8b37f031e8d036e454a0a339941";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-39.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-39.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-39.jpg?ba77e8e48ff4f8cb223730128815abee";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-40.jpg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-40.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-40.jpg?1121dfb87c6ec3749cd98ace9afaa053";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-5.jpg":
/*!*************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-5.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-5.jpg?84f62d8cfd2c6bf4cc8e62ca5fedea44";

/***/ }),

/***/ "./resources/assets/images/pages/carousel/banner-9.jpg":
/*!*************************************************************!*\
  !*** ./resources/assets/images/pages/carousel/banner-9.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-9.jpg?ae669d39a9a7eadaa05d68a14b2b61d0";

/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);