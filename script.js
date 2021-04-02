/**************************************************************
* Today's Date
***************************************************************/
var today = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.querySelectorAll('#date').forEach(dateElement => {
  dateElement.innerHTML += ' ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
});



/**************************************************************
* About section: Alt-text Example 
***************************************************************/
var altTextExamples = document.querySelectorAll('figure.alt-text-example').forEach(altTextExample => {
  altTextExample.querySelector('img').addEventListener('click', () => {
    altTextExample.querySelector('figcaption').style.display = 'flex';
  });
});


/**************************************************************
* Ecosystem Section
***************************************************************/
document.querySelectorAll('section#ecosystem .section-content ul.ecosystem-list').forEach( ecosystemList => {
  // Shuffle Ecosystem List
  for (var i = ecosystemList.children.length; i >= 0; i--) {
    ecosystemList.appendChild(ecosystemList.children[Math.random() * i | 0]);
  }

  // Generate Ecosystem Map
  var ecosystemList_lis = ecosystemList.querySelectorAll('li');
  var ecosystemMap = document.querySelector('section#ecosystem .section-content figure.ecosystem-map');
  var ecosystemMap_ul = document.createElement('ul');
  ecosystemMap.appendChild(ecosystemMap_ul);
  ecosystemList_lis.forEach(ecosystemListItem => {
    var name = ecosystemListItem.querySelector('a[aria-label="name"]').innerText;
    var id = ecosystemListItem.id;

    var ecosystemMap_a = document.createElement('a');
    ecosystemMap_a.innerHTML = name;
    ecosystemMap_a.href = '#' + id;
    ecosystemMap_a.className = 'scroll';
    ecosystemMap_a.style['transform'] = 'translateY(' + (-10 + Math.random()*20) + 'px)';

    ecosystemMap.innerHTML += '&nbsp;'.repeat(2 + Math.floor(Math.random()*20));
    ecosystemMap.innerHTML += ecosystemMap_a.outerHTML;
    ecosystemMap.innerHTML += '&nbsp;'.repeat(2 + Math.floor(Math.random()*20));
  });
});



/**************************************************************
* Sprinkle florettes
***************************************************************/
// Get colors from nav
var colors = [];
var navLinks = document.querySelectorAll('nav ul li a');
for (var i = 0; i < navLinks.length; i++) {
  var navLink = navLinks[i];
  var color = window.getComputedStyle(navLink).getPropertyValue("background-color");
  colors.push(color);
}


/**************************************************************
* Footer flowers sprinkle
***************************************************************/
// Shuffle a list of elements
document.querySelectorAll('footer #flower-sweep').forEach( element => {
  for (var i = element.children.length; i >= 0; i--) {
    var child = element.children[Math.random() * i | 0];
    child.style['margin-top'] = Math.random() * 15 + 'px';
    child.style['margin-left'] = Math.random() * 10 + 'px';
    child.style['margin-right'] = Math.random() * 10 + 'px';
    child.style['margin-bottom'] = Math.random() * 15 + 'px';
    element.appendChild(child);
  }
});



    
/**************************************************************
* Smooth Scroll Polyfill
***************************************************************/
!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){var l,e,r,i;do{l=(o=o.parentNode)===t.body}while(!1===l&&!1===(r=p(e=o,"Y")&&a(e,"Y"),i=p(e,"X")&&a(e,"X"),r||i));return l=null,o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();


/**************************************************************
* Make anchor links smooth-scroll (instead of jump) to section
***************************************************************/

// normal scroll links
function setupScrollLinks() {
  var scrollLinks = document.querySelectorAll('a.scroll');
  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', function(event) {
      // MIGHT NOT BE ACCESSIBLE vvv
      event.preventDefault(); // prevent hyperlink default behavior
      var section = document.getElementById(event.currentTarget.getAttribute('href').substring(1));
      section.scrollIntoView({behavior: 'smooth'});
    })
  });
}
setupScrollLinks();


/**************************************************************
* Smooth Scroll (with speed) Plugin
***************************************************************/

/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SmoothScroll=t()}(this,(function(){"use strict";window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),
/**
	 * requestAnimationFrame() polyfill
	 * By Erik Möller. Fixes from Paul Irish and Tino Zijdel.
	 * @link http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	 * @link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	 * @license MIT
	 */
function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},t=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===r?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(e){return e?(t=e,parseInt(window.getComputedStyle(t).height,10)+e.offsetTop):0;var t},a=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),window.scrollTo(0,t))},r=function(e,t,n,o){if(t.emitEvents&&"function"==typeof window.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(i)}};return function(c,u){var s,l,d,m,f={};f.cancelScroll=function(e){cancelAnimationFrame(m),m=null,e||r("scrollCancel",s)},f.animateScroll=function(n,c,u){f.cancelScroll();var l=t(s||e,u||{}),w="[object Number]"===Object.prototype.toString.call(n),h=w||!n.tagName?null:n;if(w||h){var p=window.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var g,y,v,S=i(d),E=w?n:function(e,t,n,i){var a=0;if(e.offsetParent)do{a+=e.offsetTop,e=e.offsetParent}while(e);return a=Math.max(a-t-n,0),i&&(a=Math.min(a,o()-window.innerHeight)),a}(h,S,parseInt("function"==typeof l.offset?l.offset(n,c):l.offset,10),l.clip),b=E-p,A=o(),O=0,C=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:parseInt(n,10)}(b,l),M=function(e){g||(g=e),O+=e-g,v=p+b*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(l,y=(y=0===C?0:O/C)>1?1:y),window.scrollTo(0,Math.floor(v)),function(e,t){var o=window.pageYOffset;if(e==t||o==t||(p<t&&window.innerHeight+o)>=A)return f.cancelScroll(!0),a(n,t,w),r("scrollStop",l,n,c),g=null,m=null,!0}(v,E)||(m=window.requestAnimationFrame(M),g=e)};0===window.pageYOffset&&window.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(n,w,l),"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches?a(n,Math.floor(E),!1):(r("scrollStart",l,n,c),f.cancelScroll(!0),window.requestAnimationFrame(M))}};var w=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(c))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(s.ignore)&&l.hostname===window.location.hostname&&l.pathname===window.location.pathname&&/#/.test(l.href)){var t,o;try{t=n(decodeURIComponent(l.hash))}catch(e){t=n(l.hash)}if("#"===t){if(!s.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(t);(o=o||"#top"!==t?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=window.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||window.pageYOffset},document.title,t||window.location.href)}}(s),f.animateScroll(o,l))}},h=function(){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||f.animateScroll(e,null,{updateURL:!1})}};f.destroy=function(){s&&(document.removeEventListener("click",w,!1),window.removeEventListener("popstate",h,!1),f.cancelScroll(),s=null,l=null,d=null,m=null)};return function(){if(!("querySelector"in document&&"addEventListener"in window&&"requestAnimationFrame"in window&&"closest"in window.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),s=t(e,u||{}),d=s.header?document.querySelector(s.header):null,document.addEventListener("click",w,!1),s.updateURL&&s.popstate&&window.addEventListener("popstate",h,!1)}(),f}}));

/**
 * select hyperlinks with class scroll-slow and apply smooth scrolling
 * see all options at https://github.com/cferdinandi/smooth-scroll#options-and-settings
 */
var slowScroll = new SmoothScroll('a.scroll-slow', {
  // easing: 'linear',
  easing: 'easeOutQuad',
  speed: 1400
});


/**************************************************************
* Sprinkle flowers around sections
***************************************************************/
var sections = document.querySelectorAll('section');

/**
 * Add Emanating flowers to chosen section
 * @param {DOMElement} section: <section> DOMElement to apply flowers to
 * @param {Array} verticalSides: Array of strings, any subset of ['left', 'right']
 * @param {Array} horizontalSides: Array of strings, any subset of ['top', 'bottom']
 * @param {Integer} flowerConstant: Total number of flowers = 8 * 2^flowerConstant
 */
function addEmanatingFlowers(section, verticalSides, horizontalSides, flowerConstant) {
  // create surrounding garden
  var flowerPower = Math.pow(2, flowerConstant);
  var flowerDividend = flowerPower + 2;
  // var surroundingGarden = document.createElement('div');
  // surroundingGarden.className = 'surrounding-garden';
  // section.appendChild(surroundingGarden);
  var surroundingGarden = section.querySelector('div.surrounding-garden');
  if (!surroundingGarden) return;

  // iterate through each corner of the section, e.g. starting with (top, left)
  horizontalSides.forEach(horizontalSide => {
    verticalSides.forEach(verticalSide => {

      // horizontal lining of flowers
      var horizontalPart = document.createElement('div');
      surroundingGarden.appendChild(horizontalPart);
      horizontalPart.className = ['part', 'horizontal', horizontalSide, verticalSide].join(' ');
      for (var f = 1; f <= flowerPower; f = f*2) {
        var flower = document.createElement('span');
        flower.className = 'flower small';
        horizontalPart.appendChild(flower);
        flower.style[verticalSide] = 1 * (f / flowerDividend) * 100 + '%';
        flower.style[horizontalSide] = -1 * Math.random() * 100 + '%';
      }

      // vertical lining of flowers
      var verticalPart = document.createElement('div');
      surroundingGarden.appendChild(verticalPart);
      verticalPart.className = ['part', 'vertical', horizontalSide, verticalSide].join(' ');
      for (var f = 1; f <= flowerPower; f = f*2) {
        var flower = document.createElement('span');
        flower.className = 'flower small';
        verticalPart.appendChild(flower);
        flower.style[horizontalSide] = 1 * (f / flowerDividend) * 100 + '%';
        flower.style[verticalSide] = -1 * Math.random() * 100 + '%';
      }

      // a single flower outside of the corner
      var cornerPart = document.createElement('div');
      surroundingGarden.appendChild(cornerPart);
      cornerPart.className = ['part', 'corner', horizontalSide, verticalSide].join(' ');
      var flower = document.createElement('span');
      flower.className = 'flower small';
      cornerPart.appendChild(flower);
      flower.style[horizontalSide] = -1 * Math.random() * 100 + '%';
      flower.style[verticalSide] = -1 * Math.random() * 100 + '%';

    });
  });
}

/**
 * 
 * @param {DOMElement} section: <section> to add dropcap to h2
 * @param {Integer} numberOfFlowers: number of flowers
 */
function addDropCapFlowers(section, numberOfFlowers) {
  var dropCap = section.querySelector('h2 .dropcaps');
  if (!dropCap) return;
  var dropCapInverseFlowerContainer = document.createElement('span');
  dropCapInverseFlowerContainer.className = 'inverse-flower-container';
  dropCap.appendChild(dropCapInverseFlowerContainer);
  for (var f = 0; f < numberOfFlowers; f++) {
    var flower = document.createElement('span');
    flower.className = 'flower small';
    dropCapInverseFlowerContainer.appendChild(flower);
  }
}

// iterate through content sections (to skip #welcome and //#region about-this-site)
for (var i = 0; i < sections.length; i++) {
  var section = sections[i];

  // skip welcome and about-this-site sections
  if (section.id == 'welcome' || section.id == 'about-this-site') { continue; }

  // create inverted flowers inside dropcap, with increasing number of flowers (f < i)
  addDropCapFlowers(section, i);

  // add emanating flowers
  addEmanatingFlowers(section, ['left', 'right'], ['top', 'bottom'], 3);
}

// apply bottom flowers to about-this-site section
var aboutThisSiteSection = document.querySelector('section#about-this-site');
if (aboutThisSiteSection) {
  addEmanatingFlowers(aboutThisSiteSection, ['left', 'right'], ['bottom'], 4);
}







/**************************************************************
* Load blog
***************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  var blog = document.querySelector('#blog');
  var isBlogPage = document.querySelector('#blog-page');
  var blogDataFilePath = isBlogPage ? 'blog.json' : 'blog/blog.json';
  if (blog) {
    fetch(blogDataFilePath)
    .then(response => {
      if (!response.ok) { throw new Error("HTTP error " + response.status); }
      return response.json();
    })
    .then(json => {
      generateBlog(json);
      if (isBlogPage) {
        generateBlogMap();
      }
    }).catch(function(error) {
      console.error(error);
    });
  }
});

function generateBlog(jsonData) {
  var blogEntriesHTML = '';
  if(document.querySelector('body').classList.contains("home")) {
    jsonData.slice(0,3).forEach(entry => {
      generateBlogEntryHTML(entry);
    });
  }
  else {
    jsonData.forEach(entry => {
      generateBlogEntryHTML(entry);
    });
  }
    
  function generateBlogEntryHTML(entry){
    // if the entry has links, create html for each link
    var linksHTML = '';
    var post_HTML = '';
    if (entry.hasOwnProperty("links")) {
      entry["links"].forEach(entryLink => {
        linksHTML += `<a class="alt-text-example_reference" href="${entryLink["link-url"]}">${entryLink["link-text"]}</a>`;
      });
    }
    if (entry["type"] == "text") {
      post_HTML += 
      `
      <h2>${entry["post_title"]}</h2>
      ${entry["post_text"]}
      `
    }
    if (entry["type"] == "alt-text") {
      post_HTML +=
      `
        <p class="alt-text-example ${entry["shape"]} medium" aria-label="alt-text example">
          ${entry["text"]}
        </p>
        <address aria-label="author">${entry["author"]}</address>,
        <time datetime="${(new Date(entry["time"])).toISOString()}">${entry["time"]}</time><br/>
        ${linksHTML}
        <p class="alt-text-example_reflection">${entry["reflection"]}</p>
      `
    }

    // build the blog entry's HTML
    blogEntriesHTML += 
      `
      <article class="small ${entry["type"]}" id="${entry["id"]}" data-summary="${entry["summary"]}">
        ${post_HTML}
      </article>
      <hr/>
      `
  }

  document.querySelector('#blog .blog-entries').innerHTML = blogEntriesHTML;

}

function generateBlogMap() {
   document.querySelectorAll('section#blog').forEach( blogSection => {
    var articles = blogSection.querySelectorAll('article');
    var blogMap = document.querySelector('figure.blog-map');
    var blogMap_ul = document.createElement('ul');

    blogMap.appendChild(blogMap_ul);
    articles.forEach(article => {
      var summary = article.dataset['summary'];
      var id = article.id;

      var blogMap_a = document.createElement('a');
      blogMap_a.innerHTML = summary;
      blogMap_a.href = '#' + id;
      blogMap_a.className = 'scroll';
      blogMap_a.style['transform'] = 'translateY(' + (-10 + Math.random()*20) + 'px)';

      blogMap.innerHTML += '<span class="nbsp">&nbsp;</span>'.repeat(2 + Math.floor(Math.random()*30));
      blogMap.innerHTML += blogMap_a.outerHTML;
      blogMap.innerHTML += '<span class="nbsp">&nbsp;</span>'.repeat(2 + Math.floor(Math.random()*30));
    });
    setupScrollLinks();
  });
}