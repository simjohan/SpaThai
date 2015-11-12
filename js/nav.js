window.onload = function(){

  //checking which site we are on to make it the active link
  var currentURL = window.location.href;
  currentURL = currentURL.split("/");
  currentURL = currentURL[currentURL.length-1];
  currentURL = "\""+currentURL+"\"";

  var navbar = "";
  var links = [["HJEM",'"link1.html"'],
      ["BEHANDLINGER",'"link2.html"'],
      ["PRISER",'"index.html"'],
      ["PRODUKTER",'"link4.html"'],
      ["OM OSS",'"link5.html"']];

  //adding the logo
  navbar += '<div id="logo"><a href="index.html"><img src="../images/logo_default.png" alt="Logo" /></a></div>';

  //preparting the nav element
  navbar += "<nav>";

  //adding the links the links
  for(i = 0; i < links.length; i++){
    //if it is the currentURL make it active
    if(currentURL == links[i][1]){
      navbar += "<a class=\"active\" href="+links[i][1]+">"+links[i][0]+"</a>";
    }else{
      navbar += "<a href="+links[i][1]+">"+links[i][0]+"</a>";
    }
  }

  navbar += "</nav>";

  console.log(navbar);



}
