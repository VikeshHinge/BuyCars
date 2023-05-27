import axios from 'axios';
import {GET_CAR_DELETE,GET_CAR_LOADING,GET_CAR_ERROR,GET_CAR_UPDATE} from './Dealers.type.js';


const DeleteCar = async(id)=> {
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
    let res = await axios.delete(`https://sore-pink-python-hose.cyclic.app/${id}`,config)
}

export const DeleteCarDeal =(id)=>(dispatch) => {
         console.log(id)
    try{
       //await DeleteCar(id)
       dispatch({type:GET_CAR_DELETE,payload:id})
    }catch(err){
       dispatch({type:GET_CAR_ERROR,payload:err.message})
    }
}