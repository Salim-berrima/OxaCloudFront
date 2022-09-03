import axios from "axios";
import Button from '@mui/material/Button';

export default function powerVm({idvm}) {
    
const powerVm = async (e) => {
    e.preventDefault();

    await axios({
        method: "post",
        url: `http://127.0.0.1:5000/poweron?ID=${idvm}`,
   
    }).then((response)=>{
console.log(idvm)
        window.location.reload();
    })

}
     
    return (
        <Button variant="outlined" onClick={powerVm}>Power On</Button> 
    );
}