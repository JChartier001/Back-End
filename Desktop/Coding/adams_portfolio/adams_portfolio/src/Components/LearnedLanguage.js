import React from "react";
import styled from "styled-components";
import { Html5 } from 'styled-icons/boxicons-logos/Html5';
import { FileCss } from 'styled-icons/boxicons-solid/FileCss';
import { Javascript } from 'styled-icons/boxicons-logos/Javascript';
import { ReactLogo } from 'styled-icons/boxicons-logos/ReactLogo';
import { Less } from 'styled-icons/boxicons-logos/Less';
import { Bootstrap } from 'styled-icons/boxicons-logos/Bootstrap';


const TopCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BtmCardHolder = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const MainDiv = styled.div`
width: 100%;
max-width: 40rem;
margin: 10px auto;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
border: 1px solid black;
`

const Div = styled.div`
  width: 100%;
  max-width: 30rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 25px 15px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 5px;
  text-align: center;
  &:hover {
    box-shadow: 2px 2px 1px 0px rgba(158, 219, 249, 0.534),
      2px 2px 1px 0px rgba(0, 0, 0, 0.24);
  }
`;

const H1 = styled.h1`
  width: 100%;
  max-width: 100rem;
  text-align: center;
  margin-top: 2rem;
`;



function LearedLanguage() {
  return (
    <MainDiv>
       <TopCardHolder className="CardHolder">
        <H1>Languages</H1>
        <Div>
          <Html5 className="icon"/>
          <FileCss className="icon"/>
          <Javascript className="icon"/>
          {/* <FileCss className="icon"/>
          <FileCss className="icon"/>
          <FileCss className="icon"/>
          <FileCss className="icon"/> */}
          </Div>
      </TopCardHolder> 
      <BtmCardHolder>
 
        <H1>Libraires and Frameworks</H1>
        <Div>
          <ReactLogo className="icon"/>
          <Less className="icon"/>
          <Bootstrap className="icon"/>
          </Div>
        </BtmCardHolder>
     </MainDiv>
  );
}

export default LearedLanguage;
