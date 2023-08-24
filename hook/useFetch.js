import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(endpoint, query) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://restcountries.com/v3.1/${endpoint}`,
        params: {query},
        // headers: {
        //   'X-RapidAPI-Key': '68618c052bmsh1adfe1b13edec2fp119fc8jsn91ca958b941d',
        //   'X-RapidAPI-Host': 'country-state-city-search-rest-api.p.rapidapi.com'
        // }
      };

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios.get(url).then((response) => {
    //         setData(response.data); //add .data if need be
    //     })
    //     .catch((err) => {
    //         setError(err)
    //     })
    //     .finally(() => {
    //         setIsLoading(false);
    //     });
    // }, [url]);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
            (options);

            setData(response.data);
            setIsLoading(false);
        }   catch (error) {
            setError(error);
            alert('There is an error')
        }   finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
}

export default useFetch;