import { useTheme } from "react-native-paper";
import { StyleSheet  } from 'react-native'
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

const useStyles = () => {
    const theme = useTheme();
    const dark: boolean = theme.dark ;
  
    return StyleSheet.create({
      container : {
        flex: 1,
        paddingTop: 50 ,
        alignItems: 'center',
      },
      image: {
        width: 250,
        height: 200,
        objectFit: 'contain',
      },
      input: {
        width: 350,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        borderColor: dark ? 'transparent' :'#dbdbdb',
        marginTop: 15,
        color: dark ? '#ffffff' : '#000',
        backgroundColor: dark ? '#292929' : 'transparent',
      },
      password_input: {
        position: 'relative',
      },
      password_icon: {
        position: 'absolute',
        right: 12,
        top: 26,
      },
      forgot_password: {
        marginTop: 7,
        width: 350,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
      forgot_password_word: {
        color: '#458eff',
        fontSize: 12,
        fontWeight: 'bold',
      },
      login_button: {
        width: 350,
        borderRadius: 3,
        marginTop: 40
      },
      divider: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 30,
        width: 350,
        alignSelf: 'center'
      },
      divider_bar: {
        flex: 1,
      },
      divider_bar_1 : {
        marginLeft: 0 ,
      },
      divider_bar_2 : {
        marginRight: 0 ,
      },
      divider_text: {
        color: '#8e8e8e',
        textTransform: 'uppercase',
        fontSize: 12
      },
      facebook_login: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
      },
      footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        display: 'flex'
      },
      divider_footer: {
        marginLeft: 0 ,
        marginRight: 0 ,
        marginBottom: 30,
        width: screenWidth,
        height: 1,
        maxHeight: .5
      },
      footer_content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
      }
    });
};
  
export default useStyles ;