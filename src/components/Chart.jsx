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
  const sortedDataPointValues = data
    .map((dataPoint) => dataPoint.amount)
    .sort((a, b) => a - b);

  const totalMaximum = sortedDataPointValues[sortedDataPointValues.length - 1];
  const totalSecond = sortedDataPointValues[sortedDataPointValues.length - 2];

  return data.map((elem) => {
    return (
      <StyledChart key={elem.day}>
        <ChartBar
          day={elem.day}
          amount={elem.amount}
          totalMaximum={totalMaximum}
          totalSecond={totalSecond}
        />
        <div>{elem.day}</div>
      </StyledChart>
    );
  });
};
