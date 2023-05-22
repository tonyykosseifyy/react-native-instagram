import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import useStyles from '../styles/Auth/LoginHelp';
import { Fontisto } from '@expo/vector-icons';
import { Surface, Text } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

const LoginHelp = () => {
	const styles = useStyles();
	
  return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, width: screenWidth  }} >
			<Surface style={styles.container} elevation={0}>
				<View style={styles.header}>
					<View style={styles.header_svg_container}>
						<Fontisto style={styles.header_svg} name="locked" />
					</View>
					<Text variant='titleMedium'>Trouble Logging In?</Text>
					<Text variant='titleSmall'>Enter your username or email and we'll send you a link to get back into your account.</Text>
				</View>

			</Surface>
		</ScrollView>
  )
}

export default LoginHelp

const styles = StyleSheet.create({})