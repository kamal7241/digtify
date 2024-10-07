/**
 * @todo fix real reason to throw not found error on /en only
 */
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/" || to.path === "/en") {
    return navigateTo('/en/');
  }
});
