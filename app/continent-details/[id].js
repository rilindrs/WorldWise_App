import { useState } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native'
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';

//import nationsData from '../../../list-of-countries-by-continent-2023.json';
import styles from '../../components/home/countries/countries.style';
import { ScreenHeaderBtn } from '../../components';
import { COLORS, icons } from '../../constants';
import CountriesCard from '../../components/common/cards/countries/CountriesCard';
import useFetch from '../../hook/useFetch';

const Countries = () => {
    const router = useRouter();
    const params = useLocalSearchParams();  
  //TESTER REST API CALL CODE:
  //const {data, isLoading, error} = useFetch("https://restcountries.com/v3.1/all")
    const {data, isLoading, error} = useFetch('region/'.concat(params.id))

  //const isLoading = false;
  //const error = false;
  //PREVIOUS MEANS OF FETCHING DATA FROM API
  // const { data, isLoading, error } = useFetch('search', {
  //   query: 'React Developer',
  //   num_pages: 1
  // });

  //console.log(data);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                        />
                    ),
                    headerTitle: params.id
                }}
            />

        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}>All Countries</Text>
            {/* <TouchableOpacity>
                <Text style={styles.headerBtn}>Show All</Text>
            </TouchableOpacity> */}
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
        </ScrollView>
    </SafeAreaView>
  )
}

export default Countries