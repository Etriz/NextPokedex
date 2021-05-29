import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Layout = ({ title, children }) => {
  return (
    <div style={{ margin: '0' }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <StyledH1>NextJS Pokedex</StyledH1>
        {children}
      </StyledMain>
    </div>
  );
};

export default Layout;

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
`;
const StyledMain = styled.main`
  max-width: 900px;
  margin: 0 25%;
  padding-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
