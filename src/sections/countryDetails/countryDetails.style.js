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
`;
export const StyledCountryDetailsRow = styled.li`
  display: flex;
  margin-bottom: 20px;
`;

export const StyledCountryFlag = styled.img`
  width: 800px;
  height: auto;
  margin-bottom: 40px;
`;

export const StyledCountryDetailsLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xxxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledCountryDetailsValue = styled.p`
  margin: 0 0 0 30px;
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: ${({ theme }) => theme.fontSizes.xxxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledCountryDetailsButton = styled.div``;

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
`;
