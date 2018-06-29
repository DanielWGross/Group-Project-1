// our group name
var title= "Name"
$(document).ready(function(){
    // testing
   console.log(title.charAt(0));
   console.log(title.length);
   
// function that move animation word from left side
function animationFromLeft(){
    for(i=0; i<title.length; i++){
        var newDiv=$("<div>");
        newDiv.attr("id","animationTitle-"+title.charAt(i));
        newDiv.addClass("animated fadeInLeftBig");
        newDiv.text(title.charAt(i));
        $("#animationTitle").append(newDiv);
        
        // update the i by 1 so it will get the next character  ex: N_M_
         i=i+1;
        }
}
// function animationFromTop
function animationFromTop(){
    // start from index 1
    for(i=1; i<title.length; i++){
        var newDiv=$("<div>");
        newDiv.attr("id","animationTitle-"+title.charAt(i));
        newDiv.addClass("animated fadeInDownBig");
        newDiv.text(title.charAt(i));
        $("#animationTitle").append(newDiv);
        
        // update the i by 1 so it will get the next character  ex: _A_E
         i=i+1;
        }
}

// call function
animationFromLeft();
animationFromTop();
});