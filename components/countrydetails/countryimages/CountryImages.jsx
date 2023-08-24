import React from 'react'
import { View, Text, Linking} from 'react-native'

import styles from './countryimages.style'

const CountryImages = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
          <View style={styles.pointWrapper}>
            <View style={styles.pointDot}/>
            <Text style={styles.pointText} onPress={() => Linking.openURL(points)}>Country Coat of Arms:{'\n'}{points}</Text>
          </View>
      </View>
    </View>
  )
}

export default CountryImages