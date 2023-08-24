import React from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

import { Country, CountryAbout, CountryFooter, CountryTabs, ScreenHeaderBtn, Specifics, CountryImages} from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const tabs = ["About", "Images", "Location"];

const CountryDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('alpha/'.concat(params.id))

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, [])

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
                    // headerRight: () => (
                    //     <ScreenHeaderBtn
                    //         iconUrl={icons.share}
                    //         dimension="60%"
                    //     />
                    // ),
                    headerTitle: ''
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
        </SafeAreaView>
    )
}

export default CountryDetails