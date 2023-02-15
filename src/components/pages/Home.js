import { Button, Grid, TextField, Typography } from "@mui/material";

import { Box } from "@mui/system";
import MyList from "../student/MyList";
import axios from "axios";
import { useState } from "react";
// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

function Home() {
  // const classes = useStyles();
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });
  const [status, setStatus] = useState(false);

  function onTextFeildChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
    // console.log(student);
  }
  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/students`, student);
      setStatus(true);
    } catch (error) {
      console.log("somthing wrong");
    }
  }
  if (status) {
    return <Home />;
  }
  return (
    <>
      <Box
        textAlign="center"
        style={{ backgroundColor: "Purple", color: "white" }}
        // className={classes.root}
        p={2}
        mb={2}
      >
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            style={{ backgroundColor: "green", color: "white" }}
            mb={2}
            p={2}
          >
            <Typography variant="h4" textAlign="center">
              Add Student
            </Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  label="Name"
                  required
                  fullWidth
                  id="stuname"
                  autoFocus
                  variant="outlined"
                  onChange={(e) => onTextFeildChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  label="email"
                  required
                  fullWidth
                  id="email"
                  autoFocus
                  variant="outlined"
                  onChange={(e) => onTextFeildChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="'submit"
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "15px",
                }}
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <MyList />
        </Grid>
      </Grid>
    </>
  );
}
// style={{backgroundColor:"red"}}
export default Home;
