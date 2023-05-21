import { createSlice, PayloadAction } from '@reduxjs/toolkit'

enum Theme {
    light = 'light',
    dark = 'dark'
}

interface ThemeState {
    value: Theme
} ;
  
// Define the initial state using that type
const initialState: ThemeState = {
    value: Theme.light 
};


export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme> ): void => {
        state.value = action.payload ;
    },
    toggleTheme: (state): void => {
        state.value = state.value === Theme.light ? Theme.dark : Theme.light ;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setTheme, toggleTheme } = themeSlice.actions

export default themeSlice.reducer ;