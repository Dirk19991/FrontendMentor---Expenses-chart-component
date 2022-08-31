import React from 'react';
import styled from 'styled-components';
import { Chart } from './Chart';

const StyledSpending = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
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
  padding: 1rem;
`;

export const Spending = ({ data }) => {
  return (
    <StyledSpending>
      <Text>Spending - Last 7 days</Text>
      <StyledChart>
        <Chart data={data} />
      </StyledChart>
    </StyledSpending>
  );
};
