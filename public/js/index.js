$("#userAuth").on("click", function() {
  $(".modal").addClass("is-active");
});

$("#login").on("click", function() {
  $("#signup").removeClass("is-info is-active");
  $("#login").addClass("is-info is-active");

  $("#forms").empty();

  var emailInput = textInput("Email", "userEmail", "your.email@mail.com");
  $("#forms").append(emailInput);

  var passwordInput = textInput(
    "Password",
    "userPassword",
    "Enter your password"
  );
  $("#forms").append(passwordInput);
});

$("#signup").on("click", function() {
  $("#login").removeClass("is-info is-active");
  $("#signup").addClass("is-info is-active");

  $("#forms").empty();
  var message = $("<p>").text("Enter your email to register");
  $("#forms").append(message);

  var emailInput = textInput("Email", "userEmail", "your.email@mail.com");
  $("#forms").append(emailInput);

  var passwordInput = textInput(
    "Password",
    "userPassword",
    "Enter your password"
  );
  $("#forms").append(passwordInput);

  var confirmPasswordInput = textInput(
    "Re-Enter Password",
    "confirmPassword",
    "Enter your password"
  );
  $("#forms").append(confirmPasswordInput);

  $("#submit").text("Sign up!");
});

$("#close").on("click", function() {
  $(".modal").removeClass("is-active");
});

$("#cancel").on("click", function() {
  $(".modal").removeClass("is-active");
});

// Creates a label and text input
function textInput(labelText, id, placeholder) {
  var field = $("<div>").addClass("field");
  var label = $("<label>")
    .addClass("label")
    .text(labelText);

  var control = $("<div>").addClass("control");

  var input = $("<input>")
    .addClass("input")
    .attr("type", "text")
    .attr("id", id)
    .attr("placeholder", placeholder);

  control.append(input);
  field.append(label);
  field.append(control);
  return field;
}
