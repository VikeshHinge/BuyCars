import React from 'react';
import { Box,Heading,Flex,Image, SimpleGrid,Text,Button } from '@chakra-ui/react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <Box back >
    <Navbar/>
       <Flex p='20px'>
        <Box bg='red.200' p='10px' border='2px solid red' borderRadius='20px 0px 20px 0px'>
        <Heading>Looking To Save More On Your First Car !</Heading>
        <Flex>
            <Box>
            <Image borderRadius='20px' w='90%' src='https://i.pinimg.com/564x/7e/f9/73/7ef973010c8012f2626cc8a9be0a7684.jpg' alt='Dan Abramov' />
            <Text fontSize='xl' as='b'>35k M+ Happy customers</Text>
            </Box>
         <Box>
         <Image  borderRadius='20px' src='https://i.pinimg.com/564x/91/7f/f6/917ff626868e392481e07c91d25fc006.jpg' alt='Dan Abramov' />
         <Text fontSize='xl' as='b'>Affordable Deals</Text>
         </Box>
          </Flex>
          <Link to='/dealpage'><Button mt='20px' bg='red' fontSize='20px' _hover={{bg:'red.600'}} color='white' >Click & Get Best Deal</Button></Link>
        </Box>
        <Box>
          <Image  src="https://i.ibb.co/7S44hpc/car2-removebg-preview.png" alt="car2-removebg-preview" border="0"/>
        </Box>
       </Flex>
   </Box>
  )
}

export default Home;
