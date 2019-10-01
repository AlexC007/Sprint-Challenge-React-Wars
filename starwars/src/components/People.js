import React, { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flew-flow: column wrap;
width: 70rem;
height: 70rem;
 border: 1px solid black;
`;

export default function People(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people")
      .then(data => {
        setPeople(data.data.results);
      })
      .catch(error => {
        console.log('Sorry, there was an Error. Please try again');
      });
  }, []);

  return (
    <Container>

        {people.map((data, i) => {
          return (

                <Details
                  key= {i}
                  name={data.name}
                  mass={data.mass}
                  height={data.height}
                  hairColor= {data.hair_color}
                  eyeColor={data.eye_color}

                />


          );
        })}

    </Container>
  );
}
