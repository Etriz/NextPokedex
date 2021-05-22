import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const pokemon = ({ data }) => {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1) + ' ';
  };

  const name = capitalize(data.name);
  const image = data.sprites.other.dream_world.front_default;
  const { types } = data;

  return (
    <Layout title={`NextPokedex - ${name}`}>
      <StyledH1>{name}</StyledH1>
      <StyledImage src={image} alt={name} />
      <StyledTypes>
        {types.map((type) => {
          return capitalize(type.type.name);
        })}
      </StyledTypes>
    </Layout>
  );
};

export default pokemon;

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.data;
  return {
    props: { data },
  };
};

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
`;
const StyledTypes = styled.h4`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-align: center;
`;
const StyledImage = styled.img`
  margin: 0 auto;
`;
