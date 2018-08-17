$("#add").on("click", function() {
  var entry = $("#newEntry")
    .val()
    .trim();

  var amount = $("#newAmount")
    .val()
    .trim();

  var category = $("#topCategory").val();

  var newEntry = {
    entry: entry,
    amount: amount,
    category: category
  };

  console.log(newEntry);
  //POST route goes here
  $.post("/user/spent", newEntry, function(data) {
    console.log(data);
  });
});

$(".add").on("click", function() {
  console.log("I work");
  var cat = $(this).attr("data-category");
<<<<<<< HEAD

=======
>>>>>>> ee5ce72a24164b2bd029fe264daf58afa068b0b5
  var entry = $("#newEntry-" + cat)
    .val()
    .trim();

  var amount = $("#newAmount-" + cat)
    .val()
    .trim();

  var newEntry = {
    entry: entry,
    amount: amount,
    cateogry: cat
  };

  console.log(newEntry);
  //POST route goes here
});
