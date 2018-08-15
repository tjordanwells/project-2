window.addEventListener("resize", resize);

function resize () {
  if ($(window).width() < 600) {

    //layout
    $("#budget")
      .removeClass("p-md")
      .addClass("p-sm");
    $(".icon")
      .removeClass("is-medium")
      .addClass("is-small");

    //heading
    $(".tab").removeClass("p-sm-left");

    //category
    $("th > h3").removeClass("m-lg-left");
    $(".fa-caret-up").removeClass("fa-2x");

    //input
    $(".input-div")
      .removeClass("p-md")
      .addClass("m-sm-top");
    $(".field").removeClass("p-sm");
    $(".input").addClass("is-small");
    $(".select").addClass("is-small");
    $(".add").addClass("is-small");

    //entry
    $(".entry").removeClass("m-xlg-left");
  }else {
    //layout
    $("#budget")
      .addClass("p-md")
      .removeClass("p-sm");
    $(".icon")
      .addClass("is-medium")
      .removeClass("is-small");

    //heading
    $(".tab").addClass("p-sm-left");

    //category
    $("th > h3").addClass("m-lg-left");
    $(".fa-caret-up").addClass("fa-2x");

    //input
    $(".input-div")
      .addClass("p-md")
      .removeClass("m-sm-top");
    $(".field").addClass("p-sm");
    $(".input").removeClass("is-small");
    $(".select").removeClass("is-small");
    $(".add").removeClass("is-small");

    //entry
    $(".entry").addClass("m-xlg-left");
  }
}

resize();