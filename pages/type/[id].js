import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import capitalize from '../../utils/capitalize';

const type = ({ data }) => {
  const typeName = capitalize(data.name);
  const allOfType = data.pokemon;

  const listAll = (arr) => {
    return arr.map((item, index) => {
      return (
        <Link href={`/pokemon/${item.pokemon.name}`} key={index}>
          <StyledName>{capitalize(item.pokemon.name)}</StyledName>
        </Link>
      );
    });
  };

  return (
    <Layout title={`NextPokedex - ${typeName} Type`} flexDir="column">
      <StyledH3>{typeName} Type Pokemon</StyledH3>
      <StyledNameContainer>{listAll(allOfType)}</StyledNameContainer>
    </Layout>
  );
};

export default type;

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  const res = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
  const data = await res.data;
  return {
    props: { data },
  };
};

const StyledH3 = styled.h3`
  text-align: center;
`;
const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledName = styled.div`
  text-align: center;
  width: 30%;
  margin: 0.25rem;
  padding: 0.5rem 0;
  border: 1px solid #00000000;
  border-radius: 0.25rem;
  background: #f4f4f4;
  :hover {
    cursor: pointer;
    border: 1px solid gray;
  }
  @media screen and (max-width: 600px) {
    width: 45%;
    /* font-size: 1.25rem; */
  }
`;
