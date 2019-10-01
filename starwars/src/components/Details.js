import React from 'react';
import styled from 'styled-components';

const H5 = styled.h5`
 color:white;
 font-size: 15px;
`
const Text = styled.div`
color: white;
margin-bottom: 1rem;
`
const Card = styled.div`
width: 7.5rem;
height: 20rem;
background-color:black;
border-radius: 7px;
`
const CardContainer= styled.div `
display: flex;
flex-flow: row wrap;
margin: 0.5rem;
`
//end of styling
export function Details (props){
  return(
    <CardContainer>
      <Card>
        <H5>Name: {props.name} </H5>
        <Text> Weight: {props.mass} </Text>
        <Text> height: {props.height} </Text>
        <Text> Hair Color : {props.hairColor} </Text>
        <Text> Eye Color: {props.eyeColor} </Text>

        </Card>
    </CardContainer>
);
}
export default Details;
