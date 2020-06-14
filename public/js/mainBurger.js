$(function () {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();
    console.log("this works");
    const id = $(this).data("id");
    const newDevoured = $(this).data("newdevoured");

    const newDevouredState = {
      devoured: newDevoured,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(() => {
      location.reload();
    });
  });

  $(".new-form").on("submit", (event) => {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#bg").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });
});
