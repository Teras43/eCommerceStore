import React from 'react';
import styled from 'styled-components'
// import NavBar from './navbar.js' brandons navbar. Work it out when he submits to master
//import cart and have login proceed when you head to checkout

const Login = () =>{

return(
    <LoginContainer>
        <NotifyDiv>Please Login Or Continue As Guest</NotifyDiv>
        <EmailInput placeholder="Email" />
        <PasswordInput placeholder="Password"/>
        <ButtonDiv>
        <ButtonStyles Onclick="">Login</ButtonStyles>
        <ButtonStyles Onclick="">Cancel</ButtonStyles>
        <ButtonStyles Onclick="">guest</ButtonStyles>
        </ButtonDiv>
   </LoginContainer>
   )
}

//styles
const LoginContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const EmailInput = styled.input`
height: 10px;
width: 100px;`

const PasswordInput = styled.input`
height: 10px;
width: 100px;`


const ButtonDiv = styled.div`
display: flex;
max-width: 250px;
width: 100%;
justify-content: space-evenly;
flex-direction: row;
margin-top: 10px;
`
const ButtonStyles = styled.button`
/* margin: 10px; */

`
const NotifyDiv = styled.div`
display: flex;
flex-wrap: nowrap;
font-size: 20px;
justify-content: center;
align-items: center;
color: blue;
`



export default Login