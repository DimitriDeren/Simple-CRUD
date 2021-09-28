import config from "../config/config.js"

export async function getRequest(){
  let url = config.ACCESS_POINT;
  // url = url.concat(`&title=${queryParam}`);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function postRequest(recipeModel){
    
}
