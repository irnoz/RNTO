import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NameRegistrationScreen from './screens/registration_screens/name_registration_screen';
import ContactInfoRegistrationScreen from './screens/registration_screens/contact_info_registration_screen';
import LocationRegistrationScreen from './screens/registration_screens/location_registration_screen';
import ProfileScreen from './screens/profile_screens/profile_screen';
import UnregisteredProfileScreen from './screens/profile_screens/unregisterd_profile_screen';
import { ProfileProvider, ProfileContext } from './context/profile_context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RegistrationFlow= () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NameRegistration" component={NameRegistrationScreen} options={{ title: 'Name Registration' }} />
      <Stack.Screen name="ContactInfoRegistration" component={ContactInfoRegistrationScreen} options={{ title: 'Contact Information Registration' }} />
      <Stack.Screen name="LocationRegistration" component={LocationRegistrationScreen} options={{ title: 'Location Registration' }} />
    </Stack.Navigator>
  );
}

const ProfileTab = () => {
  const { firstName, lastName, email, phoneNumber, country, city } = useContext(ProfileContext);

  const isRegistered = firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '' && country !== '' && city !== '';

  if (isRegistered) {
    return (
      <ProfileScreen />
    );
  } else {
    return <UnregisteredProfileScreen />;
  }
}

export default function App() {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={ProfileTab} options={{ title: 'Profile' }} />
          <Tab.Screen name="Register" component={RegistrationFlow} options={{ title: 'Register', headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}
