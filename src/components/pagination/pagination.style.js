import styled from 'styled-components';

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const StyledPaginationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const StyledPaginationItem = styled.li`
  margin: 0 6px;
`;

export const StyledPaginationButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme, active }) => (active ? theme.colors.darkBlue : theme.colors.blue)};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 5px 8px;
  transition: background-color 0.2s ease-in;
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
