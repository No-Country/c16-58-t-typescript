import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

function OneUser() {
    const id = useParams();
    const [user, setUser] = useState()

   useEffect(() => {
    async function fetchData(){
        try {
            //const user = peticion;
            //setUser(user);

        } catch (error) {
            console.error(error)
        }
    }
   })

  return (
    <div>
        
    </div>
  )
}

export default OneUser;