// script.js for search.wc.ca

// 2024-Apr-22 code@codywohlers.ca - changed window.onload to document.addEventListener("DOMContentLoaded")

function getQuery() {
	document.getElementById('query').value = new URL(window.location.href).searchParams.get("q");
}
document.addEventListener("DOMContentLoaded", getQuery);

function submitAll(id) {
	iterateHTMLCollection(document.getElementById(id).children);
}

function submitThis(me) {
	let docFragment = document.createDocumentFragment();
	docFragment.appendChild(me.cloneNode());
	iterateHTMLCollection(docFragment.children);
}

function iterateHTMLCollection(collection) {
	for (let i=collection.length-1; i>=0; i--) {
		if (collection[i].type == "submit" || collection[i].type == "button") {
			if (collection[i].formTarget == "_self") {
				window.location.href=(collection[i].formAction + collection[i].className + document.getElementById("query").value);
			} else {
				window.open(collection[i].formAction + collection[i].className + document.getElementById("query").value);
			}
		} else {
			iterateHTMLCollection(collection[i].children);
		}
	}
}
