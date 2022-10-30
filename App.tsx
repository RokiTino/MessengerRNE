import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown:false}}>
            {(props) => <LoginScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Register' options={{headerShown:false}}>
              {(props) => <RegisterScreen {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
  );
}