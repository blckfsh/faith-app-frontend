import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "./app/styles/Styling";
import HomeScreen from "./app/Home";
import SettingsScreen from "./app/Settings";
import DetailsScreen from "./app/Details";

import BibleScreen from "./app/christianity/bible/Bible";
import BibleVerse from './app/christianity/bible/BibleVerse';

import GroupScreen from "./app/christianity/group/Group";
import GroupDetails from "./app/christianity/group/GroupDetails";
import InviteMembers from "./app/christianity/group/InviteMembers";

import Profile from "./app/christianity/user/Profile";

//const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'md-home';
            } else if (route.name === 'Bible') {
              iconName = focused ? 'md-book' : 'md-book';
            } else if (route.name === 'Group') {
              iconName = focused ? 'md-contacts' : 'md-contacts';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'md-cog' : 'md-cog';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'gold',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: 'HOME',
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center'
                  }
                }}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Bible">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen 
                name="Bible" 
                component={BibleScreen} 
                options={{
                  title: 'BIBLE',
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center'
                  }
                }}
              />
              <SettingsStack.Screen 
                name="Verse" 
                component={BibleVerse} 
                options={{
                  title: 'VERSE',
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff',                  
                }}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Group">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen 
                name="Group" 
                component={GroupScreen} 
                options={{
                  title: 'GROUP',
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center'
                  }
                }}
              />
              <SettingsStack.Screen 
                name="Group Details" 
                component={GroupDetails} 
                options={{
                  title: 'GROUP DETAILS',
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center'
                  }
                }}
              />
              <SettingsStack.Screen 
                name="Invite Members" 
                component={InviteMembers} 
                options={{
                  title: 'INVITE',
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center'
                  }
                }}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                  title: 'SETTINGS',
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center'
                  }
                }}  
              />
              <HomeStack.Screen 
                name="DETAILS" 
                component={DetailsScreen} 
                options={{                  
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff'
                }}
              />
              <HomeStack.Screen 
                name="Profile" 
                component={Profile} 
                options={{          
                  title: 'PROFILE',        
                  headerStyle: {
                    backgroundColor: '#fbc531'
                  },
                  headerTintColor: '#fff'
                }}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}