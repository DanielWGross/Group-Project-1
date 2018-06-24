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
    console.log(response);
    console.log(response.items[0].largeImage);
    for (i = 0; i < 10; i++) {
      var img = $("<img>");
      var modalHeader = response.items[i].name;
      var modalBody = response.items[i].shortDescription;
      var modalPrice = response.items[i].salePrice;
      var button = $("<button type='button' class='btn btn-primary modal-button' data-toggle='modal' data-target='#exampleModal'>Launch modal "+i+"</button>");
      button.attr("data-body", modalBody);
      button.attr("data-header", modalHeader);
      button.attr("data-price", modalPrice);
      img.addClass("image-size border border-dark")
      img.attr("src", response.items[i].largeImage);
      $("#test").append(img, button);
    };
  });
});

$(document).on("click", ".modal-button", function(event) {
  event.preventDefault();
  console.log($(this).attr("data-header"));
  $(".modal-title").text($(this).attr("data-header"));
  $(".modal-body").text($(this).attr("data-body"));
  $("#modal-price").text($(this).attr("data-price"));
})
