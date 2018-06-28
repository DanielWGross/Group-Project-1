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
        console.log("Pull Data Running!");
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
        storage.renderElements(i, image, name, model, price, description);
      };
    },
  ebay : {
    response: {},
    apiReturn: false
  }
  },
  renderElements: function(location, image, name, model, price, description) {
    console.log("Render Elements Running!");
    var cardColumn = $("<div class'col-md-2'>");
    var card = $("<div class='card card-selection'>");
    var cardImageHolder = $("<div class='card-image waves-effect waves-block waves-light'>");
    var cardImage = $("<img>");
      $(cardImage).addClass("activator card-size");
      $(cardImage).attr("src", image); 
    var cardContent = $("<div class='card-content'>");
    var cardTitle = $("<span class='card-title activator grey-text text-darken-4'>");
      $(cardTitle).text("Name");
    var cardArrow = $("<i class='material-icons right activator waves-effect'>");
      $(cardArrow).text("arrow_drop_up");
    var cardPrice = $("<h4>"+price+"</h4>");
    var cardReveal = $("<div class='card-reveal'>");
    var cardRevealTitle = $("<span class='card-title grey-text text-darken-4'>");
      $(cardRevealTitle).text("Name");
    var cardClose = $("<i class='material-icons right'>close</i>");
    cardRevealTitle.append(cardClose);
    cardReveal.append(cardRevealTitle);
    cardTitle.append(cardArrow);
    cardContent.append(cardTitle, cardPrice);
    cardImageHolder.append(cardImage);
    card.append(cardImageHolder, cardContent, cardReveal);
    cardColumn.append(card);
    $("#test").append(cardColumn);
  }
};





$(document).on("click", "#submit-button", function (event) {
  $("#test").empty();
  event.preventDefault();
  var userSearch = $("#searchTerm").val().trim();
  walmart.callAPI(userSearch);
});
// $(document).on("click", ".modal-button", function(event) {
//   event.preventDefault();
//   $(".modal-title").text($(this).attr("data-header"));
//   $(".modal-body").text($(this).attr("data-body"));
//   $("#modal-price").text($(this).attr("data-price"));
// });

// $(document).on("click", ".card", function() {
//   $("#test").empty();
//   var yourChoice = $("<h1>Your Choice:");
//   var cardDiv = $("<div class='card'>");
//   var cardImgSRC = $(this).find("img").attr("src");
//   var cardImg = $("<img class='card-img-top' alt='Card image'>");
//   cardImg.attr("src", cardImgSRC);
//   cardImg.addClass("card-size");
//   var cardBodyDiv = $("<div class='card-body'>");
//   var cardTitleSRC = $(this).find("h5").text();
//   var cardTitle = $("<h5 class='card-title'>"+cardTitleSRC+"</h5>");
//   cardBodyDiv.append(cardTitle);
//   cardDiv.append(cardImg, cardBodyDiv);
//   $("#test").append(cardDiv);
// });

// // }).then(responseFilter.walmart = response);