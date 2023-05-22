import { StyleSheet, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import useStyles from '../styles/Auth/LoginHelp';
import { Fontisto } from '@expo/vector-icons';
import { Surface, Text } from 'react-native-paper';

enum Selected {
	USER_NAME = 'user_name',
	PHONE = 'phone'
}

const screenWidth = Dimensions.get('window').width;

const LoginHelp = () => {
	const styles = useStyles();
	const [ selected, setSelected ] = useState<Selected>(Selected.USER_NAME);
	
  return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, width: screenWidth  }} >
			<Surface style={styles.container} elevation={0}>
				<View style={styles.header}>
					<View style={styles.header_svg_container}>
						<Fontisto style={styles.header_svg} name="locked" />
					</View>
					<Text style={styles.header_text} variant='titleLarge'>Trouble Logging In?</Text>
					<Text style={[styles.header_text, { fontWeight: '100'}]}  variant='labelMedium'>Enter your username or email and we'll send you a link to get back into your account.</Text>
				</View>

				<View style={styles.switch}>
					<TouchableOpacity onPress={() => setSelected(Selected.USER_NAME)} style={styles.switch_button}>
						<Text style={{ fontWeight: selected !== 'user_name' ? "100": '900'}} variant='titleLarge'>Username</Text>	
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setSelected(Selected.PHONE)} style={styles.switch_button}>
						<Text style={{ fontWeight: selected !== 'phone' ? "100": '900'}} variant='titleLarge'>Phone</Text>	
					</TouchableOpacity>
				</View>

			</Surface>
		</ScrollView>
  )
}

export default LoginHelp

const styles = StyleSheet.create({})