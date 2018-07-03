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
        // console.log("Pull Data Running!");
        // variable to store location to avoid repetive typing
        var location = this.response.items[i];
        // largest image size avaliable
        var image = location.largeImage;
        // name contains short name and short description
        // TODO: Open issue to try to extract both values seperate
        var name = location.name;
        // model number. Not avaliable on all results
        var model = location.modelNumber;
        // Using sale price, not MSRP
        var price = location.salePrice;
        // Long description of the product
        var description = location.longDescription;
        // Call the render function to generate the cards on the index.html file
        // TODO: Create renderfunction
        storage.renderElements("walmart", i, image, name, model, price, description);
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
      var data = storage.ebay.response;
      if (this.apiReturn === true) {
      for (var i = 0; i < numResults; i++) {
        var image = this.response.image[i];
        var name = this.response.name[i];
        var model = "model";
        var price = this.response.price[i];
        var description = this.response.description[i];
        storage.renderElements("ebay", i, image, name, model, price, description);
        }
      }     
    }
  },


  renderElements: function(api, location, image, name, model, price, description) {
    // console.log("Render Elements Running!");

    var checkBox = $("<i class='material-icons btn-Medium waves-effect waves-light'>");
    $(checkBox).text("add_box");
    $(checkBox).addClass("selectPrice");

    //initial data-state for later use
    checkBox.attr("data-state", "unchecked");

    var cardColumn = $("<div class='col xl2 col l3  col m4  col  s12  col xs12'>");
    var card = $("<div class='card card-selection' data-id=" + location + ">");
    var cardImageHolder = $("<div class='card-image waves-effect waves-block waves-light'>");
    var cardImage = $("<img>");
      $(cardImage).addClass("activator card-size");
      $(cardImage).attr("src", image); 
    var cardContent = $("<div class='card-content'>");
    var cardTitle = $("<span class='card-title activator grey-text text-darken-4 truncate'>");
      $(cardTitle).text(name);
    var cardArrow = $("<i class='material-icons right activator waves-effect'>");
      $(cardArrow).text("arrow_drop_up");
    var cardPrice = $("<h5> $"+price+"</h5>");
    var cardReveal = $("<div class='card-reveal'>");
    var cardRevealTitle = $("<span class='card-title grey-text text-darken-4'>");
      $(cardRevealTitle).text(name);
    var cardClose = $("<i class='material-icons right'>close</i>");

    cardRevealTitle.append(cardClose);
    cardReveal.append(cardRevealTitle);
    cardTitle.append(cardArrow);
    cardContent.append(cardTitle, cardPrice);
    cardImageHolder.append(cardImage);
    card.append(checkBox, cardImageHolder, cardContent, cardReveal);
    cardColumn.append(card);
    if (api === "walmart") {
      $("#test").append(cardColumn);
    }
    else {
      $("#ebay-test").append(cardColumn);
    }
    
  },



  renderCompare: function(walmartLocation, ebayLocation) {
    $("#test").empty();
    $("#ebay-test").empty();
    var container = $("<div class='container'>");
    var headerDiv = $("<div class='center-align'>");
    var headerTitle = $("<h3>Compare Products</h3>");
    var headerLink = $("<a href='#'>Choose Other Products To Compare</a>");
    headerDiv.append(headerTitle, headerLink);
    var sectionOne = $("<div class='section'>");
    var sectionTwo = $("<div class='section'>");
    var rowOne = $("<div class='row'>");
    var rowOneTwo = $("<div class='row'>");
    var rowOneThree = $("<div class='row'>");
    var rowTwo = $("<div class='row'>");
    var productTitle = $("<h5>Product</h5>");
    var dividerMargin = $("<div class='divider margin-20'>");
    var imageColumnOne = $("<div class='col s6 center-align'>");
    var imageColumnTwo = $("<div class='col s6 center-align'>");
    var priceOne = $("<h3 class='center=align flow-text'>");
    $(priceOne).html(storage.walmart.response.items[walmartLocation].salePrice)
    var priceTwo = $("<h3 class='center=align flow-text'>");
    $(priceTwo).html(storage.ebay.response.price[ebayLocation]);
    var linkWrapperOne = $("<div class='center-align'>");
    var linkWrapperTwo = $("<div class='center-align'>");    
    var linkColumnOne = $("<div class='col s6 offset-s3 center-align'>");
    var linkColumnTwo = $("<div class='col s6 offset-s3 center-align'>");
    var imageOne = $("<img>");
    $(imageOne).attr("src", storage.walmart.response.items[walmartLocation].largeImage);
    $(imageOne).addClass("card-size");
    var imageTwo = $("<img>");
    $(imageTwo).attr("src", storage.ebay.response.image[ebayLocation]);
    $(imageTwo).addClass("card-size");
    var learnMoreOne = $("<a href='#' class='left'>Learn More</a>");
    var addToCartOne = $("<a href='#' class='right'>Add to Cart</a>");  
    var learnMoreTwo = $("<a href='#' class='left'>Learn More</a>");
    var addToCartTwo = $("<a href='#' class='right'>Add to Cart</a>"); 
    var description = $("<h5>Product Description</h5>");
    var divider = $("<div class='divider'>");
    var colDescripOne = $("<div class='col s5'>");
    var pDescripOne = $("<p class='flow-text'>Example Text</p>");
    var colDescripTwo = $("<div class='col s5 offset-s2'>");
    var pDescripTwo = $("<p class='flow-text'>Example Text</p>");
    linkColumnOne.append(learnMoreOne, addToCartOne);            
    rowOneTwo.append(linkColumnOne);
    linkWrapperOne.append(rowOneTwo);
    imageColumnOne.append(imageOne, priceOne, linkWrapperOne);
    linkColumnTwo.append(learnMoreTwo, addToCartTwo);
    rowOneThree.append(linkColumnTwo);
    linkWrapperTwo.append(rowOneThree);
    imageColumnTwo.append(imageTwo, priceTwo, linkWrapperTwo);
    rowOne.append(productTitle, dividerMargin, imageColumnOne, imageColumnTwo);
    sectionOne.append(rowOne);
    colDescripOne.append(pDescripOne);
    colDescripTwo.append(pDescripTwo);
    rowTwo.append(description, divider, colDescripOne, colDescripTwo);
    sectionTwo.append(rowTwo);
    container.append(headerDiv, sectionOne, sectionTwo);
    $("#test").append(container);
  }
};
$("#search").keypress(function(event) {
  var searchTerm = $("#search").val().trim();
  if (event.which === 13) {
    searchHandler(searchTerm);
  };
});

function searchHandler (searchTerm) {
  // prevents default submition //
  event.preventDefault();
  $("#test").empty();
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
  storage.renderCompare(1, 1);
}); 


//on click change color and add to compare box
$(document).on("click",".selectPrice", function() {
  // Get the current data-state
  var state = $(this).attr("data-state");
  
  // If data-state is clicked change color and add comparePrice function 
  //change the data-state to checked
  
  if (state === "unchecked") {
    $(this).attr("data-state", "checked");
    $(this).addClass("green");

    //then call comparPrice function
  } else{
    $(this).attr("data-state", "unchecked");
    $(this).removeClass("green");

    //then call comparPrice function
  }

});