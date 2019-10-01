import React from 'react';
import styled from 'styled-components'

const CardsContainer= styled.div `

`;

export const Cards = props => {
console.log(props);
return (

  <CardsContainer>
  {console.log(props.data)}
 <h1> {props.name} </h1>
  </CardsContainer>

)}
export default Cards;
