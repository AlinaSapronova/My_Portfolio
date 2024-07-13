import React from 'react';
import styled from "styled-components"

const Ul = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;

a{
  text-decoration: none;
  padding:18px 10px;
  color:#fefae0;
  @media (max-width: 768px){
    color:black;
  }
}

@media (max-width: 768px){
  flex-flow: column nowrap;
  background-color:#fefae0;
  position:fixed;
  top:0;
  right:0;
  height:100vh;
  width:200px;
  padding-top: 3.5rem;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;
}
`;

const Sidebar = ({isOpen}) => {
    return (
      <Ul isOpen={isOpen}>
      <a href="/#about">About</a>
      <a href="/#projects">Projects</a>
      <a href="/#contact">Contact</a>
      <a href="/#resume" id="resume">Resume</a>
     </Ul>
    );
  };
  
  export default Sidebar;