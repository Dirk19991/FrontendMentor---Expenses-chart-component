import { useState } from 'react';
import styled from 'styled-components';
import { Spending } from './Spending';
import { Total } from './Total';

const StyledMain = styled.div`
  height: 450px;
  width: 550px;
  border-radius: 23px;
  background-color: var(--veryPaleOrange);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 350px;
  }
`;

const StyledHr = styled.hr`
  width: 90%;
`;

const data = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

export const Main = () => {
  return (
    <StyledMain>
      <Spending data={data} />
      <StyledHr />
      <Total data={data} />
    </StyledMain>
  );
};
