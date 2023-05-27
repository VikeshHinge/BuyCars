
import axios from "axios";


export const GetSearchData = async (key) => {
    console.log(key)
    let{ data} = await axios.get(`https://sore-pink-python-hose.cyclic.app/oem/search/${key}`)
     if(data.sug){
        return [];
     }
    
   return data;
}