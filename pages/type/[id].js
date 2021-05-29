import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import capitalize from '../../utils/capitalize';

const type = ({ data }) => {
  const typeName = capitalize(data.name);
  const allOfType = data.pokemon;

  const listAll = (arr) => {
    return arr.map((item, index) => {
      return <li key={index}>{capitalize(item.pokemon.name)}</li>;
    });
  };

  return (
    <Layout title={`NextPokedex - ${typeName} Type`}>
      <div>{typeName} Type Pokemon</div>
      <ul>{listAll(allOfType)}</ul>
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
