// Walmart API Documentation can be found below
// https://developer.walmartlabs.com/docs
var walmart = {
  // API Call for product lookup by ID number
  productLookup: "http://api.walmartlabs.com/v1/items/12417832?apiKey=dc7fkr9e5rwbbaqj3e42nbnn",
  // API call for product by search term
  productSearch: "http://api.walmartlabs.com/v1/search?apiKey=dc7fkr9e5rwbbaqj3e42nbnn&query=",
  // receives argument from user entry
  callAPI: function(searchTerm) {
    $.ajax({
      url: this.productSearch + searchTerm,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      // TODO: Remove this after testing
      console.log("Done!");
      // Send the response to the global variable
      storage.walmart.response = response;
      // Update the state of the api return value to true
      storage.walmart.apiReturn = true;
      // call the pullData function for walmart
      storage.walmart.pullData();     
    });
  }
};