/*------------------------------------*\
  ##### LIVE TYPOGRAPHY INSPECTOR
\*------------------------------------*/
/* 
  The idea is to attach this JS to your 
  styleguide examples and it will query 
  and report on any type example that is 
  given the `.report` CSS class. This is
  live, so the reports will be different 
  for different screen sizes and will 
  adjust in real time as you scale your
  screen. Changes to your CSS will be 
  reflected instantly in the report units.

/*------------------------------------*\
  #1 ATTACH THE NECESSARY CSS 
\*------------------------------------*/

/*  
    We load an External CSS file via JS - so 
    we don't need to remember to attach the 
    CSS for this to work 

*/
/*
addCSS(
"https://gistcdn.githack.com/alexmwalker/9c099a4ab551e2082dacafffd715498a/raw/6dccea277927fe316696822d37b7a7d69fd5d760/inspector.css"
);

// Attach CSS file
function addCSS(filename) {
  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("link");
  style.href = filename;
  style.type = "text/css";
  style.rel = "stylesheet";
  head.append(style);
}
*/


/*------------------------------------*\
  #CONSTRUCT AND INSERT THE HEADER UI

    We stick it just before `.guidebody`
    and inside `.container`

\*------------------------------------*/


let bodyEl = document.querySelector('body');  

function navBarBuild(){

/* TOP NAVBAR TEMPLATE CODE -  to be inserted live */ 
var navBar = `
    <div class="nav h3">
      <div id="showmenu"><span></span></div>
    </div>
    <div class="h3 branding">
      <a href="/styleguide/index.html">SitePoint Styleguide</a>

    </div>
    
    <div class="pagestate">
      <dl class="small">
        <dt>
          <span class="mobile-hide">Base font-size</span>
          <span class="mobile-only">Font</span>
          </dt>
        <dd class="currentRootFont">-</dd>
        <dt>
          <span class="mobile-hide">Base line-height</span>
          <span class="mobile-only">LH</span>
          </dt>
        <dd class="lineheight">-</dd>
        <dt>
          <span class="mobile-hide">Typescale</span>
          <span class="mobile-only">TS</span></dt>
        <dd class="typescale">-</dd>
        
        <dt><span class="mobile-hide">Grid unit</span><span class="mobile-only">Grid</span></dt>
        <dd class="gridsize">-</dd>
      </dl>
      <ul class="small controls">
        <li>
          <input type="checkbox" id="feedback" checked /><label for="feedback"> Report </label>
        </li>
        <li>
          <input type="checkbox" id="vr" checked /><label for="vr"> Grid </label>
          </li>
        <li>
          <input type="checkbox" id="labelling" checked /><label for="labelling"> Margins</label>
          </li>
        <li>
          <input type="checkbox" id="borders" /><label for="borders"> Borders</label>
          </li>
      </ul>
    </div>

    <div class="devicestate">
      <div class="device"></div>
    </div>`;

    let guide = document.querySelector('.guidebody');  
    let parentDiv = guide.parentNode;


    let headerUI = document.createElement('header');
        headerUI.className = 'header-float';
        headerUI.innerHTML = navBar;
        parentDiv.insertBefore(headerUI, guide); 
    // Insert inside parent, before .guidebody

      /* for toggling useful classes */

      const fb = document.querySelector('#feedback'); 
      const vr = document.querySelector('#vr');
      const lb = document.querySelector('#labelling');
      const bd = document.querySelector('#borders');
      const mn = document.querySelector('#showmenu');

      fb.addEventListener("change", function(e) {
          bodyEl.classList.toggle('feedback');
      });
      vr.addEventListener("change", function(e) {
          bodyEl.classList.toggle('vr');
      });
      lb.addEventListener("change", function(e) {
          bodyEl.classList.toggle('labelling');
      });
      bd.addEventListener("change", function(e) {
          bodyEl.classList.toggle('borders');
      });
      mn.addEventListener("click", function(e) {
        bodyEl.classList.toggle('showmenu');
      });

 


  }

/*------------------------------------*\
  #3. CONSTRUCT THE REPORT UNITS
\*------------------------------------*/
/* reportBuild() builds and attachs these empty 
  report UI units (.ui-unit) for each type element 
  that is tagged with the class '.report'. Run 
  this once on load.
*/




function reportBuild() {
  const myReports = document.querySelectorAll(".report");

  myReports.forEach(function (myReport, index) {
    myReport.innerHTML +=
      '<span class="ui-unit small"><input type="checkbox" /><ul class="small"><li class="type">Type:</li><li class="size">Font-size:</li><li class="lineheight">Line-height:</li><li class="weight">Font-weight:</li><li class="margin">Margin: 0</li></span>';
  });
}


/*----------------------------------------------*\
  #3. QUERY THE STYLES ON ANY ELEMENTS WITH `.report'
\*----------------------------------------------*/
/* 
  reportType() queries the CSS on any DOM element 
  with the `.report` class and writes it into the
  corresponding report .ui-unit. This get triggered
  onload, or any page resize.
*/

function reportType() {
  const myElements = document.querySelectorAll(".report");// grab the elements with .report
  
  /* Collate some current page variables - base font-size, line-height and typescale*/
  let currentGrid = document.querySelector('html');
  let compStyles = window.getComputedStyle(currentGrid);
  let currentRootFont = parseFloat(compStyles.getPropertyValue('font-size'));
  let currentRootLineheight = parseFloat(compStyles.getPropertyValue('line-height'));
  let currentTypescale = getComputedStyle(document.documentElement).getPropertyValue('--typescale'); 
  let currentTyperatio = getComputedStyle(document.documentElement).getPropertyValue('--baselineratio');
  
  /* Write the typescale to screen */
  let typescale = document.querySelector('.typescale');
    typescale.textContent =  currentTypescale;
  
  /* Write the typescale to screen 
  let typeratio = document.querySelector('.typeratio');
    typeratio.textContent =  currentTyperatio;*/
  
  /* Write the gridsize to screen */
  let gridsize = document.querySelector('.gridsize');
    gridsize.textContent =  `${currentRootLineheight / 2}px`;
  
  /* Write the gridsize to screen */
  let lineheight = document.querySelector('.lineheight');
    lineheight.textContent =  `${currentRootLineheight}px`;
  
  /* Write the rootFont size to screen */
  let rootFont = document.querySelector('.currentRootFont');
    rootFont.textContent = `${currentRootFont}px`;
  //console.log(currentGrid.nodeName);
  
  
  /*  
      Interate through the elements tagged with the `.report` class, 
      inspect their CSS (font-size, font-weight, line-height, and 
      margin) and inject the results into the corresponding
      UI Unit.
  */
  
  myElements.forEach(function (myElement, index) {
    style = window.getComputedStyle ? getComputedStyle(myElement, null)
      : myElement.currentStyle;

    //console.log(myElement.nodeName);
    /* list the elements getting queried and reported on */
    
    /* Identify helper CSS classes (not .report) to note in the UI  */
    var elementClasses = myElement.classList;
    let helperClasses = elementClasses;
    let iterator = myElement.classList.values();
    
    var lister = '';
    for (let value of iterator) {
      if (value != 'report') { // filter out the .report class
        lister = lister + '.' + value;
        //console.log("classList: " + lister);
      }
      // span.textContent += value + ' ++ ';
      
    }
    
    //console.log("classList: " + iterator);


    

    var fn = myElement.nodeName;
    var ff1 = style.fontFamily;
    var fw1 = style.fontWeight;
    var mt1 = style.marginTop;
    var mr1 = style.marginRight;
    var mb1 = style.marginBottom;
    var ml1 = style.marginLeft;
    var lh1 = style.lineHeight;
    var lh2 = lh1.slice(0,-2); // trim px
    //console.log("Lineheight: " + lh2);
    
    var fs1 = Number.parseFloat(style.fontSize).toFixed(1);
    //console.log("fontsize (ParseFLoat): " + fs1);
    var fs = Math.round(fs1 * 100) / 100;
    //console.log("fontsize (.round): " + fs);

    var targetEl = myElement.querySelector(".type");
    var targetSize = myElement.querySelector(".size");
    var targetFamily = myElement.querySelector(".family");
    var targetWeight = myElement.querySelector(".weight");
    var targetMargin = myElement.querySelector(".margin");
    var targetlh = myElement.querySelector(".lineheight");

    

    /*var newFamily = document.createElement('li');
    newFamily.className = "family";
    newFamily.innerHTML = "<b>" + ff1 + "</b>";*/
    
    var newType = document.createElement("li");
    newType.className = "type";
  if (lister != ''){
    newType.innerHTML = "<b>&nbsp;&lt;" + fn + lister + "&gt;</b>";
    } else {
      newType.innerHTML = "<b>&nbsp;&lt;" + fn + "&gt;</b>";
    }
    
    var newSize = document.createElement("li");
    newSize.className = "size";
    newSize.innerHTML = "Font-size: <b>" + fs + "px";

    var newLh = document.createElement("li");
    newLh.className = "lineheight";
    newLh.innerHTML = "Line-height: " + lh2/(currentRootLineheight/2) + " units (or " + lh2 + "px)";

    var newWeight = document.createElement("li");
    newWeight.className = "weight";
    newWeight.innerHTML = "Weight: <b>" + fw1 + "</b>";

    
    
    var newMargin = document.createElement("li"); 
    newMargin.className = "margin";
    newMargin.innerHTML = "Margin: " + mt1 + " " + mr1 + " " + mb1 + " " + ml1;
    

    targetEl.parentNode.replaceChild(newType, targetEl);
    targetSize.parentNode.replaceChild(newSize, targetSize);
    //targetFamily.parentNode.replaceChild(newFamily, targetFamily);
    targetlh.parentNode.replaceChild(newLh, targetlh);
    targetMargin.parentNode.replaceChild(newMargin, targetMargin);
    targetWeight.parentNode.replaceChild(newWeight, targetWeight);
    // add the text node to the newly created div
  });
}

/* jshint jquery:true */
/* Author: Dave Rupert 
*  License: WTFPL
----------------------*/

(function($){
  'use strict';

  $.fn.dataCodeBlock = function(){
  
    // Yoinked from Prototype.js
    var escapeHTML = function( code ) {
        return code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    };
    
    return $('[data-codeblock]').each(function(){
      var target = $(this).data('codeblock');
      var html = $(this).clone().removeAttr('data-codeblock')[0].outerHTML; 
      var codeblock = $('<pre><code>');
      
      codeblock.find('code').append( escapeHTML(html) );
      
      if(target) {
        $(target).append(codeblock);
      } else {
        $(this).after(codeblock);
      }      
    });
  
  };  

  // Self Execute!!
  $.fn.dataCodeBlock();
})(jQuery);


//let controls = document.querySelectorAll('.controls input');




navBarBuild();
reportBuild();
reportType();

window.onresize = function () {
  reportType();
};