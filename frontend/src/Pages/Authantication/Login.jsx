import React, { useState } from 'react';
import {Box,Flex,Input,Heading,Button,Text,
    FormControl,Stack,Radio,RadioGroup,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [auth,setAuth] = useState({email:'',password:''})

     const handelChange = (e) =>{
       let{name,value} = e.target;
       setAuth({...auth,[name]:value})
     }

     const handelSubmit = (event) =>{
        event.preventDefault()
        console.log(auth)
     }


  return (
   <Flex justifyContent='center' alignItems='center' gap='10px'  p='10px' m='auto' >
    
     <Box display={{base:'none',md:'block'}} w='40%' h='500px' p='50px' style={{background:'url(https://i.pinimg.com/564x/de/1e/ac/de1eac7611f14f5a2590a0ac36d2d42b.jpg) center no-repeat'}}>
       <Text fontSize='xl' as='b' textAlign='left'>BuyCars</Text>
       <Heading mb='sm' >Welcome</Heading>
     </Box>

     <Box w={{base:'98%',md:'40%'}} p='30px'  borderRadius='10px'>
      <Heading as="h2" size="lg" mb='10px' color='red.400' textAlign="center">Login to Account</Heading>
       
       <form action="" onSubmit={handelSubmit}>
       <FormControl isRequired mt='20px'>
        <FormLabel fontSize='12px'>Email</FormLabel>
        <Input onChange={(e)=>handelChange(e)} type="email" name='email' value={auth.email} placeholder="Enter email" required />
      </FormControl>
      <FormControl isRequired mt='10px'>
        <FormLabel fontSize='12px'>Password</FormLabel>
        <Input onChange={(e)=>handelChange(e)} type="password" name='password' value={auth.password} placeholder="Enter password" required />
      </FormControl>
      <Input w='full' fontWeight='bold' bg='red.500'  _hover={{bg:'red.600'}} color='white'  mt='20px' type='submit' />
       </form>
      <Box mt="10px">
        <Text color='gray.900'>Create account {' '} <Link to="/login"><Text as='b' color='teal'>Signup</Text></Link></Text>
      </Box>
     </Box>

   </Flex>
  )
}

export default Signup
