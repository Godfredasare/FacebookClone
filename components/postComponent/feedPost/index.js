import { View, Text, FlatList } from "react-native";
import React from "react";
import data from "./data";

import Post from "../../postComponent/post";
import StoriesTextPost from "../../storiesTextPost";

const FeedPost = () => {
  return (
    <View>
      <FlatList
            ListHeaderComponent={StoriesTextPost}
            keyExtractor={({id})=> id}
            data={data}
            renderItem={({ item }) => <Post post={item} />}
         />
    </View>
  );
};

export default FeedPost;
