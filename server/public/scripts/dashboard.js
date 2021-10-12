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

function toggleDisplay(){
  var x = document.getElementById("recipe-details-id");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 

}