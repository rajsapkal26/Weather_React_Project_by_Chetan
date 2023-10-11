
import React, {useEffect, useState } from "react";

import "./Css/Style.css";

const Tenpapp = ()=>{
    const [city, setCity] = useState(null);
    const [search,setSearch] = useState("Amravati");
    
    useEffect( ()=>{
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0e8cf27667fd221025886822aaa86cff`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();
    },[search])
    return (
       <>
        <div className="box" >
            <h3 className="text-info p-2">Chetan Morey</h3>
         <div className=" text-light">
        
         <div className="col-lg-12 col-md-8 col-12">
              <div className="">
                   <input type="" placeholder="Enter Your City Name" value={search} className="bg-transparent mb-2 border-bottom border text-light w-25 p-1 fs-5 mx-3" onChange={(event)=>{setSearch(event.target.value)}}/><span className="position"><i class="bi bi-search search fw-bold "></i></span>
              </div> 
          </div>

          {!city ?(<h2>No Data Found</h2>):(
            <div className="     p-3  ">
                 <div className="info">
             <h2 className="">
                <i class="bi bi-cloud-moon fs-1 text-warning"></i>{search}
             </h2>
             <h1 className="temp display-2">
               {city.temp}°Cel  
             </h1>
             </div>
           <div className="container ">
             <div className="row">
             <div className="col-lg-4 text-center shadow  border">
                    <h3 className="tempmin_max"><span className="fw-bolder fs-5">Max-Tempreture:-</span> <p className="text-warning fw-bolder">{city.temp_max}°Cel </p></h3>
                 </div>
                 <div className="col-lg-4 text-center shadow  border">
                    <h3 className="tempmin_max"><span className="fw-bolder fs-5">Min-Tempreture:-</span> <p className="text-warning fw-bolder">{city.temp_min}°Cel </p></h3>
                 </div>
                 <div className="col-lg-4 text-center shadow  border">
                    <h3 className="tempmin_max"><span className="fw-bolder fs-5">Sea-Level:-</span> <p className="text-warning fw-bolder">{city.sea_level}°Cel </p></h3>
                 </div>
                 <div className="col-lg-4 text-center border shadow">
                    <h3 className="tempmin_max"><span className="fw-bolder fs-5">Pressure:-</span> <p className="text-warning fw-bolder">{city.pressure}</p></h3>
                 </div>
                 <div className="col-lg-4 text-center border shadow">
                    <h3 className="tempmin_max"><span className="fw-bolder fs-5">Humadity:-</span> <p className="text-warning fw-bolder">{city.humidity}</p></h3>
                 </div>
                 <div className="col-lg-4 text-center border shadow">
                    <h3 className="tempmin_max"><span className="fw-bolder fs-5">Weather:-</span> <p className="text-warning fw-bolder">{city.sea_level}</p></h3>
                 </div>
             </div>
            <div>
                 
            </div>
             
           </div>
         </div>
          )}
         </div>
        </div>
       </>
    )
}
export default Tenpapp;
