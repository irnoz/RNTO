import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ProfileContext } from '../../context/profile_context';

const ContactInfoRegistrationScreen = ({ navigation }) => {
  const { setEmail, setPhoneNumber } = useContext(ProfileContext);
  const [email, setEmailLocal] = useState('');
  const [phoneNumber, setPhoneNumberLocal] = useState('');

  const handlePrev = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    setEmail(email);
    setPhoneNumber(phoneNumber);
    navigation.navigate('LocationRegistration');
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmailLocal(text)}
        value={email}
      />
      <Text>Phone Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPhoneNumberLocal(text)}
        value={phoneNumber}
      />
      <View style={styles.buttonContainer}>
        <Button title="Prev" onPress={handlePrev} />
        <Button title="Next" onPress={handleNext} />
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ContactInfoRegistrationScreen