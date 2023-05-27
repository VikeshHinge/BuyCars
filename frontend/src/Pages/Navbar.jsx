import React from 'react';
import {Box,Flex,Image,Text,InputGroup,Input,InputRightAddon} from '@chakra-ui/react';
import { HiOutlineUser,HiSearch } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box borderBottom='1px solid' p='5px'>
        <nav style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}> 
              
              <Link to='/'>
              <Flex bg='red.400' borderRadius='30px' >
                <Image w='100px' src='https://i.pinimg.com/564x/86/01/bb/8601bbafd6d3c5b29eaa235dbfcac26b.jpg'  alt='buycars' />
                <Text  as='b' p='10px' fontSize='35px'>BuyCats</Text>
               </Flex>
              </Link>

              <InputGroup w='35%'>
                  <Input type='tel' placeholder='Search' />
                  <InputRightAddon children={<HiSearch size='30px'/>} />
               </InputGroup>
            
            <Flex p='10px' fontWeight=' bold' w='40%' justifyContent='space-around' gap='20px' alignItems='center'>
                <Link>About us</Link>
                <Link>Contact Us</Link>
                <Link>Help</Link>
                <Flex justifyContent='center' alignItems='center' gap='3px'>
                    <HiOutlineUser fontSize='25px' />
                    <Link to='/login'>Login</Link>/
                    <Link to='/signup'>SignUp</Link>
                </Flex>
            </Flex>
        </nav>
    </Box>
  )
}

export default Navbar
