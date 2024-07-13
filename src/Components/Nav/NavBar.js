

import styled from "styled-components"
import Burger from './Burger'

const Nav = styled.nav`
width:100%;
height:65px;
padding: 0 20px;
border-bottom: 1px solid #606c38;
display:flex;
justify-content:space-between;
background-color:#606c38;

.name{
padding: 15px 0;
}

`;
const NavBar = () => {
   
    return (
        <Nav>
            <div>
            <h3 className="name">Alina Sapronova</h3>
            </div>
        <Burger/>
        
    </Nav>
    );
};

export default NavBar;