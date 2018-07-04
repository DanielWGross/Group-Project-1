// Walmart API Documentation can be found below
// https://developer.walmartlabs.com/docs
var walmart = {
  // API call for product by search term
  productSearch: "https://api.walmartlabs.com/v1/search?apiKey=",
  // Gets API key from local storage. Added via api.html
  apiKey: localStorage.getItem("walmartSearch"),
  //Search Query variable for API call
  productQuery: "&query=", 
  // receives argument from user entry
  callAPI: function(searchTerm) {
    $.ajax({
      url: this.productSearch + this.apiKey + this.productQuery + searchTerm,
      method: "GET"
    }).then(function(response) {
      // Send the response to the global variable
      storage.walmart.response = response;
      // Update the state of the api return value to true
      storage.walmart.apiReturn = true;
      // call the pullData function for walmart
      storage.walmart.pullData();     
    });
  }
};