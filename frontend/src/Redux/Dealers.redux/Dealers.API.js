
import axios from "axios";


export const GetSearchData = async (key) => {
    console.log(key)
    let{ data} = await axios.get(`http://localhost:4040/oem/search/${key}`)
     if(data.sug){
        return [];
     }
    
   return data;
}