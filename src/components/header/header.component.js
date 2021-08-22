import {
  StyledHeaderContent,
  StyledHeaderLogo,
  StyledHeaderLogoLink,
  StyledHeaderNav,
  StyledHeaderNavItem,
  StyledHeaderWrapper,
} from './header.style';
import { StyledCenter } from '../../utils/styledComponents/center.style';
import Logo from '../../images/globe.svg';

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledCenter>
        <StyledHeaderContent>
          <StyledHeaderLogoLink to="/">
            <StyledHeaderLogo src={Logo} />
          </StyledHeaderLogoLink>
          <StyledHeaderNav>
            <StyledHeaderNavItem to="/">About</StyledHeaderNavItem>
            <StyledHeaderNavItem to="/">Contact</StyledHeaderNavItem>
          </StyledHeaderNav>
        </StyledHeaderContent>
      </StyledCenter>
    </StyledHeaderWrapper>
  );
};

export default Header;
