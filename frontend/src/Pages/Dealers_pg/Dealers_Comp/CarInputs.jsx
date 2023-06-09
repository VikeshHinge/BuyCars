import React, { useState } from 'react';
import {
  Box,  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,Textarea,useToast,
  TableCaption,Input,
  TableContainer,Text, FormControl
} from '@chakra-ui/react';
import axios from 'axios';
import { PostData } from '../../APIcalls';




const CarInputs = ({model,oemID}) => {
  const toast = useToast();
const [cartinfo,setCarinfo] = useState({name:'',km_odeometer:'',major_scratches:'',
paint:'',accident_report:'',pre_buyers:'',location:'',title:'',description:'',mileage:''})

const [Images,setImages] = useState([])
const [imgPreview, setImgPreview] = useState([])
const tost = useToast()

const onDataChange = (e)=>{
  if(e.target.name === "images"){

    const reader = new FileReader();

    reader.onload=()=>{
      if(reader.readyState === 2){
     

        setImages((prev)=>[reader.result]) 
      }
    }
    reader.readAsDataURL(e.target.files[0])
   

  }else{
    setCarinfo((prev)=>({
      ...prev,
      ...model[0],
      [e.target.name] : e.target.value
    }))
  }
}

const handelSubmit = async() => {

  let value = model[0].mileage.split(' ')

   const carObj = {
    ...cartinfo,
    images : Images,
   }
   carObj['oemID']=oemID
  let res =await PostData(carObj)

  toast({
    title: res,
    status: 'success',
    position:'top',
    isClosable: true,
  })
}

  return (
  <Box w='80%' m='auto' mt='20px' bg='red.100' p='10px' borderRadius='10px' mb='40px'>
    <Text as='b' fontSize='2xl'>Add Car Information</Text>
    
          <FormControl isRequired>
          <Table>
             <Thead>
              <Tr>
                <Th>Properties</Th>
                <Th>Values</Th>
              </Tr>
             </Thead>
             <Tbody>
                 <Tr>
                  <Td>Title</Td>
                  <Td>
                  <Input onChange={onDataChange} name='title' value={cartinfo.title} border='1px solid' placeholder='Title' size='sm' />
                  </Td>
                 </Tr>
                 <Tr>
                  <Td>KM run (odeometer)</Td>
                  <Td>  <Input onChange={onDataChange} name='km_odeometer' value={cartinfo.km_odeometer} border='1px solid' placeholder='Km' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Major Scratches</Td>
                  <Td><Input onChange={onDataChange}  name='major_scratches' value={cartinfo.major_scratches} border='1px solid' placeholder='number of scratches' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Paint</Td>
                  <Td><Input onChange={onDataChange} name='paint' value={cartinfo.paint} border='1px solid' placeholder='paint of car' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Mileage</Td>
                  <Td><Input onChange={onDataChange} name='mileage' value={cartinfo.mileage} border='1px solid' placeholder='mileage- eg 20.3' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Any Accident</Td>
                  <Td><Input onChange={onDataChange} name='accident_report' value={cartinfo.accident_report} border='1px solid' placeholder='any major accident' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Previous Buyers</Td>
                  <Td><Input onChange={onDataChange} name='pre_buyers' value={cartinfo.pre_buyers} border='1px solid' placeholder='buyers' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Location</Td>
                  <Td><Input onChange={onDataChange} name='location' value={cartinfo.location} border='1px solid' placeholder='city, state' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Images</Td>
                  <Td>
                    <Box></Box>
                    <Input onChange={onDataChange} name='images' type='file' accept='image/**'     border='1px solid' placeholder='img' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Description</Td>
                  <Td><Textarea  onChange={onDataChange} name='description'  value={cartinfo.description} border='1px solid' placeholder="car information seprated by '-'" /></Td>
                 </Tr>
             </Tbody>
          </Table>
          </FormControl>
          <Input m='30px' onClick={handelSubmit} w='50%' type='submit' bg='red.300' fontWeight='bold' />
  
  </Box>
  )
}

export default CarInputs
