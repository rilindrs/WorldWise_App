import React from 'react'
import { View, Text, Linking} from 'react-native'

import styles from './specifics.style'

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
          <View style={styles.pointWrapper}>
            <View style={styles.pointDot}/>
            <Text style={styles.pointText} onPress={() => Linking.openURL(points)}>Open in Google Maps:{'\n'}{points}</Text>
          </View>
      </View>
    </View>
  )
}

export default Specifics