export default defineNuxtMiddleware(({ route }) => {
  if (window.$gtag) {
    window.$gtag.pageview({
      page_path: route.fullPath,
      page_title: document.title || route.name,
    });
  }
});
