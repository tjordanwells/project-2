// $("#add").on("click", function() {
//   var entry = $("#newEntry")
//     .val()
//     .trim();

//   var amount = $("#newAmount")
//     .val()
//     .trim();

//   var category = $("#topCategory").val();

//   var newEntry = {
//     entry: entry,
//     amount: amount,
//     category: category
//   };

//   console.log(newEntry);
//   //POST route goes here
//   $.post("/user/spent", newEntry, function(data) {
//     console.log(data);
//   });
// });

// $("button[data-action='add']").on("click", function() {
//   console.log("I work");
//   var cat = $(this).attr("data-category");
//   var entry = $("#newEntry-" + cat)
//     .val()
//     .trim();

//   var amount = $("#newAmount-" + cat)
//     .val()
//     .trim();

//   var newEntry = {
//     entry: entry,
//     amount: amount,
//     cateogry: cat
//   };

//   console.log(newEntry);
//   //POST route goes here
// });

// Two Planned click events
$(".top-submit[data-action='add']").on("click", function() {
  var entry = $("#top-newEntry")
    .val()
    .trim();

  var amount = $("#top-newAmount")
    .val()
    .trim();

  var category = $("#topCategory").val();

  var newEntry = {
    entry: entry,
    amount: amount,
    category: category
  };

  console.log("first event", newEntry);
  // POST route goes here
  $.post("/user/planned", newEntry).then(function(data) {
    console.log(data);
  });

  $("#newEntry").val("");
  $("#newAmount").val("");
  $("#topCategory").val("select");
});

$(".table-submit").on("click", function() {
  var cat = $(this).attr("data-category");
  var entry = $("#table-newEntry-" + cat)
    .val()
    .trim();

  var amount = $("#table-newAmount-" + cat)
    .val()
    .trim();

  var newEntry = {
    entry: entry,
    amount: amount,
    cateogry: cat
  };

  console.log("second event", newEntry);
  $.post("/user/planned", newEntry).then(function(data) {
    console.log(data);
  });
});
