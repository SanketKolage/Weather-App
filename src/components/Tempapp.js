import React, { useEffect, useState } from 'react'
import "./css/style.css";

const Tempapp =() => {

    const[city,setCity] =  useState(null);
    const[search, setSearch] = useState("");

    useEffect( () => {
       let timeout=setTimeout(()=>{
      const fetchApi = async () =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c7de4febdece768b524f1790bf6635b6`;
        const response = await fetch(url)
        const resJson = await response.json();

        setCity(resJson.main);

      }
      
      fetchApi();
     },600);
    return ()=> clearTimeout(timeout);
    },[search]);

    return(
      <>
        <div className='box'>
            <div className='inputData'>
                <input type="search"
                value={search}
                 className="inputField"
                     onChange= { (event) => { setSearch(event.target.value)} } />
            </div>
        
        {!city ? (
            <p className='errorMsg'> No Data Found</p>
            ) : (
              <div>
          <div className='info'>
            <h2 className='location'>
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className='temp'>
              {city.temp}⁰C
            </h1>
            <h3 className='tempmin_max'>Min: {city.temp_min}⁰C | Max: {city.temp_max}⁰C </h3>
          </div>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
              </div>
          )
        }
        
        </div>
      </>  
    )
}

export default Tempapp;
