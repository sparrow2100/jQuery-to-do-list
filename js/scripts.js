let submitButton = $("#submit");

//create list element
submitButton.on("click", function (event) {
  event.preventDefault();

  //create and append elements
  let listElement = $("#unordered-list");
  let input = $("#input");
  let inputValue = input.val();
  let listItem = $("<li></li>");
  listElement.append(listItem);
  let itemFlex = $("<div></div>");
  itemFlex.addClass("item-flex");
  listItem.append(itemFlex);
  itemFlex.append('<p class="item-left">' + inputValue + "</p>");
  let itemLeft = $(".item-left");
  itemFlex.append("<p class='close'>x</p>");

  //cross item off the list
  listItem.on("click", function () {
    itemLeft.addClass("done");
  });
  //delete list item
  let close = $(".close");
  close.on("click", function () {
    listItem.addClass("hidden");
  });
  //drag items to reorder-- this isn't working
  //   listItem.sortable();
});
