var $login = $("#login");

$login.on("click", function() {
  $.ajax("/user", { type: "GET" });
});
