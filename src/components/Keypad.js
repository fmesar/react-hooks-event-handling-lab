// Code Keypad Component Here
//  <Keypad>
            
        
//
//</Keypad>
import React from "react";

function Keypad() {
  
   
  
    return (
        <Keypad>
            <input onChange={e => console.log(`Entering password ${e.target.value}`)}type="text" name="username" placeholder="Enter username..." />
        </Keypad>
      )
}

export default Keypad;