import styled from 'styled-components';
import { Spending } from './Spending';
import { Total } from './Total';

const StyledMain = styled.div`
  height: 400px;
  width: 450px;
  border-radius: 23px;
  background-color: var(--veryPaleOrange);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = () => {
  return (
    <StyledMain>
      <Spending />
      <Total />
    </StyledMain>
  );
};
