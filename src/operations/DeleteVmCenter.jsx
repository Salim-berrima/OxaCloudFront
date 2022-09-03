import axios from "axios";
import Button from '@mui/material/Button';

export default function deleteVm({idvm}) {
    
const deleteVm = async (e) => {
    e.preventDefault();

    await axios({
        method: "delete",
        url: `http://127.0.0.1:5000/delete?ID=${idvm}`,
   
    }).then((response)=>{
        window.location.reload();
    })

}
     
    return (
        <Button variant="outlined" onClick={deleteVm}>Delete</Button> 
    );
}