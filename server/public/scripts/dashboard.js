function createWidget() {
  let parent = document.createElement('div');
  // let recipeImg = document.createElement("img");
  let recipeTitle = document.createElement("p");

  parent.className = "recipe-widget";


  // parent.appendChild(img);
  parent.appendChild(recipeTitle);

  recipeTitle.innerHTML = "<%=" + "testing" + "%>";
  // recipeImg.setAttribute("src", recipeModel.img);

  let main = document.getElementById("recipe");
  main.appendChild(parent);

}

function testLog(){
  console.log("works");
}

function toggleDisplay(element){
  var x = document.getElementById("recipe-details-id");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  console.log(element.id);
}


function updateForm() {
  var title = document.querySelector('.title-dashboard').value; //gets the title field value
  var ingredients = document.querySelector('.ingredients-dashboard').value; //gets the ingredients field value
  var directions = document.querySelector('.directions-dashboard').value; //gets the directions field value
  

  let model = new RecipeModel(title, ingredients, directions);

  console.log("Title: " + title);
  console.log("Ingredient: " + ingredients);
  console.log("Directions: " + directions);

  console.log(model);
}