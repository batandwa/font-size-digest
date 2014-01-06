var sizes = [];
jQuery(textNodes()).each(function() {
  size = jQuery(this).css("font-size");
  sizes[size] = typeof(sizes[size]) === "undefined" ? [] : sizes[size];
  if(jQuery(this).is(":visible")) {
    sizes[size].push(b);
  }
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
