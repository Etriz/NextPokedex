import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

import capitalize from '../utils/capitalize';

const TypeSort = () => {
  const [types, setTypes] = useState([]);

  useEffect(async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/type`);
    const results = await res.data.results;
    // console.log(`results`, results);
    setTypes([...results]);
  }, []);

  const sortButtons = () => {
    return types.map((type, index) => {
      return (
        <Link href={`/type/${index + 1}`} key={index}>
          <StyledButton>{capitalize(type.name)}</StyledButton>
        </Link>
      );
    });
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <div>Sort by: </div>
      {sortButtons()}
    </div>
  );
};

export default TypeSort;

const StyledButton = styled.button`
  width: 5rem;
  margin: 0.25rem;
  padding: 0.5rem;
  border: 1px solid #00000000;
  border-radius: 0.25rem;
  :hover {
    border: 1px solid gray;
    cursor: pointer;
  }
`;
