javascript: (function(e, a, g, h, f, c, b, d) {
            if (!(f = e.jQuery) || g > f.fn.jquery || h(f)) {
                c = a.createElement("script");
                c.type = "text/javascript";
                c.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
                c.onload = c.onreadystatechange = function() {
                        if (!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                        h((f = e.jQuery).noConflict(1), b = 1);
                        f(c).remove()
                    }
                };      
                a.documentElement.childNodes[0].appendChild(c) } })(window, document, "3.3.1.", function($, L) { alert('hello world out there'); });
