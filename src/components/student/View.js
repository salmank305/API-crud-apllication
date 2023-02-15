import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export const View = () => {
  let { id } = useParams();
  // console.log(id);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        // console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log("somthing wrong");
      }
    }
    getStudent();
  }, [id]);

  function backToHome() {
    navigate("/");
  }
  return (
    <>
    
      <Box textAlign="center" p={2} mb={2} style={{ backgroundColor: "green",color:"white" }}>
        <Typography variant="h4">Student List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell align="center" style={{ backgroundColor: "yellow",fontSize:"20px"}}>
                No.
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "yellow" ,fontSize:"20px"}}>
                Name
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "yellow" ,fontSize:"20px"}}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center"  style={{fontWeight:"bold"}}>{student.id}</TableCell>
              <TableCell align="center"  style={{fontWeight:"bold"}}>{student.stuname}</TableCell>
              <TableCell align="center"  style={{fontWeight:"bold"}}>{student.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={backToHome}>
          Back To Home
        </Button>
      </Box>
    </>
  );
};
