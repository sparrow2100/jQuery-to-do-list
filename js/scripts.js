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
  const crossButton = $("<button>X</button>");
  crossButton.addClass("delete");
  itemFlex.append(crossButton);

  //cross item off the list
  listItem.on("click", function () {
    $(this).toggleClass("done");
  });
  //delete list item
  crossButton.on("click", function () {
    $(listItem).addClass("hidden");
  });
});
