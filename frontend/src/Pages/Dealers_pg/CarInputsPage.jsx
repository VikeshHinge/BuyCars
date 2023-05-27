import React, { useEffect, useState } from 'react';
import {Box,Flex,Input,Text,Image,SimpleGrid,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AiFillCar } from "react-icons/ai";
import { GiAbstract090,GiEyeball,GiGears,GiGlassHeart,GiSpeedometer } from "react-icons/gi";
import CarInputs from './Dealers_Comp/CarInputs';
import Dealers_navbar from './Dealers_Comp/Dealers_navbar';

const CarInputsPage = () => {
    let [model,setModel] = useState([])
    let params = useParams()

    useEffect(()=>{

        const Getdata = async(params) =>{
            console.log(params)
            let {data} = await axios.get(`http://localhost:4040/oem?_id=${params.id}`)
            console.log(data)
            setModel(data)
        }

       Getdata(params)
    },[params])

  return (
   <Box p='10px'>
      <Dealers_navbar/>
        <Box mt='20px'>
            {
              model && model.map((ele)=>(
                <Box key={ele._id} display='flex' justifyContent='center' w='90%'m='auto' gap='20px' textAlign='left'>
                    <Image borderRadius='10px' w='40%' src={ele.img} alt='car_pic'/>
                     <Box border='1px solid gray' borderRadius='10px'>
                        <Text p='10px' textAlign='start' as='b' fontSize='3xl'>{ele.model}-{ele.year}</Text><br />
                        <Text p='20px' as='b'>Price Range : {ele.list_price}</Text>
                     <Flex mt='10px'>
                    <Table w='50%'>
                        <Tbody>
                            <Tr bg='red.100'>
                            <Td>
                                <Flex gap='10px'><AiFillCar size='25px'/>Model</Flex>
                            </Td>
                            <Td>{ele.model}</Td>
                            </Tr>
                            <Tr>
                            <Td>
                             <Flex gap='10px'><GiAbstract090 size='25px'/>Engine</Flex>
                            </Td>
                            <Td>{ele.engine}</Td>
                            </Tr>
                            <Tr bg='red.100'>
                            <Td>
                                <Flex gap='10px'><GiGlassHeart size='25px'/>Year</Flex>
                            </Td>
                            <Td>{ele.year}</Td>
                            </Tr>
                        </Tbody>
                     </Table>
                     <Table w='50%'>
                        <Tbody>
                            <Tr>
                            <Td>
                                <Flex gap='10px'><GiEyeball size='25px'/>Milage</Flex>
                            </Td>
                            <Td>{ele.mileage}</Td>
                            </Tr>
                            <Tr bg='red.100'>
                            <Td>
                                <Flex gap='10px'><GiSpeedometer size='25px'/>Power</Flex>
                            </Td>
                            <Td>{ele.power}</Td>
                            </Tr>
                            <Tr >
                            <Td>
                             <Flex gap='10px'><GiGears size='25px'/>Engine</Flex>
                            </Td>
                            <Td>{ele.engine}</Td>
                            </Tr>
                        </Tbody>
                     </Table>
                    </Flex>
                     </Box>
                   
                

                </Box>
              ))
            }
        </Box>
        <CarInputs model={model}  oemID={params.id}/>
   </Box>
  )
}

export default CarInputsPage
