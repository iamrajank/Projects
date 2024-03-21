
import {useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 

function Tag() {

const[tag,setTag] = useState("car")

  // const[gif,setGif] = useState("");
  // const[loading, setLoading] = useState("false");

 

  //  async function fetchData(){
  //   setLoading(true); //showloading jab tk network call nhi ho jaati tb tk....
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

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

  const{loading,gif,fetchData} = useGif(tag);


  function clickHandler(){
    fetchData(tag)

  }

  function changeHanlder(event){
    setTag(event.target.value)

  }

  return (
  <div className="w-1/2  bg-blue-500 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]'">
    <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

    {
      loading ? (<Spinner></Spinner>) : (<img src={gif} width= "450"></img>)
    }

    {/* <img src={gif} width= "450"></img> */}


    <input
    className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={changeHanlder} value={tag}></input>

    <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>



  </div>
)
}
export default Tag;
