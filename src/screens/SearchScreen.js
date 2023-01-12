import {React, useState} from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, errorMessage, searchApi] = useResults();
  
  //text input search callback
  const termChange = (newSearchValue) => setSearchTerm(newSearchValue)

  return (
    <View>
      <SearchBar 
        term={searchTerm} 
        onTermChange={termChange}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>   
  );
};

export default SearchScreen;
