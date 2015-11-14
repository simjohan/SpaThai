window.onload = function(){

  //checking which site we are on to make it the active link
  var currentURL = window.location.href;
  currentURL = currentURL.split("/");


  //check if url is /html/ where index.html automatically is chosen

  currentURL = currentURL[currentURL.length-1];
  
  currentURL = "\""+currentURL+"\"";


  var navbar = "";
  var navbar_scroll = "";
  var links = [["HJEM",'"index.html"'],
      ["BEHANDLINGER",'"treatments.html"'],
      ["PRISER",'"prices.html"'],
      ["PRODUKTER",'"produkter.html"'],
      ["OM OSS",'"about.html"']];

  //adding the logo
  //navbar += '<div id="logo"><a href="index.html"><img src="../images/logo_default.png" alt="Logo" /></a></div>';

  //preparting the nav element
  //navbar += "<nav>";

  //adding the links the links
  for(i = 0; i < links.length; i++){
    //if it is the currentURL make it active
    if(currentURL == links[i][1]){
      navbar += "<a class=\"active\" href="+links[i][1]+">"+links[i][0]+"</a>";
      navbar_scroll += "<a class=\"active_nav_scroll\" href="+links[i][1]+">"+links[i][0]+"</a>";
    }else{
      navbar += "<a href="+links[i][1]+">"+links[i][0]+"</a>";
      navbar_scroll += "<a href="+links[i][1]+">"+links[i][0]+"</a>";
    }
  }
  document.getElementById("navigation").innerHTML = navbar;
  document.getElementsByClassName("navigation_scroll_nav")[0].innerHTML = navbar_scroll;
  //navbar += "</nav>";



}
