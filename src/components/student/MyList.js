import React from "react";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import {
  IconButton,
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

import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function MyList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
      async function getAllStudent() {
    try {
      const students = await axios.get("http://localhost:3333/students");
      // console.log(students.data);
       setStudents(students.data);
    } catch (error) {
      console.log("somthing wrong");
    }
  }
    getAllStudent();
  },[]);

const handleDelete = async id=>{
  await axios.delete(`http://localhost:3333/students/${id}`)
  var newstudent=students.filter((item)=>{
    return item.id !==id;
  })
  setStudents(newstudent);
}

  return (
    <>
      <Box textAlign="center" p={2} mb={2} style={{ backgroundColor: "green",color:"white" }}>
        <Typography variant="h4">Student List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ backgroundColor: "yellow" ,fontSize:"20px" }}>
                No.
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "yellow" ,fontSize:"20px" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "yellow" ,fontSize:"20px"}}>
                Email
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "yellow" ,fontSize:"20px"}}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {students.map((student, i) => {
              return (
                <TableRow key={i} >
                  <TableCell  align="center" style={{fontWeight:"bold"}}>{i + 1}</TableCell>
                  <TableCell align="center"  style={{fontWeight:"bold"}}>{student.stuname}</TableCell>
                  <TableCell align="center"  style={{fontWeight:"bold"}}>{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <Visibility color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <Edit />
                        </Link>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton onClick={()=>handleDelete(student.id)}>
                        <Delete color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MyList;
