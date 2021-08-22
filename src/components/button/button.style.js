import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 32px;
  cursor: pointer;
  width: 130px;
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-left: auto;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 5px;
    width: 90px;
  }
`;
