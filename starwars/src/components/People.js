import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import Cards from './StarCards';
import styled from 'styled-components'

const PeopleData = styled.div`

`;

export const People = () => {
const [peopleData,setPeopleData]=useState([]);
const [name, setName]= useState("");
const [height, setHeight]= useState("");
const [mass, setMass]= useState("");
const [hairColor, setHairColor]= useState("");
const [skinColor, setSkinColor]= useState("");

useEffect(()=>{
async function getData(){
  try{
const data = await axios.get("https://swapi.co/api/people/");
//console.log(data.data.results);
setPeopleData(data.data.results);
const details= data.data.results;
setName(details.name);
setHeight(details.height);
setMass(details.mass)
setHairColor(details.hair_color);
setSkinColor(details.skin_color);
} catch (err){
  console.log('Sorry, there seems to be an error. Try Again.')
}

}
getData();

}, []);
return(
<PeopleData>
{peopleData.map((results, i) =>{
 return <Cards data = {results}
 key= {i}
 name ={peopleData.name}
 />;
 console.log(peopleData.name);
})
}
</PeopleData>
)
}
export default People;
