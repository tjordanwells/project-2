$(document).ready(function() {
  event.preventDefault();

  $("#signupSubmit").on("click", function(event) {
    event.preventDefault();

    var currentUser = {
      email: $("#userEmail")
        .val()
        .trim(),
      password: $("#userPassword")
        .val()
        .trim()
    };

    $.post("/signin", currentUser).then(function(data) {
      console.log(data);
    });
  });
});
