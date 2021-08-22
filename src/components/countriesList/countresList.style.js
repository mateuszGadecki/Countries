import styled from 'styled-components';

export const StyledCountriesListTitle = styled.h1`
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const StyledCountriesListWrapper = styled.div`
  margin: 0 auto;
  width: 1300px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const StyledCountriesLabels = styled.div`
  width: 1200px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 50% 30% 20%;
  margin: 40px 0 10px 0;
`;

export const StyledCountriesLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xxxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
`;
export const StyledCountriesList = styled.ul`
  list-style: none;
  width: 1200px;
  padding: 0;
  margin: 0;
`;

export const StyledCountriesListItem = styled.li`
  cursor: pointer;
  display: grid;
  grid-template-columns: 50% 30% 20%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
  padding: 15px 20px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const StyledCountriesListName = styled.p`
  margin: 0;
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
`;

export const StyledCountriesListPopulation = styled.p`
  text-align: center;
  margin: 0;
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledCountriesListSortBtn = styled.button`
  margin-right: auto;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledCountriesArrow = styled.img`
  height: 18px;
  filter: invert(39%) sepia(16%) saturate(2857%) hue-rotate(180deg) brightness(92%) contrast(85%);
`;
