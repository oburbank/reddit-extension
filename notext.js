var x = document.querySelectorAll('.expando-button');
if (x.length > 0) {
	x.forEach(function(v,i,a) {v.click()});
	x = document.evaluate('//body//*[not(descendant-or-self::*[@class="expando"])][not(ancestor::*[@class="expando"])][not(descendant-or-self::*[@class="next-button"])][not(ancestor::*[@class="next-button"])]', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
	for ( i=0 ; i < x.snapshotLength; i++ ) {x.snapshotItem(i).remove()}
	x = document.evaluate('//iframe|//text()', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
	for ( i=0 ; i < x.snapshotLength; i++ ) {x.snapshotItem(i).remove()}
	x = document.evaluate('//*[@class="expando"]/descendant-or-self::*', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
	for ( i=0 ; i < x.snapshotLength; i++ ) {x.snapshotItem(i).style="width: 100%; height: auto"}
	x = document.evaluate('//span', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
	for ( i=0 ; i < x.snapshotLength; i++ ) {x.snapshotItem(i).style="display: block;"}
	x = document.evaluate('//*[@class="next-button"]/a', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
	for ( i=0 ; i < x.snapshotLength; i++ ) {x.snapshotItem(i).style="display: block; width: 100%; height: 30px"}
}
