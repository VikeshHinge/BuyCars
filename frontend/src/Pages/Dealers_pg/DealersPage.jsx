
import React, { useEffect, useState } from 'react';
import {Box,Text,Flex,Image, SimpleGrid} from '@chakra-ui/react';
import Search from './Dealers_Comp/Search';
import Dealers_navbar from './Dealers_Comp/Dealers_navbar';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';



const DealersPage = () => {
const [Data,setData] = useState([])
const dispatch = useDispatch()

useEffect(()=>{
  const getData= async()=>{
    let config = { headers: {"authorization": localStorage.getItem('token') } }
     let{ data} = await axios.get(`http://localhost:4040/inventory`,config)
     setData(data)
  }
 getData()
},[])

  return (
    <Box w='100%' h='100vh'>
       <Dealers_navbar/>
       <SimpleGrid columns={3} gap='20px' w='90%' p='10px' m='auto'>
        {
          Data && Data.map((ele)=>(
            <Box key={ele._id} position='relative' bg='red.200' m='10px' p='10px' border='1px solid'>
               <Text>Title : {ele.title}</Text>
               <Image src={ele.images[0].url} alt='img'/>
               <Text>Location:{ele.location}</Text>
               <Flex gap='20px' alignItems='center'>Paint:{ele.paint} <Box w='20px' h='20px' bg={ele.paint}></Box></Flex>
               <Flex justifyContent='space-between'>
                <Text onClick={()=>dispatch(ele._id)}>Delete</Text>
                <Text>Update</Text>
               </Flex>
            </Box>
          ))
        }
      </SimpleGrid>
    </Box>
  )
}

export default DealersPage
