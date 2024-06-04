import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [image, setImage] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setPermissionStatus(status);
      const storedImages = await AsyncStorage.getItem('savedImages');
      if (storedImages) {
        setSavedImages(JSON.parse(storedImages));
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

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Take Picture" onPress={takePicture} />
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <FlatList
        data={savedImages}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        style={styles.savedImagesContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingTop: 80,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  savedImagesContainer: {
    marginTop: 20,
    height: 100,
  },
  savedImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default App;