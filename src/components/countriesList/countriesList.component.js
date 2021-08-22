import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentDetails } from '../../store/countriesSlice';
import {
  StyledCountriesArrow,
  StyledCountriesLabel,
  StyledCountriesLabels,
  StyledCountriesList,
  StyledCountriesListItem,
  StyledCountriesListName,
  StyledCountriesListPopulation,
  StyledCountriesListSortBtn,
  StyledCountriesListTitle,
  StyledCountriesListWrapper,
} from './countresList.style';
import Button from '../button/button.component';
import Sort from '../sort/sort.component';
import { Loader } from '../../utils/styledComponents/loader.style';
import ArrowDown from '../../images/down-arrow.svg';
import ArrowUp from '../../images/up-arrow.svg';

const CountriesList = ({ countriesList, loadingState }) => {
  const [sort, setSort] = useState('asc');
  const dispatch = useDispatch();
  const history = useHistory();

  const setDetails = (obj) => {
    history.push('/details');
    dispatch(setCurrentDetails(obj));
  };

  const setSortBy = () => {
    sort === 'asc' ? setSort('desc') : setSort('asc');
  };

  const renderCountries = () => {
    return (
      countriesList && (
        <Sort by={sort}>
          {countriesList.map((el) => (
            <StyledCountriesListItem onClick={() => setDetails(el)} key={el.name}>
              <StyledCountriesListName>{el.name}</StyledCountriesListName>
              <StyledCountriesListPopulation>{el.population}</StyledCountriesListPopulation>
              <Button clicked={() => setDetails()}>Read more</Button>
            </StyledCountriesListItem>
          ))}
        </Sort>
      )
    );
  };
  return (
    <StyledCountriesListWrapper>
      <StyledCountriesListTitle>United Countries</StyledCountriesListTitle>
      <StyledCountriesListSortBtn type="button" onClick={() => setSortBy()}>
        sort by name
        <StyledCountriesArrow src={sort === 'asc' ? ArrowDown : ArrowUp} />
      </StyledCountriesListSortBtn>
      <StyledCountriesLabels>
        <StyledCountriesLabel>CountryName</StyledCountriesLabel>
        <StyledCountriesLabel>Population</StyledCountriesLabel>
      </StyledCountriesLabels>
      <StyledCountriesList>{loadingState ? <Loader /> : renderCountries()}</StyledCountriesList>
    </StyledCountriesListWrapper>
  );
};

export default CountriesList;
