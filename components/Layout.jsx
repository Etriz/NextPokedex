import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Layout = ({ title, children }) => {
  return (
    <div style={{ background: 'lightgrey', margin: '0' }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>{children}</StyledMain>
    </div>
  );
};

export default Layout;

const StyledMain = styled.main`
  max-width: 900px;
  margin: 0 25%;
  padding-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
