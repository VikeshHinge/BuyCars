import React, { useState } from 'react';
import {Box,Flex,Input,Heading,Button,Text,
    FormControl,Stack,Radio,RadioGroup,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [auth,setAuth] = useState({name:'',email:'',password:'',location:'',contact:'',type:'',avatar:''})

     const handelChange = (e) =>{
       let{name,value} = e.target;
       setAuth({...auth,[name]:value})
     }

     const handelSubmit = (event) =>{
        event.preventDefault()
        console.log(auth)
     }


  return (
   <Flex justifyContent='center' gap='10px' alignItems='center' p='10px' m='auto' >
    
     <Box display={{base:'none',md:'block'}} w='40%' h='500px' p='50px' style={{background:'url(https://i.pinimg.com/564x/de/1e/ac/de1eac7611f14f5a2590a0ac36d2d42b.jpg) center no-repeat'}}>
       <Text fontSize='xl' as='b' textAlign='left'>BuyCars</Text>
       <Heading mb='sm' >Welcome</Heading>
     </Box>

     <Box w={{base:'98%',md:'40%'}} p='30px' borderRadius='10px'>
      <Heading as="h2" size="lg" mb='10px' textAlign="center" color='red.400' >Create an Account</Heading>
       
       <form action="" onSubmit={handelSubmit}>
       <Flex gap='20px'>
       <FormControl isRequired>
        <FormLabel fontSize='12px'>Name</FormLabel>
        <Input onChange={(e)=>handelChange(e)} type="text" name='name' value={auth.name} placeholder="Enter your full name" required />
      </FormControl>
      <FormControl>
        <FormLabel fontSize='12px'>Avatar</FormLabel>
        <Input onChange={(e)=>handelChange(e)} type="text" name='avatar' value={auth.avatar} placeholder="Enter your image" required />
      </FormControl>
       </Flex>
        <Flex gap='20px' mt='20px'>
        <FormControl isRequired>
        <FormLabel fontSize='12px'>Location</FormLabel>
        <Input onChange={(e)=>handelChange(e)} type="text" name='location' value={auth.location} placeholder="Enter location" required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize='12px'>Contact</FormLabel>
        <Input onChange={(e)=>handelChange(e)} type="text" name='contact' value={auth.contact} placeholder="Enter contact" required />
      </FormControl>
        </Flex>
        <FormControl isRequired mt='20px'>
        <FormLabel fontSize='12px'>Email</FormLabel>
        <Input onChange={(e)=>handelChange(e)} type="email" name='email' value={auth.email} placeholder="Enter email" required />
      </FormControl>
      <FormControl isRequired mt='10px'>
        <FormLabel fontSize='12px'>Password</FormLabel>
        <Input onChange={(e)=>handelChange(e)} type="password" name='password' value={auth.password} placeholder="Enter password" required />
      </FormControl>
    
      <FormControl mt='20px' isRequired color='black'>
      <FormLabel fontSize='12px'>Register as</FormLabel>
      <RadioGroup name='type' fontWeight='bold' onClick={(e)=>handelChange(e)} bg='red.300' p='10px' m='auto'>
       <Stack spacing={5} direction='row'>
       <Radio colorScheme='red' value='dealer'>
         Dealer
       </Radio>
        <Radio colorScheme='green' value='user'>
         User
         </Radio>
        </Stack>
      </RadioGroup>
      </FormControl>
       <Input w='full' fontWeight='bold' bg='red.500'  _hover={{bg:'red.600'}} color='white'  mt='20px' type='submit' />

       </form>
      <Box mt="10px">
        <Text color='gray.900'>Already have an account? {' '} <Link to="/login"><Text as='b' color='teal'>Login</Text></Link></Text>
      </Box>
     </Box>

   </Flex>
  )
}

export default Signup
