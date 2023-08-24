import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Country:</Text>


      <View style={styles.contentBox}>
        <Text style={styles.contextText}>Bordering Countries (abbreviated):{'\n'}{info ?? "There are no countries around the border."}</Text>
      </View>
    </View>
  )
}

export default About