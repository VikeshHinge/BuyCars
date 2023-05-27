import {GET_CAR_DELETE,GET_CAR_LOADING,GET_CAR_ERROR,GET_CAR_UPDATE,GET_CAR_SUCESS} from './Dealers.type.js';


let initialvalue = {
    loading:false,
    error:false,
    Data:[]
}


export const Dealreducer = (state=initialvalue,{type,payload}) => {
    
switch(type){
     
    case GET_CAR_SUCESS:{
        return{
            ...state,
            error:false,
            Data:payload,
            loading:false
        }
    }

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
            error:false,
            loading:true,
            Data:[]
        }
    }

    case GET_CAR_DELETE :{
     let newcardata = state.Data.filter((ele)=>ele._id !== payload)
    
       return {
        ...state,
            error:false,
            loading:true,
            Data:newcardata
       }
    }

    case GET_CAR_UPDATE :{
        console.log(payload)
        let update = state.Data.map((ele)=>{
            if(ele._id === payload._id){
                 return {
                ...ele,
                 ...payload
                }
            }
            return ele
         })
         console.log(update)

        return{
            ...state,
            loading:false,
            error:false,
            Data:update
        }
    }

    default:{
        return state;
    }

}}