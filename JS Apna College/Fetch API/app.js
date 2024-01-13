const URL = 'https://animechan.xyz/api/random'

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
// 	}
// };





const getQuote = async () => {
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }

    let response = await fetch(URL);
    console.log(response);
    let quote = await response.json();
    console.log(quote)
    quoteBox.innerText = quote.quote
    character.innerText = "Character - " + quote.character
    animeName.innerText = "Anime - " + quote.anime
}

const quoteBox = document.querySelector(".quote-box")
const character = document.querySelector(".character")
const animeName = document.querySelector(".anime-name")
const next = document.querySelector("#new")

newQuote = () => {
    getQuote();
}

next.addEventListener('click',newQuote)
getQuote();