var ebay = {
    queryURL: "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Michaela-PriceCom-PRD-87141958a-d757ba3a&outputSelector=PictureURLSuperSize&itemFilter(0).name=HideDuplicateItems&itemFilter(0).value=true&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=",

    queryURL2: "http://open.api.ebay.com/shopping?callname=GetMultipleItems&responseencoding=JSON&appid=Michaela-PriceCom-PRD-87141958a-d757ba3a&siteid=0&version=713&ItemID=",

    // results: {
    //     name: [],
    //     image: [],
    //     price: [],
    //     description: [],
    //     URL: [],
    // },

    callAPI: function(queryTerm) {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/' + ebay.queryURL + queryTerm,
            method: "GET",
            dataType: 'json'
          }).then(function(response) {
                for (var i = 0; i < 5; i++) {
                var itemInfo = response.findItemsAdvancedResponse[0].searchResult[0].item[i];
                var productNumber = itemInfo.itemId[0];
                var siteURL = itemInfo.viewItemURL[0];
                storage.ebay.response.URL.push(siteURL);
                var title = itemInfo.title[0];
                storage.ebay.response.name.push(title);
                storage.ebay.response.description.push(title);
          
                $.ajax({
                  url: 'https://cors-anywhere.herokuapp.com/' + ebay.queryURL2 + productNumber,
                  method: "GET",
                  dataType: 'json',
                  })
                  .then(function(response){ 
                    //   response.ebayTwo = response; 
                    var imageURL = response.Item[0].PictureURL[0];
                    storage.ebay.response.image.push(imageURL);
                    var price = response.Item[0].ConvertedCurrentPrice.Value;
                    storage.ebay.response.price.push(price);
                    if (storage.ebay.response.image.length === 5) {
                        storage.ebay.apiReturn = true;
                        storage.ebay.pullData();
                      }
                  }); 


                }
            });

    }
}
