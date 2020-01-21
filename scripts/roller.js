


console.log('Hi there!');

var rollersonpage = document.querySelectorAll("div.rollerdoor"); // get all the rollerdoors on the page
var wrappersinrollers = document.querySelectorAll("div.rollerdoor .wrapper");  // and a separate list of the wrappers inside them

var countRollers = rollersonpage.length; // count them
var countWrappers = wrappersinrollers.length; // count these
var viewportHeight = parseInt(window.innerHeight); // measure the viewport
var viewportTrigger = viewportHeight*0.75; // trigger point within the viewport height

var wrapperHeights = []; // roller heights array
var rollerTop = []; // an array for the offsetTop values of the Rollers
var triggerLock = []; // an array for the position of the bottom edge of each Roller unit - so we know when to lock the roller height 
let scrollpos = window.scrollY;

/* FEEDBACK */
/*
console.log('Rollers on page: '+countRollers);
console.log('Wrappers on page: '+countWrappers);
//console.log('Roller images on page: '+countRollerimages);
console.log('Viewport Height on page: '+viewportHeight+'px');
console.log('Scrollpos: ' + scrollpos);
*/

// WRITE SOME useful values into SIMPLER ARRAYS - we can trigger this to recalculate on window resize
function measureAndSetup(){
  for (var i = 0; i < countRollers; i++) {
    wrapperHeights[i] = parseInt(window.getComputedStyle(wrappersinrollers[i]).getPropertyValue('height'));
    rollerTop[i] = rollersonpage[i].offsetTop;     // number of Pixels from top of page to each Roller unit
    triggerLock[i] = rollerTop[i] + wrapperHeights[i] + 20; // the point where the growing Roller should lock its height
    /*
    console.log('Running measureAndSetup first');
    console.log('Wrapper height['+i+'] = ' + wrapperHeights[i]);
    console.log('rollerTop['+i+']: ' + rollerTop[i]);
    console.log('triggerLock['+i+']: ' + triggerLock[i]);
    */
  } 
} 

measureAndSetup();

//const header = document.querySelector("nav")
//const header_height = header.offsetHeight

//const add_class_on_scroll = () => header.classList.add("fade-in")
//const remove_class_on_scroll = () => header.classList.remove("fade-in")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  //if (scrollpos >= header_height) { add_class_on_scroll() }
  // else { remove_class_on_scroll() }

  for (var i = 0; i < countRollers; i++) {
    screenTriggerPos = scrollpos + viewportTrigger;
    /*console.log('screenTriggerPos is :'+ screenTriggerPos );*/

    if (rollerTop[i] >= screenTriggerPos){
      /*console.log('Roller['+ i + "] is hidden  ");*/
      rollersonpage[i].style.height = 0; // make sure they're hidden by default is JS works
      //rollersonpage[i].classList.remove("fade-in");

    } else if ((rollerTop[i] < screenTriggerPos) && (triggerLock[i]  < screenTriggerPos)){
      rollersonpage[i].style.height = wrapperHeights[i];
    }
      else {
      /*  
      console.log('Roller Top [' + i + '] has been triggered! ');
      console.log('Roller[' + i + '] height: '+ rollersonpage[i].style.height);
      console.log('screenTriggerPos offset[' + i + ']: ' + (screenTriggerPos - rollerTop[i]));
      //rollersonpage[i].classList.add("fade-in");*/
      rollersonpage[i].style.height = (screenTriggerPos - rollerTop[i]) + 'px';
    }
  } 

});


window.addEventListener('resize', measureAndSetup);

//window.onresize = reportWindowSize;
//window.onresize = console.log('Running measureAndSetup on resize');




function properInjector(){ // #####  This function isn't finished yet !!! 

  var imgHref = document.createElement('a');
  imgHref.href = 'https://frontendmasters.com/?utm_source=css-tricks&utm_medium=website&utm_campaign=sitepoint';

  var newAd = document.createElement('img'); // Ad Image constructor
  newAd.src = 'images/ad-sizes/medibank-300x250.png';
  newAd.alt = 'This is switch out';
  newAd.width = 300;
  newAd.height = 250;
  //console.log("newAd -->" + newAd);

  imgHref.appendChild(newAd);


  var targetFallback = document.querySelector('#component-300x250 .bullseye');

  //targetFallback.parentNode.replaceChild(newAd, targetFallback);
  targetFallback.appendChild(imgHref);
  //document.querySelector('#ad-300x250').appendChild(newAd);
  console.log("Here -->" + targetFallback);


}

properInjector();