import React,{useState,useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {
    Drawer,Image,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Box,Button,Flex,Text,useDisclosure,Input,InputRightAddon,InputGroup
  } from '@chakra-ui/react';
  import {HiSearch} from "react-icons/hi";
  import { GetSearchData } from '../../../Redux/Dealers.redux/Dealers.API';

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [searchData,setSearchData] = useState([])
    const [searchKey,setSearchkey] = useState('')
    const Navigate = useNavigate()

    const debounce = (func) =>{
      let timer;
      return function (...args){
        const context = this;
        if(timer){
          clearTimeout(timer)
        }
        timer = setTimeout(()=>{
          timer = null;
          func.apply(context,args)
        },800)
      }
    }

    
    const handelSearch = async(value) => {
         if(value !=='') {
           let data =await GetSearchData(value)
           setSearchData(data)
         }else{
          setSearchData([])
         }
    }

    const optimisation = useCallback(debounce(handelSearch),[])
   

    const handelvalue = (e) => {
      let {value} = e.target;
      setSearchkey(value)
      optimisation(value)
    }


    const GotoSearchProduct = (id) => {
      setSearchkey('')
      setSearchData([])
      console.log(id)
      onClose()
      return Navigate(`/uploadpost/${id}`)
    }

    
  return (
    <Box>
              <InputGroup m='auto' onClick={onOpen}>
                  <Input type='tel' placeholder='Search' />
                  <InputRightAddon bg='red.400' children={<HiSearch size='30px'/>} />
              </InputGroup>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' color='red.300'>
            <Flex justifyContent='space-between'>
            <Text>Search Model</Text>
            <Text p='5px' cursor='default' bg='red.400' w='100px' textAlign='center' color='white' border='1px solid red' onClick={onClose}>Close</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
             <InputGroup m='auto' w='45%' onClick={onOpen}>
                  <Input type='tel' value={searchKey} size='md' placeholder='Search' onChange={handelvalue}/>
                  <InputRightAddon bg='red.400' children={<HiSearch size='30px'/>} />
              </InputGroup>
               <Box>
                 {searchData && searchData.map((ele)=>(
                  <Box  _hover={{bg:'red.300'}} key={ele._id} m='auto' mt='5px' bg='red.200' w='45%' p='5px' border='1px solid red'>
                     <Flex  gap='20px'  m='auto'  alignItems='center' onClick={()=>GotoSearchProduct(ele._id)} >
                      <Image w='80px' src={ele.img} alt='carimg'/>
                      <Text as='b'>{ele.model} { ele.year}</Text>
                     </Flex>
                  </Box>
                 ))}
               </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Search
