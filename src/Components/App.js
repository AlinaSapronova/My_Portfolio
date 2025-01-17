import About from './About/About'
import NavBar from './Nav/NavBar'
import Projects from './Projects/Projects'
import styled from "styled-components"
import Contact from "./Contact/Contact"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0px auto;
height:100vh;
padding: 100px 0px;
max-width: 900px;

@media (max-width: 768px){
padding: 60px 30px;
max-width: 700px;
  }

p{
  font-size:25px;
  margin-top:20px;
  @media (max-width: 500px){
    font-size:20px;
    margin-top:10px;
    }
}
h1{
  font-size:60px;
  margin-top:20px;
  @media (max-width: 500px){
  font-size:40px;
  margin-top:10px;
  
  }
}
h2{
  font-size:40px;
  margin-top:20px;
  margin-bottom:20px;
  opacity:0.6;
  @media (max-width: 500px){
    font-size:30px;
    margin-top:10px;
    }
}

`;

function App() {

  return (
    <div className="App">
       <NavBar/>
       <Wrapper>
        <p>Hello everybody, my name is</p>
        <h1>Alina Sapronova</h1>
        <h2>I am a web developer passionate about crafting elegant and intuitive user experiences. I thrive on turning complex challenges into simple, beautiful solutions that truly connect with users.</h2>
        <p>As Grace Hopper once said, "The most damaging phrase in the language is, 'It's always been done that way.'"  
        This mindset inspires me to continuously innovate and challenge the status quo in every project.  </p>
      </Wrapper>
      <About/>
      <Projects/>

      <Contact/>

      
      
    
    </div>
  );
}

export default App;
