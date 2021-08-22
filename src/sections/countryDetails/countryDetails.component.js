import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCountries } from '../../store/store';
import {
  StyledCountryDetailsButton,
  StyledCountryDetailsLabel,
  StyledCountryDetailsList,
  StyledCountryDetailsMessage,
  StyledCountryDetailsMessageBox,
  StyledCountryDetailsRow,
  StyledCountryDetailsValue,
  StyledCountryDetailsWrapper,
  StyledCountryFlag,
} from './countryDetails.style';
import Button from '../../components/button/button.component';
import { StyledCenter } from '../../utils/styledComponents/center.style';

const CountryDetails = () => {
  const countriesState = useSelector(selectCountries);
  const history = useHistory();
  const handleBack = () => {
    history.push('/');
  };

  const renderList = () => (
    <StyledCountryDetailsList>
      <StyledCountryFlag src={countriesState.currentDetails.flag} />
      <StyledCountryDetailsRow>
        <StyledCountryDetailsLabel>Country name:</StyledCountryDetailsLabel>
        <StyledCountryDetailsValue>{countriesState.currentDetails.name}</StyledCountryDetailsValue>
      </StyledCountryDetailsRow>
      <StyledCountryDetailsRow>
        <StyledCountryDetailsLabel>Capital:</StyledCountryDetailsLabel>
        <StyledCountryDetailsValue>
          {countriesState.currentDetails.capital ? countriesState.currentDetails.capital : 'no capital'}
        </StyledCountryDetailsValue>
      </StyledCountryDetailsRow>
      <StyledCountryDetailsRow>
        <StyledCountryDetailsLabel>Population:</StyledCountryDetailsLabel>
        <StyledCountryDetailsValue>{countriesState.currentDetails.population}</StyledCountryDetailsValue>
      </StyledCountryDetailsRow>
      <StyledCountryDetailsRow>
        <StyledCountryDetailsLabel>Currency Code:</StyledCountryDetailsLabel>
        <StyledCountryDetailsValue>{countriesState.currentDetails.currencies[0].code}</StyledCountryDetailsValue>
      </StyledCountryDetailsRow>
      <StyledCountryDetailsRow>
        <StyledCountryDetailsLabel>Currency Name:</StyledCountryDetailsLabel>
        <StyledCountryDetailsValue>{countriesState.currentDetails.currencies[0].name}</StyledCountryDetailsValue>
      </StyledCountryDetailsRow>
      <StyledCountryDetailsRow>
        <StyledCountryDetailsLabel>Currency Symbol:</StyledCountryDetailsLabel>
        <StyledCountryDetailsValue>{countriesState.currentDetails.currencies[0].symbol}</StyledCountryDetailsValue>
      </StyledCountryDetailsRow>
      <StyledCountryDetailsButton>
        <Button clicked={handleBack}>Back</Button>
      </StyledCountryDetailsButton>
    </StyledCountryDetailsList>
  );

  const message = (
    <StyledCountryDetailsMessageBox>
      <StyledCountryDetailsMessage>Select one country from the list for details</StyledCountryDetailsMessage>
      <StyledCountryDetailsButton>
        <Button clicked={handleBack}>Back</Button>
      </StyledCountryDetailsButton>
    </StyledCountryDetailsMessageBox>
  );

  return (
    <StyledCountryDetailsWrapper>
      <StyledCenter>{countriesState.currentDetails ? renderList() : message}</StyledCenter>
    </StyledCountryDetailsWrapper>
  );
};

export default CountryDetails;
