/* ==== Typography label generator === */


/*  Load an External CSS file via JS - so we only need to attach this one JS file */

addCSS('https://cdn.staticaly.com/gist/alexmwalker/72cbe26c13f6531d2d2da2b2c15df22a/raw/adaaa5c224cf3a78a2f364707318493cd89e6b15/device-size.css');

// Include CSS file
function addCSS(filename){
 var head = document.getElementsByTagName('head')[0];

 var style = document.createElement('link');
 style.href = filename;
 style.type = 'text/css';
 style.rel = 'stylesheet';
 head.append(style);
}

// round number
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}




// BUILD the report UI units for each type sample with the class 'report'. Run once on load.
function reportBuild() {

  const myReports = document.querySelectorAll(".report");

  myReports.forEach(function(myReport, index) {
    myReport.innerHTML += '<span><input type="checkbox" checked /><ul><li class="type">Type:</li><li class="weight">Weight:</li><li class="size">Size:</li><li class="lineheight">Line-height:</li></span>';

  });

}


reportBuild();
//reportType();

/*
window.onresize = function() {
  reportType();
};
*/