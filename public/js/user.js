//toggle is-active class for nav menu
$(".tab").on("click", function() {
  $(this).removeClass("has-text-grey-lighter");
  $(this)
    .siblings(".tab")
    .addClass("has-text-grey-lighter");
});

//toggles the entries for all categories
$(".caret-margin").on("click", function() {
  var id = "#" + $(this).attr("data-category");
  var isHidden = $(id + "> .entries").hasClass("hidden");
  if (isHidden) {
    $(id)
      .children(".entries")
      .removeClass("hidden");
    $(this).removeClass("fa-caret-up");
    $(this).addClass("fa-caret-down");
  } else {
    $(id)
      .children(".entries")
      .addClass("hidden")
      .removeClass("flex-center");
    $(this).removeClass("fa-caret-down");
    $(this).addClass("fa-caret-up");
  }
});

$(".fa-ellipsis-h").on("click", function() {
  var $dropdown = $(this).parents(".dropdown");
  var active = $dropdown.hasClass("is-active");
  if (active) {
    $dropdown.removeClass("is-active");
  } else {
    $dropdown.addClass("is-active");
  }
});

$(".dropdown-content > button").on("click", function() {
  var action = $(this)
    .attr("id")
    .split("-");
  console.log(action);

  if (action[1] === "edit") {
    alert("edit me! " + id);
  } else if (action[1] === "move") {
    alert("move me!");
  } else if (action[1] === "delete") {
    alert("remove me!");
  }
});

$(".add").on("click", function() {
  var action = $(this)
    .attr("id")
    .split("-");
  var cat = action[1];
  console.log(action);
  var newEntry = {
    name: $("#newEntry" + cat)
      .val()
      .trim(),
    amount: $("#newAmount" + cat)
      .val()
      .trim(),
    category: $("#category" + cat).val()
  };
  console.log(newEntry);
});

$("#addEntry").on("click", function() {
  var newEntry = {
    name: $("#newEntry")
      .val()
      .trim(),
    amount: $("#newAmount")
      .val()
      .trim(),
    category: $("#topCategory")
      .val()
      .trim()
  }
  console.log(newEntry);
});
