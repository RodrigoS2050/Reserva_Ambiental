export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "js-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      }, 0);
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
