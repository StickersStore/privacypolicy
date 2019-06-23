// Init devicePixelRatio
function initPixelRatio() {
  var $html = document.documentElement;
  var dpr = window.devicePixelRatio;
  if (dpr >= 3) dpr = 3;
  $html.setAttribute('data-dpr', dpr);
}

// Update Font Size
function updateWinFontSize() {
  var $html = document.documentElement;
  var htmlWidth = $html.clientWidth;
  var deviceWidth = document.body.clientWidth;
  var designWidth = 750;
  var defaultWidth = designWidth / 100;
  deviceWidth = deviceWidth > htmlWidth ? deviceWidth : htmlWidth;
  if (deviceWidth > 750) {
    deviceWidth = 750;
  }
  window.remFontSize = deviceWidth / defaultWidth;
  $html.style.fontSize = deviceWidth / defaultWidth + 'px';
}


window.addEventListener('resize', ()=>{
  updateWinFontSize();
});

document.addEventListener('DOMContentLoaded', ()=>{
  initPixelRatio();
  updateWinFontSize();
  document.body.style.display = 'block';
});
