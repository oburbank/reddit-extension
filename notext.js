document.querySelectorAll('.expando-button').forEach(function(v,i,a) {v.click()});
var x = document.evaluate('//body//*[not(descendant-or-self::*[@class="expando"])][not(ancestor::*[@class="expando"])]', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for ( var i=0 ; i < x.snapshotLength; i++ ) {x.snapshotItem(i).remove()}
var x = document.evaluate('//iframe', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for ( var i=0 ; i < x.snapshotLength; i++ ) {x.snapshotItem(i).remove()}
var y = document.evaluate('//*[@class="expando"]/descendant-or-self::*', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for ( var i=0 ; i < y.snapshotLength; i++ ) {y.snapshotItem(i).style="width: 100%; height: auto"}
