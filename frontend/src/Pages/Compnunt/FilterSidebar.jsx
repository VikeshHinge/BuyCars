import React,{useState,useEffect} from 'react';
import{
    Box,Checkbox,Text,Flex
} from '@chakra-ui/react'
import {useSearchParams} from 'react-router-dom';



const FilterSidebar = ({Color}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialprice = searchParams.getAll('list_price')
    const initialstate = searchParams.getAll('paint')
    const initialmileage = searchParams.getAll('mileage')
    const [list_price,setlist_price] = useState(initialprice || [])
    const [paint,setPaint] = useState( initialstate || [])
    const [mileage,setMileage] = useState(initialmileage || [])

    const handelprice = (item) => {
         
        if(list_price.includes(item)){
          setlist_price([])
        }else{
          setlist_price(item)
        }
      }

      const handelcolor=(item)=>{

        let newData = [...paint]
            if(newData.includes(item)){
                newData.splice(newData.indexOf(item),1)
            }
            else{
               newData.push(item)
            }
          setPaint(newData)
        }

       const handelMileage = (item) => {
        if(mileage.includes(item)){
            setMileage([])
          }else{
            setMileage(item)
          }
       }

useEffect(()=>{
    const paraam ={
        list_price,paint,mileage
    }
      setSearchParams(paraam)
  },[list_price,paint,mileage])

  return (
    <div>
          <Box>
            <Text as='b'>Price-Filter</Text><br />
           <Checkbox  onChange={()=>handelprice('500001')} isChecked={list_price.includes('500001')}>
        Over INR 5L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('500000')} isChecked={list_price.includes('500000')}>
       Under INR 5L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('400000')} isChecked={list_price.includes('400000')}>
       Under INR 4L
       </Checkbox><br />
       <Checkbox onChange={()=>handelprice('300000')} isChecked={list_price.includes('300000')}>
       Under INR 3L
       </Checkbox><br />
           </Box>

           <Box w='fit-content'>
            <Text as='b'>Color-Filter</Text><br />
               {
                Color.map((ele)=>{
                    return(
                       <Flex  key={ele} alignItems='center' justifyContent='space-between'  gap='30px'>
                        <Checkbox onChange={()=>handelcolor(ele)}  isChecked={paint.includes(ele)} >
                          {ele}
                        </Checkbox>
                        <Box w='20px' h='20px' border='2px solid black' bg={ele}></Box>
                       </Flex>
                    )
                })
               }
           </Box>
           <Text as='b'>Mileage</Text><br />
           <Checkbox onChange={()=>handelMileage('20')} isChecked={mileage.includes('20')}>
             Milage-under 20
            </Checkbox><br />
            <Checkbox onChange={()=>handelMileage('30')} isChecked={mileage.includes('30')}>
             Milage-under 30
            </Checkbox><br />
           <Box>

           </Box>
    </div>
  )
}

export default FilterSidebar
