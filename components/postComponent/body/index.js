import { View, Text, Image } from "react-native";
import React from "react";
import styles from './styles'


const Body = ({source, postText}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.postText}>{postText}</Text>
      <Image
      style={styles.image}
      source={source}
      />
    </View>
  );
};

export default Body;
