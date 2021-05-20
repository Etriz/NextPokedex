import axios from 'axios';
import styled from 'styled-components';

import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home({ pokemon }) {
  // console.log(pokemon);
  return (
    <Layout title="NextPokedex">
      {/* <StyledH1>NextJS Pokedex</StyledH1> */}
      {pokemon.map((poke, index) => (
        <Link href={`/pokemon?id=${index + 1}`} key={index}>
          <StyledCard>
            <a>
              <StyledImage src={poke.image} alt={poke.name} height="100px" />
            </a>
          </StyledCard>
        </Link>
      ))}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  const { results } = await res.data;
  const pokemon = results.map((poke, index) => {
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`;
    return { ...poke, sprite, image };
  });

  return {
    props: { pokemon },
  };
}

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
`;
const StyledCard = styled.div`
  background: #f4f4f4;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;
  :hover {
    cursor: pointer;
  }
`;
const StyledImage = styled.img`
  width: 150px;
  height: 150px;
`;
