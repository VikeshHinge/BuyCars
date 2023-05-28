
import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,useDisclosure,
    Box,  Table,
    Thead,
    Tbody,Flex,
    Tfoot,
    Tr,
    Th,
    Td,Textarea,useToast,
    TableCaption,Input,
    TableContainer,Text, FormControl
  } from '@chakra-ui/react'

const UpdateModule = ({ele,hadelUpdate}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData] = useState(ele)

   const onDataChange = (e) => {
       setData({...data,[e.target.name]:e.target.value})
   }

   

  return (
    <div>

      <Button  onClick={onOpen}>Update</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                 <Box >
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
                  <Input onChange={onDataChange} name='title' value={data.title} border='1px solid' placeholder='Title' size='sm' />
                  </Td>
                 </Tr>
                 <Tr>
                  <Td>KM run (odeometer)</Td>
                  <Td>  <Input onChange={onDataChange} name='km_odeometer' value={data.km_odeometer} border='1px solid' placeholder='Km' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Major Scratches</Td>
                  <Td><Input onChange={onDataChange}  name='major_scratches' value={data.major_scratches} border='1px solid' placeholder='number of scratches' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Paint</Td>
                  <Td><Input onChange={onDataChange} name='paint' value={data.paint} border='1px solid' placeholder='paint of car' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Any Accident</Td>
                  <Td><Input onChange={onDataChange} name='accident_report' value={data.accident_report} border='1px solid' placeholder='any major accident' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Price</Td>
                  <Td><Input onChange={onDataChange} name='list_price' value={data.list_price} border='1px solid' placeholder='Price' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Mileage</Td>
                  <Td><Input onChange={onDataChange} name='mileage' value={data.mileage} border='1px solid' placeholder='mileage' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Previous Buyers</Td>
                  <Td><Input onChange={onDataChange} name='pre_buyers' value={data.pre_buyers} border='1px solid' placeholder='buyers' size='sm' /></Td>
                 </Tr>
                 <Tr>
                  <Td>Location</Td>
                  <Td><Input onChange={onDataChange} name='location' value={data.location} border='1px solid' placeholder='city, state' size='sm' /></Td>
                 </Tr>

                 <Tr>
                  <Td>Description</Td>
                  <Td><Textarea  onChange={onDataChange} name='description'  value={data.description} border='1px solid' placeholder="car information seprated by '-'" /></Td>
                 </Tr>
             </Tbody>
          </Table>
          </FormControl>
                 </Box>
          </ModalBody>
          <ModalFooter>
           <Flex w='100%' m='auto' gap='20px'>
             <Button w='100%' bg='blue.400' onClick={()=>hadelUpdate(data)} >Update</Button>
             <Button w='100%' bg='red.400' onClick={onClose}>Close</Button>
           </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
 
    </div>
  )
}

export default UpdateModule
