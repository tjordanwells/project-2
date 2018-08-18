// $("#add-Income").on("click", function() {
//   var section = $(this).attr("data-section");

//   if (section === "planned") {
//     var entry = $("#newEntry")
//       .val()
//       .trim();

//     var amount = $("#newAmount")
//       .val()
//       .trim();

//     var category = $("#topCategory").val();

//     var newEntry = {
//       entry: entry,
//       amount: amount,
//       category: category
//     };

//     $.post("/user/planned", newEntry, function(data) {
//       console.log(data);
//     }).then(function() {
//       var newRow = $("<tr>")
//         .addClass("entryRow")
//         .attr("id", "entry-" + " " + data.id)
//         .attr("data-category", data.CategoryId);
//       var newTdOne = $("<td>");
//       var newTdTwo = $("<td>");
//       var newTdThree = $("<td>");
//       var newTdFour = $("<td>");
//       var entryText = $("<div>").addClass("entryText");
//       var header = $("<h3>")
//         .addClass("entry m-xlg-left is-size-7-mobile")
//         .attr("data-entry" + data.id)
//         .text(data.entry);
//       var entryEdit = $("<div>").addClass("entryInput hidden");
//       var entryInput = $("<input>")
//         .attr("type", "text")
//         .addClass("input")
//         .attr("name", "editEntry")
//         .attr("id", "editEntry-" + data.id)
//         .attr("value", data.entry);
//       var amountText = $("<div>").addClass("amountText");
//       var amountSpan = $("<span>")
//         .addClass("amount m-sm-left is-size-7-mobile")
//         .attr("id", "amount-" + data.id)
//         .text(data.amount);
//       var amountInput = $("<div>").addClass("amountInput hidden");
//       var amountEdit = $("<input>")
//         .attr("type", "text")
//         .addClass("input")
//         .attr("name", "editInput")
//         .attr("id", "editInput-" + data.id)
//         .attr("value", data.amount);
//       var saveDiv = $("<div>").addClass("saveBtn hidden");
//       var saveButton = $("<button>")
//         .addClass("button is-primary")
//         .attr("data", "planned");
//       var icon = $("<i>").addClass("far fa-save");
//       var dropdown = $("<div>").addClass("dropdown");
//       var trigger = $("<div>").addClass("dropdown-trigger");
//       var controlSpan = $("<span>")
//         .attr("aria-haspopup", true)
//         .attr("aria-controls", data.id + "-menu");
//       var ellipsis = $("<i>").addClass("icon fas fa-ellipsis-h");
//       var menu = $("<div")
//         .addClass("dropdown-menu")
//         .attr("id", data.id + "-menu")
//         .attr("role", "menu");
//       var dropdownContent = $("<div>").addClass("dropdown-content p-sm");
//       var infoBtn = $("<button>")
//         .addClass("button is-info is-fullwidth m-xsm-bottom")
//         .attr("data-section", "planned")
//         .attr("data-action", "edit")
//         .attr("id", data.id + "_edit")
//         .text("Edit");
//       var deleteBtn = $("<button>")
//         .addClass("button is-danger is-fullwidth")
//         .attr("data-section", "planned")
//         .attr("data-action", "delete")
//         .attr("id", data.id + "_delete")
//         .text("Delete");
//       $(".entryRow")
//         .append(newRow)
//         .appendChild(newTdOne);
//       newTdOne.appendChild(entryText);
//       entryText.appendChild(header);
//       entryText.append(entryInput);
//       entryInput.appendChild(entryEdit);
//       newTdOne.append(newTdTwo);
//       newTdTwo.appendChild(amountText);
//       amountText.appendChild(amountSpan);
//       amountText.append(amountInput);
//       amountInput.appendChild(amountEdit);
//       newTdTwo.append(newTdThree);
//       newTdThree.appendChild(saveDiv);
//       saveDiv.appendChild(saveButton);
//       saveButton.appendChild(icon);
//       saveDiv.append(dropdown);
//       dropdown.appendChild(trigger);
//       trigger.appendChild(controlSpan);
//       controlSpan.appendChild(ellipsis);
//       dropdown.append(menu);
//       menu.appendChild(dropdownContent);
//       dropdownContent.appendChild(infoBtn);
//       infoBtn.append(deleteBtn);
//       newTdThree.append(newTdFour);
//     });
//   } else {
//     var entry = $("#newEntry")
//       .val()
//       .trim();

//     var amount = $("#newAmount")
//       .val()
//       .trim();

//     var category = $("#topCategory").val();

//     var newEntry = {
//       entry: entry,
//       amount: amount,
//       category: category
//     };

//     $.post("/user/spent", newEntry, function(data) {
//       console.log(data);
//     });
//   }
// });

// $(".add").on("click", function() {
//   console.log("I work");
//   var cat = $(this).attr("data-category");
//   var entry = $("#newEntry-" + cat)
//     .val()
//     .trim();

//   var amount = $("#newAmount-" + cat)
//     .val()
//     .trim();

//   var newEntry = {
//     entry: entry,
//     amount: amount,
//     cateogry: cat
//   };

//   console.log(newEntry);
//   //POST route goes here
// });

$("#add").on("click", function() {
  var entry = $("#newEntry")
    .val()
    .trim();

  var amount = $("#newAmount")
    .val()
    .trim();

  var category = $("#topCategory").val();

  var newEntry = {
    entry: entry,
    amount: amount,
    category: category
  };

  console.log("first event", newEntry);
  // POST route goes here
  $.post("/user/planned", newEntry).then(function(data) {
    console.log(data);
    var newRow = $("<tr>")
      .addClass("entryRow")
      .attr("id", "entry-" + data.id)
      .attr("data-category", data.CategoryId);
    var newTdOne = $("<td>");
    var newTdTwo = $("<td>");
    var newTdThree = $("<td>");
    var newTdFour = $("<td>");
    var entryText = $("<div>").addClass("entryText");
    var header = $("<h3>")
      .addClass("entry m-xlg-left is-size-7-mobile")
      .attr("data-entry", data.id)
      .text(data.entry);
    var entryEdit = $("<div>").addClass("entryInput hidden");
    var entryInput = $("<input>")
      .attr("type", "text")
      .addClass("input")
      .attr("name", "editEntry")
      .attr("id", "editEntry-" + data.id)
      .attr("value", data.entry);
    var amountText = $("<div>").addClass("amountText");
    var amountSpan = $("<span>")
      .addClass("amount m-sm-left is-size-7-mobile")
      .attr("id", "amount-" + data.id)
      .text(data.amount);
    var amountInput = $("<div>").addClass("amountInput hidden");
    var amountEdit = $("<input>")
      .attr("type", "text")
      .addClass("input")
      .attr("name", "editInput")
      .attr("id", "editInput-" + data.id)
      .attr("value", data.amount);
    var saveDiv = $("<div>").addClass("saveBtn hidden");
    var saveButton = $("<button>")
      .addClass("button is-primary")
      .attr("data", "planned");
    var icon = $("<i>").addClass("far fa-save");
    var dropdown = $("<div>").addClass("dropdown");
    var trigger = $("<div>").addClass("dropdown-trigger");
    var controlSpan = $("<span>")
      .attr("aria-haspopup", true)
      .attr("aria-controls", data.id + "-menu");
    var ellipsis = $("<i>").addClass("icon fas fa-ellipsis-h");
    var menu = $("<div>")
      .addClass("dropdown-menu")
      .attr("id", data.id + "-menu")
      .attr("role", "menu");
    console.log(amountSpan);
    var dropdownContent = $("<div>").addClass("dropdown-content p-sm");
    var infoBtn = $("<button>")
      .addClass("button is-info is-fullwidth m-xsm-bottom")
      .attr("data-section", "planned")
      .attr("data-action", "edit")
      .attr("id", data.id + "_edit")
      .text("Edit");
    var deleteBtn = $("<button>")
      .addClass("button is-danger is-fullwidth")
      .attr("data-section", "planned")
      .attr("data-action", "delete")
      .attr("id", data.id + "_delete")
      .text("Delete");
    var tbody = $(".entries[data-category='" + data.CategoryId + "']");
    tbody.append(newRow);
    newTdOne.appendTo(newRow);
    entryText.appendTo(newTdOne);
    header.appendTo(newTdOne);
    entryText.append(entryInput);
    entryEdit.appendTo(entryInput);
    newTdOne.append(newTdTwo);
    amountText.appendTo(newTdTwo);
    amountSpan.appendTo(amountText);
    amountText.append(amountInput);
    amountEdit.appendTo(amountInput);
    newTdTwo.append(newTdThree);
    saveDiv.appendTo(newTdThree);
    saveButton.appendTo(saveDiv);
    icon.appendTo(saveDiv);
    saveDiv.append(dropdown);
    trigger.appendTo(dropdown);
    controlSpan.appendTo(trigger);
    ellipsis.appendTo(controlSpan);
    dropdown.append(menu);
    dropdownContent.appendTo(menu);
    infoBtn.appendTo(dropdownContent);
    infoBtn.append(deleteBtn);
    newTdThree.append(newTdFour);
  });
});

// $("#newEntry").val("");
// $("#newAmount").val("");
// $("#topCategory").val("select");
// location.reload(false);

// $(".add").on("click", function() {
//   var cat = $(this).attr("data-category");

//   var entry = $("#newEntry-" + cat)
//     .val()
//     .trim();

//   var amount = $("#newAmount-" + cat)
//     .val()
//     .trim();

//   var newEntry = {
//     entry: entry,
//     amount: amount,
//     cateogry: cat
//   };

//   console.log("second event", newEntry);
//   $.post("/user/planned", newEntry).then(function(data) {
//     console.log(data);
//   });
// });
