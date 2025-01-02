import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';



   const API_KEYS=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
    const [gif,setGif]=useState("");
    const [loading,setloading]=useState("false");
   
    async function fetchData(){
        setloading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEYS}`;
        const {data}=await axios.get(url);
        const imageSource=data.data.images.downsized_medium.url;
        console.log(imageSource);
        setGif(imageSource);
        setloading(false);


    }
    
    useEffect(()=>{
        fetchData();
    },[]);

    

    function ClickHandler(){
        fetchData();
        
    }
  return (
    <div className='w-1/2 pl-3 pr-3 bg-pink-400 rounded-lg border border-white gap-y-5 flex flex-col items-center justify-center'>
        <h1 className='mt-[15px] text-2xl underline font-bold uppercase mb-5 '>A Random Gif</h1>
        

        {
            loading ? (<Spinner/>):(<img src={gif} width="450"/>)
        }
        
        <button onClick={ClickHandler}
        className='mt-5 mb-[15px] bg-pink-200 text-xl font-bold w-9/12 rounded-lg border border-black py-1'>
            Generate

        </button>
    </div>
  )
}

export default Random