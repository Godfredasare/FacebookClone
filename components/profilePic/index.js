import { View, Text, Image } from "react-native";
import React from "react";
import styles from './styles'

const ProfilePic = ({source, size=35}) => {
  return (
    <View style={[styles.container, {width: size+5, height: size+5, borderColor: '#3271c7',}]}>
        <Image 
        style={[styles.image, {height: size, width: size}]}
        source={source}
        />
    </View>
  );
};

export default ProfilePic;
