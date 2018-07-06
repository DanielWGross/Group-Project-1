// EBay API Documentation can be found be below
// https://go.developer.ebay.com/api-documentation
var ebay = {
  // Search eBay; build search and browse experiences.
  queryURL: "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=",
  // Gets API key from local storage. Added via api.html
  apiKey: localStorage.getItem("ebaySearch"),
  //Search Query variable for API call
  searchURL: "&outputSelector=PictureURLSuperSize&itemFilter(0).name=HideDuplicateItems&itemFilter(0).value=true&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=",
  // Retrieve public items and user data to create shopping and marketing applications.
  queryURL2: "http://open.api.ebay.com/shopping?callname=GetMultipleItems&responseencoding=JSON&appid=",
  // Gets API key from local storage. Added via api.html
  apiKey2: localStorage.getItem("ebayShop"),
  //Search Query variable for API call
  searchURL2: "&siteid=0&version=713&ItemID=",
  // receives argument from user entry
  emptyObject: function() {
    var root = storage.ebay.response;
    root.name = [];
    root.image = [];
    root.price = [];
    root.description = [];
    root.URL = [];
  },
  callAPI: function(searchTerm) {
    $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/' + ebay.queryURL + ebay.apiKey + ebay.searchURL + searchTerm,
      method: "GET",
      dataType: 'json'
    }).then(function(response) {
      ebay.emptyObject();
      for (var i = 0; i < numResults; i++) {
        var itemInfo = response.findItemsAdvancedResponse[0].searchResult[0].item[i];
        var productNumber = itemInfo.itemId[0];
        var siteURL = itemInfo.viewItemURL[0];
        storage.ebay.response.URL.push(siteURL);
        var title = itemInfo.title[0];
        storage.ebay.response.name.push(title);
        storage.ebay.response.description.push(title);
        $.ajax({
          url: 'https://cors-anywhere.herokuapp.com/' + ebay.queryURL2 + ebay.apiKey2 + ebay.searchURL2 + productNumber,
          method: "GET",
          dataType: 'json',
        }).then(function(response){ 
          var imageURL = response.Item[0].PictureURL[0];
          storage.ebay.response.image.push(imageURL);
          var price = response.Item[0].ConvertedCurrentPrice.Value;
          storage.ebay.response.price.push(price);
          if (storage.ebay.response.image.length === numResults) {
            storage.ebay.apiReturn = true;
            storage.ebay.pullData();
          };
        });
      };
    });
  }
};
