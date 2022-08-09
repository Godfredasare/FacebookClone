import { View, Text, Image, Pressable } from "react-native";
import React, {useState, useEffect} from "react";
import styles from "./styles";
import {AntDesign, EvilIcons} from 'react-native-vector-icons'

const Footer = ({likesCount: likesCountProp, comment, share}) => {
  const [like, setLike] = useState(false)
  const [likesCount, setLikesCount] = useState('')

  const onPress = () =>{
   setLike(!like)
   const count = like ? -1 : 1;
   setLikesCount ( likesCount + count )
  }

  useEffect(() =>{
    setLikesCount(likesCountProp)
  }, [])

  return (
    <View style={styles.container}>

      <View styles={styles.first}>
        <View style={styles.likeCount}>
          <Image
            source={require("../../../assets/likes.png")}
            style={styles.likeImage}
          />
          <Text style={styles.count}>{likesCount}</Text>

          <View style={styles.comsh}>
            <Text style={styles.comment}>{comment} comments </Text>
            <Text style={styles.share}>. {share} share</Text>
          </View>
        </View>
          
        <View style={styles.lineStyle} />

        <View style={styles.iconsContainer}>
          <Pressable onPress={onPress}>
          { like ?     <AntDesign name='like1' size={25} color={'#4081e3'} />
                      : <AntDesign name='like2' size={25} color={'#7a7976'} />
          }
          </Pressable>

             <EvilIcons name='comment' size={28} color={'#7a7976'} />
             <Image source={ require('../../../assets/share.png')} style={styles.shares}/>
        </View>

        <View style={styles.lineStyle} />


      </View>
    </View>
  );
};

export default Footer;
