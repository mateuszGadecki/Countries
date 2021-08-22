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
  StyledCountriesListSortBtn,
  StyledCountriesListTitle,
  StyledCountriesListValue,
  StyledCountriesListWrapper,
} from './countresList.style';
import Button from '../button/button.component';
import Sort from './sort';
import { Loader } from '../../utils/styledComponents/loader.style';
import ArrowDown from '../../images/down-arrow.svg';
import ArrowUp from '../../images/up-arrow.svg';

const CountriesList = ({ countriesList, loadingState, title }) => {
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
              <StyledCountriesListValue>{el.name}</StyledCountriesListValue>
              <StyledCountriesListValue>{el.population}</StyledCountriesListValue>
              <Button>Read more</Button>
            </StyledCountriesListItem>
          ))}
        </Sort>
      )
    );
  };
  return (
    <StyledCountriesListWrapper>
      <StyledCountriesListTitle>{title}</StyledCountriesListTitle>
      <StyledCountriesListSortBtn type="button" onClick={() => setSortBy()}>
        sort by name
        <StyledCountriesArrow src={sort === 'asc' ? ArrowDown : ArrowUp} />
      </StyledCountriesListSortBtn>
      <StyledCountriesLabels>
        <StyledCountriesLabel>Country Name</StyledCountriesLabel>
        <StyledCountriesLabel>Population</StyledCountriesLabel>
      </StyledCountriesLabels>
      <StyledCountriesList>{loadingState ? <Loader /> : renderCountries()}</StyledCountriesList>
    </StyledCountriesListWrapper>
  );
};

export default CountriesList;
