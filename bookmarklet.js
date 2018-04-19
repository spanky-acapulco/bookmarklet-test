if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
    script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
    script.integrity = 'sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=';
    script.crossorigin = 'anonymous'; 
    script.onload=runScript;
    document.body.appendChild(script);
} 
else {
    runScript();
}
 
function runScript() {
  alert('hello world');
}
