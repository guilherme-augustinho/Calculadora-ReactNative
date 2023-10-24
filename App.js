import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";

import { Calculadora } from "./Calculadora";
import { Historico } from "./Historico";
import { UtilsContexts } from './context';

export default function App() {

  const Stack = createStackNavigator()

  const [utils, setUtils] = useState({})

  return (
    <NavigationContainer>
      <UtilsContexts.Provider value = {{utils, setUtils}}>
        <Stack.Navigator>
          <Stack.Screen name = "Calculadora" component = {Calculadora} />
          <Stack.Screen name = "Historico" component = {Historico} />
        </Stack.Navigator>
      </UtilsContexts.Provider>
    </NavigationContainer>
  );
}

