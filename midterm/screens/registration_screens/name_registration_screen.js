import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ProfileContext } from '../../context/profile_context';

const NameRegistrationScreen = ({ navigation }) => {
  const { setFirstName, setLastName } = useContext(ProfileContext);
  const [firstName, setFirstNameLocal] = useState('');
  const [lastName, setLastNameLocal] = useState('');

  const handleNext = () => {
    setFirstName(firstName);
    setLastName(lastName);
    navigation.navigate('ContactInfoRegistration');
  };

  return (
    <View style={styles.container}>
      <Text>First Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setFirstNameLocal(text)}
        value={firstName}
      />
      <Text>Last Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setLastNameLocal(text)}
        value={lastName}
      />
      <Button title="Next" onPress={handleNext} />
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default NameRegistrationScreen