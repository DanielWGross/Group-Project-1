// compare user input with our restriction
function userValidation(userInput){
    event.preventDefault();
    // This Regular Expression only allow lower alphabet, Upper alphabet, numbers, single quote, double quites and spaces between words
    var regex= /^[a-zA-Z0-9 "']*$/;
    // first, we check if the input is empty
    if(userInput == ""){
      vex.dialog.alert('Please enter a product to search.')
      return false;
    }
    // check if the input is validated
    else if(regex.test(userInput)){
      return true;
    }
    // Last, when we find special characters or symbols in users input
    else{
      vex.dialog.alert('Please enter your search again without any special characters. (Example: $, @, #, etc)')
      return false;
    };
  };