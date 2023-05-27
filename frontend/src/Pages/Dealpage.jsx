import React, { useEffect, useState } from 'react'
import { Box,Heading,Flex,Image, SimpleGrid,Text,Button,Checkbox } from '@chakra-ui/react';
import Navbar from './Navbar';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
const Color = ['red','white','blue','gray','black','green','yellow','orange']

const Dealpage = () => {

    const [Data,setData] = useState()
    const dispatch = useDispatch()


    const handelprice = () => {
       let newdata = Data.filter((ele)=>{
       
       })
    }

    useEffect(()=>{
        const getData= async()=>{
            let {data} = await axios.get('https://sore-pink-python-hose.cyclic.app/inventory/deals')
            console.log(data)
            setData(data)
        }
    
       getData()

    },[dispatch])



  return (
   <Box>
    <Navbar/>
    <Box  m='auto'>
    <Flex gap='20px' >
        <Box w='20%' textAlign='left' h='100vh' p='10px' borderRight='1px solid red'>
           <Box>
            <Text as='b'>Price-Filter</Text><br />
           <Checkbox  onChange={()=>handelprice('500001')} >
        Over INR 5L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('500000')} >
       Under INR 5L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('400000')} >
       Under INR 4L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('300000')} >
       Under INR 3L
       </Checkbox><br />
           </Box>

           <Box w='fit-content'>
            <Text as='b'>Color-Filter</Text><br />
               {
                Color.map((ele)=>{
                    return(
                       <Flex  key={ele} alignItems='center' justifyContent='space-between'  gap='30px'>
                        <Checkbox>
                          {ele}
                        </Checkbox>
                        <Box w='20px' h='20px' border='2px solid black' bg={ele}></Box>
                       </Flex>
                    )
                })
               }
           </Box>

        </Box>
        <Box w='100%' p='30px'>
            <SimpleGrid  columns={3} gap='20px' m='auto'>
                {
                    Data && Data.map((ele)=>(
                        <Box fontWeight='bold' w='100%' textAlign='left' bg='red.200' p='10px' border='2px solid red' borderRadius='10px' key={ele._id}>
                            <Image src={ele.images[0].url} alt='img'/>
                            <Text>{ele.title}</Text>
                            <Text>Price: {ele.list_price}</Text>
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
