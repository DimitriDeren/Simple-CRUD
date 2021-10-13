
/**
 * getRequest to MongoDB Database
 * TODO: implement title query, add parameter to take in title from the form
 */
async function getRequest(recipeID){
  let url = CONFIG_GET.ACCESS_POINT;
  url = url.concat(recipeID);

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


//NOT FINISHED
async function updateRequest(recipeModel){
  let url = CONFIG.ACCESS_POINT;
  let data = {
    title: recipeModel.title,
    ingredients: recipeModel.ingredients,
    directions: recipeModel.directions,
  }
  const otherParam={
    headers:{
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    },
    body:JSON.stringify(data),
    method:"PUT"
  };

  const response = await fetch(url, otherParam);
  console.log(response);
}