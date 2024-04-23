import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ProfileContext } from '../../context/profile_context';

const LocationRegistrationScreen = ({ navigation }) => {
  const { setCountry, setCity } = useContext(ProfileContext);
  const [country, setCountryLocal] = useState('');
  const [city, setCityLocal] = useState('');

  const handlePrev = () => {
    navigation.goBack();
  };

  const handleFinish = () => {
    setCountry(country);
    setCity(city);
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text>Country:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCountryLocal(text)}
        value={country}
      />
      <Text>City:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCityLocal(text)}
        value={city}
      />
      <View style={styles.buttonContainer}>
        <Button title="Prev" onPress={handlePrev} />
        <Button title="Finish" onPress={handleFinish} />
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

export default LocationRegistrationScreen