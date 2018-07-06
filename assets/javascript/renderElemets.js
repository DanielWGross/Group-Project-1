var renderElements = {
  renderSearch: function() {
    var template = `
      <nav class="margin-20">
        <div class="nav-wrapper teal lighten-2">
          <div class="row">
            <div class="col s3">
            </div>
            <div class="col s6">
              <form>
                <div class="input-field search-height">
                  <input id="search" type="search" placeholder="Search Here">
                  <label for="search"><i class="material-icons">search</i></label>
                </div>
              </form>
            </div>
            <div id="logoCol"class="col s3">
              <a href="https://github.com/DanielWGross/Group-Project-1" target="_blank">
              <img id="git-logo" src="assets/images/githubLogo.svg">
              </a> 
              <a href="api.html" target="_blank">
              <img id="apiKey-logo" src="assets/images/apiLogo.png" href="api.html">
              </a> 
            </div>
          </div>
        </div>
      </nav>

      <div class="progress">
        <div class="indeterminate"></div>
      </div>

      <div class="wrapper">
        <div class="row">
          <div id="walmart"></div>
        </div>
        <div class="row">
          <div id="ebay"></div>
        </div>
      </div>
    `
    $("body").empty();
    $("body").append(template);
  },
  renderCard: function(api, location, image, name, price) {
    var template = `
      <div class="col s2">
        <div class="card medium card-selection" data-id=${location}>
        <label for="checkbox-${api}${location}">
        <input type="checkbox" id="checkbox-${api}${location}" class="filled-in box" data-id="${location}">
        <span>Compare</span>
        </label>
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator margin-lr-auto card-size" src=${image}>
          </div>
          <div class="card-content teal lighten-2">
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
      $("#walmart").append(template);
    } else {
      $("#ebay").append(template);
    }
  }, 
  renderCompare: function(walmartIndex, ebayIndex) {
    var walmart = {
      name: storage.walmart.response.items[walmartIndex].name,
      price: storage.walmart.response.items[walmartIndex].salePrice,
      image: storage.walmart.response.items[walmartIndex].largeImage,
      addCart: storage.walmart.response.items[walmartIndex].addToCartUrl,
      learnMore: storage.walmart.response.items[walmartIndex].productUrl
    };
    var ebay = {
      name: storage.ebay.response.name[ebayIndex],
      price: storage.ebay.response.price[ebayIndex],
      image: storage.ebay.response.image[ebayIndex],
      addCart: storage.ebay.response.URL[ebayIndex],
      learnMore: storage.ebay.response.URL[ebayIndex]
    };
    var template = `
      <div class="container">
        <div class="center-align">
          <h1>Compare Products</h1>
          <p id="newSearch" class="center-align teal-text lighten-2">Choose Other Products To Compare > </p>
        </div>
        <div class="section">
          <div class="row">
            <h5>Product</h5>
            <div class="divider teal lighten-2 margin-20"></div>
            <div class="col s6 center-align">
              <img src="${walmart.image}" class="card-size" />
              <h3 class="center=align flow-text">$${walmart.price}</h3>
              <div class="center-align">
                <div class="row">
                  <div class="col s6 offset-s3 center-align">
                    <a href="${walmart.addCart}" class="right teal-text lighten-2" target="_blank">Add to Cart > </a>
                    <a href="${walmart.learnMore}" class="left teal-text lighten-2" target="_blank">Learn More > </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s6 center-align">
              <img src="${ebay.image}" class="card-size" />
              <h3 class="center=align flow-text">$${ebay.price}</h3>
              <div class="center-align">
                <div class="row">
                  <div class="col s6 offset-s3 center-align">
                    <a href="${ebay.addCart}" class="right teal-text lighten-2" target="_blank">Add to Cart > </a>
                    <a href="${ebay.learnMore}" class="left teal-text lighten-2" target="_blank">Learn More > </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <h5>Product Description</h5>
            <div class="divider teal lighten-2"></div>
            <div class="col s5">
              <p class="flow-text">${walmart.name}</p>
            </div>
            <div class="col s5 offset-s2">
              <p class="flow-text">${ebay.name}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    $("body").empty();
    $("body").append(template);
  },
  renderLoading: function ajaxLoader() {
    $(document).ajaxStart(function(){
      $(".progress").css("display", "block");
    });
    $(document).ajaxComplete(function(){
      $(".progress").css("display", "none");
    }); 
  } 
};