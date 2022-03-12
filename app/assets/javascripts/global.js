// ua
const ua = window.navigator.userAgent.toLowerCase();

export const is_edge = ua.indexOf('edge') !== -1;
export const is_ie = !is_edge && (ua.indexOf("iemobile") !== -1 || ua.indexOf('trident/7') !== -1 || (ua.indexOf("msie") !== -1 && ua.indexOf('opera') === -1));

export const is_ios = ua.indexOf("iphone") >= 0 || ua.indexOf("ipad") >= 0 || ua.indexOf("ipod") >= 0;


// can use observer
export const isCanUseObserver = (typeof IntersectionObserver === 'function') ? true : false;

// touch device?
export const isTouchDevice = (window.ontouchstart === null) ? true : false;


// scroll stop & restart
let scroll_top;

export function stopBodyScroll() {
  scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
  document.body.style.position = 'fixed';
  document.body.style.top = -scroll_top+'px';
}

export function restartBodyScroll() {
  document.body.style.position = 'static';
  document.body.style.top = 0;
  window.scrollTo(0, scroll_top);
}