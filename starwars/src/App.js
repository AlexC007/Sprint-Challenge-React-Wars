import React from 'react';
import axios from "axios";
import './App.css';
import {useState, useEffect} from "react";

const App = () => {
const [name, setName]= useState("");
const [height, setHeight]= useState("");
const [mass, setMass]= useState("");
const [hairColor, setHairColor]= useState("");
const [skinColor, setSkinColor]= useState("");


useEffect(() =>{
axios.get("https://swapi.co/api/people/")
.then(function(response){
  console.log(response.data.results);
  let people = response.data.results;
  people.map(()=>{
    setName(people.name)
    setHeight(people.height)
    setMass(people.mass)
    setHairColor(people.hair_color)
    setSkinColor(people.skin_color)

})



.catch(function (error) {

  console.log(error);
})
.finally(function () {

});
}, [name, height, mass, hairColor, skinColor ])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">
      React Wars
      </h1>
    </div>
  );
}

export default App;
