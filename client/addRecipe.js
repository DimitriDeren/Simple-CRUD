function saveForm() {
  var title = document.querySelector('.title-input').value; //gets the title field value
  var ingredient = document.querySelector('.title-input').value; //gets the ingredients field value
  var directions = document.querySelector('.title-input').value; //gets the directions field value
  var image = document.querySelector('.image-input').value; //gets the image field value

  console.log("Title: " + title);
  console.log("Ingredient: " + ingredient);
  console.log("Directions: " + directions);
  console.log("Image: " + image);

  getRequest().then((data) => {
    console.log(data);
  });
}