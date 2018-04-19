if (!($ = window.jQuery)) {
    script = document.createElement( 'script' );
    script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
    script.onload=runScript;
    document.body.appendChild(script);
} 
else {
    runScript();
}
 
function runScript() {
  alert('hello world');
}
