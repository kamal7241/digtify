import { a0 as useI18n, k as reactive, U as computed, r as ref, m as openBlock, n as createElementBlock, C as createVNode, e as unref, a1 as VTextField, a2 as VTextarea, p as createBaseVNode, x as withCtx, a3 as VBtn, Z as withModifiers, _ as _export_sfc, a4 as VSwitch, a5 as VContainer, I as toDisplayString, a6 as VRow, a7 as VCol, a8 as VSheet, K as Fragment, L as renderList, a9 as VIcon, D as createTextVNode, aa as useRuntimeConfig, ab as __nuxt_component_0$1 } from "../entry.css";
import { c as common, r as required, e as email, n as numeric, u as useVuelidate, b as _imports_0, _ as _imports_0$1 } from "./CjLTi4hu.js";
const _hoisted_1$2 = { class: "d-flex justify-content-center" };
const _sfc_main$2 = {
  __name: "OurServicesFields",
  setup(__props) {
    const i18n = useI18n();
    const initialState = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    };
    const state = reactive({ ...initialState });
    const _required = computed(() => common.withMessage(() => i18n.t("validations.requiredMsg"), required));
    const _email = computed(() => common.withMessage(() => i18n.t("validations.emailMsg"), email));
    const _phone = computed(() => common.withMessage(() => i18n.t("validations.phone"), numeric));
    const rules = {
      firstName: { required: _required.value },
      lastName: { required: _required.value },
      email: { required: _required.value, email: _email.value },
      phoneNumber: { required: _required.value, numeric: _phone.value },
      message: { required: _required.value }
    };
    const v$ = useVuelidate(rules, state);
    const loading = ref(false);
    async function handleSubmit() {
      const isValid = await v$.value.$validate();
      if (isValid) {
        loading.value = true;
        try {
          await submitForm();
          clear();
        } catch (error) {
          alert(error);
        } finally {
          loading.value = false;
        }
      }
    }
    async function submitForm() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2e3);
      });
    }
    function clear() {
      v$.value.$reset();
      for (const [key, value] of Object.entries(initialState)) {
        state[key] = value;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: "our-services__form",
        onSubmit: withModifiers(handleSubmit, ["prevent"])
      }, [
        createVNode(VTextField, {
          modelValue: state.firstName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.firstName = $event),
          counter: 50,
          "error-messages": unref(v$).firstName.$errors.map((e) => e.$message),
          label: _ctx.$t("firstNameLabel"),
          onBlur: unref(v$).firstName.$touch,
          onInput: unref(v$).firstName.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onInput"]),
        createVNode(VTextField, {
          modelValue: state.lastName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.lastName = $event),
          counter: 50,
          "error-messages": unref(v$).lastName.$errors.map((e) => e.$message),
          label: _ctx.$t("lastNameLabel"),
          onBlur: unref(v$).lastName.$touch,
          onInput: unref(v$).lastName.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onInput"]),
        createVNode(VTextField, {
          modelValue: state.email,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.email = $event),
          counter: 70,
          "error-messages": unref(v$).email.$errors.map((e) => e.$message),
          label: _ctx.$t("emailLabel"),
          onBlur: unref(v$).email.$touch,
          onInput: unref(v$).email.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onInput"]),
        createVNode(VTextField, {
          modelValue: state.phoneNumber,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.phoneNumber = $event),
          counter: 50,
          "error-messages": unref(v$).phoneNumber.$errors.map((e) => e.$message),
          label: _ctx.$t("phoneLabel"),
          onBlur: unref(v$).phoneNumber.$touch,
          onInput: unref(v$).phoneNumber.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onInput"]),
        createVNode(VTextarea, {
          maxlength: "80",
          counter: "",
          rows: "3",
          "auto-grow": "",
          modelValue: state.message,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.message = $event),
          "error-messages": unref(v$).message.$errors.map((e) => e.$message),
          label: _ctx.$t("messageLabel"),
          onBlur: unref(v$).message.$touch,
          onChange: unref(v$).message.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onChange"]),
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(VBtn, {
            disabled: loading.value,
            loading: loading.value,
            class: "our-services__submit rounded-pill p-md-4 p-3 position-relative mt-5",
            color: "rgb(81 81 81)",
            type: "submit"
          }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createBaseVNode("span", { class: "title-submit text-light pe-4 text-capitalize" }, "Send Message", -1),
              createBaseVNode("span", { class: "submit-button btn btn-secondary rounded-pill" }, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: ""
                })
              ], -1)
            ])),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ], 32);
    };
  }
};
const ENServices = [
  {
    title: "SOCIAL MEDIA MARKETING",
    description: "Social media presence is important in building credibility, trust, and awareness. it's crucial to use the right platforms"
  },
  {
    title: "Media Buying",
    description: "We specialize in social media, search engine, mobile, and e-commerce ads to maximize reach and conversions."
  },
  {
    title: "CREATIVE DESIGNS",
    description: "We rely on the latest design trends, including social media, graphics, infographics, and 2D videos for appealing visuals, aligned with your marketing goals"
  },
  {
    title: "MOBILE DEVELOPMENT",
    description: "With extensive expertise in native and cross-platform apps across entertainment, games, corporate, and more, we specialize in creating user-friendly, end-to-end mobile solutions."
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description: "with 20 years of experience, we create custom websites tailored to your business goals, whether for traditional companies or e-commerce ventures."
  }
];
const ARServices = [
  {
    title: "إدارة وسائل التواصل الاجتماعي",
    description: "وجودك على وسائل التواصل الاجتماعي مهم لبناء المصداقية، الثقة، وزيادة الوعي بالعلامة التجارية، ومن الضروري استخدام المنصات المناسبة."
  },
  {
    title: "إدارة الحملات الإعلانية",
    description: "نقوم بتقديم حلول إعلانية متكاملة عبر وسائل التواصل الاجتماعي، ومحركات البحث، وإعلانات تطبيقات الهاتف المحمول، ومنصات التجارة الإلكترونية، بهدف توسيع نطاق الوصول وزيادة معدلات التحويل"
  },
  {
    title: "خدمات التصميم المتكاملة ",
    description: "نعتمد على أحدث اتجاهات التصميم عبر مختلف الوسائط، بما في ذلك تصاميم وسائل التواصل الاجتماعي، الرسومات، الإنفوجرافيك، والفيديوهات 2D."
  },
  {
    title: "إنشاء تطبيقات الهاتف المحمول ",
    description: "بفضل خبرتنا الكبيرة في تطوير التطبيقات الأصلية والهجينة في فئات مختلفة، نصمم تطبيقات سهلة الاستخدام وشاملة من البداية للنهاية، توفر تفاعلاً سلسًا مع عملائك."
  },
  {
    title: "إنشاء المواقع الالكترونية",
    description: "بخبرة 20 عامًا، نصمم مواقع مخصصة تتوافق مع أهدافك، سواء كنت بحاجة لموقع شركة أو موقع للتجارة الإلكترونية."
  }
];
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,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";
const phoneNumber = "+201119858118";
const message = "";
const _sfc_main$1 = {
  setup() {
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL || "";
    return {
      baseURL
    };
  },
  data() {
    return {
      // Use a regular function to access this
      model: this.$i18n.locale === "en" ? "En" : "Ar"
    };
  },
  computed: {
    services() {
      return this.$i18n.locale === "en" ? ENServices : ARServices;
    },
    phoneNumber() {
      return "+201119858118";
    }
  },
  methods: {
    switchLanguage() {
      const newLocale = this.$i18n.locale === "en" ? "ar" : "en";
      this.$i18n.setLocale(newLocale);
    },
    openWhatsApp() {
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
    }
  }
};
const _hoisted_1$1 = { class: "our-services" };
const _hoisted_2 = { class: "our-services__header d-flex justify-content-between items-center" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "our-services__title-and-subtitle" };
const _hoisted_6 = { class: "subtitle mt-3 mb-3" };
const _hoisted_7 = { class: "our-services-content" };
const _hoisted_8 = { class: "our-services__desc" };
const _hoisted_9 = { class: "text-secondary" };
const _hoisted_10 = { class: "mb-0" };
const _hoisted_11 = { class: "" };
const _hoisted_12 = { class: "our-services-form" };
const _hoisted_13 = { class: "d-flex justify-center gap-3" };
const _hoisted_14 = { class: "btn btn-secondary text-uppercase fs-5 rounded-5 px-5" };
const _hoisted_15 = ["href"];
const _hoisted_16 = { class: "btn btn-success text-uppercase fs-5 rounded-5 px-5" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_OurServicesFields = _sfc_main$2;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(VContainer, null, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_NuxtLink, { to: "/en" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("img", {
                class: "logo",
                alt: "digify-logo",
                src: _imports_0$1
              }, null, -1)
            ])),
            _: 1
          }),
          createVNode(VSwitch, {
            modelValue: $data.model,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model = $event),
            "hide-details": true,
            "false-value": "En",
            "true-value": "Ar",
            class: "switch-style",
            onClick: $options.switchLanguage
          }, {
            label: withCtx(() => [
              $data.model === "Ar" ? (openBlock(), createElementBlock("span", _hoisted_3, _cache[2] || (_cache[2] = [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "Arabic",
                  style: { "width": "30px", "height": "30px" }
                }, null, -1)
              ]))) : (openBlock(), createElementBlock("span", _hoisted_4, _cache[3] || (_cache[3] = [
                createBaseVNode("img", {
                  src: _imports_2,
                  alt: "English",
                  style: { "width": "30px", "height": "30px" }
                }, null, -1)
              ])))
            ]),
            _: 1
          }, 8, ["modelValue", "onClick"])
        ])
      ]),
      _: 1
    }),
    createVNode(VContainer, { class: "mb-6" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("h1", _hoisted_6, toDisplayString(_ctx.$t("services.description")), 1)
        ]),
        createVNode(VRow, {
          align: "flex-start",
          justify: "space-between",
          "no-gutters": ""
        }, {
          default: withCtx(() => [
            createVNode(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx(() => [
                createVNode(VSheet, { class: "pa-2 ma-2 bg-transparent p-0 m-0" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($options.services, (service) => {
                          return openBlock(), createElementBlock("div", {
                            class: "mb-4",
                            key: service.id
                          }, [
                            createBaseVNode("h5", _hoisted_9, toDisplayString(service.title), 1),
                            createBaseVNode("p", _hoisted_10, toDisplayString(service.description), 1),
                            createBaseVNode("p", null, [
                              createVNode(_component_NuxtLink, {
                                class: "inline-block text-white text-sm d-flex gap-2 fs-6",
                                to: `https://wa.me/${$options.phoneNumber}`
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.$t("contactForMoreDetails")), 1),
                                  createVNode(VIcon, { class: "text-xs" }, {
                                    default: withCtx(() => _cache[4] || (_cache[4] = [
                                      createTextVNode("mdi-whatsapp")
                                    ])),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VCol, null, {
              default: withCtx(() => [
                createVNode(VSheet, { class: "pa-2 ma-2 bg-transparent pe-0 me-0 ps-4 ms-4" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(_component_OurServicesFields)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VCol, { cols: "12" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_component_NuxtLink, { to: "/en" }, {
                    default: withCtx(() => [
                      createBaseVNode("button", _hoisted_14, toDisplayString(_ctx.$t("visitOurWebsite")), 1)
                    ]),
                    _: 1
                  }),
                  createBaseVNode("a", {
                    href: `${$setup.baseURL}/digify-portfolio.pdf`,
                    target: "_blank",
                    download: "digify-portfolio.pdf"
                  }, [
                    createBaseVNode("button", _hoisted_16, [
                      createTextVNode(toDisplayString(_ctx.$t("downloadPortfolio")) + " ", 1),
                      createVNode(VIcon, { class: "text-xs" }, {
                        default: withCtx(() => _cache[5] || (_cache[5] = [
                          createTextVNode("mdi-arrow-down-thin")
                        ])),
                        _: 1
                      })
                    ])
                  ], 8, _hoisted_15)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {};
const _hoisted_1 = { class: "bg-primary h-100" };
function _sfc_render(_ctx, _cache) {
  const _component_OurServices = __nuxt_component_0;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_OurServices)
  ]);
}
const ourServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ourServices as default
};
