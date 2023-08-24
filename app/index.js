import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images} from '../constants';
import { ScreenHeaderBtn, Welcome, Countries, MiniGames } from '../components'

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    // headerRight: () => (
                    //     <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    // ),
                    headerTitle: "WorldWise"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={{flex: 1, padding: SIZES.medium }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if(searchTerm) {
                                router.push(`search/${searchTerm}`)
                                //router.push(`search/${searchTerm}`)
                            }
                        }}
                    />
                    <Countries></Countries>
                    {/* <MiniGames></MiniGames> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;