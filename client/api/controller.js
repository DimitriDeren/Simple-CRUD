
/**
 * getRequest to MongoDB Database
 * TODO: implement title query, add parameter to take in title from the form
 */
async function getRequest(){
  let url = CONFIG.ACCESS_POINT; //check config.js
  // url = url.concat(`&title=${queryParam}`);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function postRequest(recipeModel){
    let url = CONFIG.ACCESS_POINT;
    let data = {
      title: recipeModel.title,
      ingredients: recipeModel.ingredients,
      directions: recipeModel.directions,
      image: recipeModel.image,
    }
    const otherParam={
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body:JSON.stringify(data),
      method:"POST"
    };

    const response = await fetch(url, otherParam);
    console.log(response);
}
