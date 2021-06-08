import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import capitalize from '../../utils/capitalize';

const pokemon = ({ data }) => {
  const pokemonName = capitalize(data.name);
  const id = data.id;
  let image =
    data.sprites.other.dream_world.front_default ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const { types } = data;
  const router = useRouter();

  return (
    <Layout title={`NextPokedex - ${pokemonName}`}>
      <StyledCard>
        <StyledH1>{pokemonName}</StyledH1>
        <StyledImage src={image} alt={pokemonName} />
        <StyledTypeNames>
          {types.map((type) => {
            return capitalize(type.type.name) + ' ';
          })}
        </StyledTypeNames>
      </StyledCard>
      <StyledBack onClick={() => router.back()}>Back</StyledBack>
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

const StyledCard = styled.div`
  background: #f4f4f4;
  border-radius: 0.5rem;
  padding: 0 4rem;
  text-align: center;
`;
const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
`;
const StyledTypeNames = styled.h4`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-align: center;
`;
const StyledImage = styled.img`
  margin: 0 auto;
  max-width: 250px;
`;
const StyledBack = styled.button`
  width: 20%;
  outline: none;
  border: 1px solid #00000000;
  border-radius: 0.5rem;
  margin: 1rem 35%;
  padding: 0.5rem;
  :hover {
    cursor: pointer;
    border: 1px solid gray;
  }
  @media screen and (max-width: 600px) {
    width: 45%;
    font-size: 1.5rem;
  }
`;
