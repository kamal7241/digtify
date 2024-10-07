import { ag as defineNuxtRouteMiddleware, ah as navigateTo } from "./CHK84JHO.js";
const redirect = defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/" || to.path === "/en") {
    return navigateTo("/en/");
  }
});
export {
  redirect as default
};
