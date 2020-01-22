


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


/*  #########   The Ads to be injected ############  */ 

var blog_ads = {
  "pageTarget" : "blog",
  "inventory" : [
  {"ad": "1", "imageSrc": "images/ad-sizes/medibank-300x250.png", "href": "https://frontendmasters.com/?utm_source=css-tricks&utm_medium=website&utm_campaign=sitepoint", "width": "300", "height": "250", "altSrc": "This is switch out"},
  {"ad": "2", "imageSrc": "https://wholeworld.info/en/wp/wp-content/uploads/2017/03/No.13_728x90_en-1.gif", "href": "http://adobe.com", "width": "728", "height": "90", "altSrc": "Whole world"},
  {"ad": "3", "imageSrc": "https://www.crimsondesigns.com/blog-images/2018/html-css-php-seo-jump-start-guide-tnail.jpg", "href": "https://www.crimsondesigns.com/blog/html-css-php-and-seo-jump-start-guide/", "width": "300", "height": "250", "altSrc": "tutorial"},
  {"ad": "4", "imageSrc": "images/ad-sizes/adobe-banner-300x600.jpg", "href": "http://adobe.com", "width": "300", "height": "600", "altSrc": "Adobe"}
  ]
}

/* MEDIBANK = 300x250 */ 

var imgHref = new Array();
var newAd = new Array();
var targetFallback = new Array();

imgHref[0] = document.createElement('a');
imgHref[0] .href = 'https://frontendmasters.com/?utm_source=css-tricks&utm_medium=website&utm_campaign=sitepoint';

newAd[0] = document.createElement('img'); // Ad Image constructor
newAd[0].src = 'images/ad-sizes/medibank-300x250.png';
newAd[0].alt = 'This is switch out';
newAd[0].width = 300;
newAd[0].height = 250;
imgHref[0].appendChild(newAd[0]);


/* Wholeworld = 300x250 */ 

imgHref[1] = document.createElement('a');
imgHref[1] .href = 'http://adobe.com';

newAd[1] = document.createElement('img'); // Ad Image constructor
newAd[1].src = 'https://wholeworld.info/en/wp/wp-content/uploads/2017/03/No.13_728x90_en-1.gif';
newAd[1].alt = 'whole world';
newAd[1].width = 728;
newAd[1].height = 90;
imgHref[1].appendChild(newAd[1]);




function properInjector(){ // #####  This function isn't finished yet !!! 

  // 300 x 250 ad replacement
  targetFallback[0] = document.querySelector('#component-300x250 .flag');
  targetFallback[0].appendChild(imgHref[0]);

  // 728 x 90 ad replacement
  targetFallback[1] = document.querySelector('#component-728x90 .flag');
  targetFallback[1].appendChild(imgHref[1]);

}

properInjector();