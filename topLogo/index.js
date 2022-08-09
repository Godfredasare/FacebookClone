import { View, Text, Image } from "react-native";
import React from "react";
import styles from './styles'

const TopLogo = () => {
  return (
    <View style={styles.container}>
       <Image 
         style={styles.image}
         source={ require('../assets/facebook.png') }
       />
    </View>
  );
};

export default TopLogo;
