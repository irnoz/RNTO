import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Comment = ({ comment }) => (
  <View style={styles.comment}>
    <Text style={styles.name}>{comment.name}</Text>
    <Text style={styles.body}>{comment.body}</Text>
  </View>
);

const CommentList = ({ comments }) => {
  return (
    <FlatList
      data={comments}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Comment comment={item} />}
    />
  );
};

const styles = StyleSheet.create({
  comment: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
  },
});

export default CommentList;
