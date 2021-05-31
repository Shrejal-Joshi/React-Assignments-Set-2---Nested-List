import React, { Component, useState } from "react";
import "./../styles/CityList.css";
import TownList from "./TownList";

function CityList ({city})
{
    const [getCityState, setCityState] = useState(0);
    
    // let i=1;
   
    return (
        <div id="">
       <ul>
            {
              city.map((state,index) =>
              <div>
                <li key={`city${index+1}`} >
                      <div className="clickItem"  
                        onClick={() => {
                              if(getCityState === state.name)
                              {
                                setCityState(1);
                              }
                              else{
                                setCityState(state.name)
                              }

                            }
                          }>
                           <h5>{state.name}</h5>
                       </div>

                      
                </li>
                {getCityState === state.name && <TownList town = {state.towns}/>}

              </div>
              )
            }
       </ul>     
             
        </div>
      );
    
}
export default CityList;