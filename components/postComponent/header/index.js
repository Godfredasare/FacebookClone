import { View, Text } from "react-native";
import React from "react";
import ProfilePic from '../../profilePic'
import {Entypo, Fontisto, Ionicons} from 'react-native-vector-icons';

import styles from './styles'


const Header = ({source, name, postedAt}) => {
  return (
    <View style={styles.container}>

     <View style={styles.profile}>
     <ProfilePic 
       source={source}
       />
            <View style={styles.namePostedAt}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.postedAt}>{postedAt}. 
              <Ionicons name='earth' size={15} />
            </Text>
            </View>
     </View>

      <View style={styles.icons}>
        <Entypo name='dots-three-horizontal' size={20} color='#4a463c' />
        <Fontisto name='close-a' size={19} color='#4a463c' />
      </View>

    </View>
  );
};

export default Header;
