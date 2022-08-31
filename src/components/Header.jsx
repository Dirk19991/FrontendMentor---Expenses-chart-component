import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';

const StyledHeader = styled.div`
  height: 120px;
  width: 550px;
  border-radius: 23px;
  background-color: var(--softRed);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  > div {
    color: white;
    padding: 1.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > div {
    padding: 0.2rem;

    :nth-child(2) {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <div>My balance</div>
        <div>$900</div>
      </Wrapper>

      <Icon />
    </StyledHeader>
  );
};
