import { useTheme } from "react-native-paper";
import { StyleSheet  } from 'react-native'
import { Dimensions } from "react-native";

// const screenWidth = Dimensions.get('window').width;

const useStyles = () => {
    const theme = useTheme();
    const dark: boolean = theme.dark ;
  
    return StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',   
            alignItems: 'center',
            flex: 1,
        },
				header: {
					paddingTop: 50,
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					maxWidth: 300,
					backgroundColor: 'red',
				},
        header_svg: {
            color: dark ? '#ffffff' : '#000000',
            fontSize: 50,
        },
				header_svg_container: {
					borderRadius: 500,
					borderWidth: 2, 
					borderColor: dark ? '#ffffff' : '#000000',
					borderStyle: 'solid',
					height: 150,
					width: 150,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginVertical: 20,
				},
				header_text: {
					textAlign: 'center',
					marginVertical: 10,
				},
				switch: {
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					flex: 1,
				},
				switch_button: {
					flex: 1,
					padding: 10,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				},

    });
};
  
export default useStyles ;