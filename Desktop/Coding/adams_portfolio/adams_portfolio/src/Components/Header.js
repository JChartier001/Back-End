import React from "react";
import styled from 'styled-components';
import unicorn from '../Images/unicorn.png'

const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 1.5rem;
`

const H1 = styled.h1`
font-family: 'Josefin Sans', sans-serif;
font-family: 'Libre Baskerville', serif;
`

const Image = styled.img`
margin: 2rem;
width: 100%;
max-width: 200px;
`

function TopHeader() {
    return (
        <MainDiv>
            <H1> Adam's Portfolio</H1>
            <h3>Training to become a Web Delevoper</h3>
            <Image src={unicorn}/>
        </MainDiv>
    )
}

export default TopHeader;