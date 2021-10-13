function createWidget() {
  let parent = document.createElement('div');
  // let recipeImg = document.createElement("img");
  let recipeTitle = document.createElement("p");

  parent.className = "recipe-widget";
  parent.appendChild(recipeTitle);

  recipeTitle.innerHTML = "<%=" + "testing" + "%>";

  let main = document.getElementById("recipe");
  main.appendChild(parent);

}

function testLog(){
  console.log("works");
}

function toggleDisplay(){
  var x = document.getElementById("recipe-details-id");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
}

function removeDisplay(element){
  element.style.display = "none";
}

function getRecipe(element){
  getRequest(element.id).then((data) => {
    let recipe = data.recipe[0];
    var title = document.querySelector('.title-dashboard'); //gets the title field value
    var ingredients = document.querySelector('.ingredients-dashboard'); //gets the ingredients field value
    var directions = document.querySelector('.directions-dashboard'); //gets the directions field value
    var div = document.querySelector('.recipe-details');

    div.id=element.id;
    console.log(div.id);
    
    title.innerText = recipe.title;
    ingredients.innerText = recipe.ingredients;
    if(directions.innerHTML == null || directions.innerHTML == "") {
      console.log("empty");
    }else {
      directions.innerHTML = recipe.directions.replace(/\r?\n/g, '\n');
    }
  }); 
}

function deleteRecipe(element){
  deleteRequest(element.id);
}


function updateRecipe(element) {
  var title = document.querySelector('.title-dashboard').value; //gets the title field value
  var ingredients = document.querySelector('.ingredients-dashboard').value; //gets the ingredients field value
  var directions = document.querySelector('.directions-dashboard').value; //gets the directions field value
  
  
  let model = new RecipeModel(title, ingredients, directions, element.id);

  console.log("Title: " + title);
  console.log("Ingredient: " + ingredients);
  console.log("Directions: " + directions);
  console.log("ID: " + element.id);
  console.log(model);

  updateRequest(model);
}