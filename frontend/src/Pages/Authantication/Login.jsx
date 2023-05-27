import React, { useState } from 'react';
import axios from 'axios';
import {Box,Flex,Input,Heading,Button,Text,
    FormControl,Stack,Radio,RadioGroup,
    FormLabel,
    FormErrorMessage,
    FormHelperText,useToast
} from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {

    const [auth,setAuth] = useState({email:'',password:'',type:''})
    const toast = useToast();
    const Navigate = useNavigate()
    
     const handelChange = (e) =>{
       let{name,value} = e.target;
       setAuth({...auth,[name]:value})
     }
     
  

     const handelSubmit= async(event) => {
      event.preventDefault()
      console.log(auth)
      let {email,password,type} =auth;
  
      if(email ==="" || password ===""){
         return;
        }
      else{
         const {data} = await axios.post(`http://localhost:4040/${type}/login`,auth)
         if(data.msg){
      
          toast({
            title: data.msg,
            status: 'success',
            position:'top',
            isClosable: true,
          })
          localStorage.setItem('token', data.token)
          localStorage.setItem('user',data.name)
         if(type==='dealer'){
          return Navigate('/dealerspage')
         }else{
          return Navigate('/')
         }
         }
         else if(data.sug){
          toast({
            title: data.sug,
            status:'warning',
            position:'top',
            isClosable: true,
          })
          // return Navigate('/login')
         }
         else{
          alert(data.err)
         }
      }
      
       
    }


  return (
   <Flex justifyContent='center' alignItems='center' gap='10px'  p='10px' m='auto' >
    
     <Box display={{base:'none',md:'block'}} w='40%' h='500px' p='50px' style={{background:'url(https://i.pinimg.com/564x/de/1e/ac/de1eac7611f14f5a2590a0ac36d2d42b.jpg) center no-repeat'}}>
       <Text fontSize='xl' as='b' textAlign='left'>BuyCars</Text>
       <Heading mb='sm'  color='red.400'  >Welcome</Heading>
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
        <Text color='gray.900'>Create account {' '} <Link to="/signup"><Text as='b' color='teal'>Signup</Text></Link></Text>
      </Box>
     </Box>

   </Flex>
  )
}

export default Login
