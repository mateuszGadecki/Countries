import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.colors.blue};
`;

export const StyledHeaderContent = styled.div`
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const StyledHeaderLogoLink = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const StyledHeaderLogo = styled.img`
  height: 60px;
  width: auto;
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
`;

export const StyledHeaderNavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  margin-left: 30px;
`;
