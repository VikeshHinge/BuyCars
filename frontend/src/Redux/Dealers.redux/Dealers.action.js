import axios from 'axios';
import {GET_CAR_DELETE,GET_CAR_LOADING,GET_CAR_ERROR,GET_CAR_UPDATE,GET_CAR_SUCESS} from './Dealers.type.js';
import { Getdealerscar,DeleteCar,Updatecarpost } from './Dealers.API.js';

export const GetDealersCar = async(dispatch) => {
    console.log(9)
    dispatch ({type:GET_CAR_LOADING})
  
    try{
     let Data = await Getdealerscar()
      dispatch ({type:GET_CAR_SUCESS,payload:Data})
    }
    catch(err){
       dispatch({type:GET_CAR_ERROR,payload:err.message})
    }
}



export const DeleteCarDeal =(id)=>async(dispatch)=> {
    try{
       await DeleteCar(id)
       console.log(id)
       dispatch({type:GET_CAR_DELETE,payload:id})
    }catch(err){
       dispatch({type:GET_CAR_ERROR,payload:err.message})
    }
}


export const  UpdateCarDeal = (body)=> async(dispatch)=>{
    try{
        let res = await Updatecarpost(body)
        dispatch({type:GET_CAR_UPDATE,payload:body})

     }catch(err){
        dispatch({type:GET_CAR_ERROR,payload:err.message})
     }
}