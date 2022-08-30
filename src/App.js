import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import styled from 'styled-components';

const StyledApp = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Main />
    </StyledApp>
  );
};
