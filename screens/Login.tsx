import { Image, View, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Surface, useTheme } from 'react-native-paper';
// import { useAppSelector, useAppDispatch } from '../redux/hooks' ;
import { toggleTheme, setTheme } from '../redux/slices/themeSlice';
import { useDispatch } from 'react-redux';
import { Button, Divider, Text } from 'react-native-paper';
import { TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import useStyles from "../styles/Auth/Login" ;

// Just for now optional
interface LoginProps {
  navigation?: any;
}
type blurTuple = [ boolean, boolean ];

const getImage = (theme: any) => {
  if ( theme ) {
    return require('../assets/Login/instagram-light.png');
  }
  return require('../assets/Login/instagram-dark.png');
}


const Login = ({ navigation } : LoginProps): JSX.Element => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [inputFocused, setInputFocused] = useState<blurTuple>([false, false]);
  
  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = useStyles();


  
  // console.log(theme);
	
  return (
    <KeyboardAvoidingView behavior='height'>
    <Surface style={styles.container} elevation={0}>
      
      <Image source={getImage(theme?.dark)} style={styles.image} />
      <Surface elevation={0}>
        <TextInput
          style={styles.input}
          onChangeText={text => setText(text)}
          value={text}
          placeholder='Phone number, username or email'
          placeholderTextColor={theme.dark ? '#b4b1b1': '#a5a5a5'}
          keyboardType="email-address" 
        />
        <View style={styles.password_input}>
          <TextInput
            style={styles.input}
            onChangeText={password => setPassword(password)}
            value={password}
            placeholder='Password'
            placeholderTextColor={theme.dark ? '#b4b1b1': '#a5a5a5'}
            secureTextEntry={!passwordVisibility}
            onBlur={() => Keyboard.dismiss()}
          />
          <TouchableOpacity 
            style={styles.password_icon}
            onPress={() => setPasswordVisibility(state => !state) }>
            <Ionicons
              name={passwordVisibility ? 'ios-eye-off' : 'ios-eye'}
              size={24}
              color="#a5a5a5"
            />
        </TouchableOpacity>
        </View>
      </Surface>
      <View style={styles.forgot_password}>
        <TouchableOpacity  onPress={() => dispatch(toggleTheme())}><Text style={styles.forgot_password_word}>Forgotten password?</Text></TouchableOpacity>
      </View>
      
      <TouchableOpacity>
        <Button style={styles.login_button} mode='contained'>
          <Text style={{color: 'white'}}>Log In</Text>
        </Button>
      </TouchableOpacity>
      
      <View style={styles.divider}>
        <Divider style={[styles.divider_bar, styles.divider_bar_1]} horizontalInset  />
        <Text style={styles.divider_text}>Or</Text> 
        <Divider style={[styles.divider_bar, styles.divider_bar_2]} horizontalInset  />
      </View>
      
      <TouchableOpacity style={styles.facebook_login}>
        <AntDesign name="facebook-square" size={24} color="#458eff" />
        <Text style={{color: theme.colors.primary, marginLeft: 8}} variant="titleSmall">Log in with Facebook</Text>
      </TouchableOpacity>


      <View style={styles.footer}>
        <View>
          <Divider style={[styles.divider_bar, styles.divider_footer]} horizontalInset />
        </View>

        <View style={styles.footer_content}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{marginLeft: 8, color: theme.colors.primary}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
      
    </Surface>
    </KeyboardAvoidingView>
  );
};

export default Login ;