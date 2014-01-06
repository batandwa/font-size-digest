var sizes = [];
var junk = [];
var types = [];
jQuery("body, body *").each(function(a,b) {
    console.log(b.nodeType);
    // Get the size
    size = jQuery(b).css("font-size");
    
    text = jQuery(b).contents().filter(function() {
        return this.nodeType == 3;
    }).text();
//    console.log(text);
//    console.log(typeof(text));
  //      types[b.nodeType] = typeof(types[b.nodeType]) === "undefined" ? [] : types[b.nodeType];
//        types[b.nodeType].push(b);
        
    if(text != "") {
        sizes[size] = typeof(sizes[size]) === "undefined" ? [] : sizes[size];
        sizes[size].push(b);
    } else {
        junk[size] = typeof(junk[size]) === "undefined" ? [] : junk[size];
        junk[size].push(b);

    }
})

console.log(sizes);
console.log(junk);
console.log(types);

function textNodes() {
    var all = document.getElementsByTagName("*");
    var textNodes = [];
    
    for (var i=0, max=all.length; i < max; i++) {
         // Do something with the element here
         //console.log(all[i].nodeType);
         //console.log(all[i]);
         for(var j=0, childCount=all[i].childNodes.length; j<childCount; j++) {
             if(all[i].childNodes[j].nodeType == 3 && all[i].childNodes[j].nodeValue.trim() != "") {
                textNodes.push(all[i]);
                break;
             }
         }
    }
    
    return textNodes;
}
