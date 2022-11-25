/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Typography, Link, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { ResumeIcon } from '../content/ResumeButton';

import PDF1 from './../../assets/part1/1.pdf';
import PDF2 from './../../assets/part1/2.pdf';
import PDF3 from './../../assets/part1/3.pdf';
import PDF4 from './../../assets/part1/4.pdf';
import PDF5 from './../../assets/part1/5.pdf';
import PDF6 from './../../assets/part1/6.pdf';
import PDF7 from './../../assets/part1/7.pdf';
import PDF8 from './../../assets/part1/8.pdf';
import PDF9 from './../../assets/part1/9.pdf';
import PDF10 from './../../assets/part1/10.pdf';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(20),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(),
    },
  },
  body: {
    marginLeft: theme.spacing(25),
    "@media (max-width: 768px)": {
        marginLeft: theme.spacing(),
    },
    marginTop: '3em'
  },
  footerText: {
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export const Part1 = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([
    { 
        id: 1,
        title: 'Study Skills Assessment Summary', 
        description: `test`,
        alter: 'Study Skills Assessment Summary',
        file: PDF1,
    },
    { 
        id: 2,
        title: 'Finding-Time-To Study Grid', 
        description: `sdfsdfdsfsdf`,
        alter: 'Finding-Time-To Study Grid',
        file: PDF2,
    },
    { 
        id: 3,
        title: 'Stress Management Worksheet', 
        description: `sdfsfsdfsd`,
        alter: 'Stress Management Worksheet',
        file: PDF3,
    },
    { 
        id: 4,
        title: 'Attended Workshop Feedback', 
        description: ``,
        alter: 'Attended Workshop Feedback',
        file: PDF4,
    },
    { 
        id: 5,
        title: 'Mid Semester Check-in', 
        description: `sdfdsfs`,
        alter: 'Mid Semester Check-in',
        file: PDF5,
    },
    { 
        id: 6,
        title: 'Hope-Based Competencies Assessment', 
        description: `sdfsdf`,
        alter: 'Hope-Based Competencies Assessment',
        file: PDF6,
    },
    { 
        id: 7,
        title: 'Values Grid Worksheet', 
        description: `sdfsdf`,
        alter: 'Values Grid Worksheet',
        file: PDF7,
    },
    { 
        id: 8,
        title: 'Core Values Mindmap', 
        description: ``,
        alter: 'Core Values Mindmap',
        file: PDF8,
    },
    { 
        id: 9,
        title: 'Personality Preferences Worksheet', 
        description: ``,
        alter: 'Personality Preferences Worksheet',
        file: PDF9,
    },
    { 
        id: 10,
        title: 'Goal Development Project Presentation', 
        description: ``,
        alter: 'Goal Development Project Presentation',
        file: PDF10,
    }
  ]);
  
  return (
    <section id="part1">
        <Container component="main" className={classes.main} maxWidth="md">
            <div className={classes.heading}>
                <Typography variant="h3" component="h3" className={classes.jobs}>
                    <span>Tools and Ressources Completed This Semester</span>
                </Typography>
            </div>
            <div className={classes.body}>
            {files.map((file) => (

                <div className="file" key={ file.id }>
                    <div >
                        <Link
                            color='inherit'
                            underline='none'
                            href= {file.file}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={classes.footerText}>
                           
                        <Grid container spacing={2} alignItems="center">
                            <Grid item >
                                <ResumeIcon />
                            </Grid>
                            <Grid item >
                                <Typography component='span' className="footerText">
                                    <TextDecrypt text={file.title} />
                                </Typography>
                            </Grid>
                        </Grid>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </Container>
    </section>
  );
};


