import axios from "axios";

export async function fetch(img)
{
    
   axios.post('http://localhost:3000/img',img).then((req)=>{
    console.log("Successfully sent image to server",req);
   }
   )

}