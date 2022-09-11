import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  {useState} from "react";
import { fetchServersData } from './RoutesData';
import DeleteVm from './operations/DeleteVmCenter';
import SuspendVm from './operations/SuspendVmCenter'
import PowerVm from './operations/PowerVm'
import ColorSchemesExample from "./Navbar";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function ListServers() {
    const [vmsData,setVmsData]=useState({});
React.useEffect(()=>{
    fetchServersData().then((response)=>{
        setVmsData(response.data);

    })
},[])
const servers = Object.keys(vmsData).map((key) => vmsData[key]);

console.log(servers)


  return (
    <div>
    <ColorSchemesExample/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
     
            <StyledTableCell align="right">STATE</StyledTableCell>
            <StyledTableCell align="right">HOST</StyledTableCell>
            <StyledTableCell align="right">IP@</StyledTableCell>
            <StyledTableCell align="right">POWER_STATE</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {servers.map((v, index) => (
            <StyledTableRow key={index}>
        
              <StyledTableCell align="right">{v.connection_state}</StyledTableCell>
              <StyledTableCell align="right">{v.host}</StyledTableCell>
              <StyledTableCell align="right">{v.name}</StyledTableCell>
              <StyledTableCell align="right">{v.power_state}</StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}