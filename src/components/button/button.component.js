import { StyledButton } from './button.style';

const Button = ({ children, clicked }) => {
  return <StyledButton onClick={() => clicked && clicked()}>{children}</StyledButton>;
};

export default Button;
