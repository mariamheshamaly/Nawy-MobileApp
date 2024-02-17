import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApartmentListingPage from './ApartmentListingPage';
import ApartmentDetailsPage from './ApartmentDetailsPage';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ApartmentListing"
          component={ApartmentListingPage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor:'#A3967E', // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20, // Font size of the header title
              fontWeight: 'bold', // Font weight of the header title
              color: '#333', // Text color of the header title
            },
          }}
        />
        <Stack.Screen
          name="ApartmentDetails"
          component={ApartmentDetailsPage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#A3967E', // Background color of the header
            },
            headerTitleStyle: {
              fontSize: 20, // Font size of the header title
              fontWeight: 'bold', // Font weight of the header title
              color: '#333', // Text color of the header title
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
