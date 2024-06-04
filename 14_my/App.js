import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Contacts from 'expo-contacts';

const App = () => {
  const [image, setImage] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [savedImages, setSavedImages] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setPermissionStatus(status);
      const storedImages = await AsyncStorage.getItem('savedImages');
      if (storedImages) {
        setSavedImages(JSON.parse(storedImages));
      }
      const { status: contactStatus } = await Contacts.requestPermissionsAsync();
      if (contactStatus === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
        setContacts(data);
      }
    })();
  }, []);

  const takePicture = async () => {
    if (permissionStatus !== 'granted') {
      alert('Camera permission not granted!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      const newSavedImages = [...savedImages, result.assets[0].uri];
      setSavedImages(newSavedImages);
      AsyncStorage.setItem('savedImages', JSON.stringify(newSavedImages));
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setImage(item)}>
      <Image source={{ uri: item }} style={styles.savedImage} />
    </TouchableOpacity>
  );

  const renderContact = ({ item }) => (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>{item.name}</Text>
      {item.phoneNumbers &&
        item.phoneNumbers.map((number, index) => (
          <Text key={index} style={styles.contactNumber}>
            {number.number}
          </Text>
        ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.savedImagesContainer}>
        <FlatList
          data={savedImages}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Take Picture" onPress={takePicture} />
      </View>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
        style={styles.contactsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  savedImagesContainer: {
    // marginBottom: 5,
    width: '100%',
    height: 120,
  },
  savedImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  contactsList: {
    marginTop: 20,
    width: '100%',
    padding: 10,
  },
  contactContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactNumber: {
    fontSize: 14,
  },
});

export default App;