import React from 'react';
import styled from 'styled-components';

const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  height: 30%;

  > div {
    padding-left: 1.5rem;
  }
`;

const Text = styled.div`
  color: var(--mediumBrown);
`;

const Sum = styled.div`
  color: var(--darkBrown);
  font-size: 2rem;
  font-weight: 700;
`;

export const Total = ({ data }) => {
  return (
    <StyledTotal>
      <Text>Total spending this month</Text>
      <Sum>${data.reduce((a, b) => a + b.amount, 0)}</Sum>
    </StyledTotal>
  );
};
