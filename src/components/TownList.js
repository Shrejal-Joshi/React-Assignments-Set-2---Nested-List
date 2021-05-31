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
                <li id={"town"+(index+1)} className="clickItem"  
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
                      {town.name}
                     
                </li>
               

              </div>
              )
            }
       </ul>     
             
        </div>
      );
    
}
export default TownList;