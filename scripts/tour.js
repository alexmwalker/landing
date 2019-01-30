/* globals hopscotch: false */

/* ============ */
/* EXAMPLE TOUR */
/* ============ */
var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: 'slide1',
      title: 'This is your personal Library.',
      content: 'You\'ll always be able to find your stuff you own here.',
      placement: 'top',
      arrowOffset: 60
    },
    {
      //target: document.querySelectorAll('#general-use-desc code')[0],
      target: 'slide2',
      title: 'Grab this one while it\'s free',
      content: 'We give away new books and course every week, so keep an eye on this page.',
      placement: 'right',
      yOffset: -20
    },
    {
      target: 'slide3',
      placement: 'top',
      title: 'Keep an eye out for our next Member Freebie.',
      content: 'We can alert you when the minute it becomes available.'
    },
    {
      target: 'slide4',
      placement: 'top',
      title: 'Need something more comprehensive?',
      content: 'Access the whole SitePoint Premium catalog for just $9!',
      yOffset: -25
    },
    {
      target: 'slide5',
      placement: 'top',
      title: 'We\'ve picked some topics for you here',
      content: 'But feel free to pick whatever you\'re interested in.',
      arrowOffset: 100,
      yOffset: -80
    }
    /*,
    {
      target: 'api-methods',
      placement: 'top',
      title: 'Hopscotch API methods',
      content: 'Control your tour programmatically using these methods.',
    },
    {
      target: 'tour-example',
      placement: 'top',
      title: 'This tour\'s code',
      content: 'This is the JSON for the current tour! Pretty simple, right?',
    },
    {
      target: 'hopscotch-title',
      placement: 'bottom',
      title: 'You\'re all set!',
      content: 'Now go and build some great tours!',
    }*/
  ],
  showPrevButton: true,
  scrollTopMargin: 100
},

/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'startTourBtn',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    setTimeout(function() {
      mgr.createCallout({
        id: calloutId,
        target: startBtnId,
        placement: 'right',
        title: 'Welcome to your new library',
        content: 'You\'ll always find the books and course you own here.',
        yOffset: -25,
        arrowOffset: 20,
        width: 240
      });
    }, 100);
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

init();

