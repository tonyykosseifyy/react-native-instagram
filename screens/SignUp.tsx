import { Image, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native'
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
import { useForm, Controller, FieldError } from 'react-hook-form';


const screenWidth = Dimensions.get('window').width;

// Just for now optional
interface LoginProps {
  navigation?: any;
}

const getImage = (theme: any) => {
  if ( theme ) {
    return require('../assets/Login/instagram-light.png');
  }
  return require('../assets/Login/instagram-dark.png');
}


const SignUp = ({ navigation } : LoginProps): JSX.Element => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const { register, setValue, handleSubmit, control, reset, formState: { errors, isValid } } = useForm();

  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = useStyles();

  const onSubmit = (data) => {
    console.log(data);
  };

  
  const handleClickAway = () => {
    Keyboard.dismiss();
  };
  console.log(errors);
  return (
    <ScrollView>
    <KeyboardAvoidingView behavior='height'>
      <TouchableWithoutFeedback onPress={handleClickAway}>
        <Surface style={styles.container} elevation={0}>
          
          <Image source={getImage(theme?.dark)} style={styles.image} />
          <Text style={styles.header} variant='titleMedium'>Sign Up to see photos and videos from your friends.</Text>

          <TouchableOpacity style={[styles.facebook_login, styles.facebook_login_signUp]}>
            <AntDesign name="facebook-square" size={24} color="white" />
            <Text style={{color: 'white' , marginLeft: 8}} variant="titleSmall">Log in with Facebook</Text>
          </TouchableOpacity>

          <View style={[styles.divider, { marginBottom: 10 }]}>
            <Divider style={[styles.divider_bar, styles.divider_bar_1]} horizontalInset  />
            <Text style={styles.divider_text}>Or</Text> 
            <Divider style={[styles.divider_bar, styles.divider_bar_2]} horizontalInset  />
          </View>

          <Surface elevation={0}>
            <Controller
              control={control}
              render={({field: { onChange, onBlur, value }}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder='Phone number, username or email'
                  placeholderTextColor={theme.dark ? '#b4b1b1': '#a5a5a5'}
                  keyboardType="email-address" 
                />
              )}
              name="email"
              rules={{ required: { value: true, message: 'Email is required'}, minLength: { value: 8, message: 'Email should be of min 8 characters'}, validate: email => email.includes('@') || 'Invalid Email' }}
              />
              {errors.email && <Text style={styles.error_message}>{(errors.email as FieldError).message}</Text>}
            
            <Controller
              control={control}
              render={({field: { onChange, onBlur, value }}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder='Full Name'
                  placeholderTextColor={theme.dark ? '#b4b1b1': '#a5a5a5'}
                />
              )}
              name="full_name"
              rules={{ required: { value: true, message: 'Full Name is required'}}}
              />
              {errors.full_name && <Text style={styles.error_message}>{(errors.full_name as FieldError).message}</Text>}

            <Controller
              control={control}
              render={({field: { onChange, onBlur, value }}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder='Username'
                  placeholderTextColor={theme.dark ? '#b4b1b1': '#a5a5a5'}
                />
              )}
              name="user_name"
              rules={{ required: { value: true, message: 'User Name is required'}}}
              />
              {errors.user_name && <Text style={styles.error_message}>{(errors.user_name as FieldError).message}</Text>}
            <View style={styles.password_input}>
              <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder='Password'
                    placeholderTextColor={theme.dark ? '#b4b1b1': '#a5a5a5'}
                    secureTextEntry={!passwordVisibility}
                  />
                )}
                name="password"
                rules={{ required: { value: true, message: 'Password is required'}, minLength: {value: 8, message: 'Password should contain min 8 characters'} }}
              />
              {errors.password && <Text style={styles.error_message}>{(errors.password as FieldError).message}</Text>}

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
          
          <TouchableOpacity  onPress={handleSubmit(onSubmit)}>
            <Button style={styles.login_button} mode='contained'>
              <Text style={{color: 'white'}}>Sign Up</Text>
            </Button>
          </TouchableOpacity>

          <View style={[styles.footer, { marginTop: 30, marginBottom: 15}]}>
            <View style={styles.footer_content}>
              <Text style={styles.footer_text} variant='titleSmall'>By signing up, You agree to our Terms & Privacy Policy</Text>
            </View>
          </View>

        </Surface>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp ;