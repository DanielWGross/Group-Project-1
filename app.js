$(document).on("click", "#submit-button", function (event) {
  $("#test").empty();
  event.preventDefault();
  var userSearch = $("#searchTerm").val().trim();
  walmart.callAPI(userSearch);
});
$(document).on("click", ".modal-button", function(event) {
  event.preventDefault();
  $(".modal-title").text($(this).attr("data-header"));
  $(".modal-body").text($(this).attr("data-body"));
  $("#modal-price").text($(this).attr("data-price"));
});

$(document).on("click", ".card", function() {
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