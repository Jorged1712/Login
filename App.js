import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Register from './Screens/Register.js';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
          options={{
            title: "Login",
            headerTintColor: 'white',
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: 'skyblue' },
          }} />
        <Stack.Screen name="Home" component={Home}
          options={{
            title: "Home",
            headerTintColor: 'white',
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: 'skyblue' },
          }} />

          <Stack.Screen name="Register" component={Register}/>

    
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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
