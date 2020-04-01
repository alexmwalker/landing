var article = "10 Steps for Optimizing Quill Site Performance";
var author = "Adrian Try"; 
var pubdate = "October 06, 2018";      
var seed = "987654321096"; // Extra randomness if you don't like the default graphic 

// list of active symbols

var title = article + author + pubdate + seed; // combine the data into a single 'DNA-like sequence'
var titleHash = md5(title); // make an MD5 hash of it
var subHash = titleHash.substring(16, 32); // take half
var keyColor = parseInt(subHash, 16) % 255; // use that half to set the base color


// SYMBOL LIBRARY - these symbols are encoded into the SVG ready for use

var symbols = ['#icon-scissors', '#icon-eye', '#icon-font', '#icon-sphere', '#icon-power-cord', '#icon-fire', '#icon-meter', '#icon-mail4', '#icon-html-five2', '#icon-css3', '#icon-embed2', '#icon-rocket', '#icon-gift', '#icon-trophy', '#icon-stats-bars', '#icon-stats-dots', '#icon-bug', '#icon-magic-wand', '#icon-pencil2', '#icon-quill', '#icon-pen', '#icon-eyedropper', '#icon-paint-format', '#icon-film', '#icon-pacman', '#icon-bullhorn', '#icon-binoculars', '#icon-wrench', '#icon-key2', '#icon-search', '#icon-quotes-right', '#icon-users', '#icon-bubbles2', '#icon-mobile', '#icon-laptop', '#icon-compass2', '#icon-display', '#icon-cart', '#icon-ticket', '#icon-react'];

var geometric = ['#icon-write', '#icon-wonder', '#icon-win', '#icon-weld', '#icon-wear', '#icon-watch', '#icon-wait', '#icon-use', '#icon-urbanize', '#icon-upload', '#icon-unlock', '#icon-undo', '#icon-type', '#icon-travel', '#icon-tower', '#icon-time', '#icon-target', '#icon-tag', '#icon-swim', '#icon-subtract', '#icon-strike', '#icon-store', '#icon-stop', '#icon-steam', '#icon-stamp', '#icon-stack', '#icon-spook', '#icon-spin', '#icon-sound', '#icon-solve', '#icon-smoke', '#icon-smell', '#icon-sleep', '#icon-sit', '#icon-shine', '#icon-send', '#icon-search2', '#icon-schedule', '#icon-scare', '#icon-saw', '#icon-save', '#icon-rule', '#icon-rewind', '#icon-resize', '#icon-report', '#icon-reply', '#icon-reflect', '#icon-redo', '#icon-record', '#icon-rain', '#icon-race', '#icon-push', '#icon-protect', '#icon-produce', '#icon-print', '#icon-primp', '#icon-press', '#icon-prank', '#icon-power', '#icon-point', '#icon-plug', '#icon-ping', '#icon-pin', '#icon-photograph', '#icon-perform', '#icon-pay', '#icon-pause', '#icon-open', '#icon-navigate', '#icon-narrow', '#icon-merge', '#icon-marry', '#icon-love', '#icon-lock', '#icon-locate', '#icon-load', '#icon-listen', '#icon-link', '#icon-lift', '#icon-launch', '#icon-label', '#icon-kiss', '#icon-kill', '#icon-keep', '#icon-join', '#icon-impregnate', '#icon-hurt', '#icon-home', '#icon-harvest', '#icon-hang', '#icon-hammer', '#icon-hack', '#icon-grow', '#icon-groom', '#icon-go', '#icon-give', '#icon-game', '#icon-gamble', '#icon-forward', '#icon-forbid', '#icon-flag', '#icon-fit', '#icon-finish', '#icon-find', '#icon-film2', '#icon-fight', '#icon-explore', '#icon-explode', '#icon-equal', '#icon-enter', '#icon-enlarge', '#icon-eat', '#icon-drown', '#icon-drive', '#icon-drink', '#icon-drill', '#icon-dream', '#icon-download', '#icon-divide', '#icon-dig', '#icon-die', '#icon-develop', '#icon-defend', '#icon-decorate', '#icon-dazzle', '#icon-cut', '#icon-cry', '#icon-crop', '#icon-create', '#icon-copy', '#icon-cook', '#icon-connect', '#icon-condemn', '#icon-collect', '#icon-code', '#icon-close', '#icon-climb', '#icon-clamber', '#icon-chop', '#icon-charge', '#icon-celebrate', '#icon-capture', '#icon-camp', '#icon-call', '#icon-calculate', '#icon-caffeinate', '#icon-build', '#icon-broadcast', '#icon-bookmark', '#icon-blow', '#icon-bloom', '#icon-blaze', '#icon-bite', '#icon-believe', '#icon-barbecue', '#icon-bake', '#icon-attract', '#icon-ask', '#icon-ascend', '#icon-arrest', '#icon-anchor', '#icon-alert', '#icon-alarm', '#icon-adjust', '#icon-add', '#icon-accommodate'];

//var rotations = ['rotate-1', 'rotate-2', 'rotate-3'];

//var randColor = Math.floor(Math.random() * 255);

/* BREAK THE HASH INTO 16 HEX PARTS  - eg. 'e012582bd5379344e9ac22f18d94029c' becomes 'e0', '12', '58'. '2b', etc */
/* Then we can convert those 16 parts into 16 decimal numbers - eg. 224, 18, 88, 43, 213, etc */




var createGroupedArray = function (articlehash, chunkSize) {
	var groups = [];
	var dec = [];
	for (i = 0; i < articlehash.length; i += chunkSize) {
		groups.push(articlehash.slice(i, i + chunkSize));
	}
	return groups;
};


var groupedArr = createGroupedArray(titleHash, 2);
var result = JSON.stringify(groupedArr);
//result: "[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14]]"

var decimal = [];
var binary = [];

groupedArrays();


var numbers_regex = /\d{1,2} /g;


var numbers = article.match(numbers_regex).map(function (x) {
		return parseInt(x);
	});


var iconNames = symbols.map(function (icon) {
	return (icon.substring(6, icon.length));
});

function getIcon(allIcons, title) {
	var iconFound = "";

	allIcons.forEach(function (icon) {
		var regex = new RegExp(icon, 'i');

		if (regex.test(title)) {
			iconFound = icon;
			return; 
		}
	});

	if (iconFound !== "") {
		return iconFound;
		//console.log("here");  
	} else {
		rty = Math.floor((allIcons.length/255) * decimal[5]);
		//rty = 25; 
		console.log("Here: #"+ allIcons[rty] + " rty: " + rty + " Allicons: " + allIcons.length);  
		return allIcons[rty]; 

	}
}



// RANDOM SYMBOL SELECTION
// var selectsymbol = symbols[Math.floor(Math.random() * symbols.length)]; // pick one at random
var selectsymbol = "#icon-" + getIcon(iconNames, title);
//var selectsymbol2 = geometric[Math.floor(Math.random() * symbols.length)]; // pick one at random
//var selectsymbol3 = geometric[Math.floor(Math.random() * symbols.length)]; // pick one at random

var ss1 = Math.round((geometric.length / 255) * decimal[2]);  
var ss2 = Math.round((geometric.length / 255) * decimal[3]); 
var selectsymbol2 = geometric[ss1]; // pick one at random 
var selectsymbol3 = geometric[ss2]; // pick one at random  

console.log("Selectsymbol2: " + selectsymbol2 + " – ss1: " + geometric.length);
console.log("Selectsymbol3: " + selectsymbol3 + " – ss2: " + ss2);

// SELECTED NON-RANDOM
var ss = Math.round((symbols.length / 255) * decimal[1]); 
//var selectsymbol = symbols[decimal[i]];
console.log("SS: "+ ss);

/* COLOR PALETTE GENERATION */
// Check to see if basehue has been set (by a tag in the title) : if not use the extracted number (randcolor)

var hue =        new Array(3);
var saturation = new Array(3);
var luminosity = new Array(3);

var basehue = keyColor; 

/* Color palette selection  */

var array_of_palettes = [
	function() { paletteA() },
	function() { paletteB() },
	function() { paletteC() }
];

var array_of_widths =  ['100%','61.8%','38.2%','23.6%','14.6%'];
var array_of_heights = ['161.8%','100%','61.8%','38.2%','23.6%'];

var array_of_goldenratios = ['161.8%','100%','76.4%','61.8%','38.2%','23.6%','14.6%','9%'];
var array_of_FPx = ['161.8%','100%','61.8%','38.2%','23.6%','14.6%','9%'];
var array_of_FPy = ['161.8%','100%','61.8%','38.2%','23.6%','14.6%','9%'];
var array_of_patterns = ['patternA','patternB','patternC','patternD','patternE'];

array1Len = array_of_palettes.length; // How many routines?
array2Len = array_of_patterns.length; // how many pattern classes?
array3Len = array_of_FPx.length;// how many Focal Point X classes?
array4Len = array_of_FPy.length; // how many Focal Point X classes?
array5Len = array_of_widths.length;  // how many Focal Point X classes?

selector0 = (Math.floor((decimal[0] / 255) * array1Len)); // a number between 1-3
selector1 = (Math.floor((decimal[1] / 255) * array1Len)); 
selector2 = (Math.floor((decimal[2] / 255) * array2Len));  
selector3 = (Math.floor((decimal[3] / 255) * array3Len));  
selector4 = (Math.floor((decimal[3] / 255) * array4Len)); 
selector5 = (Math.floor((decimal[3] / 255) * array5Len)); 

array_of_palettes[selector0](); 

var patternSelect = array_of_patterns[selector2];

/*     ---- focalpoint positions ----- */
var FPx = array_of_FPx[selector3];
var FPy = array_of_FPy[selector4];
var GeoAx = array_of_FPx[selector1];
var GeoAy = array_of_FPy[selector1-1];


//reportDecimal();
//reportSelector();
/* 
    console.log("Palette0 is:" + hue[0]);
    console.log("Palette1 is:" + hue[1]);
    console.log("Palette2 is:" + hue[2]);  
*/
//const secondhue = Math.round(basehue * 1.618);
//const thirdhue = Math.round(basehue / 1.618);

var basecolor   = "hsl(" + hue[0] + ", "+ saturation[0] +", "+ luminosity[0] +")"; 
var secondcolor = "hsl(" + hue[1] + ", "+ saturation[1] +", "+ luminosity[1] +")";
var thirdcolor  = "hsl(" + hue[2] + ", "+ saturation[2] +", "+ luminosity[2] +")";
var framecolor  = "hsl(" + hue[3] + ", "+ saturation[3] +", "+ luminosity[3] +")";

renderSwatches();

//Get svg element
var svg = document.querySelector("#art1");

var xmlns = "http://www.w3.org/2000/svg";
var xlinkr = "http://www.w3.org/1999/xlink";

// CREATE RAW DESIGN ELEMENTS
var newFocalpoint = document.createElementNS(xmlns, 'use'); // main icon
var newElementGeoA = document.createElementNS(xmlns, 'use'); // large BG icon
var newElementGeoB = document.createElementNS(xmlns, 'use'); // large BG icon
var newElementGeoA2 = document.createElementNS(xmlns, 'use'); // large BG icon
var newFPSVG = document.createElementNS(xmlns, 'svg'); // focalpoint grouping
var newFrame = document.createElementNS(xmlns, 'circle'); // background rect
var newBG = document.createElementNS(xmlns, 'rect'); // background rect
var paper = document.createElementNS(xmlns, 'rect'); // overlay paper texture
var pos = document.createElementNS(xmlns, 'rect'); // positional experiment rect
var newGraphicnumber = document.createElementNS(xmlns, 'text'); // potential number (if present)


// ADD SVG SYMBOL COMPONENTS
newFocalpoint.setAttributeNS(xlinkr, 'href', selectsymbol);
newElementGeoA.setAttributeNS(xlinkr, 'href', selectsymbol2);
newElementGeoB.setAttributeNS(xlinkr, 'href', selectsymbol3);
newElementGeoA2.setAttributeNS(xlinkr, 'href', selectsymbol2);

var classSelect = 'crazyshit';

var centerwidth =  array_of_widths[selector5];
var centerheight = array_of_heights[selector5];
var xcenter = (parseFloat(centerwidth)/-2);
var ycenter = (parseFloat(centerheight)/-2);

// STYLE DESIGN ELEMENTS

setAttributes(pos, { // paper textured layer super-imposed on top
	width:  centerwidth,
	height: centerheight,
	x: xcenter + "%",
	y: ycenter + "%",
	class: "pos"
});

setAttributes(newBG, {
	width: "1000",
	height: '618',
	x: '0',
	y: '0',
	fill: basecolor
});

setAttributes(paper, { // paper textured layer super-imposed on top
	height: '618px',
	x: '0',
	y: '0',
	class: "paper"
});



setAttributes(newFPSVG, {
	id: "focalpoint",
	//x: FPx,
	//y: FPy,
	x: '9%',
	y: '14%',
	width: centerwidth,
	height: centerheight,
	//height: "100%",
	class: "stuff"
	//viewbox: "0 0 500 500"
});


setAttributes(newFrame, { // icon holder circle
	cx: '50%',
	cy: '50%',
	r: '50%',
	x: '0%',
	y: '0%',
	fill: framecolor,
	opacity: '.6',
	class: 'frame'
});

setAttributes(newFocalpoint, { // main icon
	fill: 'rgba(255,255,255,1)',
	width: '70%',
	x: '15%', //center icon in frame
	y: '0',
	class: 'focalpoint'
});


/*setAttributes(newGraphicnumber, {
    x: '150',
    y: '500',
    id: 'newGraphicnumber',
    class: classSelect
})
*/

setAttributes(newElementGeoA, {
	opacity: 0.5,
	height: '1100px',
	x: '-30%',
	y: '-30%',
	fill: thirdcolor
});

setAttributes(newElementGeoA2, {
	opacity: 0.5,
	height: '1100px',
	x: '-30%',
	y: '-30%',
	fill: secondcolor,
	class: patternSelect
});
setAttributes(newElementGeoB, {
	opacity: 0.8,
	height: '1100px',
	x: '20%',
	y: '-50%',
	fill: secondcolor
});


// do something

/* BUILD THE SVG */
svg.appendChild(newBG); // BG rect
svg.appendChild(newElementGeoB); //  Large Geo: solid color
svg.appendChild(newElementGeoA); //  Large Geo: Ben Day dots
svg.appendChild(newElementGeoA2); //  Large Geo: Ben Day dots
svg.appendChild(newFPSVG); // G group for attaching the focalpoint;
//svg.appendChild(newGraphicnumber);
svg.appendChild(pos);

function attachNumber(){
	var addnumber = document.querySelector("#newGraphicnumber");
	var numbertxt = document.createTextNode(numbers[0]);

	if(numbers[0] !== null && numbers[0] !== '') {
		addnumber.appendChild(numbertxt);
	}
}

//attachNumber();

svg.appendChild(paper); // Paper texture

var focalpoint = document.querySelector("#focalpoint");
focalpoint.appendChild(newFrame); // Main icon frame
focalpoint.appendChild(newFocalpoint); // Main icon


// FEEDBACK PANEL
var hue = document.querySelector("#hue");
var helloTxt = document.createTextNode(basecolor);
hue.appendChild(helloTxt);

var hue2 = document.querySelector("#hue2");
var helloTxt2 = document.createTextNode(secondcolor);
hue2.appendChild(helloTxt2);

var hue3 = document.querySelector("#hue3");
var helloTxt3 = document.createTextNode(thirdcolor);
hue3.appendChild(helloTxt3);

var orig = document.querySelector("#orig");
var titleTxt = document.createTextNode(article);
orig.appendChild(titleTxt);

var matchednumbers = document.querySelector("#matchednumbers");
var numberTxt = document.createTextNode(numbers[0]);
matchednumbers.appendChild(numberTxt);

var hash = document.querySelector("#hash");
var hashTxt = document.createTextNode(titleHash);
hash.appendChild(hashTxt);

// dropping a table



document.write("<ul><li>Total # of graphic symbols: " + symbols.length + "</li>");
document.write("<li>Total # of geometric units: " + geometric.length + "</li></ul>");

tableReport();








/* ###########  Functions Library ######## .*/

// CONVERT decimal 2 binary
function dec2bin(dec) { 
	return (dec >>> 0).toString(2);
}

// Pete's constructor function
k = 0;
numbertxt;
hashArrLen;

function setAttributes(node, attrs) { 
	for (k in attrs) {
		node.setAttribute(k, attrs[k])
	}
}

function renderSwatches(){
// COLOR SWATCHES
console.log("Basecolor: " + basecolor );
var swatch = document.querySelector("#swatch1");
swatch.style.fill = basecolor;
var swatch2 = document.querySelector("#swatch2");
swatch2.style.fill = secondcolor;
var swatch3 = document.querySelector("#swatch3");
swatch3.style.fill = thirdcolor;
var swatch4 = document.querySelector("#swatch4");
swatch4.style.fill = framecolor;
// DRAW
}





function groupedArrays(){
	for (var i = 0; i < 16; i++) {
			decimal[i] = parseInt(groupedArr[i], 16);
			binary[i] =  dec2bin(decimal[i]);
	} 
}

//  console report
function reportDecimal(){
	console.log("Palette array items: " + array1Len);  
	console.log("Decimal0 -->: "+ decimal[0]);   
	console.log("Decimal1 -->: "+ decimal[1]);  
	console.log("Decimal2 -->: "+ decimal[2]);   
}
function reportSelector(){

console.log("-->: "+ Math.floor(100/255*decimal[1]));
console.log("Selector0 -->: "+ selector0);  
console.log("Selector1 -->: "+ selector1);  
console.log("Selector2 -->: "+ selector2);   
}
// Palettes ABC

function paletteA() { // golden ratio
	hue[0] = keyColor; 
	hue[1] = Math.round(keyColor * 1.618);
	hue[2] = Math.round(keyColor / 1.618);
	hue[3] = Math.round(keyColor / (1.618 * 2));

	saturation[0] = '52%';
	saturation[1] = '72%';
	saturation[2] = '52%'; 
	saturation[3] = '52%';

	luminosity[0] = '49%';
	luminosity[1] = '40%';
	luminosity[2] = '75%';
	luminosity[3] = '30%';
}

function paletteB() { // Black and White
	hue[0] = keyColor; 
	hue[1] = Math.round(keyColor);
	hue[2] = Math.round(keyColor);
	hue[3] = Math.round(keyColor);

	saturation[0] = '0%';
	saturation[1] = '10%';
	saturation[2] = '0%';
	saturation[3] = '70%';

	luminosity[0] = '88%';
	luminosity[1] = '15%';
	luminosity[2] = '55%';
	luminosity[3] = '50%';
}
function paletteC() { // Spot Color
	hue[0] = keyColor; 
	hue[1] = Math.round(keyColor * 1.618);
	hue[2] = Math.round(keyColor * 1.618);
	hue[3] = Math.round(keyColor * 1.618 );

	saturation[0] = '10%';
	saturation[1] = '80%';
	saturation[2] = '10%';
	saturation[3] = '20%';

	luminosity[0] = '88%';
	luminosity[1] = '35%';
	luminosity[2] = '65%';
	luminosity[3] = '35%'; 
}

function tableReport(){
document.write("<table>");
	
document.write("<tr><td>1</td><td>Decimal: " + decimal[0] + "</td><td>Binary: " + binary[0] + "</td></tr>");
document.write("<tr><td>2</td><td>Decimal: " + decimal[1] + "</td><td>Binary: " + binary[1] + "</td></tr>");
document.write("<tr><td>3</td><td>Decimal: " + decimal[2] + "</td><td>Binary: " + binary[2] + "</td></tr>");
document.write("<tr><td>4</td><td># Color Palettes: " + array1Len + "</td><td>Color Selected: routine " + selector0 + "</td></tr>");
	
document.write("<tr><td>5</td><td># Patterns: " + array2Len + "</td><td>Pattern Selected: ." + patternSelect + "</td></tr>");
	
	document.write("<tr><td>6</td><td># GeoAx " + GeoAx + "</td><td>GeoAy: " + GeoAy + "</td></tr>");
	
	document.write("<tr><td>7</td><td># centerwidth " + centerwidth + "</td><td>centerheight: " + centerheight + "</td></tr>");

	document.write("<tr><td>8</td><td># xcenter " + xcenter + "</td><td>ycenter: " + ycenter + "</td></tr>");	
	
	document.write("</table>");
	
}

/*
var centerwidth =  array_of_widths[selector5];
var centerheight = array_of_heights[selector5];
var xcenter = parseFloat(centerwidth);
var ycenter = parseFloat(centerheight);*/