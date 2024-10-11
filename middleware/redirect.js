/**
 * @todo fix real reason to throw not found error on /en only
 * @note replaced with i18n trailing slash
 */
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/" || to.path === "/en") {
    return navigateTo('/en/');
  }
  /**
   * @note used to prevent redirect to /ar
   */
  if (to.path === "/ar/" || to.path === "/ar") {
    return navigateTo('/en/');
  }
});
