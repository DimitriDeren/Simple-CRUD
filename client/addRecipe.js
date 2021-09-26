function saveForm() {
  var arrInput = document.getElementsByTagName("input");

  var title = document.querySelector('.title-input').value;
  var ingredient = document.querySelector('.title-input').value;
  var directions = document.querySelector('.title-input').value;
  var image = document.querySelector('.image-input').value;

  console.log("Title: " + title);
  console.log("Ingredient: " + ingredient);
  console.log("Directions: " + directions);
  console.log("Image: " + image);
}