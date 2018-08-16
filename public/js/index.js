$("#userAuth").on("click", function() {
  $(".modal").addClass("is-active");
});

$("#login").on("click", function() {
  $("#signup").removeClass("is-info is-active");
  $("#login").addClass("is-info is-active");

  $("#forms").empty();

  var form = $("<form>")
    .attr("id", "signin")
    .attr("name", "signin")
    .attr("method", "post")
    .attr("action", "/signin");

  var emailInput = input(
    "Email",
    "userEmail",
    "email",
    "email",
    "your.email@mail.com"
  );

  var passwordInput = input(
    "Password",
    "userPassword",
    "password",
    "password",
    "Enter your password"
  );

  var submit = submitBtn("Sign In", "signinSubmit");

  form
    .append(emailInput)
    .append(passwordInput)
    .append(submit);
  $("#forms").append(form);
});

$("#signup").on("click", function() {
  $("#login").removeClass("is-info is-active");
  $("#signup").addClass("is-info is-active");

  $("#forms").empty();

  var form = $("<form>")
    .attr("id", "signup")
    .attr("name", "signup")
    .attr("method", "post")
    .attr("action", "/signup");

  var name = input("Name", "username", "name", "text", "John Smith");

  form.append(name);

  var emailInput = input(
    "Email",
    "userEmail",
    "email",
    "email",
    "your.email@mail.com"
  );

  form.append(emailInput);

  var passwordInput = input(
    "Password",
    "userPassword",
    "password",
    "password",
    "Enter your password"
  );
  form.append(passwordInput);

  var submit = submitBtn("Sign Up", "signupSubmit");

  form.append(submit);

  $("#forms").append(form);
});

$("#close").on("click", function() {
  $(".modal").removeClass("is-active");
});

$("#cancel").on("click", function() {
  $(".modal").removeClass("is-active");
});

// Creates a label and text input
function input(labelText, id, name, type, placeholder) {
  var field = $("<div>").addClass("field");
  var label = $("<label>")
    .addClass("label")
    .text(labelText);

  var control = $("<div>").addClass("control");

  var input = $("<input>")
    .addClass("input")
    .attr("type", type)
    .attr("id", id)
    .attr("name", name)
    .attr("placeholder", placeholder);

  control.append(input);
  field.append(label);
  field.append(control);
  return field;
}

function submitBtn(btnText, id) {
  var field = $("<div>").addClass("field is-grouped");

  var control1 = $("<div>").addClass("control");
  var control2 = $("<div>").addClass("control");

  var input = $("<input>")
    .addClass("button is-success")
    .attr("type", "submit")
    .attr("id", id)
    .attr("value", btnText);

  var close = $("<button>")
    .addClass("button is-danger")
    .attr("id", "canel")
    .text("Cancel");

  control1.append(input);
  control2.append(close);
  field.append(control1).append(control2);
  return field;
}

