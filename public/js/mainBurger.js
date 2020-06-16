$(function () {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured,
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
