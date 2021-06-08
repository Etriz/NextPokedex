import axios from 'axios';
import styled from 'styled-components';

import Link from 'next/link';
import Layout from '../components/Layout';
import TypeSort from '../components/TypeSort';
import capitalize from '../utils/capitalize';

export default function Home({ pokemon }) {
  // console.log(pokemon);

  const paddedIndex = (index) => {
    return `00${index + 1}`.slice(-3);
  };
  return (
    <Layout title="NextPokedex">
      <TypeSort />
      {pokemon.map((poke, index) => (
        <Link href={`/pokemon/${index + 1}`} key={index}>
          <StyledCard>
            <a>
              <StyledImage src={poke.image} alt={poke.name} />
              <br />
              <span>{`${paddedIndex(index)}. ${capitalize(poke.name)}`}</span>
            </a>
          </StyledCard>
        </Link>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const { results } = await res.data;
  const pokemon = results.map((poke, index) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`;
    return { ...poke, image };
  });

  return {
    props: { pokemon },
  };
}

const StyledCard = styled.div`
  background: #f4f4f4;
  border: 1px solid #f4f4f4;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;
  :hover {
    box-shadow: 0.25rem 0.25rem 0.5rem gray;
    border: 1px solid gray;
    cursor: pointer;
  }
`;
const StyledImage = styled.img`
  width: 10rem;
  height: 10rem;
  @media screen and (max-width: 600px) {
    width: 15rem;
    height: 15rem;
  }
`;
