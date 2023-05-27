import axios from "axios";

export const UserSignup = async(data) => {
    console.log(data)

     try{
        let res = await axios.post(`http://localhost:4040/${data.type}/register`)
        console.log(res)
     }
     catch(e){
        return e.message
     }
}

export const UserLogin = async(data) => {
 
}


export const PostData = async(data) =>{
    let config = { headers: {"authorization": localStorage.getItem('token') } }
   let res = await axios.post('http://localhost:4040/inventory/addpost',data,config)
    
}