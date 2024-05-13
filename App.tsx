import React from 'react'
import AppNavigator from './AppNavigator';
import { ThemeProvider } from './utils/ThemeMode/ThemeProvider';
import { store } from './ReduxSetUp/store';
import{Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator/>
      </ThemeProvider>
    </Provider>
  );
}
