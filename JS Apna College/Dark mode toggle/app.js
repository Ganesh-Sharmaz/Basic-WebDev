const btn = document.querySelector("#btn");
const box = document.querySelector(".box");
let currMode = 'light'
let count = 0;
clickMethod = () => {
    if(currMode === 'light'){
        currMode = 'dark'
        console.log("Dark Mode")
        btn.innerText =  'Light Mode'
        box.style.backgroundColor = 'black'
        document.querySelector('p').style.color = 'white'
        btn.style.backgroundColor = 'black'
        btn.style.color = 'white'
        document.querySelector('p').style.borderBlockColor = 'white'
        
        
        count++
        
    } else{
        currMode = 'light'
        console.log("Light Mode")
        btn.innerText =  'Dark Mode'
        box.style.backgroundColor = 'white'
        document.querySelector('p').style.color = 'black'
        count++
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
        document.querySelector('p').style.borderBlockColor = 'black'
        
    }
    

}
console.log(count)
btn.addEventListener('click', clickMethod);