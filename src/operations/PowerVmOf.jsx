import axios from "axios";
import Button from '@mui/material/Button';

export default function powerVmof({idvm}) {
    
const powerVmof = async (e) => {
    e.preventDefault();

    await axios({
        method: "post",
        url: `http://127.0.0.1:5000/poweroff?ID=${idvm}`,
   
    }).then((response)=>{
console.log(idvm)
        window.location.reload();
    })

}
     
    return (
        <Button variant="outlined" onClick={powerVmof}>Power Off</Button> 
    );
}