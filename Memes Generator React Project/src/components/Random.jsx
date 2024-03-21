import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 

function Random() {

  // const[gif,setGif] = useState("");
  // const[loading, setLoading] = useState("false");

 

  //  async function fetchData(){
  //   setLoading(true); //showloading jab tk network call nhi ho jaati tb tk....
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   //We can also used fetch method to get the data from the API
  //   //But we used axios method to get the data

  //   const {data} = await axios.get(url)
  //   console.log(data)
  //   const imageData = data.data.images.downsized_large.url; 
  //   // console.log(imageData)

  //   setGif(imageData)

  //   //when the network is called then after loading will not show
  //   setLoading(false);

  //  }
   
  //  useEffect( ()=> {
  //   fetchData()

  //  },[])


  //These above code is already define in the customs hooks i.e ( useGif.js)



// Now we use the value that return in the custom hooks i.e in useGif 
   
const{gif,fetchData,loading} = useGif();


  function clickHandler(){
    fetchData()

  

  }

  return (
  <div className="w-1/2  bg-green-500 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]'">
    <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>

    {
      loading ? (<Spinner></Spinner>) : (<img src={gif} width= "450"></img>)
    }

    {/* <img src={gif} width= "450"></img> */}

    <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>



  </div>
)}
export default Random;
