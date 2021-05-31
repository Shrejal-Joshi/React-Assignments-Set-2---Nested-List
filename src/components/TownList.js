import React, { Component, useState } from "react";
import "./../styles/CityList.css";

function TownList ({town})
{
    const [getTownState, setTownState] = useState(0);
    
    // let i=1;
   
    return (
        <div id="">
       <ul>
            {
              town.map((town,index) =>
              <div>
                <li key={`town${index+1}`} >
                      <div className="clickItem"  
                        onClick={() => {
                              if(getTownState === town.name)
                              {
                                setTownState(1);
                              }
                              else{
                                setTownState(town.name)
                              }

                            }
                          }>
                           <h5>{town.name}</h5>
                       </div>

                      
                </li>
               

              </div>
              )
            }
       </ul>     
             
        </div>
      );
    
}
export default TownList;