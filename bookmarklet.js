// A JavaScript bookmarklet to extract findings of
// JavaScript primitives (null, undefined, NaN)
// that may pollute the DOM as stings 
// to make find errors easier

// get matches throughout the DOM
const meta = document.documentElement.outerHTML;
const body = document.documentElement.innerHTML;
const html = meta + body;
const regex = /<(.*)(undefined|NaN|null)(.*)/gmi;

const matches = html.match(regex);
const numberOfListItems = (html.match(regex)||[]).length;

// create containing element
const listContainer = document.createElement('div');
listContainer.id = 'markupPollutionChecker';
document.getElementsByTagName('body')[0].appendChild(listContainer);

// create headline
const text = ' findings in this document';
const headline = document.createElement('h1');
const headlineText = document.createTextNode(numberOfListItems + ' ' + text);
headline.appendChild(headlineText);
listContainer.appendChild(headline);


if (numberOfListItems > 0) {
  // create ordered list
  const listElement = document.createElement('ol');
  listContainer.appendChild(listElement);

  // transform array to list of HTML encoded machtes
  for (let i = 0; i < numberOfListItems; ++i) {
    let listItem = document.createElement('li');
    let htmlEncodedMatch = matches[i].replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
      return '&#' + i.charCodeAt(0) + ';';
    });

    htmlEncodedMatch = htmlEncodedMatch.replace(/July/g, '<mark>July</mark>');

    listItem.innerHTML = htmlEncodedMatch;

    listElement.appendChild(listItem);
  }  
}


// add styles to the document
function addStyles(css) {
  const head = document.getElementsByTagName('head')[0];
  const s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  if (s.styleSheet) { // IE
    s.styleSheet.cssText = css;
  } else {
   s.appendChild(document.createTextNode(css));
  }
  head.appendChild(s);
}

const css = `
  #markupPollutionChecker {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    max-width: 80vw;
    margin: 0 auto;
    padding: 1rem;
    z-index: 2147483647;
    color: #000000;
    background-color: #1ea0d6; 
  }
  #markupPollutionChecker h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin: 0 0 1rem 0;
  }
  #markupPollutionChecker ol {
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #ffffff;
  }
  #markupPollutionChecker li {
    word-break: break-all;
  }
  #markupPollutionChecker mark {
    background-color: #ffcc33; 
  }
`;

addStyles(css);
