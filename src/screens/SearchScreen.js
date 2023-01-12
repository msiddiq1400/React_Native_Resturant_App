import {React, useState} from 'react';
import { ScrollView, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, errorMessage, searchApi] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price)
  }

  return (
    <>
      <SearchBar 
        term={searchTerm} 
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList 
          resturants={filterResultsByPrice('$')} 
          title="Cost Effective"
        />
        <ResultsList 
          resturants={filterResultsByPrice('$$')} 
          title="Bit Pricier"
        />
        <ResultsList 
          resturants={filterResultsByPrice('$$$')} 
          title="Big Spender"
        />
      </ScrollView>
    </>   
  );
};

export default SearchScreen;
