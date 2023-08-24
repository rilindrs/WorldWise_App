import { useState } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import nationsData from '../../../list-of-countries-by-continent-2023.json';

import styles from './countries.style'
import { COLORS } from '../../../constants';
import CountriesCard from '../../common/cards/countries/CountriesCard'
import useFetch from '../../../hook/useFetch';

const Countries = () => {

  //TESTER REST API CALL CODE:
  //const {data, isLoading, error} = useFetch("https://restcountries.com/v3.1/all")
  const {data, isLoading, error} = useFetch('all')

  const router = useRouter();
  //const isLoading = false;
  //const error = false;
  //PREVIOUS MEANS OF FETCHING DATA FROM API
  // const { data, isLoading, error } = useFetch('search', {
  //   query: 'React Developer',
  //   num_pages: 1
  // });

  //console.log(data);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>All Countries</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ): error ? (
          <Text>Something went wrong.</Text>
        ): (
          data?.map((thecountry) => (
            <CountriesCard
              thecountry={thecountry}
              key={`countries-${thecountry?.cca3}`}
              handleNavigate={() => router.push(`/country-details/${thecountry.cca3}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Countries