$(".top-submit").on("click", function() {
  console.log("I work")
  var entry = $("#top-newEntry")
    .val()
    .trim();

  var amount = $("#top-newAmount")
    .val()
    .trim();

  var category = $("#topCategory").val();

  var newEntry = {
    entry: entry,
    amount: amount,
    category: category
  };

  //console.log("first event", newEntry);
  
  // POST route goes here
  $.post("/user/planned", newEntry).then(function(data) {
    console.log(data);
    newRow(data);
  });
});


var newRow = function(data) {
  //console.log(data);
  //-----Table Row-------//
  var row = $("<tr>")
    .attr("id", "entry-" + data.id)
    .attr("data-category", data.CategoryId);
    
  //------Entry --------//
  var td1 = $("<td>");
  var entryText = $("<div>").addClass("entryText");
  var h3 = $("<h3>").addClass("entry m-xlg-left is-size-7-mobile")
    .text(data.entry);
    
  //------Amount-------//
  var td2 = $("<td>");
  var amountText = $("<div>").addClass("amountText");
  var span = $("<span>")
    .addClass("amount m-sm-left is-size-7-mobile")
    .attr("id", "amount-" + data.id)
    .text(data.amount);

  //------save button------//
  var td3 = $("<td>");
  var saveBtn = $("<div>").addClass("saveBtn hidden");
  var saveButtonElem = $("<button>").addClass("button is-primary")
    .attr("data-section", "planned");
  var saveIcon = "<i class='far fa-save'></i>";
  saveButtonElem.html(saveIcon);
  
  //----------dropdown-------//
  var dropdown = $("<div>").addClass("dropdown");
  var dropTrigger = $("<div>").addClass("dropdown-trigger");
  var iconWrap = $("<span>")
    .attr("aria-haspopup", "true")
    .attr("aria-controls", data.id + "-menu");
  var ellipsisIcon = "<i class='icon fas fa-ellipsis-h is-medium'></i>";
  iconWrap.append(ellipsisIcon);
  var dropMenu = $("<div>")
    .addClass("dropdown-menu")
    .attr("id", data.id + "-menu")
    .attr("role", "menu");

  var dropContent = $("<div>").addClass("dropdown-content p-sm");
  dropContent.html(
    `<button class="button is-info is-fullwidth m-xsm-bottom" data-section="planned" data-action="edit" id="${data.id}_edit">Edit</button>` 
    + `<button class="button is-warning has-text-white is-fullwidth m-xsm-bottom" data-section="planned" data-action="move" id="${data.id}_move">Move</button>`
    + `<button class="button is-danger is-fullwidth" id="${data.id}_delete" data-action="delete" data-section="planned">Delete</button>`
  );

  dropMenu.append(dropContent);
  dropTrigger.append(iconWrap);
  dropdown.append(dropTrigger).append(dropMenu);


  var td4 = $("<td>");

  entryText.append(h3);
  td1.append(entryText);

  amountText.append(span);
  td2.append(amountText);

  saveBtn.append(saveButtonElem);
  td3.append(saveBtn).append(dropdown);

  console.log(td1);

  row
    .append(td1)
    .append(td2)
    .append(td3)
    .append(td4);

  console.log(row);

  var tbody = $(".entries[data-category='" + data.CategoryId + "']");


  tbody.append(row);

  
}
