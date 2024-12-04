export const trackEvent = (eventName, eventCategory, eventLabel) => {
  if (window.gtag) {
    window.gtag("event", eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
    });
  } else {
    console.error("Google Analytics is not loaded");
  }
};
export const trackEventsClick = (eventName, eventCategory, eventLabel) => {
  trackEvent(eventName, eventCategory, eventLabel);
};
