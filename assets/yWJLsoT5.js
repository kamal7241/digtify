import { ag as defineNuxtRouteMiddleware, ah as navigateTo } from "./_rbvDJTT.js";
const redirect = defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/" || to.path === "/en") {
    return navigateTo("/en/");
  }
});
export {
  redirect as default
};
