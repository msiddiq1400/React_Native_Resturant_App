import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
              params: {
                limit: 10,
                term: searchTerm,
                location: 'New York City'
              }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    },[])

    return [results, errorMessage, searchApi]
}