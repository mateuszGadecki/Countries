import { GlobalStyle } from './layout.style';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
