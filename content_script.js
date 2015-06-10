walk(document.body);

if (window.MutationObserver) {
	var observer = new MutationObserver(function (mutations) {
		Array.prototype.forEach.call(mutations, function (m) {
			if (m.type === 'childList') {
				walk(m.target);
			} else if (m.target.nodeType === 3) {
				handleText(m.target);
			}
		});
	});

	observer.observe(document.body, {
		childList: true,
		attributes: false,
		characterData: true,
		subtree: true
	});
}

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var oldValue = textNode.nodeValue;
	    v = oldValue;

	v = v.replace(/\bcontent marketing\b/g, "propaganda");
      v = v.replace(/\bContent marketing\b/g, "Propaganda");
      v = v.replace(/\bContent Marketing\b/g, "Propaganda");
      v = v.replace(/\bContent Marketer\b/g, "Propagandist");
      v = v.replace(/\bContent marketer\b/g, "Propagandist");
      v = v.replace(/\bcontent marketer\b/g, "propagandist");
      v = v.replace(/\bcontent marketers\b/g, "propagandists");


	
	// avoid infinite series of DOM changes
	if (v !== oldValue) {
		textNode.nodeValue = v;
	}
}
