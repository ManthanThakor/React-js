
import React, { useEffect } from 'react';
import axios from 'axios';
function Axiostutorial() {
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response);
        })
        
      }, [])
  return (

    <div>
      

  
    </div>
  )
}

export default Axiostutorial;
