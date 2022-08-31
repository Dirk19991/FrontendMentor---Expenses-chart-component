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

export const Main = () => {
  return (
    <StyledMain>
      <Spending />
      <StyledHr />
      <Total />
    </StyledMain>
  );
};
