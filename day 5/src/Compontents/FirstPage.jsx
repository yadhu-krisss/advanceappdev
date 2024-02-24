// import React from "react";
import { Link } from "react-router-dom";
import './FirstPage.css';

import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
function FirstPage() {
    useEffect(() => {
        const bodyStyle=document.body.style;
        bodyStyle.backgroundImage = "url('https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=8')"; 
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat';
        bodyStyle.backgroundAttachment = 'fixed';
        bodyStyle.backgroundPosition = 'center center';
        return () => {
            document.body.style.backgroundImage = ""; 
        };
    }, []);
//    const nav = useNavigate();
        // const handleHome=()=>{
            {
    //    nav("/Info")
        }
  return (
    
   
      <div className="headerContainer">
        <center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1> <div className="med">Chaturanga ACADEMY</div></h1><br></br><br></br><br></br>
        <br></br>
        {/* <p>Whoever sees no other aim in the game than that of giving checkmate to one's opponent will never become a good Chess player.</p> */}
        <br></br><br></br>
        <Link to="/Login"> 
         <button className="but6">USER</button> 
         <br></br>
         <br></br>
         </Link>
        <Link to="AdminLogin">
             <button className="but6">ADMIN</button> 
             </Link>
        </center>
      </div>
  );
}

export default FirstPage;