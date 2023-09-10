/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { StatusBar} from 'react-native';
import Home from './Home';
import Tickets from './Tickets';
import Contact from './Contact';
import News from './News';
import TicketPurchase from './TextPurchase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
function App(): JSX.Element {
 
  return (
   <>
      <StatusBar barStyle='dark-content' hidden />     
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerMode: 'screen' }}
          >
            <Stack.Screen 
              name='Home'               
              options={{
                headerShown: false
              }}
            >
              { (props) => <Home {...props} username='Sports Fan' /> }
            </Stack.Screen>
            <Stack.Screen name='Tickets' component={Tickets} 
            options={{
              headerTitleAlign:'center',
              headerTitleStyle: {fontFamily:'Ubuntu-Regular'}
            }} />   
            <Stack.Screen
              name='Contact'
              component={Contact}
              options={{
                headerTitleAlign:'center',
                headerTitleStyle: {fontFamily:'Ubuntu-Regular'},
                headerTitle: 'Contact Us'
              }}
             />  
             <Stack.Screen
              name='Purchase'
              component={TicketPurchase}
              options={{
                headerTitleAlign:'center',
                headerTitleStyle: {fontFamily:'Ubuntu-Regular'},
                headerTitle: 'Purchase Ticket'
              }}
             /> 
             <Stack.Screen
              name='News'
              component={News}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily:'Ubuntu-Regular'},
                headerTitle: 'Latest News'
              }}
             />            
        </Stack.Navigator>
      </NavigationContainer>      
   </>     
  );
}



export default App;
