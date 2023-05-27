
import React, { useEffect, useState } from 'react';
import {Box,Text,Flex,Image, SimpleGrid} from '@chakra-ui/react';
import Search from './Dealers_Comp/Search';
import Dealers_navbar from './Dealers_Comp/Dealers_navbar';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import { GetDealersCar,DeleteCarDeal, UpdateCarDeal } from '../../Redux/Dealers.redux/Dealers.action';
import UpdateModule from './Dealers_Comp/UpdateModule';


const DealersPage = () => {

const dispatch = useDispatch()
let {Data} = useSelector((store)=>(store.dealManager))

const hadelUpdate = (data) => {
     dispatch( UpdateCarDeal(data))
}

useEffect(()=>{
GetDealersCar(dispatch)
},[dispatch])

  return (
    <Box w='100%' >
       <Dealers_navbar/>
       
       <SimpleGrid columns={3} gap='20px' w='90%' p='10px' m='auto'>
        {
          Data && Data.map((ele)=>(
            <Box key={ele._id} position='relative' bg='red.200' m='10px' p='10px' border='1px solid' textAlign='left '>
               <Text>Title : {ele.title}</Text>
               <Image m='auto' w='90%' h='50%' src={ele.images[0].url} alt='img'/>
               <Text>Location:{ele.location}</Text>
               <Flex gap='20px' alignItems='center'><Text>Paint:{ele.paint}</Text> <Box w='20px' h='20px' border='2px black' borderRadius='50%' bg={ele.paint}></Box></Flex>
               <Flex justifyContent='space-between'>
                <Text bg='red' p='5px'  onClick={()=>dispatch(DeleteCarDeal(ele._id))}>Delete</Text>
                <UpdateModule hadelUpdate={hadelUpdate}  ele={ele} />
               </Flex>
            </Box>
          ))
        }
      </SimpleGrid>

      {
        Data && Data.length===0?<Box>
          <Image m='auto'  src='https://i.pinimg.com/564x/b0/6a/ec/b06aecc0416d081ad0bb6a95870c220a.jpg' alt='img2'/>
          <Text color='red.400' as='b' fontSize='25px'>Post your first deal </Text>
        </Box>:<Box></Box>
       }

    </Box>
  )
}

export default DealersPage
