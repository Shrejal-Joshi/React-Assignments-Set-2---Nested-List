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
                <li id={"city"+(index+1)} className="clickItem"  
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
                     {state.name}
                       

                      
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