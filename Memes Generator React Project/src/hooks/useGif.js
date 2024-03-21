
import axios from "axios";
import { useEffect, useState } from "react";



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const Tag_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const random_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {


  const[gif,setGif] = useState("");
  const[loading, setLoading] = useState("false");

   // first way 

//   const Tag_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

 

   async function fetchData(tag){
    setLoading(true); //showloading jab tk network call nhi ho jaati tb tk....
 

    //We can also used fetch method to get the data from the API
    //But we used axios method to get the data

    // const {data} = await axios.get(tag ? (Tag_url): (random_url));


    // second way  to access the url api

    const {data} = await axios.get(tag ? `${random_url}&tag=${tag}`: (random_url));



    console.log(data)
    const imageData = data.data.images.downsized_large.url; 
    // console.log(imageData)

    setGif(imageData)

    //when the network is called then after loading will not show
    setLoading(false);

   }

   useEffect( ()=> {
    fetchData("car");
   },[]);

   return {gif,fetchData,loading};
   
}


export default useGif;
