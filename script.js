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
  jsonData.forEach(entry => {
    // if the entry has links, create html for each link
    var linksHTML = '';
    if (entry.hasOwnProperty("links")) {
      entry["links"].forEach(entryLink => {
        linksHTML += `<a class="alt-text-example_reference" href="${entryLink["link-url"]}">${entryLink["link-text"]}</a>`;
      });
    }

    // build the blog entry's HTML
    blogEntriesHTML += 
      `
      <article class="small" id="${entry["id"]}" data-summary="${entry["summary"]}">
        <p class="alt-text-example ${entry["shape"]} medium" aria-label="alt-text example">
          ${entry["text"]}
        </p>
        <address aria-label="author">${entry["author"]}</address>,
        <time datetime="${(new Date(entry["time"])).toISOString()}">${entry["time"]}</time><br/>
        ${linksHTML}
        <p class="alt-text-example_reflection">${entry["reflection"]}</p>
      </article>
      <hr/>
      `;
  });

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