const quote_data = document.querySelector("#quote")
const loading_data = document.querySelector("#author")

const new_Quote = document.querySelector("#btn1")
const tweet = document.querySelector("#btn2")


async function getquote() {
    //API CALL
    try{
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        console.log("Get Quote Data: ",data)
        quote_data.innerHTML = data.content;
        loading_data.innerHTML = data.author
    }
    catch(err){
        console.log("Error",err)
    }
        
};
getquote();

new_Quote.addEventListener("click",getquote);

function tweets (){
    window.open("https://twitter.com/intent/tweet?text=" + quote_data.innerHTML + "--- by " + loading_data.innerHTML, "Tweet Window", "width = 600, height = 300")
}

