import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCountries } from '../../store/store';
import { setCountries } from '../../store/countriesSlice';
import { StyledHeroWrapper } from './hero.style';
import { StyledCenter } from '../../utils/styledComponents/center.style';
import CountriesList from '../../components/countriesList/countriesList.component';

const Hero = () => {
  const dispatch = useDispatch();
  const countriesState = useSelector(selectCountries);
  const [loading, setLoading] = useState(false);

  const getCountries = () => {
    setLoading(true);
    fetch('https://restcountries.eu/rest/v2/name/united?fields=name;population;flag;capital;currencies')
      .then((res) => res.json())
      .then((res) => {
        dispatch(setCountries(res));
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    !countriesState.countriesList && getCountries();
  }, []);

  return (
    <StyledHeroWrapper>
      <StyledCenter>
        <CountriesList countriesList={countriesState.countriesList} loadingState={loading} />
      </StyledCenter>
    </StyledHeroWrapper>
  );
};

export default Hero;
