import axios from "axios";
import Button from '@mui/material/Button';

export default function suspendVm({idvm}) {
    
const suspendVm = async (e) => {
    e.preventDefault();

    await axios({
        method: "post",
        url: `http://127.0.0.1:5000/suspend?ID=${idvm}`,
   
    }).then((response)=>{
        window.location.reload();
    })

}
     
    return (
        <Button variant="outlined" onClick={suspendVm}>Suspend</Button> 
    );
}