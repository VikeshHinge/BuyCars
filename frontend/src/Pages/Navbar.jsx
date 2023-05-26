import React from 'react';
import {Box,Flex,Image,Text,InputGroup,Input,InputRightAddon} from '@chakra-ui/react';
import { HiOutlineUser,HiSearch } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box borderBottom='1px solid' p='5px'>
        <nav style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}> 
            <Box>
                {/* <Image src=''  alt='buycars' /> */}
                <Text as='b' fontSize='25px'>BuyCats</Text>
            </Box>

              {/* <InputGroup w='35%'>
                  <Input type='tel' placeholder='Search' />
                  <InputRightAddon children={<HiSearch size='30px'/>} />
               </InputGroup> */}
            
            <Flex p='10px' bg='orange' w='40%' justifyContent='space-around' gap='20px' alignItems='center'>
                <Link>About us</Link>
                <Link>Contact Us</Link>
                <Link>Help</Link>
                <Flex justifyContent='center' alignItems='center' gap='3px'>
                    <HiOutlineUser fontSize='25px' />
                    <Link>Login</Link>/
                    <Link>SignUp</Link>
                </Flex>
            </Flex>
        </nav>
    </Box>
  )
}

export default Navbar
