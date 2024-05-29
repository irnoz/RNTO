import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api';
import PostList from '../components/PostList';

const PostListScreen = ({ navigation }) => {
  const { data: posts, error, isLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });

  if (isLoading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error: {error.message}</Text></View>;

  return (
    <View style={styles.container}>
      <PostList
        posts={posts}
        onPress={(post) => navigation.navigate('PostDetails', { postId: post.id })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default PostListScreen;
