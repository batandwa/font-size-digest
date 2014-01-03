/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var sizes = [];
jQuery("body, body *").each(function(a,b) {
    // Get the size
    size = jQuery(b).css("font-size");
    // Remove unit
    //newsize = size.replace(/[^\d\.]+/, "");
    //console.log(Math.round(newsize * Math.pow(10, 0.1)) / Math.pow(10, 0.1));
    

    if(typeof(sizes[size]) === "undefined") {
        sizes[size] = [];
    }
    sizes[size].push(b);
})
console.log(sizes);
