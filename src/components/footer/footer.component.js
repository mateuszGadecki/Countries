import { StyledFooterContent, StyledFooterText, StyledFooterWrapper } from './footer.style';
import { StyledCenter } from '../../utils/styledComponents/center.style';

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledCenter>
        <StyledFooterContent>
          <StyledFooterText>Company Name 2021</StyledFooterText>
        </StyledFooterContent>
      </StyledCenter>
    </StyledFooterWrapper>
  );
};

export default Footer;
