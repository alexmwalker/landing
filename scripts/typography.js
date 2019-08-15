/* ==== Typography label generator === */


/*  Load an External CSS file via JS - only need this one file */

addCSS("https://cdn.staticaly.com/gist/alexmwalker/72cbe26c13f6531d2d2da2b2c15df22a/raw/adaaa5c224cf3a78a2f364707318493cd89e6b15/device-size.css");

/* Include CSS file */
function addCSS(filename){
 var head = document.getElementsByTagName("head")[0];
 var style = document.createElement("link");
 style.href = filename;
 style.type = "text/css";
 style.rel = "stylesheet";
 head.append(style);
}

// round number
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

// BUILD the report UI units for each type sample with the class 'report'. Run once on load.
function reportBuild() {
  var myReports = document.querySelectorAll(".report");
  var numberOfReports = myReports.length;
  alert("Reports: " + numberOfReports);
  myReports.forEach(function(myReport, index) {
    myReport.innerHTML += '<span><input type="checkbox" checked /><ul><li class="type">Type:</li><li class="weight">Weight:</li><li class="size">Size:</li><li class="lineheight">Line-height:</li></span>';
  });
}
/* UPDATE the text nodes on load and on each resize.*/

function reportType(){
  var myElements = document.querySelectorAll(".report");
  myElements.forEach(function(myElement, index) {
    style = (window.getComputedStyle ? getComputedStyle(myElement, null) : myElement.currentStyle);
    console.log(myElement.nodeName);
    var fn = myElement.nodeName;
    var ff1 = style.fontFamily;
    var fw1 = style.fontWeight;
    var lh1 = style.lineHeight;
    var fs1 = parseInt(style.fontSize);
    var fs  = precisionRound(fs1);
    var targetEl =     myElement.querySelector(".type");
    var targetSize =   myElement.querySelector(".size");
    var targetFamily = myElement.querySelector(".family");
    var targetWeight = myElement.querySelector(".weight");
    var targetlh =     myElement.querySelector(".lineheight");
    var newSize = document.createElement("li");
    newSize.className = "size";
    newSize.innerHTML = "Size: <b>" + fs1 + "px</b>";

    /*var newFamily = document.createElement("li");
    newFamily.className = "family";
    newFamily.innerHTML = "<b>" + ff1 + "</b>";*/

    var newLh = document.createElement("li");
    newLh.className = "lineheight";
    newLh.innerHTML = "Line-height: <b>" + lh1 + "</b>";

    var newWeight = document.createElement("li");
    newWeight.className = "weight";
    newWeight.innerHTML = "Weight: <b>" + fw1 + "</b>";

    var newType = document.createElement("li");
    newType.className = "type";
    newType.innerHTML = "<b>&nbsp;&lt;" + fn + "&gt;</b>";

    targetEl.parentNode.replaceChild(newType, targetEl);
    targetSize.parentNode.replaceChild(newSize, targetSize);
    /*targetFamily.parentNode.replaceChild(newFamily, targetFamily);*/
    targetlh.parentNode.replaceChild(newLh, targetlh);
    targetWeight.parentNode.replaceChild(newWeight, targetWeight);
  });
}
reportBuild();
//reportType();

window.onresize = function() {
  //reportType();
};