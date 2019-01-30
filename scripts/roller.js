


console.log('Hi there!');

var rollersonpage = document.querySelectorAll("div.rollerdoor"); // get all the rollerdoors on the page
var imagesinrollers = document.querySelectorAll("div.rollerdoor img");  // and a seperate list of the images inside them
var countRollers = rollersonpage.length; // count them
var countRollerimages = rollersonpage.length; // count these
var viewportHeight = window.innerHeight; // measure the viewport
var halfheight = viewportHeight/2; // trigger point is halfway down viewport height
var imageheight = []; // set up an array for ad image heights
var rollerTop = []; // an array for the offsetTop values of the Rollers
var triggerLock = []; // an array for the position of the bottom of each image - so we know when to lock the roller height 

/* FEEDBACK */
/*
console.log('Rollers on page: '+countRollers);
console.log('Roller images on page: '+countRollerimages);
console.log('Viewport Height on page: '+viewportHeight+'px');
*/


// WRITE SOME SIMPLER ARRAYS TO WORK WITH 
for (var i = 0, len = countRollers; i < len; i++) {
  imageheight[i] = imagesinrollers[i].height;    // Ad image heights
  rollerTop[i] = rollersonpage[i].offsetTop;     // Pixels from top of page to each Roller
  triggerLock[i] = rollerTop[i] + imageheight[i] + 20;
} 


let scrollpos = window.scrollY
//const header = document.querySelector("nav")
//const header_height = header.offsetHeight


//const add_class_on_scroll = () => header.classList.add("fade-in")
//const remove_class_on_scroll = () => header.classList.remove("fade-in")


window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  //if (scrollpos >= header_height) { add_class_on_scroll() }
  // else { remove_class_on_scroll() }

  for (var i = 0, len = countRollers; i < len; i++) {
    screenTriggerPos = scrollpos + halfheight;


    if (rollerTop[i] >= screenTriggerPos){
      //console.log('Roller Top ['+ i + "] is greater than scrollpos ");
      rollersonpage[i].style.height = 0;
      rollersonpage[i].classList.remove("fade-in");

    } else if ((rollerTop[i] < screenTriggerPos) && (triggerLock[i]  < screenTriggerPos)){
      rollersonpage[i].style.height = imageheight[i];
    }
      else {
      //console.log('Roller Top [' + i + '] has been triggered ');
      console.log('Roller [' + i + '] height: '+ rollersonpage[i].height);
      console.log('screenTriggerPos offset[' + i + ']: ' + (screenTriggerPos - rollerTop[i]));
      rollersonpage[i].classList.add("fade-in");
      rollersonpage[i].style.height = (screenTriggerPos - rollerTop[i]) + 'px';
    }
  } 

  //console.log('Scrollpos: ' + scrollpos);
})

