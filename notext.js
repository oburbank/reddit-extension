document.querySelectorAll('.expando-button').forEach(function(v,i,a) {v.click()});
var x = document.evaluate('//body//*[not(descendant-or-self::*[@class="expando"])][not(ancestor::*[@class="expando"])]', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for ( var i=0 ; i < x.snapshotLength; i++ ) {x.snapshotItem(i).remove()}

