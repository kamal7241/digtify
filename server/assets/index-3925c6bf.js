import { ref, toRef, getCurrentInstance, onServerPrefetch, unref, toRefs, reactive, mergeProps, useSSRContext, withCtx, createVNode, renderSlot, Transition, withDirectives, vShow, openBlock, createBlock, createTextVNode, createCommentVNode, toDisplayString, TransitionGroup } from "vue";
import "hookable";
import "./index-e12b288f.js";
import { b as useNuxtApp, c as createError, a as useHead, d as useRoute, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "@unhead/shared";
import "defu";
const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(getCachedData() ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const NuxtComponentIndicator = "__nuxt_component";
async function runLegacyAsyncData(res, fn) {
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const vm = getCurrentInstance();
  const { fetchKey, _fetchKeyBase } = vm.proxy.$options;
  const key = (typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey) || [_fetchKeyBase, route.fullPath, route.matched.findIndex((r) => Object.values(r.components || {}).includes(vm.type))].join(":");
  const { data, error } = await useAsyncData(`options:asyncdata:${key}`, () => nuxtApp.runWithContext(() => fn(nuxtApp)));
  if (error.value) {
    throw createError(error.value);
  }
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, toRefs(reactive(data.value)));
  }
}
const defineNuxtComponent = function defineNuxtComponent2(...args) {
  const [options, key] = args;
  const { setup } = options;
  if (!setup && !options.asyncData && !options.head) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    _fetchKeyBase: key,
    ...options,
    setup(props, ctx) {
      const nuxtApp = useNuxtApp();
      const res = setup ? Promise.resolve(nuxtApp.runWithContext(() => setup(props, ctx))).then((r) => r || {}) : {};
      const promises = [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      if (options.head) {
        const nuxtApp2 = useNuxtApp();
        useHead(typeof options.head === "function" ? () => options.head(nuxtApp2) : options.head);
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
      });
    }
  };
};
const _sfc_main$c = /* @__PURE__ */ defineNuxtComponent({
  emits: ["next", "prev"],
  props: ["breakPointsNumber", "gap", "startThresHold"],
  data() {
    return {
      // stikyHeight: '50vh',
      isScrollReachedEl: false,
      y: this.startThresHold,
      currentBreakPoint: 0
    };
  },
  methods: {
    callBack() {
      console.log("new break point");
    },
    next() {
      this.y += this.gap;
      this.currentBreakPoint++;
      this.$emit("next", this.currentBreakPoint);
    },
    prev() {
      this.y -= this.gap;
      this.currentBreakPoint--;
      this.$emit("prev", this.currentBreakPoint);
    },
    updatePosition(y) {
      if (y > 0)
        return;
      else {
        const absY = Math.abs(y);
        this.isScrollReachedEl = true;
        if (absY > this.y && absY - this.y >= this.gap && this.currentBreakPoint < this.breakPointsNumber) {
          this.next();
        } else if (absY < this.y && this.y - absY >= this.gap && this.currentBreakPoint > 0) {
          this.prev();
        }
      }
    },
    registerScrollAnimator() {
      addEventListener("scroll", () => {
        const { y } = this.$refs.animator.getBoundingClientRect();
        this.updatePosition(y);
      });
    }
  },
  mounted() {
    this.registerScrollAnimator();
  }
}, "$7jaZNE7pt2");
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ ref: "animator" }, _attrs))}><div class="position-sticky top-0">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div style="${ssrRenderStyle({ height: _ctx.gap * _ctx.breakPointsNumber + _ctx.startThresHold + "px" })}"></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollAnimator.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-sec" }, _attrs))}><div class="home-sec__container container">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/HomeSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_CoreHomeSection = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_CoreHomeSection, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="home-sec__container container"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "home-sec__container container" }, [
            renderSlot(_ctx.$slots, "default")
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/HomeSectionContainer.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _imports_0$1 = "" + __buildAssetsURL("Digify-Logo.da70ff30.png");
const _imports_1 = "" + __buildAssetsURL("banner3.96ac650a.png");
const _imports_2 = "" + __buildAssetsURL("banner2.6f5f53ca.png");
const _imports_3 = "" + __buildAssetsURL("banner1.c4c91b71.png");
const ANIMATION_PROGRESS = Object.freeze({
  beforeEntry: 0,
  entry: 1,
  mid: 2,
  end: 3
});
const PROGRESS_TYPES$5 = Object.freeze({
  forward: 1,
  backward: 2
});
const BANNER_ELEMENTS_ANIMATIONS = Object.freeze({
  [ANIMATION_PROGRESS.entry]: [""],
  [ANIMATION_PROGRESS.mid]: ["animate-mid"],
  [ANIMATION_PROGRESS.end]: ["animate-last"]
});
const _sfc_main$9 = /* @__PURE__ */ defineNuxtComponent({
  data: () => ({
    currentProgress: ANIMATION_PROGRESS.beforeEntry,
    animationsGap: 100,
    // by px
    startThresHold: 0.6,
    thresHoldNumber: 3,
    gapRatio: 0.1,
    progressType: PROGRESS_TYPES$5.forward,
    observerSetteled: false,
    triggerFromTop: true
    // breakPoints 0.1 , 0.35 , 0. 
    // 
  }),
  computed: {
    // gapRatio(){
    //     // const { height } = this.$refs.banner.getBoundingClientRect();
    //     // return Math.round((this.animationsGap / height + Number.EPSILON) * 100) / 100;
    //     return 0.1
    // },
    thresHoldRatios() {
      const thresHold = [];
      for (let index2 = 0; index2 < this.thresHoldNumber; index2++) {
        const threshold = this.startThresHold + this.gapRatio * index2;
        thresHold[index2] = Math.round((threshold + Number.EPSILON) * 100) / 100;
      }
      return thresHold;
    },
    ANIMATION_PROGRESS() {
      return ANIMATION_PROGRESS;
    },
    BANNER_ELEMENTS_ANIMATIONS() {
      return BANNER_ELEMENTS_ANIMATIONS;
    },
    PROGRESS_TYPES() {
      return PROGRESS_TYPES$5;
    },
    currentAnimation() {
      return this.BANNER_ELEMENTS_ANIMATIONS[this.currentProgress] || [];
    }
  },
  methods: {
    next() {
      this.currentProgress++;
    },
    prev() {
      this.currentProgress--;
    },
    attachScroll(e) {
      el.getBoundingClientRect();
    },
    initScrollAnimations(breakPointsNumber, gap, startPercent) {
      el.getBoundingClientRect();
      let ticking = false;
      document.addEventListener("scroll", (event) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            ticking = false;
          });
          ticking = true;
        }
      });
    },
    getProgress(ratio, yDist) {
      let progress;
      if (this.triggerFromTop)
        progress = (ratio - this.startThresHold + Number.EPSILON) / this.gapRatio;
      else {
        const test = ratio - this.startThresHold + Number.EPSILON;
        progress = Math.abs(test - this.gapRatio * this.thresHoldNumber) / this.gapRatio;
        console.log(progress);
      }
      console.log("prog: ", progress, "prev:", this.currentProgress);
      if (progress > this.currentProgress) {
        console.log("forward");
        this.next();
      } else {
        console.log("backward");
        this.prev();
      }
    },
    observer() {
      const root = document.querySelector("#root");
      const target = this.$refs.banner;
      const io_options = {
        root,
        rootMargin: "0px",
        threshold: [...this.thresHoldRatios]
      };
      let io_observer;
      const io_callback = (entries) => {
        const ratio = entries[0].intersectionRatio;
        const boundingRect = entries[0].boundingClientRect;
        const intersectionRect = entries[0].intersectionRect;
        console.log(intersectionRect, boundingRect);
        console.log(ratio);
        if (!this.observerSetteled) {
          this.observerSetteled = true;
          return;
        }
        if (this.triggerFromTop) {
          if (intersectionRect.bottom == innerHeight)
            this.getProgress(ratio, intersectionRect.bottom);
        } else {
          if (intersectionRect.bottom < innerHeight)
            this.getProgress(ratio, intersectionRect.bottom);
        }
      };
      io_observer = new IntersectionObserver(io_callback, io_options);
      io_observer.observe(target);
    }
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType = curr > prev ? PROGRESS_TYPES$5.forward : PROGRESS_TYPES$5.backward;
    }
  },
  mounted() {
  }
}, "$yqTs2jU3qV");
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_animator = __nuxt_component_0$2;
  const _component_core_home_section_container = __nuxt_component_1$1;
  _push(ssrRenderComponent(_component_scroll_animator, mergeProps({
    onNext: ($event) => _ctx.currentProgress++,
    onPrev: ($event) => _ctx.currentProgress--,
    breakPointsNumber: 3,
    gap: 300,
    startThresHold: 0
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_core_home_section_container, {
          ref: "banner",
          class: "home-sec--banner"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="logo"${ssrRenderAttr("src", _imports_0$1)}${_scopeId2}><div class="${ssrRenderClass([_ctx.currentAnimation[0], "home-sec--banner__img-group"])}"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="img" class="${ssrRenderClass([[
                _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDownBig" : "" : "animate__fadeOutUpBig"
              ], "animate__animated"])}"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="img" class="${ssrRenderClass([[
                _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUpBig" : "" : _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.beforeEntry ? "animate__fadeOutDownBig" : ""
              ], "animate__animated"])}"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt="img" class="${ssrRenderClass([[
                _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDownBig" : "" : "animate__fadeOutUpBig"
              ], "animate__animated"])}"${_scopeId2}></div><div class="home-sec--banner__slogan-group"${_scopeId2}><div style="${ssrRenderStyle(_ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? null : { display: "none" })}" class="home-sec--banner__slogan"${_scopeId2}><span class="${ssrRenderClass([[
                _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDown" : "animate__fadeInLeft" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutLeft" : "animate__fadeOutDown"
                // leave
              ], "animate__animated"])}"${_scopeId2}>SHAPPING THE</span><span class="${ssrRenderClass([[
                _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUp" : "animate__fadeInDown" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutUp" : "animate__fadeOutDown"
                // leave
              ], "wavy title animate__animated"])}"${_scopeId2}><h2${_scopeId2}>DIGITAL</h2><h2${_scopeId2}>DIGITAL</h2><h2${_scopeId2}>DIGITAL</h2><h2${_scopeId2}>DIGITAL</h2></span><span class="${ssrRenderClass([[
                _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUp" : "animate__fadeInDown" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutUp" : "animate__fadeOutDown"
                // leave
              ], "animate__animated"])}"${_scopeId2}> ECOSYSTEM </span></div>`);
              if (_ctx.currentProgress == _ctx.ANIMATION_PROGRESS.mid) {
                _push3(`<div class="home-sec--banner__slogan home-sec--banner__slogan--sec"${_scopeId2}><span class="title"${_scopeId2}><span${_scopeId2}>THE NEXT</span><span${_scopeId2}>WAVE OF</span><span${_scopeId2}>DIGITAL MEDIA</span></span></div>`);
              } else if (_ctx.currentProgress == _ctx.ANIMATION_PROGRESS.end) {
                _push3(`<div class="home-sec--banner__slogan home-sec--banner__slogan--ternary"${_scopeId2}><span class="title"${_scopeId2}><span${_scopeId2}>DIGIFY</span><span${_scopeId2}><span class=""${_scopeId2}>WE</span> TALK</span><span${_scopeId2}>DIGITAL</span></span></div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`</div>`);
            } else {
              return [
                createVNode("img", {
                  class: "logo",
                  src: _imports_0$1
                }),
                createVNode("div", {
                  class: ["home-sec--banner__img-group", _ctx.currentAnimation[0]]
                }, [
                  createVNode("img", {
                    src: _imports_1,
                    class: ["animate__animated", [
                      _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDownBig" : "" : "animate__fadeOutUpBig"
                    ]],
                    alt: "img"
                  }, null, 2),
                  createVNode("img", {
                    src: _imports_2,
                    class: ["animate__animated", [
                      _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUpBig" : "" : _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.beforeEntry ? "animate__fadeOutDownBig" : ""
                    ]],
                    alt: "img"
                  }, null, 2),
                  createVNode("img", {
                    src: _imports_3,
                    class: ["animate__animated", [
                      _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDownBig" : "" : "animate__fadeOutUpBig"
                    ]],
                    alt: "img"
                  }, null, 2)
                ], 2),
                createVNode("div", { class: "home-sec--banner__slogan-group" }, [
                  createVNode(Transition, {
                    duration: 2e3,
                    name: "delay"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode("div", { class: "home-sec--banner__slogan" }, [
                        createVNode("span", {
                          class: ["animate__animated", [
                            _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDown" : "animate__fadeInLeft" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutLeft" : "animate__fadeOutDown"
                            // leave
                          ]]
                        }, "SHAPPING THE", 2),
                        createVNode("span", {
                          class: ["wavy title animate__animated", [
                            _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUp" : "animate__fadeInDown" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutUp" : "animate__fadeOutDown"
                            // leave
                          ]]
                        }, [
                          createVNode("h2", null, "DIGITAL"),
                          createVNode("h2", null, "DIGITAL"),
                          createVNode("h2", null, "DIGITAL"),
                          createVNode("h2", null, "DIGITAL")
                        ], 2),
                        createVNode("span", {
                          class: ["animate__animated", [
                            _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUp" : "animate__fadeInDown" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutUp" : "animate__fadeOutDown"
                            // leave
                          ]]
                        }, " ECOSYSTEM ", 2)
                      ], 512), [
                        [vShow, _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(Transition, null, {
                    default: withCtx(() => [
                      _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.mid ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "home-sec--banner__slogan home-sec--banner__slogan--sec"
                      }, [
                        createVNode("span", { class: "title" }, [
                          createVNode("span", null, "THE NEXT"),
                          createVNode("span", null, "WAVE OF"),
                          createVNode("span", null, "DIGITAL MEDIA")
                        ])
                      ])) : _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.end ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "home-sec--banner__slogan home-sec--banner__slogan--ternary"
                      }, [
                        createVNode("span", { class: "title" }, [
                          createVNode("span", null, "DIGIFY"),
                          createVNode("span", null, [
                            createVNode("span", { class: "" }, "WE"),
                            createTextVNode(" TALK")
                          ]),
                          createVNode("span", null, "DIGITAL")
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_core_home_section_container, {
            ref: "banner",
            class: "home-sec--banner"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "logo",
                src: _imports_0$1
              }),
              createVNode("div", {
                class: ["home-sec--banner__img-group", _ctx.currentAnimation[0]]
              }, [
                createVNode("img", {
                  src: _imports_1,
                  class: ["animate__animated", [
                    _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDownBig" : "" : "animate__fadeOutUpBig"
                  ]],
                  alt: "img"
                }, null, 2),
                createVNode("img", {
                  src: _imports_2,
                  class: ["animate__animated", [
                    _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUpBig" : "" : _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.beforeEntry ? "animate__fadeOutDownBig" : ""
                  ]],
                  alt: "img"
                }, null, 2),
                createVNode("img", {
                  src: _imports_3,
                  class: ["animate__animated", [
                    _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDownBig" : "" : "animate__fadeOutUpBig"
                  ]],
                  alt: "img"
                }, null, 2)
              ], 2),
              createVNode("div", { class: "home-sec--banner__slogan-group" }, [
                createVNode(Transition, {
                  duration: 2e3,
                  name: "delay"
                }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("div", { class: "home-sec--banner__slogan" }, [
                      createVNode("span", {
                        class: ["animate__animated", [
                          _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInDown" : "animate__fadeInLeft" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutLeft" : "animate__fadeOutDown"
                          // leave
                        ]]
                      }, "SHAPPING THE", 2),
                      createVNode("span", {
                        class: ["wavy title animate__animated", [
                          _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUp" : "animate__fadeInDown" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutUp" : "animate__fadeOutDown"
                          // leave
                        ]]
                      }, [
                        createVNode("h2", null, "DIGITAL"),
                        createVNode("h2", null, "DIGITAL"),
                        createVNode("h2", null, "DIGITAL"),
                        createVNode("h2", null, "DIGITAL")
                      ], 2),
                      createVNode("span", {
                        class: ["animate__animated", [
                          _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry ? _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeInUp" : "animate__fadeInDown" : _ctx.progressType == _ctx.PROGRESS_TYPES.forward ? "animate__fadeOutUp" : "animate__fadeOutDown"
                          // leave
                        ]]
                      }, " ECOSYSTEM ", 2)
                    ], 512), [
                      [vShow, _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.entry]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(Transition, null, {
                  default: withCtx(() => [
                    _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.mid ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "home-sec--banner__slogan home-sec--banner__slogan--sec"
                    }, [
                      createVNode("span", { class: "title" }, [
                        createVNode("span", null, "THE NEXT"),
                        createVNode("span", null, "WAVE OF"),
                        createVNode("span", null, "DIGITAL MEDIA")
                      ])
                    ])) : _ctx.currentProgress == _ctx.ANIMATION_PROGRESS.end ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "home-sec--banner__slogan home-sec--banner__slogan--ternary"
                    }, [
                      createVNode("span", { class: "title" }, [
                        createVNode("span", null, "DIGIFY"),
                        createVNode("span", null, [
                          createVNode("span", { class: "" }, "WE"),
                          createTextVNode(" TALK")
                        ]),
                        createVNode("span", null, "DIGITAL")
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 512)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = /* @__PURE__ */ defineNuxtComponent({
  props: ["scale", "origin"]
}, "$ZDTYki0fSA");
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "zoom-title",
    style: { "--scale": _ctx.scale, "--origin": _ctx.origin }
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/ZoomedTitle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = /* @__PURE__ */ defineNuxtComponent({
  props: ["highlight-ratio"]
}, "$0nUSAC4lVY");
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-highlighter-wrapper" }, _attrs))}><span class="text-highlighter__faded">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span><span class="text-highlighter__highlighted" style="${ssrRenderStyle({ "--width": _ctx.highlightRatio })}">`);
  ssrRenderSlot(_ctx.$slots, "default", { ref: "highlighter" }, null, _push, _parent);
  _push(`</span></span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/TextProgressHighlighter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const PROGRESS$4 = Object.freeze({
  titleZoomIn: 0,
  titleZoomOut: 1,
  titleMoveUpAndFade: 2,
  firstSlide: 3,
  secondSlide: 4,
  thirdSlide: 5
});
const PROGRESS_HIGHLIGHT_RATIO$4 = Object.freeze({
  [PROGRESS$4.titleZoomIn]: [100, 100],
  [PROGRESS$4.titleZoomOut]: [100, 100],
  [PROGRESS$4.titleMoveUpAndFade]: [0, 0],
  [PROGRESS$4.firstSlide]: [21.5, 0],
  [PROGRESS$4.secondSlide]: [62, 0],
  [PROGRESS$4.thirdSlide]: [100, 100]
});
const PROGRESS_TYPES$4 = Object.freeze({
  forward: 1,
  backward: 2
});
const _sfc_main$6 = /* @__PURE__ */ defineNuxtComponent({
  data() {
    return {
      currentProgress: 0,
      progressType: PROGRESS_TYPES$4.forward
    };
  },
  computed: {
    PROGRESS() {
      return PROGRESS$4;
    },
    PROGRESS_TYPES() {
      return PROGRESS_TYPES$4;
    },
    PROGRESS_HIGHLIGHT_RATIO() {
      return PROGRESS_HIGHLIGHT_RATIO$4;
    }
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType = curr > prev ? PROGRESS_TYPES$4.forward : PROGRESS_TYPES$4.backward;
    }
  }
}, "$6BBVAiv9Tr");
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_animator = __nuxt_component_0$2;
  const _component_CoreHomeSectionContainer = __nuxt_component_1$1;
  const _component_core_zoomed_title = __nuxt_component_2$1;
  const _component_core_text_progress_highlighter = __nuxt_component_3$2;
  _push(ssrRenderComponent(_component_scroll_animator, mergeProps({
    onNext: ($event) => _ctx.currentProgress++,
    onPrev: ($event) => _ctx.currentProgress--,
    breakPointsNumber: 7,
    gap: 500,
    startThresHold: 0
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreHomeSectionContainer, { class: "home-sec--about-us pt-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="home-sec--about-us__title-wrapper"${_scopeId2}><div class="animate__animated animate__move-y" style="${ssrRenderStyle({ "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "0" : "35%" })}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_core_zoomed_title, {
                origin: "40px 115px",
                scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_core_text_progress_highlighter, {
                      "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress][0],
                      class: "home-sec__title d-block"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<span class="text-white"${_scopeId4}>ABOUT</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-white" }, "ABOUT")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_core_text_progress_highlighter, {
                        "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress][0],
                        class: "home-sec__title d-block"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-white" }, "ABOUT")
                        ]),
                        _: 1
                      }, 8, ["highlight-ratio"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_core_text_progress_highlighter, {
                "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress][1],
                class: "home-sec__title"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="text-secondary"${_scopeId3}>DIGIFY</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-secondary" }, "DIGIFY")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div><span class="text-dark bg-secondary z-10 position-fixed top-0 left-0 h2"${_scopeId2}>${ssrInterpolate("current progress : " + _ctx.currentProgress + ": progress type : " + _ctx.progressType)}</span><div class="home-sec--about-us__content text-light"${_scopeId2}><div class="row justify-content-center"${_scopeId2}><div class="col-9"${_scopeId2}><!--[-->`);
              if (_ctx.currentProgress == _ctx.PROGRESS.firstSlide) {
                _push3(`<p class="animate__animated"${_scopeId2}><span${_scopeId2}> Digify is an esteemed digital media consultancy firm that was established in 2014, Digify team is young and fresh in spirit, old and experienced at vision We at Digify specialize in a comprehensive range of digital marketing and advertising services </span></p>`);
              } else if (_ctx.currentProgress == _ctx.PROGRESS.secondSlide) {
                _push3(`<p class="animate__animated"${_scopeId2}><span${_scopeId2}> Our firm embodies a unique blend of youthful energy and seasoned expertise. With an exceptional team comprising talented content writers, expert social media analysts, proficient digital media buyers, </span></p>`);
              } else if (_ctx.currentProgress == _ctx.PROGRESS.thirdSlide) {
                _push3(`<p class="animate__animated"${_scopeId2}><span${_scopeId2}> skilled graphic designers, and accomplished 2D and 3D animators, we possess the capabilities to deliver incomparable results. With strategically located offices in Cairo and Jeddah, we have garnered an extensive client base in the MENA region, boasting over 50 satisfied clients. This diversity has enriched our understanding of various cultures and industries. </span></p>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<!--]--></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "home-sec--about-us__title-wrapper" }, [
                  createVNode("div", {
                    class: "animate__animated animate__move-y",
                    style: { "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "0" : "35%" }
                  }, [
                    createVNode(_component_core_zoomed_title, {
                      origin: "40px 115px",
                      scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_core_text_progress_highlighter, {
                          "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress][0],
                          class: "home-sec__title d-block"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-white" }, "ABOUT")
                          ]),
                          _: 1
                        }, 8, ["highlight-ratio"])
                      ]),
                      _: 1
                    }, 8, ["scale"]),
                    createVNode(_component_core_text_progress_highlighter, {
                      "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress][1],
                      class: "home-sec__title"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-secondary" }, "DIGIFY")
                      ]),
                      _: 1
                    }, 8, ["highlight-ratio"])
                  ], 4)
                ]),
                createVNode("span", { class: "text-dark bg-secondary z-10 position-fixed top-0 left-0 h2" }, toDisplayString("current progress : " + _ctx.currentProgress + ": progress type : " + _ctx.progressType), 1),
                createVNode("div", { class: "home-sec--about-us__content text-light" }, [
                  createVNode("div", { class: "row justify-content-center" }, [
                    createVNode("div", { class: "col-9" }, [
                      createVNode(TransitionGroup, {
                        mode: "out-in",
                        name: "fadeInDelayOutUp"
                      }, {
                        default: withCtx(() => [
                          _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "animate__animated"
                          }, [
                            createVNode("span", null, " Digify is an esteemed digital media consultancy firm that was established in 2014, Digify team is young and fresh in spirit, old and experienced at vision We at Digify specialize in a comprehensive range of digital marketing and advertising services ")
                          ])) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "animate__animated"
                          }, [
                            createVNode("span", null, " Our firm embodies a unique blend of youthful energy and seasoned expertise. With an exceptional team comprising talented content writers, expert social media analysts, proficient digital media buyers, ")
                          ])) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock("p", {
                            key: 2,
                            class: "animate__animated"
                          }, [
                            createVNode("span", null, " skilled graphic designers, and accomplished 2D and 3D animators, we possess the capabilities to deliver incomparable results. With strategically located offices in Cairo and Jeddah, we have garnered an extensive client base in the MENA region, boasting over 50 satisfied clients. This diversity has enriched our understanding of various cultures and industries. ")
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreHomeSectionContainer, { class: "home-sec--about-us pt-4" }, {
            default: withCtx(() => [
              createVNode("div", { class: "home-sec--about-us__title-wrapper" }, [
                createVNode("div", {
                  class: "animate__animated animate__move-y",
                  style: { "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "0" : "35%" }
                }, [
                  createVNode(_component_core_zoomed_title, {
                    origin: "40px 115px",
                    scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_core_text_progress_highlighter, {
                        "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress][0],
                        class: "home-sec__title d-block"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-white" }, "ABOUT")
                        ]),
                        _: 1
                      }, 8, ["highlight-ratio"])
                    ]),
                    _: 1
                  }, 8, ["scale"]),
                  createVNode(_component_core_text_progress_highlighter, {
                    "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress][1],
                    class: "home-sec__title"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-secondary" }, "DIGIFY")
                    ]),
                    _: 1
                  }, 8, ["highlight-ratio"])
                ], 4)
              ]),
              createVNode("span", { class: "text-dark bg-secondary z-10 position-fixed top-0 left-0 h2" }, toDisplayString("current progress : " + _ctx.currentProgress + ": progress type : " + _ctx.progressType), 1),
              createVNode("div", { class: "home-sec--about-us__content text-light" }, [
                createVNode("div", { class: "row justify-content-center" }, [
                  createVNode("div", { class: "col-9" }, [
                    createVNode(TransitionGroup, {
                      mode: "out-in",
                      name: "fadeInDelayOutUp"
                    }, {
                      default: withCtx(() => [
                        _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "animate__animated"
                        }, [
                          createVNode("span", null, " Digify is an esteemed digital media consultancy firm that was established in 2014, Digify team is young and fresh in spirit, old and experienced at vision We at Digify specialize in a comprehensive range of digital marketing and advertising services ")
                        ])) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: "animate__animated"
                        }, [
                          createVNode("span", null, " Our firm embodies a unique blend of youthful energy and seasoned expertise. With an exceptional team comprising talented content writers, expert social media analysts, proficient digital media buyers, ")
                        ])) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock("p", {
                          key: 2,
                          class: "animate__animated"
                        }, [
                          createVNode("span", null, " skilled graphic designers, and accomplished 2D and 3D animators, we possess the capabilities to deliver incomparable results. With strategically located offices in Cairo and Jeddah, we have garnered an extensive client base in the MENA region, boasting over 50 satisfied clients. This diversity has enriched our understanding of various cultures and industries. ")
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0 = "" + __buildAssetsURL("awqaf-logo.e11aaab5.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "card mb-3",
    style: { "max-width": "540px" }
  }, _attrs))}><div class="row g-0"><div class="col-md-4"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Card.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const PROGRESS$3 = Object.freeze({
  titleZoomIn: 0,
  titleZoomOut: 1,
  titleMoveUpAndFade: 2,
  firstSlide: 3,
  secondSlide: 4,
  thirdSlide: 5,
  fourthSlide: 6,
  fifthSlide: 7,
  sixthSlide: 8
});
const PROGRESS_HIGHLIGHT_RATIO$3 = Object.freeze({
  [PROGRESS$3.titleZoomIn]: 100,
  [PROGRESS$3.titleZoomOut]: 100,
  [PROGRESS$3.titleMoveUpAndFade]: 0,
  [PROGRESS$3.firstSlide]: 15,
  [PROGRESS$3.secondSlide]: 30,
  [PROGRESS$3.thirdSlide]: 45,
  [PROGRESS$3.fourthSlide]: 60,
  [PROGRESS$3.fifthSlide]: 75,
  [PROGRESS$3.sixthSlide]: 100
});
const PROGRESS_TYPES$3 = Object.freeze({
  forward: 1,
  backward: 2
});
const _sfc_main$4 = /* @__PURE__ */ defineNuxtComponent({
  data() {
    return {
      currentProgress: PROGRESS$3.titleZoomIn,
      progressType: PROGRESS_TYPES$3.forward
    };
  },
  computed: {
    PROGRESS() {
      return PROGRESS$3;
    },
    PROGRESS_TYPES() {
      return PROGRESS_TYPES$3;
    },
    PROGRESS_HIGHLIGHT_RATIO() {
      return PROGRESS_HIGHLIGHT_RATIO$3;
    },
    // getUrl(){
    //     return require('../assets/image/404Error.jpg')
    // } , 
    getUrl() {
      return new URL(`../assets/image/404Error.jpg`, import.meta.url).href;
    }
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType = curr > prev ? PROGRESS_TYPES$3.forward : PROGRESS_TYPES$3.backward;
    }
  }
}, "$D9ArUhSHMX");
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_animator = __nuxt_component_0$2;
  const _component_CoreHomeSectionContainer = __nuxt_component_1$1;
  const _component_core_zoomed_title = __nuxt_component_2$1;
  const _component_core_text_progress_highlighter = __nuxt_component_3$2;
  const _component_core_card = __nuxt_component_3$1;
  _push(ssrRenderComponent(_component_scroll_animator, mergeProps({
    onNext: ($event) => _ctx.currentProgress++,
    onPrev: ($event) => _ctx.currentProgress--,
    breakPointsNumber: 9,
    gap: 500,
    startThresHold: 100
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreHomeSectionContainer, { class: "bg-light home-sec--services pt-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_core_zoomed_title, {
                origin: "325px 167px",
                scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="home-sec--services__title-wrapper"${_scopeId3}><div class="animate__animated animate__move-y" style="${ssrRenderStyle({ "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "0" : "35%" })}"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_core_text_progress_highlighter, {
                      "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress],
                      class: "home-sec__title d-block"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<span class="text-primary"${_scopeId4}>SERVICES</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-primary" }, "SERVICES")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "home-sec--services__title-wrapper" }, [
                        createVNode("div", {
                          class: "animate__animated animate__move-y",
                          style: { "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "0" : "35%" }
                        }, [
                          createVNode(_component_core_text_progress_highlighter, {
                            "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress],
                            class: "home-sec__title d-block"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-primary" }, "SERVICES")
                            ]),
                            _: 1
                          }, 8, ["highlight-ratio"])
                        ], 4)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              if (_ctx.currentProgress == _ctx.PROGRESS.firstSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated",
                  key: 1
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.secondSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "bg-primary animate__animated",
                  key: 2
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.thirdSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-info",
                  key: 3
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.fourthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-danger",
                  key: 4
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.fifthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-secondary",
                  key: 5
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.sixthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-success",
                  key: 6
                }, null, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode(_component_core_zoomed_title, {
                  origin: "325px 167px",
                  scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "home-sec--services__title-wrapper" }, [
                      createVNode("div", {
                        class: "animate__animated animate__move-y",
                        style: { "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "0" : "35%" }
                      }, [
                        createVNode(_component_core_text_progress_highlighter, {
                          "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress],
                          class: "home-sec__title d-block"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-primary" }, "SERVICES")
                          ]),
                          _: 1
                        }, 8, ["highlight-ratio"])
                      ], 4)
                    ])
                  ]),
                  _: 1
                }, 8, ["scale"]),
                createVNode(TransitionGroup, {
                  mode: "out-in",
                  name: "fadeInDelayOutLeft"
                }, {
                  default: withCtx(() => [
                    _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated",
                      key: 1
                    })) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "bg-primary animate__animated",
                      key: 2
                    })) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-info",
                      key: 3
                    })) : _ctx.currentProgress == _ctx.PROGRESS.fourthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-danger",
                      key: 4
                    })) : _ctx.currentProgress == _ctx.PROGRESS.fifthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-secondary",
                      key: 5
                    })) : _ctx.currentProgress == _ctx.PROGRESS.sixthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-success",
                      key: 6
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreHomeSectionContainer, { class: "bg-light home-sec--services pt-4" }, {
            default: withCtx(() => [
              createVNode(_component_core_zoomed_title, {
                origin: "325px 167px",
                scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "home-sec--services__title-wrapper" }, [
                    createVNode("div", {
                      class: "animate__animated animate__move-y",
                      style: { "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "0" : "35%" }
                    }, [
                      createVNode(_component_core_text_progress_highlighter, {
                        "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress],
                        class: "home-sec__title d-block"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-primary" }, "SERVICES")
                        ]),
                        _: 1
                      }, 8, ["highlight-ratio"])
                    ], 4)
                  ])
                ]),
                _: 1
              }, 8, ["scale"]),
              createVNode(TransitionGroup, {
                mode: "out-in",
                name: "fadeInDelayOutLeft"
              }, {
                default: withCtx(() => [
                  _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated",
                    key: 1
                  })) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "bg-primary animate__animated",
                    key: 2
                  })) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-info",
                    key: 3
                  })) : _ctx.currentProgress == _ctx.PROGRESS.fourthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-danger",
                    key: 4
                  })) : _ctx.currentProgress == _ctx.PROGRESS.fifthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-secondary",
                    key: 5
                  })) : _ctx.currentProgress == _ctx.PROGRESS.sixthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-success",
                    key: 6
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const PROGRESS$2 = Object.freeze({
  titleZoomIn: 0,
  titleZoomOut: 1,
  titleMoveUpAndFade: 2,
  firstSlide: 3,
  secondSlide: 4,
  thirdSlide: 5,
  fourthSlide: 6,
  fifthSlide: 7,
  sixthSlide: 8
});
const PROGRESS_HIGHLIGHT_RATIO$2 = Object.freeze({
  [PROGRESS$2.titleZoomIn]: 100,
  [PROGRESS$2.titleZoomOut]: 100,
  [PROGRESS$2.titleMoveUpAndFade]: 0,
  [PROGRESS$2.firstSlide]: 15,
  [PROGRESS$2.secondSlide]: 30,
  [PROGRESS$2.thirdSlide]: 45,
  [PROGRESS$2.fourthSlide]: 60,
  [PROGRESS$2.fifthSlide]: 75,
  [PROGRESS$2.sixthSlide]: 100
});
const PROGRESS_TYPES$2 = Object.freeze({
  forward: 1,
  backward: 2
});
const _sfc_main$3 = /* @__PURE__ */ defineNuxtComponent({
  data() {
    return {
      currentProgress: PROGRESS$2.titleZoomIn,
      progressType: PROGRESS_TYPES$2.forward
    };
  },
  computed: {
    PROGRESS() {
      return PROGRESS$2;
    },
    PROGRESS_TYPES() {
      return PROGRESS_TYPES$2;
    },
    PROGRESS_HIGHLIGHT_RATIO() {
      return PROGRESS_HIGHLIGHT_RATIO$2;
    },
    // getUrl(){
    //     return require('../assets/image/404Error.jpg')
    // } , 
    getUrl() {
      return new URL(`../assets/image/404Error.jpg`, import.meta.url).href;
    }
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType = curr > prev ? PROGRESS_TYPES$2.forward : PROGRESS_TYPES$2.backward;
    }
  }
}, "$mIdHr4jjkz");
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_animator = __nuxt_component_0$2;
  const _component_CoreHomeSectionContainer = __nuxt_component_1$1;
  const _component_core_zoomed_title = __nuxt_component_2$1;
  const _component_core_text_progress_highlighter = __nuxt_component_3$2;
  const _component_core_card = __nuxt_component_3$1;
  _push(ssrRenderComponent(_component_scroll_animator, mergeProps({
    onNext: ($event) => _ctx.currentProgress++,
    onPrev: ($event) => _ctx.currentProgress--,
    breakPointsNumber: 9,
    gap: 500,
    startThresHold: 100
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreHomeSectionContainer, { class: "home-sec--portfolio pt-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="animate__animated animate__move-y" style="${ssrRenderStyle({ "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "-12em" : "35%" })}"${_scopeId2}><div class="home-sec--portfolio__title-wrapper"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_core_zoomed_title, {
                origin: _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "81px 100px" : "58px 100px",
                class: "home-sec__title position-absolute",
                scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? 200 : 1
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="text-secondary"${_scopeId3}>OUR</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-secondary" }, "OUR")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div style="${ssrRenderStyle({ "transform": "translateY(12em)" })}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_core_text_progress_highlighter, {
                "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress],
                class: ["animate__animated home-sec__title d-block", {
                  "animate__fadeInLeft animate__delay-1s": _ctx.currentProgress >= _ctx.PROGRESS.titleZoomOut,
                  "animate__fadeOutLeft": _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn
                }]
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="text-white"${_scopeId3}>PORTFOLIO</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-white" }, "PORTFOLIO")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div><!--[-->`);
              if (_ctx.currentProgress == _ctx.PROGRESS.firstSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated",
                  key: 1
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.secondSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "bg-primary animate__animated",
                  key: 2
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.thirdSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-info",
                  key: 3
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.fourthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-danger",
                  key: 4
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.fifthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-secondary",
                  key: 5
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.sixthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-success",
                  key: 6
                }, null, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  class: "animate__animated animate__move-y",
                  style: { "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "-12em" : "35%" }
                }, [
                  createVNode("div", { class: "home-sec--portfolio__title-wrapper" }, [
                    createVNode(_component_core_zoomed_title, {
                      origin: _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "81px 100px" : "58px 100px",
                      class: "home-sec__title position-absolute",
                      scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? 200 : 1
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-secondary" }, "OUR")
                      ]),
                      _: 1
                    }, 8, ["origin", "scale"]),
                    createVNode("div", { style: { "transform": "translateY(12em)" } }, [
                      createVNode(_component_core_text_progress_highlighter, {
                        "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress],
                        class: ["animate__animated home-sec__title d-block", {
                          "animate__fadeInLeft animate__delay-1s": _ctx.currentProgress >= _ctx.PROGRESS.titleZoomOut,
                          "animate__fadeOutLeft": _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn
                        }]
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-white" }, "PORTFOLIO")
                        ]),
                        _: 1
                      }, 8, ["highlight-ratio", "class"])
                    ])
                  ])
                ], 4),
                createVNode(TransitionGroup, {
                  mode: "out-in",
                  name: "fadeInDelayOutLeft"
                }, {
                  default: withCtx(() => [
                    _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated",
                      key: 1
                    })) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "bg-primary animate__animated",
                      key: 2
                    })) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-info",
                      key: 3
                    })) : _ctx.currentProgress == _ctx.PROGRESS.fourthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-danger",
                      key: 4
                    })) : _ctx.currentProgress == _ctx.PROGRESS.fifthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-secondary",
                      key: 5
                    })) : _ctx.currentProgress == _ctx.PROGRESS.sixthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-success",
                      key: 6
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreHomeSectionContainer, { class: "home-sec--portfolio pt-4" }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "animate__animated animate__move-y",
                style: { "--y": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "-12em" : "35%" }
              }, [
                createVNode("div", { class: "home-sec--portfolio__title-wrapper" }, [
                  createVNode(_component_core_zoomed_title, {
                    origin: _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? "81px 100px" : "58px 100px",
                    class: "home-sec__title position-absolute",
                    scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade ? 200 : 1
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-secondary" }, "OUR")
                    ]),
                    _: 1
                  }, 8, ["origin", "scale"]),
                  createVNode("div", { style: { "transform": "translateY(12em)" } }, [
                    createVNode(_component_core_text_progress_highlighter, {
                      "highlight-ratio": _ctx.PROGRESS_HIGHLIGHT_RATIO[_ctx.currentProgress],
                      class: ["animate__animated home-sec__title d-block", {
                        "animate__fadeInLeft animate__delay-1s": _ctx.currentProgress >= _ctx.PROGRESS.titleZoomOut,
                        "animate__fadeOutLeft": _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn
                      }]
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-white" }, "PORTFOLIO")
                      ]),
                      _: 1
                    }, 8, ["highlight-ratio", "class"])
                  ])
                ])
              ], 4),
              createVNode(TransitionGroup, {
                mode: "out-in",
                name: "fadeInDelayOutLeft"
              }, {
                default: withCtx(() => [
                  _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated",
                    key: 1
                  })) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "bg-primary animate__animated",
                    key: 2
                  })) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-info",
                    key: 3
                  })) : _ctx.currentProgress == _ctx.PROGRESS.fourthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-danger",
                    key: 4
                  })) : _ctx.currentProgress == _ctx.PROGRESS.fifthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-secondary",
                    key: 5
                  })) : _ctx.currentProgress == _ctx.PROGRESS.sixthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-success",
                    key: 6
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const PROGRESS$1 = Object.freeze({
  titleZoomIn: 0,
  titleZoomOut: 1,
  titleMoveUpAndFade: 2,
  firstSlide: 3,
  secondSlide: 4,
  thirdSlide: 5,
  fourthSlide: 6,
  fifthSlide: 7,
  sixthSlide: 8
});
const PROGRESS_HIGHLIGHT_RATIO$1 = Object.freeze({
  [PROGRESS$1.titleZoomIn]: 100,
  [PROGRESS$1.titleZoomOut]: 100,
  [PROGRESS$1.titleMoveUpAndFade]: 0,
  [PROGRESS$1.firstSlide]: 15,
  [PROGRESS$1.secondSlide]: 30,
  [PROGRESS$1.thirdSlide]: 45,
  [PROGRESS$1.fourthSlide]: 60,
  [PROGRESS$1.fifthSlide]: 75,
  [PROGRESS$1.sixthSlide]: 100
});
const PROGRESS_TYPES$1 = Object.freeze({
  forward: 1,
  backward: 2
});
const _sfc_main$2 = /* @__PURE__ */ defineNuxtComponent({
  data() {
    return {
      currentProgress: PROGRESS$1.titleZoomIn,
      progressType: PROGRESS_TYPES$1.forward
    };
  },
  computed: {
    PROGRESS() {
      return PROGRESS$1;
    },
    PROGRESS_TYPES() {
      return PROGRESS_TYPES$1;
    },
    PROGRESS_HIGHLIGHT_RATIO() {
      return PROGRESS_HIGHLIGHT_RATIO$1;
    },
    // getUrl(){
    //     return require('../assets/image/404Error.jpg')
    // } , 
    getUrl() {
      return new URL(`../assets/image/404Error.jpg`, import.meta.url).href;
    }
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType = curr > prev ? PROGRESS_TYPES$1.forward : PROGRESS_TYPES$1.backward;
    }
  }
}, "$GkGSqIozDv");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_animator = __nuxt_component_0$2;
  const _component_CoreHomeSectionContainer = __nuxt_component_1$1;
  const _component_core_zoomed_title = __nuxt_component_2$1;
  const _component_core_card = __nuxt_component_3$1;
  _push(ssrRenderComponent(_component_scroll_animator, mergeProps({
    onNext: ($event) => _ctx.currentProgress++,
    onPrev: ($event) => _ctx.currentProgress--,
    breakPointsNumber: 9,
    gap: 500,
    startThresHold: 100
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreHomeSectionContainer, { class: "home-sec--portfolio pt-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass([{ "animate__fadeOutUpBig": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade }, "animate__animated"])}"${_scopeId2}><div class="home-sec--portfolio__title-wrapper"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_core_zoomed_title, {
                origin: "58px 100px",
                class: "home-sec__title",
                scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="text-secondary"${_scopeId3}>OUR</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-secondary" }, "OUR")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<h2 class="text-white home-sec__title"${_scopeId2}>CLIENTS</h2></div></div><!--[-->`);
              if (_ctx.currentProgress == _ctx.PROGRESS.firstSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated",
                  key: 1
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.secondSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "bg-primary animate__animated",
                  key: 2
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.thirdSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-info",
                  key: 3
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.fourthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-danger",
                  key: 4
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.fifthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-secondary",
                  key: 5
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.sixthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-success",
                  key: 6
                }, null, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  class: ["animate__animated", { "animate__fadeOutUpBig": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade }]
                }, [
                  createVNode("div", { class: "home-sec--portfolio__title-wrapper" }, [
                    createVNode(_component_core_zoomed_title, {
                      origin: "58px 100px",
                      class: "home-sec__title",
                      scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-secondary" }, "OUR")
                      ]),
                      _: 1
                    }, 8, ["scale"]),
                    createVNode("h2", { class: "text-white home-sec__title" }, "CLIENTS")
                  ])
                ], 2),
                createVNode(TransitionGroup, {
                  mode: "out-in",
                  name: "fadeInDelayOutLeft"
                }, {
                  default: withCtx(() => [
                    _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated",
                      key: 1
                    })) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "bg-primary animate__animated",
                      key: 2
                    })) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-info",
                      key: 3
                    })) : _ctx.currentProgress == _ctx.PROGRESS.fourthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-danger",
                      key: 4
                    })) : _ctx.currentProgress == _ctx.PROGRESS.fifthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-secondary",
                      key: 5
                    })) : _ctx.currentProgress == _ctx.PROGRESS.sixthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-success",
                      key: 6
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreHomeSectionContainer, { class: "home-sec--portfolio pt-4" }, {
            default: withCtx(() => [
              createVNode("div", {
                class: ["animate__animated", { "animate__fadeOutUpBig": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade }]
              }, [
                createVNode("div", { class: "home-sec--portfolio__title-wrapper" }, [
                  createVNode(_component_core_zoomed_title, {
                    origin: "58px 100px",
                    class: "home-sec__title",
                    scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-secondary" }, "OUR")
                    ]),
                    _: 1
                  }, 8, ["scale"]),
                  createVNode("h2", { class: "text-white home-sec__title" }, "CLIENTS")
                ])
              ], 2),
              createVNode(TransitionGroup, {
                mode: "out-in",
                name: "fadeInDelayOutLeft"
              }, {
                default: withCtx(() => [
                  _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated",
                    key: 1
                  })) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "bg-primary animate__animated",
                    key: 2
                  })) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-info",
                    key: 3
                  })) : _ctx.currentProgress == _ctx.PROGRESS.fourthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-danger",
                    key: 4
                  })) : _ctx.currentProgress == _ctx.PROGRESS.fifthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-secondary",
                    key: 5
                  })) : _ctx.currentProgress == _ctx.PROGRESS.sixthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-success",
                    key: 6
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Clients.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const PROGRESS = Object.freeze({
  titleZoomIn: 0,
  titleZoomOut: 1,
  titleMoveUpAndFade: 2,
  firstSlide: 3,
  secondSlide: 4,
  thirdSlide: 5,
  fourthSlide: 6,
  fifthSlide: 7,
  sixthSlide: 8
});
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
  [PROGRESS.titleZoomIn]: 100,
  [PROGRESS.titleZoomOut]: 100,
  [PROGRESS.titleMoveUpAndFade]: 0,
  [PROGRESS.firstSlide]: 15,
  [PROGRESS.secondSlide]: 30,
  [PROGRESS.thirdSlide]: 45,
  [PROGRESS.fourthSlide]: 60,
  [PROGRESS.fifthSlide]: 75,
  [PROGRESS.sixthSlide]: 100
});
const PROGRESS_TYPES = Object.freeze({
  forward: 1,
  backward: 2
});
const _sfc_main$1 = /* @__PURE__ */ defineNuxtComponent({
  data() {
    return {
      currentProgress: PROGRESS.titleZoomIn,
      progressType: PROGRESS_TYPES.forward
    };
  },
  computed: {
    PROGRESS() {
      return PROGRESS;
    },
    PROGRESS_TYPES() {
      return PROGRESS_TYPES;
    },
    PROGRESS_HIGHLIGHT_RATIO() {
      return PROGRESS_HIGHLIGHT_RATIO;
    },
    // getUrl(){
    //     return require('../assets/image/404Error.jpg')
    // } , 
    getUrl() {
      return new URL(`../assets/image/404Error.jpg`, import.meta.url).href;
    }
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType = curr > prev ? PROGRESS_TYPES.forward : PROGRESS_TYPES.backward;
    }
  }
}, "$lQCMwiLKgo");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_animator = __nuxt_component_0$2;
  const _component_CoreHomeSectionContainer = __nuxt_component_1$1;
  const _component_core_zoomed_title = __nuxt_component_2$1;
  const _component_core_card = __nuxt_component_3$1;
  _push(ssrRenderComponent(_component_scroll_animator, mergeProps({
    onNext: ($event) => _ctx.currentProgress++,
    onPrev: ($event) => _ctx.currentProgress--,
    breakPointsNumber: 9,
    gap: 500,
    startThresHold: 100
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreHomeSectionContainer, { class: "home-sec--portfolio pt-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass([{ "animate__fadeOutLeftBig": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade }, "animate__animated"])}"${_scopeId2}><div class="home-sec--portfolio__title-wrapper"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_core_zoomed_title, {
                origin: "58px 100px",
                class: "home-sec__title",
                scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="text-white"${_scopeId3}>CONTACT</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-white" }, "CONTACT")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<h2 class="text-secondary home-sec__title"${_scopeId2}>US</h2></div></div><!--[-->`);
              if (_ctx.currentProgress == _ctx.PROGRESS.firstSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated",
                  key: 1
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.secondSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "bg-primary animate__animated",
                  key: 2
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.thirdSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-info",
                  key: 3
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.fourthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-danger",
                  key: 4
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.fifthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-secondary",
                  key: 5
                }, null, _parent3, _scopeId2));
              } else if (_ctx.currentProgress == _ctx.PROGRESS.sixthSlide) {
                _push3(ssrRenderComponent(_component_core_card, {
                  class: "animate__animated bg-success",
                  key: 6
                }, null, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  class: ["animate__animated", { "animate__fadeOutLeftBig": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade }]
                }, [
                  createVNode("div", { class: "home-sec--portfolio__title-wrapper" }, [
                    createVNode(_component_core_zoomed_title, {
                      origin: "58px 100px",
                      class: "home-sec__title",
                      scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-white" }, "CONTACT")
                      ]),
                      _: 1
                    }, 8, ["scale"]),
                    createVNode("h2", { class: "text-secondary home-sec__title" }, "US")
                  ])
                ], 2),
                createVNode(TransitionGroup, {
                  mode: "out-in",
                  name: "fadeInDelayOutLeft"
                }, {
                  default: withCtx(() => [
                    _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated",
                      key: 1
                    })) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "bg-primary animate__animated",
                      key: 2
                    })) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-info",
                      key: 3
                    })) : _ctx.currentProgress == _ctx.PROGRESS.fourthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-danger",
                      key: 4
                    })) : _ctx.currentProgress == _ctx.PROGRESS.fifthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-secondary",
                      key: 5
                    })) : _ctx.currentProgress == _ctx.PROGRESS.sixthSlide ? (openBlock(), createBlock(_component_core_card, {
                      class: "animate__animated bg-success",
                      key: 6
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreHomeSectionContainer, { class: "home-sec--portfolio pt-4" }, {
            default: withCtx(() => [
              createVNode("div", {
                class: ["animate__animated", { "animate__fadeOutLeftBig": _ctx.currentProgress >= _ctx.PROGRESS.titleMoveUpAndFade }]
              }, [
                createVNode("div", { class: "home-sec--portfolio__title-wrapper" }, [
                  createVNode(_component_core_zoomed_title, {
                    origin: "58px 100px",
                    class: "home-sec__title",
                    scale: _ctx.currentProgress == _ctx.PROGRESS.titleZoomIn ? 50 : 1
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-white" }, "CONTACT")
                    ]),
                    _: 1
                  }, 8, ["scale"]),
                  createVNode("h2", { class: "text-secondary home-sec__title" }, "US")
                ])
              ], 2),
              createVNode(TransitionGroup, {
                mode: "out-in",
                name: "fadeInDelayOutLeft"
              }, {
                default: withCtx(() => [
                  _ctx.currentProgress == _ctx.PROGRESS.firstSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated",
                    key: 1
                  })) : _ctx.currentProgress == _ctx.PROGRESS.secondSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "bg-primary animate__animated",
                    key: 2
                  })) : _ctx.currentProgress == _ctx.PROGRESS.thirdSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-info",
                    key: 3
                  })) : _ctx.currentProgress == _ctx.PROGRESS.fourthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-danger",
                    key: 4
                  })) : _ctx.currentProgress == _ctx.PROGRESS.fifthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-secondary",
                    key: 5
                  })) : _ctx.currentProgress == _ctx.PROGRESS.sixthSlide ? (openBlock(), createBlock(_component_core_card, {
                    class: "animate__animated bg-success",
                    key: 6
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Banner = __nuxt_component_0;
  const _component_about_us = __nuxt_component_1;
  const _component_services = __nuxt_component_2;
  const _component_portfolio = __nuxt_component_3;
  const _component_clients = __nuxt_component_4;
  const _component_contact_us = __nuxt_component_5;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Banner, null, null, _parent));
  _push(ssrRenderComponent(_component_about_us, null, null, _parent));
  _push(ssrRenderComponent(_component_services, null, null, _parent));
  _push(ssrRenderComponent(_component_portfolio, null, null, _parent));
  _push(ssrRenderComponent(_component_clients, null, null, _parent));
  _push(ssrRenderComponent(_component_contact_us, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-3925c6bf.js.map
