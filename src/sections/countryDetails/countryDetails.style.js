import styled from 'styled-components';

export const StyledCountryDetailsWrapper = styled.section`
  min-height: calc(100vh - 70px);
  padding: 40px 0 180px 0;
`;

export const StyledCountryDetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 425px) {
    align-items: flex-start;
  }
`;
export const StyledCountryDetailsRow = styled.li`
  display: flex;
  margin-bottom: 20px;
`;

export const StyledCountryFlag = styled.img`
  width: 800px;
  height: auto;
  margin-bottom: 40px;
  @media only screen and (max-width: 1024px) {
    width: 70%;
  }
  @media only screen and (max-width: 425px) {
    width: 95%;
    margin: 0 auto 40px auto;
  }
`;

export const StyledCountryDetailsLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xxxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  }
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
  }
  @media only screen and (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const StyledCountryDetailsValue = styled.p`
  margin: 0 0 0 30px;
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: ${({ theme }) => theme.fontSizes.xxxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  }
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
  }
  @media only screen and (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const StyledCountryDetailsButton = styled.div`
  @media only screen and (max-width: 425px) {
    margin: 0 auto;
  }
`;

export const StyledCountryDetailsMessageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledCountryDetailsMessage = styled.p`
  margin: 0 0 30px 0;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xxxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  }
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
  }
  @media only screen and (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
