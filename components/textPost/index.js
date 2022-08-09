import { View, Text, TextInput} from "react-native";
import React from "react";
import ProfilePic from "../profilePic";
import styles from './styles'

import {Ionicons} from 'react-native-vector-icons'

const TextPost = () => {
  return (
    <View style={styles.container}>
       <View style={styles.TextPost}>
       <ProfilePic 
         size={35}
         source={ require('../../assets/images/stories1.jpg')}
         />
       
       <TextInput 
          style={styles.input}
          placeholder="What`s on your mind?"
          editable
          placeholderTextColor={'black'}

       />

       <Ionicons name='images' size={20} color={'#40ba27'} />

       </View>

     </View>
  );
};

export default TextPost;
