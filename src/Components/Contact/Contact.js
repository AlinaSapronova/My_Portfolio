import styled from "styled-components"
import React, { useState } from 'react';
const Wrapper = styled.div`
margin: 0px auto;
padding: 100px 0px;
max-width: 1000px;
min-height:100vh;

h1{
    width:100%;
    border-bottom: 1px solid #606c38;
}

    #contact{
        display: flex;
        justify-content: center;
    }
    .form{
        background-image: url("https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        background-size: cover;
        background-repeat: no-repeat;
        width:600px;
        height: 500px;
        margin: 20px;
       border-radius: 20px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
        border-radius: 20px;
        background-color: #606c38;
        opacity:0.9;
    }
    
    label{
       color: #f3efe2;
    }
    
    input{
        border-radius: 20px;
        border:#0F3D3E 3px solid;
        padding: 10px;
        width: 250px;
        
    }
    
     .send{
        background-color:#283618;
        border-radius: 20px;
        border:#283618 3px solid;
        padding: 10px;
        width: 250px;
        margin-top: 30px;
        margin-left: 5px;
        font-size:20px;
        
        
    } 
    .send:hover{
        background-color: #0F3D3E;
        color: #f3efe2;
    }
    label{
        margin-top:10px;
        font-size:20px;
    }
}
`

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('message', message);
    
        try {
          const response = await fetch('https://formspree.io/f/mwkylgbj', {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });
    
          if (response.ok) {
            setStatus('Thanks for your submission!');
            setEmail('');
            setMessage('');
          } else {
            const data = await response.json();
            if (data.errors) {
              setStatus(data.errors.map(error => error.message).join(', '));
            } else {
              setStatus('Oops! There was a problem submitting your form');
            }
          }
        } catch (error) {
          setStatus('Oops! There was a problem submitting your form');
        }
      };


  return (
    <Wrapper>
    <div>
       <h1>Contact me</h1>
   </div>
   <section id="contact">
    <div className="form">
    <form onSubmit={handleSubmit} data-aos="fade-right" className="aos-init aos-animate" data-aos-delay="300">
      <label className="p-2 fs-3">Email:</label><br />
      <input 
        type="email" 
        name="email" 
        placeholder="your email.." 
        className="box p-2" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}/><br/>
      <label className="p-2 fs-3">Message:</label><br/>
      <input 
        type="text" 
        name="message" 
        cols="30" 
        rows="10" 
        className="box address p-2" 
        placeholder="your message.." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      /><br />
      <button type="submit" id="my-form-button" className="send fs-4">Send</button><br/>
      <p id="my-form-status" className="p-2">{status}</p>
    </form>
    </div>
    </section>
    </Wrapper>
  );
};


export default Contact;