
alert ("connected")
//get values from the Search button
$(".btn-primary").on("click", function(event){
  //to prevent submission 
  event.preventDefault();

  //extract values from input form 
  var itemToSearch = $("#search-item-input").val();

  console.log(itemToSearch);

  //Initialize Walmart and ebay API call
});
