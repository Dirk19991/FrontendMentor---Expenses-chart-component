import React from 'react';
import styled from 'styled-components';

const StyledChartBar = styled.div.attrs((props) => ({
  height: props.height,
  backgroundColor: props.backgroundColor,
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  width: 50px;
  cursor: pointer;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 600px) {
    width: 35px;
  }
`;

const StyledAmount = styled.div`
  color: white;
  border: 3px solid var(--darkBrown);
  background-color: var(--darkBrown);
  border-radius: 0.5rem;
  position: absolute;
  font-size: 1.2rem;
  top: -2rem;
  z-index: 2;
`;

export const ChartBar = ({ amount, totalMaximum }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  let barFillHeight = '0%';

  if (totalMaximum > 0) {
    barFillHeight = Math.round((amount / totalMaximum) * 80) + '%';
  }

  return (
    <StyledChartBar
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      backgroundColor={isHovered ? 'var(--сyan)' : 'var(--softRed)'}
      height={barFillHeight}>
      {isHovered && <StyledAmount>${amount}</StyledAmount>}
    </StyledChartBar>
  );
};
