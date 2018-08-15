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

    $.get("/api/users", currentUser).then(function(data) {
      console.log(data);
    });
  });
});
