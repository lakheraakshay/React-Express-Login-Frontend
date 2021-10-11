import React, { useEffect } from 'react'
import Header from './Header'
import { useHistory } from "react-router-dom";
function Home() {
    useEffect(() => {
        const checkLogin=localStorage.getItem("login")
        if(checkLogin!="true")
        {
          return  window.location.href="http://localhost:3000/login"
        }

    }, [])

    return (
        <div>
              <Header/>
            Home
        </div>
    )
}

export default Home
