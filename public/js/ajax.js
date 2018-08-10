$("#signup").on("click", function(event) {
  event.preventDefault();
  var newUser = {
    email: $("#userEmail").val().trim(),
    password: $("#userPassword").val().trim(),
    name: $("#username").val().trim()
  };

  $.post("/api/users", newUser).then(function(data) {
    console.log(data);
  });
});
