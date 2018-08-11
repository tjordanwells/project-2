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
      //.addClass("flex-center");
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
<<<<<<< HEAD

console.log("I work");

// ajax call to add new user on sign-up
$("#signup").on("click", function(event) {
  event.preventDefault();

  var newUser = {
    email: $("#userEmail").val().trim(),
    password: $("#userPassword").val().trim(),
    name: $("#userName").val().trim()
  };

  $.post("/api/users", newUser).then(function(data) {
    console.log(data);
  });
});
=======
>>>>>>> 6c37de0b0e4e45622e3c0651b0dba9c91386aaec
