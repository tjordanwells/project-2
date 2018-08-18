//toggle is-active class for nav menu
$(".tab").on("click", function() {
  $(this).removeClass("has-text-grey-lighter");
  $(this)
    .siblings(".tab")
    .addClass("has-text-grey-lighter");
});

//close modal listener
$(".delete[aria-label='close']").on("click", function() {
  $(".modal").removeClass("is-active");
  $(".modal-card-title").empty();
  $(".modal-card-body").empty();
});

$(".button[aria-label='close']").on("click", function() {
  $(".modal").removeClass("is-active");
  $(".modal-card-title").empty();
  $(".modal-card-body").empty();
});

//toggles the entries for all categories
$(".caret-margin").on("click", function() {
  var id = "#cat-" + $(this).attr("data-category");
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

//Activates actions popup
var dropdownlistener = function() {
  $(".dropdown-trigger").on("click", function() {
    var $dropdown = $(this).parents(".dropdown");
    var active = $dropdown.hasClass("is-active");
    if (active) {
      $dropdown.removeClass("is-active");
    } else {
      $dropdown.addClass("is-active");
    }
    dropdownContentListener();
  });
};

var dropdownContentListener = function() {
  $(".dropdown-content > button").on("click", function() {
    var $action = $(this).attr("data-action");
    var idData = $(this)
      .attr("id")
      .split("_");

    console.log(idData);
    $(".dropdown").removeClass("is-active");
  
    var catId = idData[0].split[0];
    if ($action === "edit") {
      if(id.split("-")[0] ==="cat"){
        categoryEditToggleOn(catId);
      }else{
        toggleInputOn("entry-" + id);
      }
      
    } else if ($action === "move") {
      $(".modal").addClass("is-active");
      moveModal(id);
    } else if ($action === "delete") {
      $(".modal").addClass("is-active");
      deleteModal(id);
    }

    saveListener(id);
  });
};

var saveListener = function(id) {
  $(".saveBtn").on("click", function() {
    toggleInputOff(id);
  });
};


var toggleInputOn = function(id) {
  var $entryText = $("#" + id + " td:nth-child(1) > .entryText");
  var $entryInput = $("#" + id + " td:nth-child(1) > .entryInput");

  var $amountText = $("#" + id + " td:nth-child(2) > .amountText");
  var $amountInput = $("#" + id + " td:nth-child(2) > .amountInput");

  var $dropdown = $("#" + id + " td:nth-child(3) .dropdown-trigger");
  var $save = $("#" + id + " td:nth-child(3) > .saveBtn");

  $entryText.addClass("hidden");
  $entryInput.removeClass("hidden");
  $amountText.addClass("hidden");
  $amountInput.removeClass("hidden");
  $dropdown.addClass("hidden");
  $save.removeClass("hidden");
  $(".dropdown").removeClass("is-active");
};

var toggleInputOff = function(id) {
  var $entryText = $("#" + id + " td:nth-child(1) > .entryText");
  var $entryInput = $("#" + id + " td:nth-child(1) > .entryInput");

  var $amountText = $("#" + id + " td:nth-child(2) > .amountText");
  var $amountInput = $("#" + id + " td:nth-child(2) > .amountInput");

  var $dropdown = $("#" + id + " td:nth-child(3) .dropdown-trigger");
  var $save = $("#" + id + " td:nth-child(3) > .saveBtn");

  $entryText.removeClass("hidden");
  $entryInput.addClass("hidden");
  $amountText.removeClass("hidden");
  $amountInput.addClass("hidden");
  $dropdown.removeClass("hidden");
  $save.addClass("hidden");
};

var moveModal = function(entryId) {
  var $title = $(".modal-card-title");
  var $body = $(".modal-card-body");

  $body.empty();

  var entryCat = entryId.split("-")[0];
  entryCat = entryCat[0].toUpperCase() + entryCat.slice(1);
  var entry = $("#" + entryId + " td:nth-child(1) h3").text();
  $title.html("<p class='modal-card-title'>Move Entry</p>");

  var $message = $("<p>").addClass("has-text-weight-bold");
  $message.text(`Move \"${entry}\" from \"${entryCat}\" to: `);


  var $selectDiv = $("<div>").addClass("select m-md");
  var $select = $("<select>");
  var $defaultOpt = $("<option>").text("Select Category");

  $select.append($defaultOpt);
  $("#catText h3[data-category]").each(function() {
    var category = $(this).text();
    var option = $("<option>")
      .text(category)
      .attr("value", $(this).attr("data-category"));
    $($select).append(option);
  });

  $selectDiv.append($select);
  $body.append($message).append($selectDiv);
  $(".modal-card-foot :nth-child(1)")
    .removeClass("is-danger")
    .addClass("is-success")
    .text("Save Changes");
  
  $(".modal-card-foot :nth-child(2)")
    .removeClass("is-danger")
    .addClass("is-info");
};

var deleteModal = function (entryId) {
  var $title = $(".modal-card-title");
  var $body = $(".modal-card-body");

  $body.empty();

  var entryCat = entryId.split("-")[0];
  entryCat = entryCat[0].toUpperCase() + entryCat.slice(1);
  var entry = $("#" + entryId + " td:nth-child(1) h3").text();
  $title.html("<p class='modal-card-title'>Are You Sure?</p>");
  var $message = $("<p>")
    .addClass("has-text-weight-bold")
    .text(`Are you sure you wish to delete ${entryId}?`);

  $body.append($message);
  $(".modal-card-foot :nth-child(1)")
    .removeClass("is-success")
    .addClass("is-danger")
    .text("Delete");
  
  $(".modal-card-foot :nth-child(2)")
    .removeClass("is-danger")
    .addClass("is-info");
}

//toggle category edit
var categoryEditToggleOn = function(id) {
  id = "#catInput" + id;
 
}

dropdownlistener();


