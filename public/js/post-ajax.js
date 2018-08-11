$(document).ready(function() {
  $("#signup").on("click", function(event) {
    event.preventDefault();
    var newUser = {
      email: $("#userEmail")
        .val()
        .trim(),
      password: $("#userPassword")
        .val()
        .trim(),
      name: $("#username")
        .val()
        .trim()
    };

    $.post("/api/users", newUser).then(function(data) {
      console.log(data);
    });
  });



  //adding income source and amount
  $("#addIncome").on("click", function(event) {
    event.preventDefault();
    alert("button is working...");
    var newIncome = {
      entry: $("#newEntryIncome")
        .val()
        .trim(),
      amount: $("#newAmountIncome")
        .val()
        .trim()
    };
    //unsure if this is the correct post path...
    $.post("/api/users/planned/income", newIncome).then(function(data) {
      console.log(data);
    });
  });

  //adding housing source and amount
  $("#addHousing").on("click", function(event) {
    event.preventDefault();
    var newHouse = {
      entry: $("#newEntryHousing")
        .val()
        .trim(),
      amount: $("#newAmountHousing")
        .val()
        .trim()
    };
    $.post("/api/users/planned/expense", newHouse).then(function(data) {
      console.log(data);
    });
  });

  //adding transportation source and amount
  $("#addTransportation").on("click", function(event) {
    event.preventDefault();
    var newTrans = {
      entry: $("#newEntryTransportation")
        .val()
        .trim(),
      amount: $("#newAmountTransportation")
        .val()
        .trim()
    };
    $.post("/api/users/planned/expense", newTrans).then(function(data) {
      console.log(data);
    });
  });

  //adding savings source and amount
  $("#addSavings").on("click", function(event) {
    event.preventDefault();
    var newSavings = {
      entry: $("#newEntrySavings")
        .val()
        .trim(),
      amount: $("#newAmountSavings")
        .val()
        .trim()
    };
    $.post("/api/users/planned/expense", newSavings).then(function(data) {
      console.log(data);
    });
  });

  //adding debt source and amount
  $("#addDebt").on("click", function(event) {
    event.preventDefault();
    var newDebt = {
      entry: $("#newEntryDebt")
        .val()
        .trim(),
      amount: $("#newAmountDebt")
        .val()
        .trim()
    };
    $.post("/api/users/planned/expense", newDebt).then(function(data) {
      console.log(data);
    });
  });

  //adding food source and amount
  $("#addFood").on("click", function(event) {
    event.preventDefault();
    var newFood = {
      entry: $("#newEntryFood")
        .val()
        .trim(),
      amount: $("#newAmountFood")
        .val()
        .trim()
    };
    $.post("/api/users/planned/expense", newFood).then(function(data) {
      console.log(data);
    });
  });

  //adding misc source and amount
  $("#addMisc").on("click", function(event) {
    event.preventDefault();
    var newMisc = {
      entry: $("#newEntryMisc")
        .val()
        .trim(),
      amount: $("#newAmountMisc")
        .val()
        .trim()
    };
    $.post("/api/users/planned/expense", newMisc).then(function(data) {
      console.log(data);
    });
  });
});
