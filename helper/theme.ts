import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme, PaperProvider } from 'react-native-paper';


const instagramLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#458eff', // Primary color
      accent: '#833AB4', // Accent color
      error: '#C13584', // Error color
      warning: '#F7B801', // Warning color
      info: '#3EA6FF', // Info color
      success: '#00B875', // Success color
      background: '#FFFFFF', // Background color
			surface: '#FFFFFF', // Surface color
			text: '#000000', // Text color
			onBackground: '#000000', // Text color for elements placed on top of background color
			onSurface: '#000000', // Text color for elements placed on top of surface color
			disabled: '#000000', // Color for disabled elements  
  },
};
  
const instagramDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#458eff', // Primary color
      accent: '#833AB4', // Accent color
      error: '#C13584', // Error color
      warning: '#F7B801', // Warning color
      info: '#3EA6FF', // Info color
      success: '#00B875', // Success color
			background: '#121212', // Background color
			surface: '#121212', // Surface color
			text: '#FFFFFF', // Text color
			onBackground: '#FFFFFF', // Text color for elements placed on top of background color
			onSurface: '#FFFFFF', // Text color for elements placed on top of surface color
			disabled: '#FFFFFF', // Color for disabled elements
    },
};
  
export { instagramDarkTheme, instagramLightTheme };