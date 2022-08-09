import { View, Text, FlatList } from "react-native";
import React from "react";
import data from './data'
import Stories from '../stories'
import TextPost from "../../textPost";

const StoryFeeds = () => {
  return (
    <View>
       <FlatList 
       horizontal
       showsHorizontalScrollIndicator={false}
       data={data}
       renderItem = {({item}) =>
        <Stories source={item.imageUrl} name={item.name} profile={item.profile} />}
       />
    </View>
  );
};

export default StoryFeeds;
 