import React from 'react';
import styled from 'styled-components';

const H5 = styled.h5`
 color:white;
 font-size: 15px;
`
const Text = styled.div`

`
const Card = styled.div`
width: 5rem;
height: 10rem;
background-color:black;
border-radius: 3px;
`
const CardContainer= styled.div `
display: flex;
flex-flow: row wrap;
`
//end of styling
export function Details (props){
  return(
    <CardContainer>
      <Card>
        <H5> {props.name} </H5>

        </Card>
    </CardContainer>
);
}
export default Details;
