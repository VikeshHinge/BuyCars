

import React from 'react'
import {Box,Text,Flex} from '@chakra-ui/react'
import Search from './Search';
import { Link } from 'react-router-dom';

const Dealers_navbar = () => {
  return (
    <Flex borderBottom='2px solid red' gap='10px' justifyContent='space-between' p='15px'>
    
    <Link to='/dealerspage'><Text as='b' fontSize='20px'>BuyCar</Text></Link>
    <Search/>
    <Box></Box>
  </Flex>
  )
}

export default Dealers_navbar
