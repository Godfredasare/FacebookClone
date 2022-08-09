import { View, ImageBackground, Text } from "react-native";
import React from "react";
import ProfilePic from "../../profilePic";
import styles from "./styles";

const ImageVideoDemo = ({ profile,source, name }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 12 }}
        style={styles.image}
        source={source}
      >
       <View style={styles.mainProfileContainer}>
          <View style={styles.profileContainer}>
          <ProfilePic source={profile} style={styles.ProfilePic} size={25} />
          </View>
             <Text style={styles.name}>{name}</Text>

       </View>

      </ImageBackground>
    </View>
  );
};

export default ImageVideoDemo;
