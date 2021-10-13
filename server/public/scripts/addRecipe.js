function saveForm() {
  var title = document.querySelector('.title-input').value; //gets the title field value
  var ingredients = document.querySelector('.ingredients-input').value; //gets the ingredients field value
  var directions = document.querySelector('.directions-input').value; //gets the directions field value
  var image = document.querySelector('.image-input').value; //gets the image field value

  let model = new RecipeModel(title, ingredients, directions);

  console.log("Title: " + title);
  console.log("Ingredient: " + ingredients);
  console.log("Directions: " + directions);

  console.log(model);

  postRequest(model).then((data) => {
    console.log(data);
  });


}