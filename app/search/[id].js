import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View, ScrollView, RefreshControl } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import { Country, CountryAbout, CountryFooter, CountryTabs, ScreenHeaderBtn, Specifics, CountryImages } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'
import useFetch from '../../hook/useFetch'

const tabs = ["About", "Images", "Location"];

const CountrySearch = () => {
    const params = useLocalSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: 'GET',
                url: `https://restcountries.com/v3.1/all`,
                params: {query},
                // params: {
                //     query: params.id,
                //     page: page.toString(),
                // },
            };

            const response = await axios.request(options);
            setSearchResult(response.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    // const handlePagination = (direction) => {
    //     if (direction === 'left' && page > 1) {
    //         setPage(page - 1)
    //         handleSearch()
    //     } else if (direction === 'right') {
    //         setPage(page + 1)
    //         handleSearch()
    //     }
    // }

    useEffect(() => {
        handleSearch()
    }, [])

    const { data, isLoading, error, refetch } = useFetch('name/'.concat(params.id))

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = () => {};

    const displayTabContent = () => {
        switch (activeTab) {
            case "Location":
                return <Specifics
                    title="Location"
                    points={data[0].maps.googleMaps} // once info can be accessed, this should point to the data
                />
            case "About":
                return <CountryAbout 
                    info={data[0].borders} // TODO: find api to get more data or add data youself on json
                />
            case "Images":
                return <CountryImages
                    title="Country Images"
                    points={data[0].coatOfArms.png} // TODO: find api to get images of the country...
                />
            default:
                break;
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <>
                <ScrollView
                    showsVerticalScrollIndicator={false} refreshControl=
                    {<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                >
                    
                    {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.gray} />
                    ): error ? (
                        <Text>Something went wrong.</Text>
                    ): data.length === 0 ? (
                        <Text>No Data</Text>
                    ): (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Country
                                countryFlag={data[0].flags.png}
                                countryName={data[0].name.common}
                                countryPopulation={data[0].population}
                                countryRegion={data[0].continents}
                                countryCapital={data[0].capital}
                            />
                            <CountryTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />

                            {displayTabContent()}
                        </View>
                    )}
                    
                    {/* {isLoading ? (
                        <ActivityIndicator size="large" colors={COLORS.bluey} />
                    ): error ? (
                        <Text>Something went wrong.</Text>
                    ): data.length === 0 ? (
                        <Text>No Data</Text>
                    ): (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Country

                            />
                            <CountryTabs
                                
                            />
                        </View>
                    )} */}

                </ScrollView>
                
                {/* FIGURE OUT AN IDEA FOR THE FOOTER <CountryFooter/> */}

            </>

            {/* <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <CountriesCard
                        thecountry={item}
                        handleNavigate={() => router.push(`/country-details/${thecountry.cca3}`)}
                    />
                )}
                keyExtractor={(item) => item.cca3}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            /> */}
        </SafeAreaView>
    )
}

export default CountrySearch