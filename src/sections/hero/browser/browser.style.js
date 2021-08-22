import styled from 'styled-components';

export const StyledBrowserWrapper = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.darkBlue};
  margin-top: 60px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;

export const StyledBrowserRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledBrowserTooltipBox = styled.div`
  position: absolute;
  top: 0;
  left: 45px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  padding: 5px 5px;
  width: 50px;
  border-radius: 4px;
  transition: visibility 0.3s, color 0.3s, background-color 0.3s, width 0.3s, padding 0.3s ease-in-out;
  @media only screen and (max-width: 425px) {
    top: -130px;
    left: -70px;
  }
`;

export const StyledBrowserTooltipItem = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const StyledBrowserInfoIcon = styled.img`
  height: 100%;
  width: 100%;
  filter: invert(39%) sepia(16%) saturate(2857%) hue-rotate(180deg) brightness(92%) contrast(85%);
`;

export const StyledBrowserInput = styled.input`
  padding: 5px 15px;
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border: 1px solid;
  border-color: ${({ theme, error }) => (error ? 'red' : theme.colors.darkBlue)};
  border-radius: 50px;
  width: 300px;
  outline: none;
  height: 32px;
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    width: 200px;
  }
`;

export const StyledBrowserInfoIconBox = styled.div`
  margin-left: 10px;
  height: 32px;
  width: 32px;
  position: relative;
  & ${StyledBrowserInfoIcon}:hover + ${StyledBrowserTooltipBox} {
    visibility: visible;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    width: 120px;
    padding: 8px 8px;
  }
`;

export const StyledBrowserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
