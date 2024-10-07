import { navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/" || to.path === "/en") {
    return navigateTo("en/");
  }
});
