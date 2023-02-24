// import { Button, Grid, TextField, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// export const Edit = () => {
//   const { id } = useParams;
//   const navigate = useNavigate();
//   const [student, setStudent] = useState({
//     stuname: "",
//     email: "",
//   });
//   function backToHome() {
//     navigate("/");
//   }
//   useEffect(() => {
//     async function getStudent() {
//       try {
//         const student = await axios.get(`http://localhost:3333/students/${id}`);
//         // console.log(student.data);
//         setStudent(student.data);
//       } catch (error) {
//         console.log("Something is Wrong");
//       }
//     }
//     getStudent();
//   }, [id]);
//   function onTextFeildChange(e) {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//     // console.log(student);
//   }
//   async function onFormSubmit(e){
//     e.preventDefault();
//     try {
//      await axios.put(`http://localhost:3333/students/${id}`,student);
//      navigate.push("/");
//     } catch (error) {
//       console.log("somthing wrong");
//     }
//   }
//   return (
//     <>
//       <Box
//         textAlign="center"
//         p={2}
//         mb={2}
//         style={{ backgroundColor: "Purple", color: "white" }}
//       >
//         <Typography variant="h4">React CRUD with API call</Typography>
//       </Box>

//       <Grid container justifyContent="center" spacing={4}>
//         <Grid item md={6} xs={12}>
//           <Box
//             style={{ backgroundColor: "green", color: "white" }}
//             mb={2}
//             p={2}
//           >
//             <Typography variant="h4">Edit Student</Typography>
//           </Box>
//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="id"
//                   name="id"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="id"
//                   label="ID"
//                   autoFocus
//                   value={id}
//                   disabled
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="stuname"
//                   name="stuname"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="stuname"
//                   label="Name"
//                   value={student.stuname}
//                  onChange={(e) => onTextFeildChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="email"
//                   name="email"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   value={student.email}
//                    onChange={(e) => onTextFeildChange(e)}
//                 />
//               </Grid>
//             </Grid>
//             <Box m={3}>
//               <Button
//                 type="'button"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 onClick={(e)=>onFormSubmit(e)}
//               >
//                 Update
//               </Button>
//             </Box>
//           </form>
//           <Box m={3} textAlign="center">
//             <Button variant="contained" color="primary" onClick={backToHome}>
//               Back To Home
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

import { Typography, Box, Grid, TextField, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Edit = () => {
  const {id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });
  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        // console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, [id]);

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/students/${id}`, student);
      navigate("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  return (
    <>
      <Box
        textAlign="center"
        p={2}
        mb={2}
        style={{ backgroundColor: "Purple", color: "white" }}
      >
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>

      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            textAlign="center"
            style={{ backgroundColor: "green", color: "white" }}
            mb={2}
            p={2}
          >
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  value={student.stuname}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={student.email}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
