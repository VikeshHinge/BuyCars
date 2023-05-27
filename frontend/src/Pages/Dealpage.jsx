import React, { useEffect, useState } from 'react'
import { Box,Heading,Flex,Image, SimpleGrid,Text,Button,Checkbox } from '@chakra-ui/react';
import Navbar from './Navbar';
import axios from 'axios';



const Dealpage = () => {

    const [Data,setData] = useState()



    const handelprice = () => {
       let newdata = Data.filter((ele)=>{
        ele.price.split()
       })
    }

    useEffect(()=>{
        const getData= async()=>{
            let {data} = await axios.get('http://localhost:4040/inventory/deals')
            console.log(data)
            setData(data)
        }
    
        getData()
    },[])



  return (
   <Box>
    <Navbar/>
    <Box  m='auto'>
    <Flex gap='20px' >
        <Box w='20%' textAlign='left' h='100vh' p='10px' borderRight='1px solid red'>
           <Box>
            <Text as='b'>Price-Filter</Text><br />
           <Checkbox  onChange={()=>handelprice('5001-500000')} >
        Over INR 5L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('350001-500000')} >
       Under INR 3.5L- INR 5L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('200001-350000')} >
       Under INR 2L -INR 35L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('0-200000')} >
       Under INR 2L
       </Checkbox><br />
           </Box>
        </Box>
        <Box w='100%' p='30px'>
            <SimpleGrid  columns={3} gap='20px' m='auto'>
                {
                    Data && Data.map((ele)=>(
                        <Box fontWeight='bold' w='100%' textAlign='left' bg='red.200' p='10px' border='2px solid red' borderRadius='10px' key={ele._id}>
                            <Image src={ele.images[0].url} alt='img'/>
                            <Text>{ele.title}</Text>
                            <Text>Price: {ele.price}</Text>
                            <Flex alignItems='center' gap='10px'><Text>Paint: </Text><Box w='20px' h='20px' borderRadius='50%' bg={ele.paint}></Box></Flex>
                        </Box>
                    ))
                }
            </SimpleGrid>
        </Box>
    </Flex>
   </Box>
   </Box>
  )
}

export default Dealpage
