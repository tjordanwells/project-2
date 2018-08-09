$(".tab").on("click", function() {
  alert("I work!");
});

$(document).on("click", function() {
  alert("I work!");
});

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
