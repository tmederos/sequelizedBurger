// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newDevour");
    var newDevourState = {
      devour: newDevour
    };
    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#burger").val().trim(),
    };
    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$(function() {
  $(".delete").on("click", function(event) {
    var id = $(this).data("id");
    console.log( "In Delete the id - " + id );
    // Send the PUT request.
    $.ajax("/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted burger.");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
