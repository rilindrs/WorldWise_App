import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image} from 'react-native'
import dataa from '../../../../list-of-countries-by-continent-2023.json';

import styles from './countriescard.style'
import { COLORS, SIZES } from '../../../../constants';
import { checkImageURL } from '../../../../utils'

const CountriesCard = ({ thecountry, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer} onPress={handleNavigate}>
      <Image
          source={{
            uri: thecountry.flags.png
          }}
          style={styles.logoImage}
        />
        <Text style={styles.countryName}>{thecountry.name.common}</Text>
        {/* <Image 
              source={{
                uri: checkImageURL(thecountry?.country_flag)
                ? thecountry.country_flag
                : thecountry.flags.png,
              }} 
              resizeMode="contain" 
              style={styles.searchBtnImage} 
              onPress={() => {}}
          /> */}

      </TouchableOpacity>
    </TouchableOpacity>

    // <View
    //   style={[styles.container(selectedCountry, item)]}
    //   onPress={() => handleCardPress(item)}
    // >

    //   {
    //     data && data.map( ctry => {
    //       return(
    //         <TouchableOpacity 
    //           style={styles.logoContainer(selectedCountry, item)} 
    //           onPress={handleNavigate}
    //           key={ctry.id}
    //         >
    //           <Text style={styles.countryName(selectedCountry, item)}>
    //             {ctry.country}
    //           </Text>
    //         </TouchableOpacity>
    //       )
    //     })
    //   }      
    // </View>
    
  )
}

export default CountriesCard