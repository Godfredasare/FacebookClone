import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import HomeScreens from "../screens/HomeScreens";
import NotificationScreen from "../screens/NotificationScreen";
import WatchScreen from '../screens/WatchScreen'
import MarketplaceScreen from '../screens/MarketplaceScreen'
import GamingScreen from '../screens/GamingScreen'
import MenuScreen from '../screens/MenuScreen'

import {MaterialCommunityIcons, Octicons, SimpleLineIcons} from 'react-native-vector-icons'




import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HomeNavigation = () => {
  return (
     <Tab.Navigator
      screenOptions={{
      tabBarShowLabel: false,
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { height: 45 },  
  
  
      }}
     >

      <Tab.Screen name="Home" component={HomeScreens}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons 
            name='home'
            size={28} />
          ),
        }}
      />

      <Tab.Screen name="Watch" component={WatchScreen}
       options={{
        tabBarLabel: 'Watch',
        tabBarIcon: ({ color, size, focused }) => (
          <Octicons name="video" size={23} 
          />
        ),
      }}
       />

      <Tab.Screen name="Market" component={MarketplaceScreen}
       options={{
        tabBarLabel: 'Market',
        tabBarIcon: ({ color, size }) => (
          <Image  source={ require('../assets/matket.png')} 
          style={{width: 26, height: 26 }}
          />
          ),
      }}
      />

      <Tab.Screen name="Gaming" component={GamingScreen} 
       options={{
        tabBarLabel: 'Gaming',
        tabBarIcon: ({ color, size }) => (
          <Image  source={ require('../assets/game.png')} 
          style={{width: 24, height: 24 }}
          />
          ),
      }}
      />

      <Tab.Screen name="Notifiation" component={NotificationScreen} 
       options={{
        tabBarLabel: 'Notification',
        tabBarIcon: ({ color, size }) => (
          <Image  source={ require('../assets/bell.png')} 
          style={{width: 25, height: 25 }}
          />
          ),
      }}
      />

      <Tab.Screen name="Menu" component={MenuScreen} 
       options={{
        tabBarLabel: 'Menu',
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="menu"  size={24} />
        ),
      }}
      />

    </Tab.Navigator>
  );
};

export default HomeNavigation;
