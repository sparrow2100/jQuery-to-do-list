let submitButton = $("#submit");

//create list element
submitButton.on("click", function (event) {
  event.preventDefault();

  //create and append elements
  const listElement = $("#unordered-list");
  const input = $("#input");
  const inputValue = input.val();
  const listItem = $("<li></li>");
  listElement.append(listItem);
  const itemFlex = $("<div></div>");
  itemFlex.addClass("item-flex");
  listItem.append(itemFlex);
  const itemLeft = $('<p class="item-left">' + inputValue + "</p>");
  itemFlex.append(itemLeft);
  const crossButton = $("<button>X</button>");
  crossButton.addClass("delete");
  itemFlex.append(crossButton);

  //cross item off the list
  itemLeft.on("click", function () {
    $(this).toggleClass("done");
  });
  //delete list item
  crossButton.on("click", function () {
    $(listItem).addClass("hidden");
  });
});
