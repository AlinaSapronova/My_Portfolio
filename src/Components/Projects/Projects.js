import styled from "styled-components"
import github from './github.png'
import linkIcon from './linkIcon.png'
import { data } from "./data";
import { useState } from "react";


const Wrapper = styled.div`
margin: 0px auto;
padding: 100px 0px;
max-width: 1000px;
min-height:100vh;
@media (max-width: 1025px){
    margin-top:200px;
    }
@media (max-width: 650px){
    font-size:20px;
    margin:250px auto;
    }


h1{
    width:100%;
    border-bottom: 1px solid #606c38;
    @media (max-width: 500px){
        font-size:20px;
        }

`;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding: 100px 0;
    position:relative;
    @media (max-width: 650px){
        margin-top:100px;
        }

    
    #container{
        display:flex;
        gap: -20px;
        padding-bottom:150px;
        @media (max-width: 500px){
            font-size:20px;
            margin-top:100px;
            }

    }
    
    .title{
        margin:0 0 10px;
        padding:10px;
        font-size:25px;
        @media (max-width: 500px){
            font-size:15px;
        }
    }
    #description{
        padding: 30px;
        background-color:gray;
        text-align:center;
        opacity:0.9;
        border-radius:10px;
        box-shadow: 5px 5px 10px 10px #606c38;
        @media (max-width: 500px){
            font-size:15px;
        }
        
    }
    #project-image{
        width:500px;
        border-radius:10px;
        box-shadow: 10px 10px 10px 10px #606c38;
        @media (max-width: 500px){
            width:350px;
        }
    }
    #one{
        position:relative;
    }
    
    #two{
        position:absolute;
        padding:20px 0;
        max-width:600px;
        top:200;
        right:0;
        text-align: right;
    
    }
    ul{
        display: flex;
        justify-content:flex-end;
        margin: 50px 0 10px;
        padding: 1px;
        list-style: none;
        
    }
    li{
        padding:5px 0 5px 8px;
        list-style:none;
        @media (max-width: 500px){
            font-size:15px;
        }
    }

    @media (max-width: 650px){
       #description{
        opacity:0.85;
       }
       .title{
        background-color:grey;
        opacity:0.9;
        width:fit-content;
        border-radius:10px;
        font-size:20px;
       }
    }



    `

const Links = styled.div`
display:flex;
justify-content:flex-end;
padding-bottom:20px;
#link{
    padding:5px;
}
#icon{
    width:30px;
}

`;

const Projects = () => {
    const [projects, setProjects] = useState(data)


    return (
        <Wrapper>
            <section id="projects"></section>
            <div>
                <h1>Projects</h1>
            </div>

         <Container>
            
            {projects.map(item => {
                 const{id, title, description, image, stack, link, githubLink} = item;
                 return(
           <div key={id} id="container">


            <div id="one">
                <img src={image} alt="kids" id="project-image"/>
            </div>

            <div className="box" id="two">
                <p className="title">{title}</p>
                <p id="description">{description}</p>
                <ul>
                  {stack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <Links>
                    <a href={link} id="link"><img src={linkIcon} alt="link icon" id="icon"/></a>
                    <a href={githubLink} id="link"><img src={github} alt="github icon" id="icon"/></a>
                </Links>
            </div>

            </div>
            )
           })}
            
          </Container>
        </Wrapper>
    )
  };
  
  export default Projects;