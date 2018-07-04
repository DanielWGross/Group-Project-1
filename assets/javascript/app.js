// Storing number of results as a variable gloablly. Should look to implement a user setting
var numResults = 5;
// Gloabl variable which will house the JSON from the AJAX calls to pass on to other functions
var storage = {
  // All data should be coming in from the walmart.js file
  walmart : {
    // storing the JSON from the Walmart call
    response: {},
    // Default status set to false. Will ensure function does not run unless result is back
    apiReturn: false,
    // Will extract relevant data from the JSON call and pass to render function
    pullData: function() {
      for (i= 0; i < numResults; i++) {
        // variable to store location to avoid repetive typing
        var location = this.response.items[i];
        // largest image size avaliable
        var image = location.largeImage;
        // name contains short name and short description
        var name = location.name;
        // Using sale price, not MSRP
        var price = location.salePrice;
        // Call the render function to generate the cards on the index.html file
        renderElements.renderCard("walmart", i, image, name, price);
      };
    }
  },
  ebay : {
    response: {
      name: [],
      image: [],
      price: [],
      description: [],
      URL: [],
    },
    apiReturn: false,
    pullData: function () {
      if (this.apiReturn === true) {
        for (var i = 0; i < numResults; i++) {
          var image = this.response.image[i];
          var name = this.response.name[i];
          var price = this.response.price[i];
          renderElements.renderCard("ebay", i, image, name, price);
        };
      };     
    }
  },
};
$("#search").keypress(function(event) {
    var searchTerm = $("#search").val().trim();
     if (event.which === 13) {

      $("#img-logo").remove();
      ajaxLoader();
       var afterValidate= userValidation(searchTerm);
    if(afterValidate === true){
      searchHandler(searchTerm);
      $("#search").val("");
    }
    else{
      $("#search").val("");
       return;
      }
  };
});

function searchHandler (searchTerm) {
  event.preventDefault();
  $("#walmart").empty();
  ebay.callAPI(searchTerm);
  walmart.callAPI(searchTerm);
};

var counter = 0;
var compareItem1 = {
  image: "",
  name: "",
  price: "",
  description: "",
};

var compareItem2 = {
  image: "",
  name: "",
  price: "",
  description: "",
}

$(".card").on("click", function(){
  counter++;
  if (counter === 1) { //if using walmart data need to make sure clicked on walmart card
    var index = this.attr("data-id").val();
    var storageLocation = storage.walmart.response.items[index];
    compareItem1.image = storageLocation.largeImage;
    compareItem1.price = storageLocation.salePrice;
    compareItem.name = storageLocation.name;
    compareItem1.description = stroageLocation.description;
  }
  if (counter === 2) {
    var index = this.attr("data-id").val();
    var storageLocation = storage.ebay.response;
    compareItem2.image = storageLocation.image[index];
    compareItem2.name = storageLocation.name[index];
    compareItem2.price = storageLocation.price[index];
    compareItem2.description = storageLocation.description[index];
    clearPage();
  }
});

function clearPage() {
  $(".nav-wrapper").empty();
  $(".wrapper").empty();
};

// TODO: Needs to be removed once real functionality is added
$("#yellow").click(function(){
  renderElements.renderCompare(1,1);
}); 


$(document).on("click", "#newSearch", function () {
  renderElements.renderSearch();
});

// compare user input with our restriction
function userValidation(userInput){
  event.preventDefault();
  // This Regular Expression only allow lower alphabet, Upper alphabet, number, and spaces between words
  var regex= /^[a-zA-Z0-9 "']*$/;
  // first, we check if the input is empty
  if(userInput == ""){
    vex.dialog.alert('Please enter a product to search.')
    return false;
  }
  else if(regex.test(userInput)){
    return true;
  }
  // Last, when we find special characters or symbols in users input
  else{
    vex.dialog.alert('Please enter your search again without any special characters. (Example: $, @, #, etc)')
    return false;
  };
};
function ajaxLoader(){
$(document).ready(function(){
  $(document).ajaxStart(function(){
      $(".progress").css("display", "block");
  });
  $(document).ajaxComplete(function(){
      $(".progress").css("display", "none");
  });
 
});
};

