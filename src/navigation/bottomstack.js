import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import HomeStack from '../navigation/homestack';
import AccountStack from '../navigation/accountstack';
import {NavigationContainer} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import profile from '../screen/profile';
import Cart from '../screen/cart';
import notification from '../screen/notification';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeSCreen</Text>
    </View>
  );
};

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <Octicons
                name="home"
                size={size}
                color={color}
                style={{}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <SimpleLineIcons
                name="handbag"
                size={size}
                color={color}
                style={{}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={notification}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <SimpleLineIcons
                name="bell"
                size={size}
                color={color}
                style={{}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <Feather
                name="shopping-cart"
                size={size}
                color={color}
                style={{}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
                style={{}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
