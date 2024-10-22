const preventDefault = (e: any) => {
  e.preventDefault();
};

const disableScroll = () => {
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('mousewheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
};

const enableScroll = () => {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener('wheel', preventDefault, false);
  window.removeEventListener('mousewheel', preventDefault, false);
  window.removeEventListener('touchmove', preventDefault, false);
};

export { disableScroll, enableScroll };
