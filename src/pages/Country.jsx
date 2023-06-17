import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';

export const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  console.log(country);
  const { flag, capital, countryName, id, languages, population } = country;
  return (
    <Section>
      <Container>
        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
