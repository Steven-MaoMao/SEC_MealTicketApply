(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode"],{

/***/ 119:
/*!***********************************************************************************************!*\
  !*** D:/上海电气实习/SEC_MealTicketApply/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uqrcode.vue?vue&type=template&id=b7042062&scoped=true& */ 120);
/* harmony import */ var _uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uqrcode.vue?vue&type=script&lang=js& */ 122);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uqrcode_vue_vue_type_style_index_0_id_b7042062_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uqrcode.vue?vue&type=style&index=0&id=b7042062&scoped=true&lang=css& */ 128);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b7042062",
  null,
  false,
  _uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 120:
/*!******************************************************************************************************************************************!*\
  !*** D:/上海电气实习/SEC_MealTicketApply/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue?vue&type=template&id=b7042062&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uqrcode.vue?vue&type=template&id=b7042062&scoped=true& */ 121);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_template_id_b7042062_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 121:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/上海电气实习/SEC_MealTicketApply/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue?vue&type=template&id=b7042062&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 122:
/*!************************************************************************************************************************!*\
  !*** D:/上海电气实习/SEC_MealTicketApply/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uqrcode.vue?vue&type=script&lang=js& */ 123);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 123:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/上海电气实习/SEC_MealTicketApply/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 124));





















































































var _uqrcode = _interopRequireDefault(__webpack_require__(/*! ../../js_sdk/uqrcode */ 127));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

/* 引入nvue所需模块 */var _default2 =





{
  name: 'uqrcode',
  props: {
    /**
            * canvas组件id
            */
    canvasId: {
      type: String,
      required: true // canvasId在微信小程序初始值不能为空，created中赋值也不行，必须给一个值，否则挂载组件后无法绘制
    },
    /**
        * 二维码内容
        */
    value: {
      type: [String, Number] },

    /**
                                 * 二维码大小
                                 */
    size: {
      type: [String, Number],
      default: 200 },

    /**
                       * 二维码尺寸单位
                       */
    sizeUnit: {
      type: String,
      default: 'px' },

    /**
                        * 选项
                        */
    options: {
      type: Object,
      default: function _default() {
        return {};
      } },

    /**
            * 导出的文件类型
            */
    fileType: {
      type: String,
      default: 'png' },

    /**
                         * 是否初始化组件后就开始生成
                         */
    start: {
      type: Boolean,
      default: true },

    /**
                        * 是否数据发生改变自动重绘
                        */
    auto: {
      type: Boolean,
      default: false },

    /**
                         * 隐藏组件
                         */
    hide: {
      type: Boolean,
      default: false },

    /**
                         * canvas 类型
                         * 注意：微信小程序type2d手机上正常，PC上微信内打开小程序toDataURL报错
                         */
    type: {
      type: String,
      default: undefined },

    /**
                             * 是否队列加载图片
                             */
    isQueueLoadImage: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      canvas: undefined,
      canvasContext: undefined,
      makeDelegate: undefined,
      drawDelegate: undefined,
      toTempFilePathDelegate: undefined,
      makeing: false,
      drawing: false,
      inError: false,
      isH5Save: false,
      tempFilePath: '',
      templateOptions: {
        size: 0,
        width: 0, // 组件宽度
        height: 0,
        canvasWidth: 0, // canvas宽度
        canvasHeight: 0,
        canvasTransform: '',
        canvasDisplay: false },

      uqrcodeOptions: {
        data: '' },

      makeingPattern: [
      [
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true]],

      [
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, false, false, false],
      [true, true, true, true, true, true, false, true, true, true],
      [true, true, true, true, true, true, false, true, true, true],
      [true, true, true, true, true, true, false, true, true, true]],

      [
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, true, true, true, true, false, false, false],
      [true, true, true, true, true, true, true, false, false, false],
      [true, true, true, true, true, true, true, false, false, false],
      [true, true, true, false, false, false, false, true, true, true],
      [true, true, true, false, false, false, false, true, true, true]],

      [
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, false, false, false, false, false, false, false],
      [true, true, true, false, false, false, false, false, false, false],
      [true, true, true, false, false, false, false, false, false, false],
      [true, true, true, false, false, false, false, false, false, false],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true]]] };



  },
  watch: {
    value: {
      handler: function handler() {
        if (this.auto) {
          this.remake();
        }
      } },

    size: {
      handler: function handler() {
        if (this.auto) {
          this.remake();
        }
      } },

    options: {
      handler: function handler() {
        if (this.auto) {
          this.remake();
        }
      },
      deep: true },

    makeing: {
      handler: function handler(val) {
        if (!val) {
          if (typeof this.toTempFilePathDelegate === 'function') {
            this.toTempFilePathDelegate();
          }
        }
      } },

    isQueueLoadImage: {
      handler: function handler(val) {
        _uqrcode.default.isQueueLoadImage = val;
      },
      immediate: true } },


  mounted: function mounted() {
    this.templateOptions.size = this.sizeUnit == 'rpx' ? uni.upx2px(this.size) : this.size;
    this.templateOptions.canvasWidth = this.templateOptions.size;
    this.templateOptions.canvasHeight = this.templateOptions.size;
    if (this.type == '2d') {



    } else {
      this.templateOptions.canvasTransform = "scale(".concat(this.templateOptions.size / this.templateOptions.canvasWidth, ", ").concat(this.templateOptions.size / this.templateOptions.canvasHeight, ")");
    }
    if (this.start) {
      this.make();
    }
  },
  methods: {
    /**
              * 获取模板选项
              */
    getTemplateOptions: function getTemplateOptions() {
      var size = this.sizeUnit == 'rpx' ? uni.upx2px(this.size) : this.size;
      return _uqrcode.default.deepReplace(this.templateOptions, {
        size: size,
        width: size,
        height: size });

    },
    /**
        * 获取插件选项
        */
    getUqrcodeOptions: function getUqrcodeOptions() {
      return _uqrcode.default.deepReplace(this.options, {
        data: String(this.value),
        size: Number(this.templateOptions.size) });

    },
    /**
        * 重置画布
        */
    resetCanvas: function resetCanvas(callback) {var _this = this;
      this.templateOptions.canvasDisplay = false;
      this.$nextTick(function () {
        _this.templateOptions.canvasDisplay = true;
        _this.$nextTick(function () {
          callback && callback();
        });
      });
    },
    /**
        * 绘制二维码
        */
    draw: function draw() {var _arguments = arguments,_this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var callback, isDrawDelegate, qr, canvasContext, canvas, dpr;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:callback = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};isDrawDelegate = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
                if (typeof callback.success != 'function') {
                  callback.success = function () {};
                }
                if (typeof callback.fail != 'function') {
                  callback.fail = function () {};
                }
                if (typeof callback.complete != 'function') {
                  callback.complete = function () {};
                }if (!

                _this2.drawing) {_context.next = 11;break;}if (
                isDrawDelegate) {_context.next = 9;break;}
                _this2.drawDelegate = function () {
                  _this2.draw(callback, true);
                };return _context.abrupt("return");case 9:_context.next = 12;break;case 11:



                _this2.drawing = true;case 12:


                _this2.inError = false;if (
                _this2.canvasId) {_context.next = 18;break;}
                console.error('[uQRCode]: canvasId must be set!');
                _this2.inError = true;
                callback.fail({
                  errMsg: '[uQRCode]: canvasId must be set!' });return _context.abrupt("return");case 18:if (



                _this2.value) {_context.next = 23;break;}
                console.error('[uQRCode]: value must be set!');
                _this2.inError = true;
                callback.fail({
                  errMsg: '[uQRCode]: value must be set!' });return _context.abrupt("return");case 23:




                /* 组件数据 */
                _this2.templateOptions = _this2.getTemplateOptions();
                /* uQRCode选项 */
                _this2.uqrcodeOptions = _this2.getUqrcodeOptions();
                /* 纠错等级兼容字母写法 */
                if (typeof _this2.uqrcodeOptions.errorCorrectLevel === 'string') {
                  _this2.uqrcodeOptions.errorCorrectLevel = _uqrcode.default.errorCorrectLevel[_this2.uqrcodeOptions.errorCorrectLevel];
                }
                /* nvue不支持动态修改gcanvas尺寸，除nvue外，默认使用useDynamicSize */

                if (typeof _this2.options.useDynamicSize === 'undefined') {
                  _this2.uqrcodeOptions.useDynamicSize = true;
                }





                /* 获取uQRCode实例 */
                qr = new _uqrcode.default();
                /* 设置uQRCode选项 */
                qr.setOptions(_this2.uqrcodeOptions);
                /* 调用制作二维码方法 */
                qr.make();

                /* 获取canvas上下文 */
                canvasContext = null;if (!(

                _this2.type === '2d')) {_context.next = 46;break;}_context.next = 34;return (


                  new Promise(function (resolve) {
                    uni.
                    createSelectorQuery().
                    in(_this2) // 在组件内使用需要
                    .select("#".concat(_this2.canvasId)).
                    fields({
                      node: true,
                      size: true }).

                    exec(function (res) {
                      resolve(res[0].node);
                    });
                  }));case 34:canvas = _this2.canvas = _context.sent;
                canvasContext = _this2.canvasContext = canvas.getContext('2d');
                /* 2d的组件设置宽高与实际canvas绘制宽高不是一个，打个比方，组件size=200，canvas.width设置为100，那么绘制出来就是100=200，组件size=400，canvas.width设置为800，绘制大小还是800=400，所以无需理会下方返回的dynamicSize是多少，按dpr重新赋值给canvas即可 */
                _this2.templateOptions.canvasWidth = qr.size;
                _this2.templateOptions.canvasHeight = qr.size;
                _this2.templateOptions.canvasTransform = '';
                /* 使用dynamicSize+scale，可以解决小块间出现白线问题，dpr可以解决模糊问题 */
                dpr = uni.getSystemInfoSync().pixelRatio;
                canvas.width = qr.dynamicSize * dpr;
                canvas.height = qr.dynamicSize * dpr;
                canvasContext.scale(dpr, dpr);
                /* 微信小程序获取图像方式，多个组件type默认和2d混用导致loadImage被替换，从而获取图像失败，导致报错：Unhandled promise rejection RangeError: Maximum call stack size exceeded，后续优化一下，现在只能统一所有组件的type */
                _uqrcode.default.loadImage = function (src) {
                  /* 小程序下获取网络图片信息需先配置download域名白名单才能生效 */
                  return new Promise(function (resolve, reject) {
                    var img = canvas.createImage();
                    img.src = src;
                    img.onload = function () {
                      resolve(img);
                    };
                    img.onerror = function (err) {
                      reject(err);
                    };
                  });
                };_context.next = 51;break;case 46:

































                /* uniapp获取canvas上下文方式 */
                canvasContext = _this2.canvasContext = uni.createCanvasContext(_this2.canvasId, _this2);
                /* 使用dynamicSize，可以解决小块间出现白线问题，再通过scale缩放至size，使其达到所设尺寸 */
                _this2.templateOptions.canvasWidth = qr.dynamicSize;
                _this2.templateOptions.canvasHeight = qr.dynamicSize;
                _this2.templateOptions.canvasTransform = "scale(".concat(_this2.templateOptions.size / _this2.templateOptions.canvasWidth, ", ").concat(_this2.templateOptions.size / _this2.templateOptions.canvasHeight, ")");
                /* uniapp获取图像方式 */
                _uqrcode.default.loadImage = function (src) {
                  return new Promise(function (resolve, reject) {
                    /* getImageInfo在微信小程序的bug：本地路径返回路径会把开头的/或../移除，导致路径错误，解决方法：限制只能使用绝对路径 */
                    if (src.startsWith('http')) {
                      uni.getImageInfo({
                        src: src,
                        success: function success(res) {
                          resolve(res.path);
                        },
                        fail: function fail(err) {
                          reject(err);
                        } });

                    } else {
                      if (src.startsWith('/')) {
                        resolve(src);
                      } else {
                        console.error('[uQRCode]: 本地图片路径仅支持绝对路径！');
                        throw new Error('[uQRCode]: local image path only supports absolute path!');
                      }
                    }
                  });
                };case 51:



































                /* 设置uQRCode实例的canvas上下文 */
                qr.canvasContext = canvasContext;
                /* 延时等待页面重新绘制完毕 */
                setTimeout(function () {
                  /* 调用绘制方法将二维码图案绘制到canvas上 */
                  qr.drawCanvas().
                  then(function () {
                    if (_this2.drawDelegate) {
                      /* 高频重绘纠正 */
                      var delegate = _this2.drawDelegate;
                      _this2.drawDelegate = undefined;
                      delegate();
                    } else {
                      _this2.drawing = false;
                      callback.success();
                    }
                  }).
                  catch(function (err) {
                    if (_this2.drawDelegate) {
                      /* 高频重绘纠正 */
                      var delegate = _this2.drawDelegate;
                      _this2.drawDelegate = undefined;
                      delegate();
                    } else {
                      _this2.drawing = false;
                      _this2.inError = true;
                      callback.fail(err);
                    }
                  }).
                  finally(function () {
                    callback.complete();
                  });
                }, 300);case 53:case "end":return _context.stop();}}}, _callee);}))();
    },
    /**
        * 生成二维码
        */
    make: function make() {var _this3 = this;var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.makeing = true;

      if (typeof callback.success != 'function') {
        callback.success = function () {};
      }
      if (typeof callback.fail != 'function') {
        callback.fail = function () {};
      }
      if (typeof callback.complete != 'function') {
        callback.complete = function () {};
      }

      this.resetCanvas(function () {
        clearTimeout(_this3.makeDelegate);
        _this3.makeDelegate = setTimeout(function () {
          _this3.draw({
            success: function success() {
              setTimeout(function () {
                callback.success();
                _this3.complete(true);
              }, 300);
            },
            fail: function fail(err) {
              callback.fail(err);
              _this3.complete(false, err.errMsg);
            },
            complete: function complete() {
              callback.complete();
              _this3.makeing = false;
            } });

        }, 300);
      });
    },
    /**
        * 重新生成
        */
    remake: function remake(callback) {
      this.$emit('change');
      this.make(callback);
    },
    /**
        * 生成完成
        */
    complete: function complete() {var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;var errMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      if (success) {
        this.$emit('complete', {
          success: success });

      } else {
        this.$emit('complete', {
          success: success,
          errMsg: errMsg });

      }
    },
    /**
        * 导出临时路径
        */
    toTempFilePath: function toTempFilePath() {var _this4 = this;var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (typeof callback.success != 'function') {
        callback.success = function () {};
      }
      if (typeof callback.fail != 'function') {
        callback.fail = function () {};
      }
      if (typeof callback.complete != 'function') {
        callback.complete = function () {};
      }

      if (this.makeing) {
        /* 如果还在生成状态，那当前操作将托管到委托，监听生成完成后再通过委托复调当前方法 */
        this.toTempFilePathDelegate = function () {
          _this4.toTempFilePath(callback);
        };
        return;
      } else {
        this.toTempFilePathDelegate = null;
      }


      if (this.type === '2d') {

        /* 需要将 data:image/png;base64, 这段去除 writeFile 才能正常打开文件，否则是损坏文件，无法打开*/
        var reg = new RegExp('^data:image/png;base64,', 'g');






        var dataURL = this.canvas.toDataURL().replace(reg, '');

        var fs = wx.getFileSystemManager();
        var tempFilePath = "".concat(wx.env.USER_DATA_PATH, "/").concat(new Date().getTime()).concat(
        Math.random().
        toString().
        split('.')[1], ".png");

        fs.writeFile({
          filePath: tempFilePath, // 要写入的文件路径 (本地路径)
          data: dataURL, // base64图片
          encoding: 'base64',
          success: function success(res) {
            callback.success({
              tempFilePath: tempFilePath });

          },
          fail: function fail(err) {
            callback.fail(err);
          },
          complete: function complete() {
            callback.complete();
          } });


      } else {
        uni.canvasToTempFilePath(
        {
          canvasId: this.canvasId,
          fileType: this.fileType,
          width: this.templateOptions.canvasWidth,
          height: this.templateOptions.canvasHeight,
          destWidth: this.templateOptions.size,
          destHeight: this.templateOptions.size,
          success: function success(res) {
            callback.success(res);
          },
          fail: function fail(err) {
            callback.fail(err);
          },
          complete: function complete() {
            callback.complete();
          } },

        this);

      }



















    },
    /**
        * 保存
        */
    save: function save() {var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (typeof callback.success != 'function') {
        callback.success = function () {};
      }
      if (typeof callback.fail != 'function') {
        callback.fail = function () {};
      }
      if (typeof callback.complete != 'function') {
        callback.complete = function () {};
      }

      this.toTempFilePath({
        success: function success(res) {

          uni.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function success(res1) {
              callback.success(res1);
            },
            fail: function fail(err1) {
              callback.fail(err1);
            },
            complete: function complete() {
              callback.complete();
            } });


















        },
        fail: function fail(err) {
          callback.fail(err);
          callback.complete();
        } });

    },
    /**
        * 注册click事件
        */
    onClick: function onClick(e) {
      this.$emit('click', e);
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 128:
/*!********************************************************************************************************************************************************!*\
  !*** D:/上海电气实习/SEC_MealTicketApply/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue?vue&type=style&index=0&id=b7042062&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_style_index_0_id_b7042062_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uqrcode.vue?vue&type=style&index=0&id=b7042062&scoped=true&lang=css& */ 129);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_style_index_0_id_b7042062_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_style_index_0_id_b7042062_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_style_index_0_id_b7042062_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_style_index_0_id_b7042062_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uqrcode_vue_vue_type_style_index_0_id_b7042062_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 129:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/上海电气实习/SEC_MealTicketApply/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue?vue&type=style&index=0&id=b7042062&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode-create-component',
    {
        'uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(119))
        })
    },
    [['uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode-create-component']]
]);
