import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Password from './components/Password';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Password/>
    </ChakraProvider>
  );
}

export default App;
