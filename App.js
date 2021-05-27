import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const Stack = createStackNavigator();
  return <AppNavigator />;
}
