import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
width:100%;

`;

const Inputdiv = styled.input `
border:0px;
 width:80%;
height:40px;
padding-left:10px;
background-color:#F0F0F2;
`;

const Title = styled.div `
// width:100%;
display: flex;
flex-direction: column;
text-align: left;
justify-content:center;
// padding-left:10px;
margin-bottom:5px;
`;

const TitleDiv = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content:center;

`;


// const Title = styled.div `

// `;



const Input1 = ({InputTitleText, PlaceholderText}) =>{

    return  <Container>
                <TitleDiv>
                    <Title>{InputTitleText}</Title>
                    <Inputdiv placeholder= {PlaceholderText}/>
                </TitleDiv>
            </Container>
}

    Input1.defaultProps = {
        InputTitleText:"Title Text",
        PlaceholderText:"text",
}

export default Input1;