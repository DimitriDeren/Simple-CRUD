function createWidget() {
  let parent = document.createElement('div');
  // let recipeImg = document.createElement("img");
  let recipeTitle = document.createElement("p");

  parent.className = "recipe-widget";


  // parent.appendChild(img);
  parent.appendChild(recipeTitle);

  recipeTitle.innerHTML = "testing";
  // recipeImg.setAttribute("src", recipeModel.img);

  let main = document.getElementById("recipe");
  main.appendChild(parent);

}

/**
 * TODO: Add a function which will generate custom div id's 
 *       Div class names: one with the generated id (recipe-widget-1), another for the general class (recipe-widget), 
 *       P class names: one with generated id (recipe-title-1), another for general class (recipe-title)
 *       
 */
