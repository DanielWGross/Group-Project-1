var renderElements = {
  renderCard: function(api, location, image, name, price, description) {
    var templateCard = `
      <div class="col s2">
        <div class="card medium card-selection" data-id=${location}>
        <label for="checkbox-${location}">
        <input type="checkbox" id="checkbox-${location}" class="filled-in">
        <span>Compare</span>
        </label>
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator margin-lr-auto card-size" src=${image}>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4 truncate">${name}<i class="material-icons right activator waves-effect">arrow_drop_up</i></span>
            <h5>$ ${price}</h5>
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
};