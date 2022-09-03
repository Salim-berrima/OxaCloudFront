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
import { fetchVmsData } from './RoutesData';
import DeleteVm from './operations/DeleteVmCenter';
import SuspendVm from './operations/SuspendVmCenter';
import PowerVm from './operations/PowerVm';
import PowerVmof from './operations/PowerVmOf';
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




export default function ListVms({idvm}) {
    const [vmsData,setVmsData]=useState({});
React.useEffect(()=>{
    fetchVmsData().then((response)=>{
        setVmsData(response.data);

    })
},[])
const vms = Object.keys(vmsData).map((key) => vmsData[key]);
console.log(vms)



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">VM</StyledTableCell>
            <StyledTableCell align="right">CPU_COUNT</StyledTableCell>
            <StyledTableCell align="right">MEMORY_SIZE_MiB</StyledTableCell>
            <StyledTableCell align="right">STATE</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vms.map((v, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {v.vm}
              </StyledTableCell>
              <StyledTableCell align="right">{v.name}</StyledTableCell>
              <StyledTableCell align="right">{v.cpu_count}</StyledTableCell>
              <StyledTableCell align="right">{v.memory_size_MiB}</StyledTableCell>
              <StyledTableCell align="right">{v.power_state}</StyledTableCell>
              <StyledTableCell align="right" ><SuspendVm key={index} idvm={v.vm}></SuspendVm >  </StyledTableCell>
              <StyledTableCell align="right" ><PowerVm key={index} idvm={v.vm}></PowerVm >  </StyledTableCell>
              <StyledTableCell align="right" ><PowerVmof key={index} idvm={v.vm}></PowerVmof >  </StyledTableCell>
              <StyledTableCell align="right" ><DeleteVm key={index} idvm={v.vm}></DeleteVm>  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}