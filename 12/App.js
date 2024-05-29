import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoryScreen from './screens/categoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from './screens/moviesScreen';
import MovieDetailScreen from './screens/movieDetailScreen';
import ThemeContextProvider, { useTheme } from './context/theme.context';
import ThemeButton from './components/themeButton';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {theme} = useTheme()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: theme.backgroundColor,
        },
        headerTintColor: 'white',
      }}>
        <Stack.Screen 
          name='CategoryScreen' 
          component={CategoryScreen} 
          options={{
            title: 'All Categories',
            headerRight: ThemeButton
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
    </NavigationContainer>
  )
}

const queryClient = new QueryClient()

export default function App() {
  
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <StackNavigation />
        </ThemeContextProvider>
      </QueryClientProvider>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
