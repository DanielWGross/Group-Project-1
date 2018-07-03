function ebaySearch() {
  vex.dialog.prompt({
    message: 'What is your EBay Search API Key?',
    placeholder: 'API Key',
    callback: function (value) {
      localStorage.setItem("ebaySearch", value);
    }
  });
};

function ebayShop() {
  vex.dialog.prompt({
    message: 'What is your EBay Shopping API Key?',
    placeholder: 'API Key',
    callback: function (value) {
      localStorage.setItem("ebayShop", value);
    }
  });
};

function walmartSearch() {
  vex.dialog.prompt({
    message: 'What is your Walmart API Key?',
    placeholder: 'API Key',
    callback: function (value) {
      localStorage.setItem("walmartSearch", value);
    }
  });
};