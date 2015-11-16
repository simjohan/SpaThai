window.onload = function(){
	var image1 = document.getElementById('image_1');
	var image2 = document.getElementById('image_2');
	var image3 = document.getElementById('image_3');
	returnToNormal();

	image1.onmouseover = function(){
		console.log(document.getElementsByClassName("bx-next")[0]);
		returnToNormal();
		the_text = document.getElementsByClassName("slideshow_text")[0];
		the_text.style.display = "inline";
		this.style.opacity = "0.4";	
		document.getElementsByClassName("bx-next")[0].addEventListener("click",returnToNormal);
		document.getElementsByClassName("bx-prev")[0].addEventListener("click",returnToNormal);
	}

	image2.onmouseover = function(){
		returnToNormal();
		the_text = document.getElementsByClassName("slideshow_text")[1];
		the_text.style.display = "inline";
		this.style.opacity = "0.4";	
		document.getElementsByClassName("bx-next")[0].addEventListener("click",returnToNormal);
		document.getElementsByClassName("bx-prev")[0].addEventListener("click",returnToNormal);	
	} 

	image3.onmouseover = function(){
		returnToNormal();
		the_text = document.getElementsByClassName("slideshow_text")[2];
		the_text.style.display = "inline";
		this.style.opacity = "0.4";	
		document.getElementsByClassName("bx-next")[0].addEventListener("click",returnToNormal);
		document.getElementsByClassName("bx-prev")[0].addEventListener("click",returnToNormal);	
	}

	document.getElementById('contentBody').onmouseover 	= function(){
		returnToNormal();
	}

	document.getElementById('header').onmouseover = function(){
		returnToNormal();
	}


	// document.getElementsByClassName("bx-next")[0].onclick = function(){
	// 	returnToNormal();
	// }

	// document.getElementsByClassName("bx-prev")[0].onclick = function(){
	// 	returnToNormal();
	// }

	function returnToNormal(){
		document.getElementsByClassName("slideshow_text")[0].style.display = "none";
		image1.style.opacity = "1";

		document.getElementsByClassName("slideshow_text")[1].style.display = "none";
		image2.style.opacity = "1";

		document.getElementsByClassName("slideshow_text")[2].style.display = "none";
		image3.style.opacity = "1";
	}
}

// window.addEventListener("load",start);

// function start(){
// 	document.getElementById('image_1').addEventListener("hover", hover);
// 	document.getElementById('image_2').addEventListener("hover", hover);
// 	document.getElementById('image_3').addEventListener("hover", hover);
// }


// function hover(){
//     if (this.id == "image_1") {
//         document.getElementById('text_image_1').style.display = "inline";
//         console.log(this.id, " hovered");
//     }

//     else if (this.id == "image_2") {
//     	document.getElementById('text_image_2').style.display = "inline";
//     	console.log(this.id, " hovered");
//     }

//     else{
//     	document.getElementById('text_image_3').style.display = "inline";
//     	console.log(this.id, " hovered");
//     }
// }