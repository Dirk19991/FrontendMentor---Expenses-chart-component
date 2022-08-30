import React from 'react';
import styled from 'styled-components';

const StyledChartBar = styled.div.attrs((props) => ({
  height: props.height,
}))`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 40px;
  background-color: var(--softRed);
  height: ${(props) => props.height};
`;

export const ChartBar = ({ day, amount, maxAmount }) => {
  let barFillHeight = '0%';

  if (maxAmount > 0) {
    barFillHeight = Math.round((amount / maxAmount) * 100) + '%';
  }

  return <StyledChartBar height={barFillHeight} />;
};
