// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
let wheelOpt;
let wheelEvent;
const init = ()=>{
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; } 
    }));
  } catch(e) {}
  wheelOpt = supportsPassive ? { passive: false } : false;
  wheelEvent = 'onwheel' in document.createElement('div') ? /* standart */'wheel' : /* non standard and old browsers */'mousewheel';
}

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}



// call this to Disable
function disableScroll(target) {
  target.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  target.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  target.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  target.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll(target) {
  target.removeEventListener('DOMMouseScroll', preventDefault, false);
  target.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  target.removeEventListener('touchmove', preventDefault, wheelOpt);
  target.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

const scrollStopper = (targetEl)=>{
  return {
    init , 
    enable : () => enableScroll(targetEl) , 
    disable : () => {
      disableScroll(targetEl) 
    },
  }
}

export default scrollStopper