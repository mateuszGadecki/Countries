import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.darkBlue};
  position: absolute;
  bottom: 0;
`;

export const StyledFooterContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFooterText = styled.p`
  margin: 40px 0 0 0;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
