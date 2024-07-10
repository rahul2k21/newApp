import React, { useEffect, useState } from 'react'
import './News.css';


function News() {

  const[mynews  ,setMynews]=useState([]);


const fetchData = async () =>{
  let response= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f39c91e82af645e988925c81d6e7e144");
   
  let data = await response.json();
  setMynews(data.articles);

}

console.log("rajkumar",mynews);
    useEffect(()=> {
      fetchData();
    },[])

  return (
    <>

<div className='MainDiv'>
    {
      mynews.map((ele)=>{
        return (
          <>

           <div class="card" style={{width: "300px" , height:"400px" , marginLeft:"7.2rem", marginTop:"2rem" }}>
               <img src={ele.urlToImage == null ? "https://media.cnn.com/api/v1/images/stellar/prod/27173092.jpg?c=16x9&q=w_800,c_fill" : ele.urlToImage } class="card-img-top" alt="..." />
               <div class="card-body">
                 <h5 class="card-title">{ele.author == null  ? "Rahul Mandal" :ele.author}</h5>
                  <p class="card-text">
                    {ele.title ==null ? "California pension fund opposes 'ridiculous' Elon Musk pay package at Tesla - CNBC" : ele.title }
                    </p>
                 <a href={ele.url}  target='_blank' class="btn btn-primary">Go Somewhere</a>
              </div>
              </div>

          </>

)
})
}
</div>


      
    </>
  )
}

export default News
