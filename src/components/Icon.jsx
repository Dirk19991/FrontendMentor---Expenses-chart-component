import styled from 'styled-components';

const StyledIcon = styled.div`
  display: flex;
`;

const WhiteCircle = styled.div`
  height: 38px;
  width: 38px;
  border: 2px solid white;
  border-radius: 100%;
  transform: translateX(40%);
`;

const BlackCircle = styled.div`
  height: 40px;
  width: 40px;
  background-color: var(--darkBrown);
  border-radius: 100%;
`;

export const Icon = () => {
  return (
    <StyledIcon>
      <WhiteCircle />
      <BlackCircle />
    </StyledIcon>
  );
};
