
console.warn("BOLS-F: Removing infinite reading.");
var inf = document.getElementsByClassName("tw-infinite-scroll");
if (inf.length > 0) {
	var inf_links = inf[0].getElementsByTagName("a");
	if (inf_links.length > 1) {
		var link2 = inf_links[1];
		link2.style.display = "block";
		link2.style.width = "100%";
		link2.style.backgroundColor = "#F05A28";
		link2.style.color = "white";
		link2.style.paddingTop = "20px";
		link2.style.paddingTop = "20px";
		link2.text = "Click here when you actually want to go to the next article."
		var a = inf[0].parentNode.replaceChild(link2, inf[0]);
	}
}
