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
