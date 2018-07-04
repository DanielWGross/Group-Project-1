var renderElements = {
  renderCard: function(api, location, image, name, price, description) {
    var templateCard = `
      <div class="col s2">
        <div class="card medium card-selection" data-id=${location}>
          <input type="checkbox" class="selectPrice" data-state="unchecked">
          <span class="selectPrice" data-state="unchecked">Compare</span>
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator card-size" src=${image}>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4 truncate">${name}<i class="material-icons right activator waves-effect">arrow_drop_up</i></span>
            <h5> ${price}</h5>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${name}<i class="material-icons right">close</i></span>
          </div>
        </div>
      </div>
    `
    if (api === "walmart") {
      $("#test").append(templateCard);
    } else {
      $("#ebay-test").append(templateCard);
    }
  }, 
}

// renderElements: function(api, location, image, name, model, price, description) {
//     var checkLabel = $("<label>")
//     var checkBox = $("<input type='checkbox'> <span>")
//     checkLabel.append(checkBox);
//     $(checkBox).text("Compare");
//     $(checkBox).addClass("selectPrice");
//     //On click change the checkBox to this 
//     // var checkBox = $("<input type='checkbox' checked> <span>")
//     //initial data-state for later use
//     checkBox.attr("data-state", "unchecked");
//     var cardColumn = $("<div class='col s2'>");
//     var card = $("<div class='card medium card-selection' data-id=" + location + ">");
//     var cardImageHolder = $("<div class='card-image waves-effect waves-block waves-light'>");
//     var cardImage = $("<img>");
//       $(cardImage).addClass("activator card-size");
//       $(cardImage).attr("src", image); 
//     var cardContent = $("<div class='card-content'>");
//     var cardTitle = $("<span class='card-title activator grey-text text-darken-4 truncate'>");
//       $(cardTitle).html(name);
//     var cardArrow = $("<i class='material-icons right activator waves-effect'>");
//       $(cardArrow).text("arrow_drop_up");
//     var cardPrice = $("<h5> $"+price+"</h5>");
//     var cardReveal = $("<div class='card-reveal'>");
//     var cardRevealTitle = $("<span class='card-title grey-text text-darken-4'>");
//       $(cardRevealTitle).html(description);
//     var cardClose = $("<i class='material-icons right'>close</i>");
//     cardRevealTitle.append(cardClose);
//     cardReveal.append(cardRevealTitle);
//     cardTitle.append(cardArrow);
//     cardContent.append(cardTitle, cardPrice);
//     cardImageHolder.append(cardImage);
//     card.append(checkBox, cardImageHolder, cardContent, cardReveal);
//     cardColumn.append(card);
//     if (api === "walmart") {
//       $("#test").append(cardColumn);
//     }
//     else {
//       $("#ebay-test").append(cardColumn);
//     }
//       },