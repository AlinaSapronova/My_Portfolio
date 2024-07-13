import styled from "styled-components"
import picture from"./alina.jpg"


const Wrapper = styled.div`
margin: 0px auto;
padding: 100px 0px;
max-width: 1000px;
height:100vh;

@media (max-width: 768px){
padding: 20px;
max-width: 700px;
    }

h1{
    width:100%;
    border-bottom: 1px solid #606c38;;
    @media (max-width: 500px){
        font-size:20px;
        }
}
.about{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    row-gap: 50px;
    @media (max-width: 1025px){
       margin:10px;
       display:flex;
       flex-direction:column;
       align-items:center;
       font-size: 20px;
        }
}

p{
font-size:20px;
margin-top:20px;

@media (max-width: 500px){
    font-size:20px;
    }
}
.paragraph{
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:30px;
}
img{
   width:350px;
   margin-top:30px;
   box-shadow: 5px 5px 10px 10px #606c38;
   border-radius:10px;

   @media (max-width: 500px){
    margin-top:10px;
    width:200px;
    
    
    }
}



`;

const About = () => {
    return(
        <Wrapper>
            <section id="about">
            <h1>About Me</h1>
            
                <div className="about">

                <div className="img">  
                    <img src={picture} alt="some girl"/>
                </div>
          
            <div className="paragraph">
            <p>Hey there! I'm Alina, a former professional Biathlete turned Software Developer based in Chicago.</p>
            <p>With a background in Biathlon, retail management, and full-time parenting,
                 I've honed skills like discipline,strategy, and teamwork. Fluent in English and Russian, I bring a global perspective to my work.</p>
            <p>I recently completed the Full-Stack Academy Bootcamp and the DPI Apprenticeship program, gaining expertise in React,
              Javascript, Node.js, SQL, Ruby, and Ruby on Rails.
             Now, I'm excited to leverage my unique blend of skills and experiences to make a mark in Software Development.
              Let's connect and explore opportunities together!</p>
              </div>
              </div>
              </section>
        </Wrapper>
    )
}

export default About;