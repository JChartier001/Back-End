import React from "react";
import styled from 'styled-components';
import { Spinner } from 'reactstrap';
import { Link, Route } from 'react-router-dom';

const MainNav = styled.div`
margin-top: 20px
border-bottom: 1px solid black;
`
const NavStyles = styled.nav`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10px
`
const NavA = styled.a`
text-decoration: none;
padding-left: 20px;
padding-right: 20px
`



function NavBar() {
    return (
    <MainNav>
        <NavStyles>
          <Link to="/">{<NavA>Home</NavA>}</Link>
          <Link to="about">{<NavA>About Me</NavA>}</Link>
          <Link to="timeline">{<NavA>TimeLine</NavA>}</Link>
           <Link to="contact">{<NavA>Contact</NavA>}</Link>
        </NavStyles>
    </MainNav>
    )
}

export default NavBar;