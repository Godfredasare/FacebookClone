import { View, Text } from "react-native";
import React from "react";
import ImageVideoDemo from "../imageVideoDemo";
import styles from './styles'


const Stories = ({source, name, profile}) => {
  return (

    <View>
      <View style={styles.container}>
        <ImageVideoDemo 
        name={name}
        profile={profile}
        source={source} />

       
    </View>
      
    </View>
   
  );
};

export default Stories;
