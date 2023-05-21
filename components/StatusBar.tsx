import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';

const StatusBarComponent: React.FC = (): JSX.Element => {
  const theme  = useTheme();
  return (
      <StatusBar  
				barStyle={theme.dark ? 'light-content' : 'dark-content'}
				backgroundColor={theme.colors.surface} 
        translucent={true}
			/>
  );
};

export default StatusBarComponent;