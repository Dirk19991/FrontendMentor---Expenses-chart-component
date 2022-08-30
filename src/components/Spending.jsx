import React from 'react';
import styled from 'styled-components';
import { Chart } from './Chart';

const StyledSpending = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
`;

const Text = styled.div`
  padding: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--darkBrown);
`;

const StyledChart = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80%;
`;

export const Spending = () => {
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

  return (
    <StyledSpending>
      <Text>Spending - Last 7 days</Text>
      <StyledChart>
        <Chart data={data} />
      </StyledChart>
    </StyledSpending>
  );
};
