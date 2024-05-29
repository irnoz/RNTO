import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchComments } from '../api';
import CommentList from '../components/CommentList';

const PostDetailsScreen = ({ route }) => {
  const { postId } = route.params;
  
  const { data: comments, error, isLoading } = useQuery({ queryKey: ['comments', postId], queryFn: () => fetchComments(postId) });

  if (isLoading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error: {error.message}</Text></View>;

  return (
    <View style={styles.container}>
      <CommentList comments={comments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default PostDetailsScreen;