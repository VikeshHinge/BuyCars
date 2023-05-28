import React, { useEffect, useState } from 'react'
import { Box,Heading,Flex,Image, SimpleGrid,Text,Button,Checkbox } from '@chakra-ui/react';
import Navbar from './Navbar';
import axios from 'axios';
import { useParams,useLocation,useSearchParams } from 'react-router-dom';
import FilterSidebar from './Compnunt/FilterSidebar';
const Color = ['red','white','blue','gray','black','green','yellow','orange']

const Dealpage = () => {
   const [loading,setloading] = useState(true)
    const [Data,setData] = useState()
    const [searchParams] = useSearchParams()
    let location = useLocation()


    useEffect(()=>{
        const getData= async()=>{
            console.log(location)
            let {data} = await axios.get(`http://localhost:4040/inventory/deals${location.search}`)
            setloading(false)
            console.log(data)
            setData(data)
        }
    
       getData()

    },[location])


   let arr = [1,2,3,4,5,6]
  return (
   <Box position='relative'>
    <Navbar/>
    <Box   m='auto'>
    <Flex gap='20px' >
        <Box w='20%' textAlign='left'  p='10px' borderRight='1px solid red'>          
            <FilterSidebar Color={Color} />
        </Box>
        <Box w='100%' p='30px'>
        { 
            loading ?  <SimpleGrid  columns={3} gap='20px' m='auto'>
                {arr && arr.map((ele)=>{
                  return(
                    <Box w='90%' h='200px' bg='red.400'  key={ele}>
                        <Text m='auto' as='b'>Loadibg....</Text>
                    </Box>
                  )
                })}
            </SimpleGrid>:
            <SimpleGrid  columns={3} gap='20px' m='auto'>
            {
                Data && Data.map((ele)=>(
                    <Box fontWeight='bold' w='100%' textAlign='left' bg='red.200' p='10px' border='2px solid red' borderRadius='10px' key={ele._id}>
                        <Image m='auto' w='90%' h='200px' src={ele.images[0].url} alt='img'/>
                        <Text>{ele.title}</Text>
                        <Text>Price: {ele.list_price}</Text>
                        <Flex alignItems='center' gap='10px'><Text>Paint: </Text><Box w='20px' h='20px' borderRadius='50%' bg={ele.paint}></Box></Flex>
                    </Box>
                ))
            }
        </SimpleGrid>
      
        }
        </Box>
       
     
    </Flex>
   </Box>
   </Box>
  )
}

export default Dealpage
