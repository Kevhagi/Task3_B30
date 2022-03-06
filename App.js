import * as React from "react"
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import "react-native-gesture-handler"

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Calculator1 from './src/screens/Calculator-1'
import Calculator2 from './src/screens/Calculator-2'
import ToDoList from "./src/screens/ToDoList";

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()
function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="Calculator 1"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#55BCF6" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Calculator 1") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline"
          } else if (route.name === "Calculator 2") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline"
          } else if (route.name === "To-Do List") {
            iconName = focused ? "ios-list" : "ios-list-outline"
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#55BCF6",
        tabBarInactiveTintColor: "grey"
      })}
    >
      <Tab.Screen 
        name="Calculator 1"
        component={Calculator1}
      />
      <Tab.Screen 
        name="Calculator 2"
        component={Calculator2}
      />
      <Tab.Screen 
        name="To-Do List"
        component={ToDoList}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Main"
            component={MyTab}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>  
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
