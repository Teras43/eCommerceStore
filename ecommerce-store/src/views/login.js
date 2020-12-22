import React from 'react';
import styled from 'styled-components'
//import header and footer from brandons commits later
//import cart and have login proceed when you head to checkout

const Login = () =>{

return(
    <LoginContainer>
        <NotifyDiv>Please login or continue as guest</NotifyDiv>
        <ButtonDiv>
        <ButtonStyles>Login</ButtonStyles>
        <ButtonStyles>Cancel</ButtonStyles>
        <ButtonStyles>guest</ButtonStyles>
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
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
color: blue;
`



export default Login