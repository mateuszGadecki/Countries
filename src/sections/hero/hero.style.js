import styled from 'styled-components';

export const StyledHeroWrapper = styled.section`
  min-height: calc(100vh - 70px);
  position: relative;
  padding: 40px 0 180px 0;
`;

export const StyledHeroBackground = styled.img`
  width: 1100px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
