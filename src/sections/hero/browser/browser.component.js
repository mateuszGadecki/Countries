import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledBrowserForm,
  StyledBrowserInfoIcon,
  StyledBrowserInfoIconBox,
  StyledBrowserInput,
  StyledBrowserRow,
  StyledBrowserTooltipBox,
  StyledBrowserTooltipItem,
  StyledBrowserWrapper,
} from './browser.style';
import { selectCountries } from '../../../store/store';
import { clearList, setCountriesByRegion, setCountrySearched } from '../../../store/countriesSlice';
import Pagination from '../../../components/pagination/pagination.component';
import CountriesList from '../../../components/countriesList/countriesList.component';
import Button from '../../../components/button/button.component';
import InfoIcon from '../../../images/information.svg';

const Browser = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);
  const dispatch = useDispatch();
  const countriesState = useSelector(selectCountries);

  const getCountriesByRegion = (e, region) => {
    e.preventDefault();
    setCurrentPage(1);
    const options = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    options.forEach((el) => {
      if (el === region.toLowerCase()) {
        fetch(`https://restcountries.eu/rest/v2/region/${region}?fields=name;population;flag;capital;currencies`)
          .then((res) => res.json())
          .then((res) => {
            setErrorMessage(false);
            dispatch(setCountrySearched(inputValue));
            dispatch(setCountriesByRegion(res));
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        setErrorMessage(true);
        dispatch(clearList());
      }
    });
  };
  const inputChangedHandler = (event) => {
    setErrorMessage(false);
    setInputValue(event.target.value);
  };

  const capitalizeFirsLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const paginationHandler = (countries) => {
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
    return currentCountries;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <StyledBrowserWrapper>
        <StyledBrowserForm onSubmit={(e) => getCountriesByRegion(e, inputValue)}>
          <StyledBrowserRow>
            <StyledBrowserInput error={errorMessage} value={inputValue} onChange={inputChangedHandler} />
            <StyledBrowserInfoIconBox>
              <StyledBrowserInfoIcon src={InfoIcon} />
              <StyledBrowserTooltipBox>
                <StyledBrowserTooltipItem>Options:</StyledBrowserTooltipItem>
                <StyledBrowserTooltipItem>Africa</StyledBrowserTooltipItem>
                <StyledBrowserTooltipItem>Americas</StyledBrowserTooltipItem>
                <StyledBrowserTooltipItem>Asia</StyledBrowserTooltipItem>
                <StyledBrowserTooltipItem>Europe</StyledBrowserTooltipItem>
                <StyledBrowserTooltipItem>Oceania</StyledBrowserTooltipItem>
              </StyledBrowserTooltipBox>
            </StyledBrowserInfoIconBox>
          </StyledBrowserRow>
          <Button type="submit">Search</Button>
        </StyledBrowserForm>
      </StyledBrowserWrapper>
      {countriesState.countriesListByRegion && (
        <>
          <CountriesList
            title={`Countries of ${capitalizeFirsLetter(countriesState.countrySearched)}`}
            countriesList={paginationHandler(countriesState.countriesListByRegion)}
          />
          <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={countriesState.countriesListByRegion.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};

export default Browser;
