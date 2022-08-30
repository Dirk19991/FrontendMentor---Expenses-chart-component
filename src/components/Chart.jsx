import React from 'react';
import { ChartBar } from './ChartBar';
import styled from 'styled-components';

const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Chart = ({ data }) => {
  const dataPointValues = data.map((dataPoint) => dataPoint.amount);

  const totalMaximum = Math.max(...dataPointValues);

  return data.map((elem) => {
    return (
      <StyledChart key={elem.day}>
        <ChartBar
          day={elem.day}
          amount={elem.amount}
          maxAmount={totalMaximum}
        />
        <div>{elem.day}</div>
      </StyledChart>
    );
  });
};
