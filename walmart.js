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
      console.log("Done!");
      storage.walmart.response = response;
      storage.walmart.apiReturn = true;
      storage.walmart.pullData();
      
    });
  }
};


//       for (i = 0; i < 10; i++) {
//         // variables to store key attributes
//         var result = response.items[i];
//         var productImage = result.largeImage;
//         var productName = result.name;
//         var productModel = result.modelNumber;
//         var productPrice = result.salePrice;
//         var productDescrip = result.shortDescription;
//         // dyamic generate cards and modals
//         var modalHeader = productName;
//         var modalBody = productDescrip;
//         var modalPrice = productPrice;
//         var cardDiv = $("<div class='card'>");
//         var cardImg = $("<img class='card-img-top' alt='Card image'>");
//         cardImg.attr("src", productImage);
//         var cardBodyDiv = $("<div class='card-body'>");
//         var cardTitle = $("<h5 class='card-title'>"+modalHeader+"</h5>");
//         var cardFooterDiv = $("<div class='card-footer'>");
//         var cardButton = $("<button type='button' class='btn btn-primary modal-button' data-toggle='modal' data-target='#exampleModal'>More Info Modal</button>");
//         // FIXME: Need to get escape characters to not display quotes to user
//         cardButton.attr("data-body", modalBody);
//         cardButton.attr("data-header", modalHeader);
//         cardButton.attr("data-price", modalPrice);
//         cardBodyDiv.append(cardTitle);
//         cardFooterDiv.append(cardButton);
//         cardDiv.append(cardImg, cardBodyDiv, cardFooterDiv);
//         $("#test").append(cardDiv);
//       };
//     });
//   }
// };