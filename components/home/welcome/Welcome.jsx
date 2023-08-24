import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const Continents = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania"]; // Antartica was removed

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  // const [activeContinentType, setActiveContinentType] = useState('Africa')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Welcome to WorldWise!{"\n"}</Text>
        <Text style={styles.userName}>Explore to find facinating facts about all the countires around the world!{"\n"}</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            multiline={true}
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search for any country"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search} 
            resizeMode="contain" 
            style={styles.searchBtnImage} 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabsContainer}>
        <FlatList 
          data={Continents}
          horizontal={true}
          //horizontal={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
              //style={styles.tab(activeContinentType, item)}
              style={styles.tab(item)} // this is for the boarder line of the tab
              onPress={() => {
                //setActiveContinentType(item);
                //router.push(`search/region/${item}`)
                router.push(`continent-details/${item}`)
              }}
            >
              {/* <Text style={styles.tabText(activeContinentType, item)}>{item}</Text> */}
              <Text style={styles.tabText(item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
        />
      </View>

    </View>
  )
}

export default Welcome