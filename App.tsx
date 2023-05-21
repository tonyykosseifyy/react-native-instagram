import { StyleSheet } from 'react-native';
import { Text, Surface, Button, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from "./redux/store" ;
import { useAppSelector, useAppDispatch } from './redux/hooks' ;
import { toggleTheme, setTheme } from './redux/slices/themeSlice';
import React from 'react';
import Login from './screens/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { instagramDarkTheme, instagramLightTheme } from './helper/theme';
import StatusBarComponent from './components/StatusBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';



const App : React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>      
      <AppWrapper />
    </Provider>
  );
};
const Stack = createNativeStackNavigator();

const AppWrapper: React.FC = () => {
  const themeStatus = useAppSelector(state => state.theme.value); 
  return (
      <PaperProvider theme={ themeStatus == 'dark' ? instagramDarkTheme: instagramLightTheme}>
        <SafeAreaView style={{flex: 1}}>
          <Surface style={[styles.container, {backgroundColor: themeStatus === 'dark' ? '#121212' : '#FFFFFF'}]}>
            <StatusBarComponent />
            {/* <NavigationContainer> */}
            {/* <Stack.Navigator initialRouteName="Login"> */}
              {/* <Stack.Screen name="Login" component={Login} /> */}
              {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
            {/* </Stack.Navigator> */}
          {/* </NavigationContainer> */}
          <SignUp />
          </Surface>
        </SafeAreaView>
      </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App ;