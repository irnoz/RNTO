import React from 'react';
import { FlatList } from 'react-native';
import Post from './Post';

const PostList = ({ posts, onPress }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Post post={item} onPress={onPress} />}
    />
  );
};

export default PostList;