import Layout from '../../components/layout/layout.component';
import SEO from '../../components/seo.component';
import CountryDetails from '../../sections/countryDetails/countryDetails.component';

const Details = () => {
  return (
    <Layout>
      <SEO title="Details" />
      <CountryDetails />
    </Layout>
  );
};

export default Details;
