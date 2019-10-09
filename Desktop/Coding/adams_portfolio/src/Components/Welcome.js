import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


import unicorn from "../Images/unicorn.png";


const Image = styled.img`
  margin-top: 3.5rem;
  width: 100%;
  max-width: 400px;
`;

function Welcome() {
    return (
       <div className="header">
        
             
                   <Link to="about"><Image className="animated unicorn" src={unicorn} alt=""/></Link>
				 <div><h1>Adam Penman</h1></div>
                <p>WELCOME TO MY PORTFOLIO PAGE! <br /> </p>
     </div>
     )
    }
        
export default Welcome; 