import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './country.style'
import { icons } from '../../../constants'
import {checkImageURL } from '../../../utils'

const Country = ({countryFlag, countryName, countryPopulation, countryRegion, countryCapital}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: countryFlag
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.countryTitleBox}>
        <Text style={styles.countryTitle}>{countryName}</Text>
      </View>

      <View style={styles.countryInfoBox}>
        <Text style={styles.countryName}>Continent: {countryRegion}</Text>
      </View>

      <View style={styles.countryInfoBox}>
        <Text style={styles.countryName}>Capital City: {countryCapital}</Text>
      </View>

      <View style={styles.countryInfoBox}>
        <Text style={styles.countryName}>Population: {countryPopulation}</Text>
      </View>

    </View>
  )
}

export default Country