import { a0 as useI18n, k as reactive, U as computed, r as ref, m as openBlock, n as createElementBlock, C as createVNode, e as unref, a1 as VTextField, a2 as VTextarea, p as createBaseVNode, x as withCtx, I as toDisplayString, a3 as VBtn, Z as withModifiers, _ as _export_sfc, A as normalizeClass, a4 as VSwitch, a5 as VContainer, a6 as VRow, a7 as VCol, a8 as VSheet, K as Fragment, L as renderList, a9 as VIcon, D as createTextVNode, aa as useRuntimeConfig, ab as __nuxt_component_0$1 } from "./CHK84JHO.js";
import { c as common, r as required, e as email, n as numeric, u as useVuelidate, d as _imports_0, b as axios, _ as _imports_0$1 } from "./BWiABkhk.js";
const _hoisted_1$2 = { class: "d-flex justify-content-center mt-4" };
const _hoisted_2$1 = { class: "title-submit text-light text-capitalize text-center" };
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
    const _required = computed(
      () => common.withMessage(() => i18n.t("validations.requiredMsg"), required)
    );
    const _email = computed(
      () => common.withMessage(() => i18n.t("validations.emailMsg"), email)
    );
    const _phone = computed(
      () => common.withMessage(() => i18n.t("validations.phone"), numeric)
    );
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
          await sendMessage(state);
        } catch (error) {
        } finally {
          loading.value = false;
        }
      }
    }
    async function sendMessage(formModel) {
      await axios.post(`https://admin.digifymena.com/api/v1/message/create`, {
        name: formModel.firstName + " " + formModel.lastName,
        ...formModel
      }).then((response) => {
        clear();
      }).catch((error) => {
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
          "error-messages": unref(v$).firstName.$errors.map((e) => "* " + e.$message),
          label: _ctx.$t("firstNameLabel"),
          onBlur: unref(v$).firstName.$touch,
          onInput: unref(v$).firstName.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onInput"]),
        createVNode(VTextField, {
          modelValue: state.lastName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.lastName = $event),
          counter: 50,
          "error-messages": unref(v$).lastName.$errors.map((e) => "* " + e.$message),
          label: _ctx.$t("lastNameLabel"),
          onBlur: unref(v$).lastName.$touch,
          onInput: unref(v$).lastName.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onInput"]),
        createVNode(VTextField, {
          modelValue: state.email,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.email = $event),
          counter: 70,
          "error-messages": unref(v$).email.$errors.map((e) => "* " + e.$message),
          label: _ctx.$t("emailLabel"),
          onBlur: unref(v$).email.$touch,
          onInput: unref(v$).email.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onInput"]),
        createVNode(VTextField, {
          modelValue: state.phoneNumber,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.phoneNumber = $event),
          counter: 50,
          "error-messages": unref(v$).phoneNumber.$errors.map((e) => "* " + e.$message),
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
          "error-messages": unref(v$).message.$errors.map((e) => "* " + e.$message),
          label: _ctx.$t("messageLabel"),
          onBlur: unref(v$).message.$touch,
          onChange: unref(v$).message.$touch,
          class: "filed-style"
        }, null, 8, ["modelValue", "error-messages", "label", "onBlur", "onChange"]),
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(VBtn, {
            disabled: loading.value,
            loading: loading.value,
            class: "our-services__submit rounded-pill position-relative mt-5",
            color: "rgb(81 81 81)",
            type: "submit"
          }, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_2$1, toDisplayString(_ctx.$t("sendMsg")), 1),
              _cache[5] || (_cache[5] = createBaseVNode("span", { class: "submit-button btn btn-secondary" }, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: ""
                })
              ], -1))
            ]),
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
    description: "Establishing a strong social media presence is key to building credibility, trust, and awareness. Let us help you at Digify to choose the right platforms and build your effective content to connect with your audience effectively."
  },
  {
    title: "Media Buying",
    description: "Maximize your reach and conversions with our specialized media buying services at Digify. We expertly manage ads across social media, search engines, mobile platforms, and e-commerce to drive the best results to our premium clients in Saudi and Egypt."
  },
  {
    title: "CREATIVE DESIGNS",
    description: "Captivate your audience with stunning visuals! Our design team at Digify leverages the latest trends in social media graphics, infographics, CGI, 3D and 2D videos to ensure your marketing goals are met and your marketing message is clear."
  },
  {
    title: "MOBILE DEVELOPMENT",
    description: "Transform your ideas into user-friendly mobile applications. We specialize in creating both native and cross-platform apps across various industries, ensuring seamless experiences for your users."
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description: "With over 20 years of experience, we craft customized websites tailored to fit your business objectives. Whether you’re a traditional company or an e-commerce venture. Need a simple WordPress website, customizable dot net or php portal, or seeking interactive website design. We have it all for you."
  }
];
const ARServices = [
  {
    title: "إدارة وسائل التواصل الاجتماعي",
    description: "تواجد علامتك التجارية يشكل قوي وفعال على وسائل التواصل الاجتماعي أمرًا أساسيًا لبناء المصداقية والثقة وزيادة الوعي تجاه علامتك التجارية. دعنا نساعدك في اختيار المنصات المناسبة للتواصل مع جمهورك بشكل فعال، وتحقيق خطط اعمالك"
  },
  {
    title: "إدارة الحملات الإعلانية",
    description: "قم بتعظيم نطاق الوصول وزيادة معدلات التحويل من خلال خدمات إدارة الحملات الإعلانية المتخصصة لدينا. نحن ندير الإعلانات بدقة عبر وسائل التواصل الاجتماعي، ومحركات البحث، وتطبيقات الهاتف المحمول، ومنصات التجارة الإلكترونية للحصول على أفضل النتائج."
  },
  {
    title: "خدمات التصميم المتكاملة ",
    description: "التصميم الحديث والمبتكر هو أساس تفاعل الجمهور المستهدف مع علامتك التجارية، نحن فى ديجيفاي نعتمد على أحدث اتجاهات التصميم عبر مختلف الوسائط، بما في ذلك تصاميم وسائل التواصل الاجتماعي، الرسومات، الإنفوجرافيك، والفيديوهات 2D."
  },
  {
    title: "إنشاء تطبيقات الهاتف المحمول ",
    description: "حوّل أفكارك إلى تطبيقات موبايل سهلة الاستخدام، بفضل خبرتنا الكبيرة في تطوير التطبيقات الأصلية في فئات مختلفة، نصمم تطبيقات سهلة الاستخدام وشاملة من البداية للنهاية، توفر تفاعلاً سلسًا مع عملائك ونقدم ايضاٍ استشارات مجانية لنعطيك افضل خبرة لتطوير التطبيق وادارته لاحقا."
  },
  {
    title: "إنشاء المواقع الالكترونية",
    description: "مع خبرة تزيد عن 20 عامًا في المملكة، نحن نطور لك مواقع إلكترونية مخصصة تتناسب تمامًا مع أهداف عملك. سواء كنت بحاجة لموقع لشركتك المتوسطة الحجم أو لمتجر إلكتروني متكامل، فإن فريقنا سيعمل على تصميم وتطوير موقع يجذب العملاء ويعزز من وجودك الرقمي. دعنا نساعدك في تحويل رؤيتك إلى واقع!"
  }
];
const _imports_1 = "" + new URL("landing-page.BvAxP0Fe.png", import.meta.url).href;
const phoneNumber = "+9660538492294";
const message = "";
const _sfc_main$1 = {
  setup() {
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL || "";
    return {
      baseURL
    };
  },
  computed: {
    lang() {
      return this.$i18n.locale === "en" ? "en" : "ar";
    },
    services() {
      return this.$i18n.locale === "en" ? ENServices : ARServices;
    },
    phoneNumber() {
      return phoneNumber;
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
const _hoisted_3 = { class: "our-services__intro animate__animated animate__fadeInDown" };
const _hoisted_4 = { class: "subtitle mt-3 mb-3" };
const _hoisted_5 = { class: "our-services-content" };
const _hoisted_6 = { class: "our-services__title-and-subtitle" };
const _hoisted_7 = { class: "subtitle mt-3 mb-3" };
const _hoisted_8 = { class: "our-services__desc" };
const _hoisted_9 = { class: "text-secondary" };
const _hoisted_10 = { class: "mb-0" };
const _hoisted_11 = { class: "cursor-pointer" };
const _hoisted_12 = { class: "our-services-form" };
const _hoisted_13 = { class: "our-services__banner-btn d-flex justify-center gap-3 mt-4 items-center" };
const _hoisted_14 = ["href"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_OurServicesFields = _sfc_main$2;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(VContainer, null, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_NuxtLink, { to: "/en" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createBaseVNode("img", {
                class: "logo",
                alt: "digify-logo",
                src: _imports_0$1
              }, null, -1)
            ])),
            _: 1
          }),
          createBaseVNode("div", {
            class: normalizeClass([
              "d-flex flex-nowrap align-items-center gap-3",
              $options.lang === "ar" ? "flex-row-reverse" : "flex-row"
            ])
          }, [
            createBaseVNode("span", {
              class: normalizeClass(["text-sm text-white fw-bold", $options.lang === "en" ? "" : "opacity-50"])
            }, "EN", 2),
            createVNode(VSwitch, {
              modelValue: $options.lang,
              "hide-details": true,
              "false-value": "en",
              "true-value": "ar",
              class: "switch-style",
              onClick: $options.switchLanguage
            }, null, 8, ["modelValue", "onClick"]),
            createBaseVNode("span", {
              class: normalizeClass(["text-sm text-white fw-bold", $options.lang === "ar" ? "" : "opacity-50"])
            }, "ع", 2)
          ], 2)
        ])
      ]),
      _: 1
    }),
    createVNode(VContainer, { class: "mb-6 animate__animated" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("h4", _hoisted_4, toDisplayString(_ctx.$t("services.intro")), 1)
        ]),
        createVNode(VRow, { class: "animate__animated animate__fadeInUpBig" }, {
          default: withCtx(() => [
            createVNode(VCol, {
              cols: "12",
              md: "6",
              class: "order-2 order-md-1"
            }, {
              default: withCtx(() => [
                createVNode(VSheet, { class: "bg-transparent p-0 m-0" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("h1", _hoisted_7, toDisplayString(_ctx.$t("services.description")), 1)
                      ]),
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
                                class: "d-inline-flex text-white text-sm gap-2 fs-6 mt-2",
                                to: `https://wa.me/${$options.phoneNumber}`,
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.$t("contactForMoreDetails")), 1),
                                  createVNode(VIcon, { class: "text-xs cursor-pointer" }, {
                                    default: withCtx(() => _cache[1] || (_cache[1] = [
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
                }),
                createVNode(VSheet, { class: "bg-transparent" }, {
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
            createVNode(VCol, {
              cols: "12",
              md: "6",
              class: "order-1 order-md-2"
            }, {
              default: withCtx(() => [
                _cache[3] || (_cache[3] = createBaseVNode("img", {
                  class: "mw-100",
                  alt: "digify-logo",
                  src: _imports_1
                }, null, -1)),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_component_NuxtLink, { to: "/en" }, {
                    default: withCtx(() => [
                      createBaseVNode("button", {
                        class: normalizeClass(`btn btn-secondary text-uppercase rounded-5 px-sm-5     h-100 ${$options.lang === "ar" ? " px-4 " : "px-2 "}`)
                      }, toDisplayString(_ctx.$t("visitOurWebsite")), 3)
                    ]),
                    _: 1
                  }),
                  createBaseVNode("a", {
                    href: `${$setup.baseURL}/digify-portfolio.pdf`,
                    target: "_blank",
                    download: "digify-portfolio.pdf"
                  }, [
                    createBaseVNode("button", {
                      class: normalizeClass(`btn btn-success text-uppercase rounded-5 px-sm-5    ${$options.lang === "ar" ? " px-4" : "px-2 "}`)
                    }, [
                      createTextVNode(toDisplayString(_ctx.$t("downloadPortfolio")) + " ", 1),
                      createVNode(VIcon, { class: "text-xs" }, {
                        default: withCtx(() => _cache[2] || (_cache[2] = [
                          createTextVNode("mdi-arrow-down-thin")
                        ])),
                        _: 1
                      })
                    ], 2)
                  ], 8, _hoisted_14)
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
const saudiDigitalCampaign = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  saudiDigitalCampaign as default
};
