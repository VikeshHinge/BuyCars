
import axios from "axios";


export const Getdealerscar = async () => {
   let config = { headers: {"authorization": localStorage.getItem('token') } }
   let{data} = await axios.get(`https://sore-pink-python-hose.cyclic.app/inventory`,config)
   return data
}


export const GetSearchData = async (key) => {
   
    let{ data} = await axios.get(`https://sore-pink-python-hose.cyclic.app/oem/search/${key}`)
     if(data.sug){
        return [];
     }
   return data;
}

export const DeleteCar = async(id)=> {
   let config = {
       headers: {
           "authorization": localStorage.getItem('token') 
       }
     }
      try{
         let res = await axios.delete(`http://localhost:4040/inventory/postdelete/${id}`,config)
         console.log(res)
      }catch(err){
         return err
      }
}


export const Updatecarpost = async(body)=>{
   let config = {
      headers: {
          "authorization": localStorage.getItem('token') 
      }
    }
    let id = body._id
    try{
      let res = await axios.patch(`http://localhost:4040/inventory/updatepost/${id}`,body)
      return(res)
   }catch(err){
      console.log(err)
      return err
   }
}