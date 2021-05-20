import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const pokemon = ({ data }) => {
  return <Layout title={data.name}></Layout>;
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
