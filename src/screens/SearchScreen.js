import {React, useState} from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  //text input search callback
  const termChange = (newSearchValue) => setSearchTerm(newSearchValue)

  //on submit of search callback
  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 10,
        term: searchTerm,
        location: 'New York City'
      }
    });
    setResults(response.data.businesses);
  }

  return (
    <View>
      <SearchBar 
        term={searchTerm} 
        onTermChange={termChange}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length} results</Text>
    </View>   
  );
};

export default SearchScreen;
