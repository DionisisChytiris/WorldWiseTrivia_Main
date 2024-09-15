import React, { useState, useEffect } from "react";
import AppNavigator from "./AppNavigator";
import { ThemeProvider } from "./utils/ThemeMode/ThemeProvider";
import { store } from "./ReduxSetUp/store";
import { Provider } from "react-redux";
import Splash from "./Splash";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Provider store={store}>
      <ThemeProvider>
        {isLoading ? <Splash setIsLoading={setIsLoading} /> : <AppNavigator />}
      </ThemeProvider>
    </Provider>
  );
}
