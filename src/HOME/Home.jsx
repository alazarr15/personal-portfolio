import React from 'react'
import "./home.css"
import {useState,useEffect} from 'react';

function Home() {
  const [showFade,setShowFade]= useState(false);
  const [slideIn,setSlideIn] = useState(false);
  const [insideOut,setInsideOut] = useState(false);

  useEffect(() => {
    setShowFade(true);
    setSlideIn(true);
    setInsideOut(true);
  },[])

  return (
    <>
    <div className={`home-container $ {showFade ? "fade-in" : ""}`}>

<div className="headbar-container">

    <div className="headbar-middle">

     <div className="left-side">
        <img src="logo.png" alt="logo"/>
     </div>
    <div className="right-side">
    <ul>
       <li>HOME</li>
       <li>ABOUT</li>
       <li>PROJECTS</li>
       <li>CONTACT</li> 
    </ul> 
    </div>   

    </div>
    
</div>

<div className="home-profile">
    <div className={`profile-info $ {slideIn ? 'slideIn' : ''}`}>
      <h1>FRONT-END REACT DEVLOPER <span className="wave">👋</span></h1>
      <p>Hi, I'm Alazar Fikadu. A passionate Front-end React 
        Developer based in Addis Ababa, Ethiopia.🌍</p>
     <img src="git.png" alt="git" />
     <img src="linked.png" alt="linked" />
    </div>

    <div className="profile-pic">
        <img src="profile.png" alt="profile" 
        className={`profile ${insideOut ? 'insideOut' : ''}`}/>
    </div>
</div>


    </div>
    </>
  )
}

export default Home;