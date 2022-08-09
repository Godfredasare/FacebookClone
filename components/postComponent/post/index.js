import { View, Text } from "react-native";
import React from "react";
import Header from '../header'
import Body from '../body'
import Footer from "../footer";
import styles from './styles'


const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <Header 
      name={post.user.name} 
      postedAt={post.user.postedAt}
      source={post.user.profileImage}
      />

      <Body 
      postText={post.postText}
      source={post.postImage}
      />

      <Footer 
      likesCount={post.likesCount}
      comment={post.comment}
      share={post.share}
      />

    </View>
  );
};



export default Post;
