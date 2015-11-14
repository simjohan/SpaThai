addEventListener('load', function() {
	loadElement = document.getElementsByTagName("loadrequired");

	//load css
	loadElement.innerHTML += "<link rel=\"stylesheet\" type=\"text/css\" href=\"../css/style.css\" />";
	loadElement.innerHTML += "<link rel=\"stylesheet\" type=\"text/css\" href=\"../js/jquery.bxslider.css\" />";

	document.getElementById("hei").innerHTML ="TITO";
});
document.getElementsByTagName("yoyo").innerHTML ="TITO";