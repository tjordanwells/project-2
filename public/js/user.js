//toggle is-active class for nav menu
$(".tab").on("click", function() {
  $(".tab").removeClass("is-active");
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
      .addClass("hidden");
    $(this).removeClass("fa-caret-down");
    $(this).addClass("fa-caret-up");
  }
});
