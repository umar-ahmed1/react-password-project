import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Password from './components/Password';
import Header from './components/Header';
import InfoComponent from './components/InfoComponent';
import TipsComponent from './components/TipsComponent';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Password/>
      <TipsComponent/>
      <InfoComponent/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
