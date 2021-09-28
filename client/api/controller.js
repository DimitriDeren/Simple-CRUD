async function getRequest(){
  let url = CONFIG.ACCESS_POINT;
  // url = url.concat(`&title=${queryParam}`);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function postRequest(recipeModel){
    
}
