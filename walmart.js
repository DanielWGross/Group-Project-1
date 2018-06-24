var productLookup = "http://api.walmartlabs.com/v1/items/12417832?apiKey=dc7fkr9e5rwbbaqj3e42nbnn";
var productSearch = "http://api.walmartlabs.com/v1/search?apiKey=dc7fkr9e5rwbbaqj3e42nbnn&query=";
var searchTerm = "";

$(document).on("click", "#submit-button", function (event) {
  $("#test").empty();
  event.preventDefault();
  searchTerm = $("#searchTerm").val().trim();
  console.log(searchTerm);
  $.ajax({
    url: productSearch + searchTerm,
    method: "GET"
  }).then(function(response) {
    // TODO: make sure to remove console log when done testing
    console.log(response);
    for (i = 0; i < 10; i++) {
      var modalHeader = response.items[i].name;
      var modalBody = response.items[i].shortDescription;
      var modalPrice = response.items[i].salePrice;
      var cardDiv = $("<div class='card'>");
      var cardImg = $("<img class='card-img-top' alt='Card image'>");
      cardImg.attr("src", response.items[i].largeImage);
      var cardBodyDiv = $("<div class='card-body'>");
      var cardTitle = $("<h5 class='card-title'>"+modalHeader+"</h5>");
      var cardFooterDiv = $("<div class='card-footer'>");
      var cardButton = $("<button type='button' class='btn btn-primary modal-button' data-toggle='modal' data-target='#exampleModal'>More Info Modal</button>");
      // FIXME: Need to get escape characters to not display quotes to user
      cardButton.attr("data-body", modalBody);
      cardButton.attr("data-header", modalHeader);
      cardButton.attr("data-price", modalPrice);
      cardBodyDiv.append(cardTitle);
      cardFooterDiv.append(cardButton);
      cardDiv.append(cardImg, cardBodyDiv, cardFooterDiv);
      $("#test").append(cardDiv);
    };
  });
});

$(document).on("click", ".modal-button", function(event) {
  event.preventDefault();
  // TODO: Make sure to remove this
  console.log($(this).attr("data-header"));
  $(".modal-title").text($(this).attr("data-header"));
  $(".modal-body").text($(this).attr("data-body"));
  $("#modal-price").text($(this).attr("data-price"));
});

$(document).on("click", ".card", function() {
  // TODO: Make sure to remove this
  console.log(this);
  $("#test").empty();
  var yourChoice = $("<h1>Your Choice:");
  var cardDiv = $("<div class='card'>");
  var cardImgSRC = $(this).find("img").attr("src");
  var cardImg = $("<img class='card-img-top' alt='Card image'>");
  cardImg.attr("src", cardImgSRC);
  cardImg.addClass("card-size");
  var cardBodyDiv = $("<div class='card-body'>");
  var cardTitleSRC = $(this).find("h5").text();
  var cardTitle = $("<h5 class='card-title'>"+cardTitleSRC+"</h5>");
  cardBodyDiv.append(cardTitle);
  cardDiv.append(cardImg, cardBodyDiv);
  $("#test").append(cardDiv);
});