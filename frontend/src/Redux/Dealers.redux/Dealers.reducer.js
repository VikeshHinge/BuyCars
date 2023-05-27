import {GET_CAR_DELETE,GET_CAR_LOADING,GET_CAR_ERROR,GET_CAR_UPDATE} from './Dealers.type.js';


let initialvalue = {
    loading:false,
    error:false,
    Data:[]
}


export const Dealreducer = (state=initialvalue,{type,payload}) => {
    
switch(type){

    case GET_CAR_ERROR :{
        return {
            ...state,
            error:payload,
            Data:[],
            loading:false
        }

    }

    case GET_CAR_LOADING :{
        return{
            ...state,
            error:'',
            loading:true,
            Data:[]
        }
    }

    case GET_CAR_DELETE :{
        let newcardata = state.Data.filter((ele)=>ele._id !== payload)
       console.log(payload)
      
        return{
            ...state,
            error:false,
            loading:false,
            Data:newcardata,
        }
    }

    default:{
        return state;
    }

}}