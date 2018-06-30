// store all the symbols in the arrays      note:  symbol \  and symbol ""  cannot be work in here
var symbolsArray=["!","@","#","$","%","^","&","*","(",")","_","+","-","+","{","[","}","}","|",";",":","'","<",",",">",".","?","/"];

// hold all html elements 
var htmlElements=["<html>","</html>","<head>","</head>","<title>","</title>","<body>","</body>","<h1>","</h1>",
                    "<h2>","</h2>","<h3>","</h3>","<h4>","</h4>","<h5>","</h5>","<h6>","</h6>","<p>","</p>",
                    "<br>","</br>","<hr>","</hr>","<!--...-->","<abbr>","</abbr>", "<address>","</address>",
                "<b>","</b>","<bdi>","</bdi>","<bdo>","</bdo>","<blockquote>","</blockquote>","<cite>","</cite>",
                    "<code>","</code>","<del>","</del>","<dfn>","</dfn>","<em>","</em>","<i>","</i>","<ins>","</ins>",
                    "<kbd>","</kbd>","<mark>","</mark>","<meter>","</meter>","<pre>","</pre>","<progress>","</progress>","<q>","</q>",
                    ];


// function check if searcing value is none 
function userEmptyValue(){
// detect enter keypress
$("#search").keypress(function(event) {
    //key code 13 is equal to enter
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        // get user input value
       console.log( $("#search").val());
      var userInput= $("#search").val();
    //   if user input value is empty 
      if(userInput=== ""){
        //   it will give error  result for now, using alert
          alert("value is empty");
      }else{
        // maybe call dan's function to render image and the results

      };
    }
});// end event listener
};// enf userEmptyString

// function check if searching value is including symbols
function InputNoSymbols(){

    // event listener press 
$("#search").keypress(function(event) {
    //key code 13 is equal to enter
    var keycode = (event.keyCode ? event.keyCode : event.which);
    
    
    // when we press enter
    if (keycode == '13') {
        
        // iterate all the symbols in the array
        for(i=0; i< symbolsArray.length; i++){
            // console.log(symbolsArray[i]);
            var userInput= $("#search").val();
            // compare input all symbols in the array
            if(userInput == symbolsArray[i]){
                // alert for now it will change to error message
                alert("Dont insert symbols");
            }else{
                // this  will be dan's function to render image and results
            }
        };//end for
   
    };
});// end event listener
};// end inputNoSymbols function

// function that check if there's html element when user try to search 
function inputNoHtmlElements(){

    $("#search").keypress(function(event){

    //key code 13 is equal to enter
    var keycode = (event.keyCode ? event.keyCode : event.which);

    //13 is equal to enter(windows) or return( for mac)
    if(keycode == '13'){

        // iterate all the html elements in the html array
        for(i=0; i<htmlElements.length; i++){
            var userInput = $("#search").val();
            if(userInput == htmlElements[i]){
                
                //  alert for now it will be change to error message text box
                alert("dont enter html element!!!")
            }else{
                // this line will be calling dan's result and render image (hopefully right)
            }// end else

        }// end for loop
    }

    })//end event handler key press

}// end inputNoHtmlElements



//call function
userEmptyValue();
InputNoSymbols();
inputNoHtmlElements();