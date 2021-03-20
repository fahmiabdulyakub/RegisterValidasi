import * as React from 'react';
import 'moment/locale/id';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  RegisterEmail,
  CreateAccount,
  PersonalInformation,
  Schedule,
} from './pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterEmail">
        <Stack.Screen
          name="RegisterEmail"
          component={RegisterEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
