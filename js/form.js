window.onload = function(){
	document.getElementById("submit").addEventListener("click", function() {
		var name = document.getElementById("name");
		var comments = document.getElementById("comments");
		
		if(name.value.length >= 3 && comments.value.length >= 5) {
			document.getElementById("name_msg").innerHTML = "";
			document.getElementById("comments_msg").innerHTML = "";

			var subject = "Kontakt Spa Thai";
			var body = comments.value;

			//alt ok, åpne mail klient
			window.open("mailto:suban@spathai.no?subject="+subject+"&body="+body);
		}
		else {
			if(name.value.length < 3) {
				document.getElementById("name_msg").innerHTML = "Navn må være minst 3 bokstaver";
			}
			if(comments.value.length < 5) {
				document.getElementById("comments_msg").innerHTML = "Melding må være minst 5 bokstaver";
			}
		}
	});
}