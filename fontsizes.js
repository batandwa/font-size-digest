var sizes = [];
jQuery(textNodes()).each(function(a,b) {
  size = jQuery(b).css("font-size");
  sizes[size] = typeof(sizes[size]) === "undefined" ? [] : sizes[size];
  sizes[size].push(b);
})

console.log(sizes);

function textNodes() {
  var all = document.getElementsByTagName("*");
  var textNodes = [];
  
  for (var i=0, max=all.length; i < max; i++) {
   for(var j=0, childCount=all[i].childNodes.length; j<childCount; j++) {
     if(all[i].childNodes[j].nodeType == 3 && all[i].childNodes[j].nodeValue.trim() != "") {
      textNodes.push(all[i]);
      break;
    }
  }
}

return textNodes;
}
