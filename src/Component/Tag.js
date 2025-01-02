import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';



   const API_KEYS=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const [tag,setTag]=useState("");
    const [gif,setGif]=useState("");
    const [loading,setloading]=useState("false");
   
    async function fetchData(){
        setloading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEYS}&tag=${tag}`;
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

    function ChangeHandler(event){
        setTag(event.target.value);

    }  

 return (
    <div className='Tag w-1/2  bg-blue-400 pl-3 pr-3 rounded-lg border border-white gap-y-5 flex flex-col items-center justify-center'>
        <h1 className='mt-[15px] text-2xl underline font-bold uppercase mb-5 '>Random {tag} Gif</h1>
        

        {
            loading ? (<Spinner/>):(<img src={gif} width="450"/>)
        }

        <input
        onChange={ChangeHandler}
        value={tag}
        className='w-9/12 rounded-lg border border-black py-1 uppercase text-center' 
        />
        
        <button onClick={ClickHandler}
        className='mt-1 mb-[15px] bg-blue-200 text-xl font-bold w-9/12 rounded-lg border border-black py-1'>
            Generate

        </button>
    </div>
  )
}

export default Tag