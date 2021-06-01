import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';

const Layout = ({ title, flexDir = 'row', children }) => {
  return (
    <div style={{ margin: '0' }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain flexDir={flexDir}>
        <Link href="/">
          <StyledH1>NextJS Pokedex</StyledH1>
        </Link>
        {children}
      </StyledMain>
    </div>
  );
};

export default Layout;

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
const StyledMain = styled.main`
  max-width: 900px;
  margin: 0 25%;
  padding-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flexDir};
  justify-content: center;
`;
