/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Typography, Grid, Divider} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(20),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  body: {
    marginLeft: theme.spacing(25),
    "@media (max-width: 768px)": {
        marginLeft: theme.spacing(10),
    },
    marginTop: '3em'
  },
  keyLearnings: {
    marginLeft: '2em',
    marginRight: '3em',
  }
}));

export const Part3 = () => {
  const classes = useStyles();
  const [learnings, setLearnings] = useState([
    { 
      id: 1,
      name:"Having achievable goals can greatly affect my motivation levels to accomplish something.",
    },
    { 
      id: 2,
      name:"There's alot of work I need to do to plan and implement the goals I want to reach in life. ",
    },
    { 
      id: 3,
      name:"I am currently studying in the right field, but teachers often make it hard to like the course.",
    },
    { 
      id: 4,
      name:"Helping others is a huge part of myself. I want to be able to accomplish with my work in a near future.",
    },
  ]);

  return (
    <section id="part3">
        <Container component="main" className={classes.main} maxWidth="md">

            <div className={classes.heading}>
              <Typography variant="h3" component="h3" className={classes.jobs}>
                  <span>Learnings</span>
              </Typography>
            </div>

            <div className={classes.body}>
              <Typography variant="h6" component="h2">
                  <p>Based from the course's values/personality/strenghts/career goals materials...</p>
              </Typography>
              <br/>
              <Grid container spacing={2}>
                <Grid item>
                  <div>
                    <Typography variant="h5" component="h2">
                      <span>My Key Learnings:</span>
                    </Typography>
                    <Divider />
                    <br/>
                    {
                        learnings.map((fact)=>{
                          return ( 
                          <div key={fact.id}>
                            <Grid container spacing={2} alignItems="center" justifyContent="flex-">
                              <Grid item>
                                +
                              </Grid>
                              <Grid item >
                                <Typography component='span' className={classes.keyLearnings}>{fact.name}</Typography><br/>
                              </Grid>
                            </Grid>
                          </div>)
                        })
                      }
                  </div>
                </Grid>
              </Grid>
            </div>
        </Container>
    </section>
  );
};