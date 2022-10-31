import React from 'react';
import { Center, Square, Circle } from '@chakra-ui/react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Image,
  Grid,
  theme,
  GridItem 
} from '@chakra-ui/react';

import Footer from './comp/Footer';
import Search from './components/Search';
import initialDetails from './comp/initialDetails';
import Cardout from './cardout';
function App() {
  return (
    <ChakraProvider theme={theme}>
       <Center>
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails}/>
     
    </div>
    </Center>
    <Cardout/>
    <Footer/>
    </ChakraProvider>

  );
}



export default App;
