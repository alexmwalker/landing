


console.log('Hi there!');

/*  #########   Set up the Ads to be injected ############  */ 

var imgHref = new Array();
var newAd = new Array();
var targetFallback = new Array();

/* ########   Ad Loaders  #######  */ 

 // Ok, I'm holding off on loading the ads into the array to simulate a slow network
 // An event-listener will keep checking to see if they are available BEFORE trying to load them.
 // This will let us control how they load into the UI

function loadAds(){   

  /* MEDIBANK = 300x250 */ 

imgHref[0] = document.createElement('a');
imgHref[0].href = 'https://frontendmasters.com/?utm_source=css-tricks&utm_medium=website&utm_campaign=sitepoint';

newAd[0] = document.createElement('img'); // Ad Image constructor
newAd[0].src = 'images/ad-sizes/medibank-300x250.png';
newAd[0].alt = 'This is switch out';
newAd[0].width = 300;
newAd[0].height = 250;
imgHref[0].appendChild(newAd[0]);


/* Wholeworld = 300x250 */ 

imgHref[1] = document.createElement('a');
imgHref[1].href = 'http://adobe.com';

newAd[1] = document.createElement('img'); // Ad Image constructor
newAd[1].src = 'https://wholeworld.info/en/wp/wp-content/uploads/2017/03/No.13_728x90_en-1.gif';
newAd[1].alt = 'Whole World';
newAd[1].width = 728;
newAd[1].height = 90;
imgHref[1].appendChild(newAd[1]);

/* Adobe Banner = 300x600 */ 

imgHref[2] = document.createElement('a');
imgHref[2].href = 'http://adobe.com';

newAd[2] = document.createElement('img'); // Ad Image constructor
newAd[2].src = 'images/ad-sizes/adobe-banner-300x600.jpg';
newAd[2].alt = 'Adobe TV';
newAd[2].width = 300;
newAd[2].height = 600;
imgHref[2].appendChild(newAd[2]);

}

/* #####  Create a time delay to mimic normal Network congestion delaying external ad delivery #####  */ 

var delayInMilliseconds = 3000; // delay time in milliseconds

function properInjectorWithDelay(){
  setTimeout(function() {
    properInjector();
  }, delayInMilliseconds);
}




/* Mimicking the Proper.io ad injector */ 

function properInjector(){ // #####  Looks for a marker '.flag' in the page and inject the ad into that spot.
  

  loadAds();

  // 300 x 250 ad replacement
  targetFallback[0] = document.querySelector('#component-300x250 .flag');
  targetFallback[0].appendChild(imgHref[0]);

  // 728 x 90 ad replacement
  targetFallback[1] = document.querySelector('#component-728x90 .flag');
  targetFallback[1].appendChild(imgHref[1]);

  // 300 x 600 ad replacement
  targetFallback[2] = document.querySelector('#component-300x600 .flag');
  targetFallback[2].appendChild(imgHref[2]);

}


/*  ##### Faking the logged in state by grabbing a parameter from the URL  e.g. .../blog.html?login=1  or /blog.html?login=0   #####     */

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var login = urlParams.get('login');
console.log(login);

var loggedin = document.querySelector("body");

function loggedinTest(){ // add 'membership' class to body if URL has login = 1
  if (login == 1){
    loggedin.classList.add('membership'); 
    console.log('login:' + login);
  } else if (login == 0){ // if not, try to add the Proper.io ads
    properInjectorWithDelay();  // bring in External Proper.io ads (with a faked network delay)
    //console.log('login:' + login);
  }
}

loggedinTest();

var rollersonpage = document.querySelectorAll("div.rollerdoor"); // get all the rollerdoors on the page
var wrappersinrollers = document.querySelectorAll("div.rollerdoor .wrapper");  // and a separate list of the wrappers inside them

var countRollers = rollersonpage.length; // count them
var countWrappers = wrappersinrollers.length; // count these
var viewportHeight = parseInt(window.innerHeight); // measure the viewport
var viewportTrigger = viewportHeight * 0.75; // trigger point within the viewport height

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







