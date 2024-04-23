import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProfileContext } from '../../context/profile_context';

const ProfileScreen = () => {
  const { firstName, lastName, email, phoneNumber, country, city } = useContext(ProfileContext);

  return (
    <View style={styles.container}>
      <Text>Profile Information:</Text>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <Text>Country: {country}</Text>
      <Text>City: {city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default ProfileScreen