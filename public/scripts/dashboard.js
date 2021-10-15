function createWidget() {
  let parent = document.createElement("div");
  let recipeTitle = document.createElement("p");

  parent.className = "recipe-widget";
  parent.appendChild(recipeTitle);

  recipeTitle.innerHTML = "<%=" + "testing" + "%>";

  let main = document.getElementById("recipe");
  main.appendChild(parent);
}

function createRecWidget(element) {
  let parent = document.getElementById("rec-list-view");
  // let parent = document.getElementById("recommendation-view");
  parent.innerHTML = "";

  getRequestRecommendation().then((data) => {
    if(data.length === 0){
      alert("No matches found");
    } else {
      for (let i = 0; i < 10; i++) {
        let recipeWidget = document.createElement("div");
        recipeWidget.className = "recipe-widget";
        recipeWidget.id = data[i].title;
  
        let leftIcon = document.createElement("i");
        leftIcon.className = "fa fa-angle-left left-icon";
        leftIcon.onclick = function () {
          displayRecipe(data[i]);
          toggleDisplay();
        };
  
        let recipeTitle = document.createElement("p");
        recipeTitle.className = "recipe-title";
        recipeTitle.innerText = data[i].title;
  

  
        recipeWidget.appendChild(leftIcon);
        recipeWidget.appendChild(recipeTitle);
        parent.appendChild(recipeWidget);
      }
    }
  });
}

function testLog() {
  console.log("works");
}

function toggleDisplay() {
  var x = document.getElementById("recipe-details-id");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

function removeDisplay(element) {
  element.style.display = "none";
}

function getRecipe(element) {
  getRequest(element.id).then((data) => {
    let recipe = data.recipe[0];
    var title = document.querySelector(".title-dashboard"); //gets the title field value
    var ingredients = document.querySelector(".ingredients-dashboard"); //gets the ingredients field value
    var directions = document.querySelector(".directions-dashboard"); //gets the directions field value
    var div = document.querySelector(".recipe-details");

    div.id = element.id;
    // console.log("OLD DATA: " + data);
    // console.log("DIRECTIONS OLD: " + directions.innerHTML);

    title.innerText = recipe.title;
    ingredients.innerHTML = recipe.ingredients.replace(/\r?\n/g, "\n");;
    directions.innerHTML = recipe.directions.replace(/\r?\n/g, "\n");
    
    // console.log("NEW DATA: " + data);
    // console.log("DIRECTIONS NEW: " + directions.innerHTML);
  });
}

// Function to display recipes for RECOMMENDATIONS
function displayRecipe(recData){
  let recipe = recData;
  var title = document.querySelector(".title-dashboard"); //gets the title field value
  var ingredients = document.querySelector(".ingredients-dashboard"); //gets the ingredients field value
  var directions = document.querySelector(".directions-link"); //gets the directions field value
  var imageView = document.querySelector(".image-view");

  title.innerText = recipe.title;
  ingredients.value = recipe.ingredients.join("\n");

  let link = document.createElement('a');
  directions.setAttribute('href', recipe.url);
  // let direction = "Directions:";
  // link.appendChild(direction);
  
  // directions.innerText = "";
  // directions.appendChild(link);

  let img = document.createElement('img');
  img.src = recipe.image;
  imageView.innerHTML = "";
  imageView.appendChild(img);
  
}

function deleteRecipe(element) {
  deleteRequest(element.id);
}

function updateRecipe(element) {
  var title = document.querySelector(".title-dashboard").innerText; //gets the title field value
  var ingredients = document.querySelector(".ingredients-dashboard").value; //gets the ingredients field value
  var directions = document.querySelector(".directions-dashboard").value; //gets the directions field value

  let model = new RecipeModel(title, ingredients, directions, element.id);
  console.log(model);
  updateRequest(model);
}
