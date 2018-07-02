  // Storing number of results as a variable gloablly. Should look to implement a user setting
var numResults = 5;
// Gloabl variable which will house the JSON from the AJAX calls to pass on to other functions
var storage = {
  // All data should be coming in from the walmart.js file
  walmart : {
    // storing the JSON from the Walmart call
    response: {},
    // Default status set to false. Will ensure function does not run unless result is back
    apiReturn: false,
    // Will extract relevant data from the JSON call and pass to render function
    pullData: function() {
      for (i= 0; i < numResults; i++) {
        // console.log("Pull Data Running!");
        // variable to store location to avoid repetive typing
        var location = this.response.items[i];
        // largest image size avaliable
        var image = location.largeImage;
        // name contains short name and short description
        // TODO: Open issue to try to extract both values seperate
        var name = location.name;
        // model number. Not avaliable on all results
        var model = location.modelNumber;
        // Using sale price, not MSRP
        var price = location.salePrice;
        // Long description of the product
        var description = location.longDescription;
        // Call the render function to generate the cards on the index.html file
        // TODO: Create renderfunction
        storage.renderElements("walmart", i, image, name, model, price, description);
      };
    }
    },
  ebay : {
    response: {
      name: [],
      image: [],
      price: [],
      description: [],
      URL: [],
    },
    apiReturn: false,
    pullData: function () {
      var data = storage.ebay.response;
      if (this.apiReturn === true) {
      for (var i = 0; i < numResults; i++) {
        var image = this.response.image[i];
        var name = this.response.name[i];
        var model = "model";
        var price = this.response.price[i];
        var description = this.response.description[i];
        storage.renderElements("ebay", i, image, name, model, price, description);
        }
      }     
    }
  },


  renderElements: function(api, location, image, name, model, price, description) {
    // console.log("Render Elements Running!");
    var cardColumn = $("<div class='col xl2 col l3  col m4  col  s12  col xs12'>");
    var card = $("<div class='card card-selection' data-id=" + location + ">");
    var cardImageHolder = $("<div class='card-image waves-effect waves-block waves-light'>");
    var cardImage = $("<img>");
      $(cardImage).addClass("activator card-size");
      $(cardImage).attr("src", image); 
    var cardContent = $("<div class='card-content'>");
    var cardTitle = $("<span class='card-title activator grey-text text-darken-4 truncate'>");
      $(cardTitle).text(name);
    var cardArrow = $("<i class='material-icons right activator waves-effect'>");
      $(cardArrow).text("arrow_drop_up");
    var cardPrice = $("<h5> $"+price+"</h5>");
    var cardReveal = $("<div class='card-reveal'>");
    var cardRevealTitle = $("<span class='card-title grey-text text-darken-4'>");
      $(cardRevealTitle).text(name);
    var cardClose = $("<i class='material-icons right'>close</i>");
    cardRevealTitle.append(cardClose);
    cardReveal.append(cardRevealTitle);
    cardTitle.append(cardArrow);
    cardContent.append(cardTitle, cardPrice);
    cardImageHolder.append(cardImage);
    card.append(cardImageHolder, cardContent, cardReveal);
    cardColumn.append(card);
    if (api === "walmart") {
      $("#test").append(cardColumn);
    }
    else {
      $("#ebay-test").append(cardColumn);
    }
    
  },
  renderCompare: function(image, name, price, description) {
    // HTML elements for top header
    var container = $("<container>");
    var headerDiv = $("<div class='center-align'>");
    var headerTitle = $("<h1>Compare Products</h1>");
    var headerLink = $("<a href='#'>Choose Other Products To Compare</a>");

    // HTML elements for Product section
    var section = $("<div class='section'>");
    var row = $("div class='row'");
    var productTitle = $("<h5>Product</h5>");
    var diverWMargin = $("<div class='divider margin-20'>");

  //   <div class="container">
  //   <div class="center-align" id="header-wrapper">
  //     <h1 class="center-align">Compare Products</h1>
  //     <a href="#">Choose Other Products To Compare</a>
  //   </div> 

  //   <div class="section">
  //     <div class="row">
  //       <h5>Product</h5>
  //       <div class="divider margin-20"></div>

  //       <div class="col s6 center-align">
  //         <img src="assets/images/charlie.jpg" height="300px" width="300px">
  //         <h3 class="center-align flow-text">$49.99</h3>
  //         <div class="center-align" id="link-wrapper">
  //           <div class="row">
              
  //             <div class="col s6 offset-s3 center-align">
  //               <a href="#" class="left">Learn More</a>
  //               <a href="#" class="right">Add to Cart</a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col s6 center-align">
  //         <img src="assets/images/colt.jpg" height="300px" width="300px">
  //         <h3 class="center-align flow-text">$49.99</h3>
  //         <div class="row">
  //           <div class="col s6 offset-s3 center-align">
  //             <a href="#" class="left">Learn More</a>
  //             <a href="#" class="right">Add to Cart</a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div class="section">
  //     <div class="row">
  //       <h5>Product Description</h5>
  //       <div class="divider"></div>
  //       <div class="col s5">
  //         <p class="flow-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  //       </div>
  //       <div class="col s5 offset-s2">
  //         <p class="flow-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  }
};
$("#search").keypress(function(event) {
  var searchTerm = $("#search").val().trim();
  if (event.which === 13) {
    
    // userValidation(searchTerm);
    searchHandler(searchTerm);
  };
});

function searchHandler (searchTerm) {
  // prevents default submition //
  event.preventDefault();
  $("#test").empty();
  ebay.callAPI(searchTerm);
  walmart.callAPI(searchTerm);
};

var counter = 0;

var compareItem1 = {
  image: "",
  name: "",
  price: "",
  description: "",

};

var compareItem2 = {
  image: "",
  name: "",
  price: "",
  description: "",
}

$(".card").on("click", function(){
  counter++;
  if (counter === 1) { //if using walmart data need to make sure clicked on walmart card
    var index = this.attr("data-id").val();
    var storageLocation = storage.walmart.response.items[index];
    compareItem1.image = storageLocation.largeImage;
    compareItem1.price = storageLocation.salePrice;
    compareItem.name = storageLocation.name;
    compareItem1.description = stroageLocation.description;
  }
  if (counter === 2) {
    var index = this.attr("data-id").val();
    var storageLocation = storage.ebay.response;
    compareItem2.image = storageLocation.image[index];
    compareItem2.name = storageLocation.name[index];
    compareItem2.price = storageLocation.price[index];
    compareItem2.description = storageLocation.description[index];
    clearPage();
  }
});

function clearPage() {
  $(".nav-wrapper").empty();
  $(".wrapper").empty();
};


//  compare user input input  
function userValidation(userInput){
  
  event.preventDefault();

  // regex this regex only allow lower alphabet, Upper alphabet, number, and spaces
  var regex=/^[a-zA-Z0-9 ]*$/;

    //this logic order MATTER. First, we check if the users input is empty
    if(userInput == ""){
    
      $(".modalText").text("Please input something.We worked hard for it!!");
     
      renderingModal();
    }

    //Second, we compare users input with our regex. 
    else if(regex.test(userInput)){
      
      console.log("asds no symbol")
      
    }
    // Last, when we find special characters in users input
    else{
      
      $(".modalText").text("Don't put any special characters BRO!!!");

      renderingModal();
    
    }

};// end regexInput

// function  to render pop up modal for user validation
function renderingModal(){
 
  var modal= $("#validationModal").css("display","block");

  $(".closeModal").on("click",function(){

    $(modal).css("display","None");

  });

  // $(window).on("click",function(event){
    
  //   if (event.target == modal) {
      
  //     $(modal).css("display","None");
  // }
  // });
};