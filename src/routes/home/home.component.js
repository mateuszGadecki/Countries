import Layout from '../../components/layout/layout.component';
import SEO from '../../components/seo.component';
import Hero from '../../sections/hero/hero.component';

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  );
};

export default Home;
