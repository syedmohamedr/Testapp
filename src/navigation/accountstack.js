import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screen/account';

const Stack = createStackNavigator();

const AccountStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="AccountScreen" headerMode={false}>
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
