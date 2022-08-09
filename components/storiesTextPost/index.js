import { View, Text } from "react-native";
import React from "react";
import TextPost from "../textPost";
import StoryFeeds from "../userStories/storyFeeds";

const StoriesTextPost = () => {
  return (
    <View>
        <TextPost />
        <StoryFeeds />
    </View>
  );
};

export default StoriesTextPost;
