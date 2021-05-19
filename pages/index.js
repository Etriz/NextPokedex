import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home({ pokemon }) {
  console.log(pokemon);
  return (
    <Layout title="NextPokedex">
      <h1>NextJS Pokedex</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a>
                <img src={poke.image} alt={poke.name} height="100px" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
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
