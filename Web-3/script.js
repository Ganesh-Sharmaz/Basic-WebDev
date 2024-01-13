const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json;
    console.log(data);
}
getquote(api_url);
