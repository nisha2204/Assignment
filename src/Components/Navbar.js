
import React, {useState, useEffect} from 'react'
// import './Navbar.css'
// import { Link } from "react-router-dom";

// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {#3d423e#3d423e
//       width,
//       height
//     };
//   }

// export default function Navbar() {
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
//     const [toggleMenu, setToggleMenu] = useState(false)
//     const toggleNav = () => {
//         setToggleMenu(!toggleMenu)
//       }
//       const screenWidth = React.useState(window.innerWidth);
//       useEffect(() => {

//         function handleResize() {
//             setWindowDimensions(getWindowDimensions());
//           }
      
    
//         window.addEventListener('resize', handleResize)
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
    
//       }, [])
//       return (
//         <nav>
            
//           {(toggleMenu || screenWidth > 500) && (
//           <ul className="list">
//           <li className="items">Home</li>
//           <li className="items">Services</li>
//           <li className="items">Contact</li>
//         </ul>
//           )}
    
//           <button onClick={toggleNav} className="btn">BTN</button>
//         </nav>
//       )
//     }

//import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
        return (
            <div>
            <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
             <nav className="navbar" onClick={e => e.stopPropagation()}>
               <div className="nav-container">
               
                        <Link to="#" className="nav-link text-white">
                            <button
                            type="button"
                            className="btn btn px-4 mx-3"
                            id="Navbarlogoi"
                            >
                            <b>Logo</b>
                            </button>
                        </Link>
                        <div className="form col-sm mt-2 ml-4 mr-2" id="text">
                            <i className="fa fa-search text-dark">
                            &nbsp;&nbsp;<span className="vr"></span>
                            </i>
                            <input
                            type="text"
                            className="form-control form-input"
                            placeholder="search"
                            />
                        </div>
                       
                        <div className='col-md-auto mx-4 mt-3'>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                            <div className="far fa-comment-alt col-md-auto mx-4 fa-2x mt-3" style={{color: "#0AB79B"}}></div> 
                            </li>
                            <li className="nav-item">
                            <div className="fa fa-heart col-md-auto mx-4 fa-2x mt-3" style={{color: "#0AB79B"}}></div>
                            </li>
                        </ul>
                        </div>
                 <div className="nav-icon" onClick={handleClick}>
                   <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                 </div>
               </div>
             </nav>
           </ div>
        );
}

