import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import capitalize from '../../utils/capitalize';

const type = ({ data }) => {
  const name = data.name;
  return (
    <Layout title={`NextPokedex - ${name}`}>
      <div>{capitalize(data.name)}</div>
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
