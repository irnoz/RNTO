import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Post = ({ post, onPress }) => {
  return (
    <TouchableOpacity style={styles.post} onPress={() => onPress(post)}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
  },
});

export default Post;
