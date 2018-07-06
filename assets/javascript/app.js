// Storing number of results as a variable gloablly. Should look to implement a user setting
var numResults = 5;
var counter = 0;
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
// Search bar event handler
$(document).on("keypress", "#search", function(event) {
  var searchTerm = $("#search").val().trim();
  if (event.which === 13) {
  $("#img-logo").remove();
  renderElements.renderLoading();
    if(userValidation(searchTerm) === true){
      $("#walmart").empty();
      $("#ebay").empty();
      ebay.callAPI(searchTerm);
      walmart.callAPI(searchTerm);
      $("#search").val("");
    }
    else{
      $("#search").val("");
      return;
    }
  };
});
// Comparison event handler
$(document).on("click", ".box", function () {
  counter++;
  if (counter === 1) { //if using walmart data need to make sure clicked on walmart card
    walmartIndex = $(this).attr("data-id");
  }
  if (counter === 2) {
    var ebayIndex = $(this).attr("data-id");
    renderElements.renderCompare(walmartIndex, ebayIndex);
  }
});
// New Search event handler
$(document).on("click", "#newSearch", function () {
  console.log("In New Search");
  renderElements.renderSearch();
});