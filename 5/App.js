import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from './screens/moviesScreen';
import MovieDetailScreen from './screens/movieDetailScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#5f9c19',
          },
          headerTintColor: 'white',
        }}>
          <Stack.Screen 
            name='CategoryScreen' 
            component={CategoryScreen} 
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen 
            name='MoviesScreen'
            component={MoviesScreen} 
            // options={({route}) => {
            //   return {
            //     title: DATA.find((category) => category.id === route.params.categoryId).name
            //   }
            // }}  
          />
          <Stack.Screen 
            name='MovieDetailScreen'
            component={MovieDetailScreen}
          />
        </Stack.Navigator>
      <StatusBar style="light" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
      <Text>Settings!</Text>
    </View>
  );
}

const FavoutitesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favourites!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Favourites') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline'
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favourites" component={FavoutitesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
