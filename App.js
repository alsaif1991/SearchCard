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
// import Data from "./data";
////npm start
// import Nav from './comp/Nav';
import Footer from './comp/Footer';
// import Cardd from './comp/Folw';
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

// function App() {
//   const data = Data;

//   const CardsElm = data.map((elm) => (
//     <Cardd
//       key={elm.id}
//       img={elm.image}
//       title={elm.title}
//       isAvb={elm.isAvalibale}
//       start={elm.start}
//       end={elm.end}
//     />
//   ));
//   return (
//     <ChakraProvider theme={theme}>
//     <Nav/>
//     <div className="App">
//       <Grid
//         className="mainGrid"
//         templateColumns={`repeat(2,1fr)`}
//         templateRows={"repeat(4,auto)"}
//       >
//         <GridItem colSpan={2}>
//           {/* <Nav /> */}
//         </GridItem>
//         <GridItem colSpan={2} m={4}>
//           <Grid
//             templateColumns={"repeat(2,auto)"}
//             gap={10}            justifyContent={"center"}
           
//           >
//             {CardsElm}
//           </Grid>
//         </GridItem>

//         <GridItem colSpan={2}>

//         </GridItem>
//       </Grid>
//     </div>
//   );
// }

// {/* <div className='Sam'>
// <Grid templateColumns='repeat(5, 1fr)' gap={6}>
//     <Card w='100%' h='10' bg='blue.500' /> 
//     <Card w='100%' h='10' bg='blue.500' /> 
//     <Card w='100%' h='10' bg='blue.500' /> 
//     <Card w='100%' h='10' bg='blue.500' /> 
//     <Card w='100%' h='10' bg='blue.500' /> 
  
//   </Grid></div> */}


//  <Footer/>
//     </ChakraProvider>
//   );
// }

export default App;
