import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';

const WeatherScreen = ({ route }) => {
  const { location } = route.params || {};
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (location) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=268f02be83100313a9ed7e4991342e38`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [location]);

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Location data is not available.</Text>
      </View>
    );
  }

  const getBackgroundImage = (weather) => {
    if (weather) {
      switch (weather.weather[0].main) {
        case 'Clear':
          return require('../assets/Sunny.png');
        case 'Clouds':
          return require('../assets/Cloudy.png');
        default:
          return require('../assets/Default.png');
      }
    }
    return null;
  };

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <ImageBackground source={getBackgroundImage(weather)} style={styles.backgroundImage}>
      <View style={styles.opacityOverlay}>
        <View style={styles.overlay}>
          {weather ? (
            <View style={styles.weatherContainer}>
              <Text style={styles.weatherText}>Location: {weather.name}</Text>
              <Text style={styles.weatherText}>Temperature: {kelvinToCelsius(weather.main.temp)}°C</Text>
              <Text style={styles.weatherText}>Feels Like: {kelvinToCelsius(weather.main.feels_like)}°C</Text>
              <Text style={styles.weatherText}>Weather: {weather.weather[0].description}</Text>
              <Text style={styles.weatherText}>Humidity: {weather.main.humidity}%</Text>
              <Text style={styles.weatherText}>Wind Speed: {weather.wind.speed} m/s</Text>
            </View>
          ) : (
            <Text style={styles.loadingText}>Loading...</Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacityOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.37)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  weatherContainer: {
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 8,
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
  },
});
