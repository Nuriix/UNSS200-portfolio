/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Typography, Grid, Divider} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ResumeIcon, HeartIcon } from '../content/ResumeButton';
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
  tipDescription: {
    marginLeft: '2em',
    marginRight: '5em',
  }
}));

export const Part2 = () => {
  const classes = useStyles();
  const [tips, setTips] = useState([
    { 
      id: 1,
      name:"Setting timers",
      description: "I've started timing my study sessions to help me limit the amount of distraction around me. For example, I try to determine how long I can stay focused when studying or working on a certain assignment for a certain course. Afterwards, I analyze how I can efficiently use my time for best performance and adjust my timers according to my motivation level at the time.",
    },
    { 
      id: 2,
      name:"Breaking down tasks into smaller tasks.",
      description: "Often, I find myself in situation for which I look at the assignment instruction and freeze. Breaking down a big assignment in smaller chunks has helped me with my anxiety and motivation level. It makes the tasks that I have to do less intimidating and not so overwhelming. ",
    },
    { 
      id: 3,
      name:"Implementing better reading/note taking strategies",
      description: "After receiving some advices and tips on how to get more out of our readings, it made it easier for me to gather what are the important points that I need to focus my attention on.",
    },
    { 
      id: 4,
      name:"Starting my assignments earlier",
      description: "As soon as a new assignment is made available, I check out the instructions right away to get an idea of the difficulty of it. From that instant, I try to break down my tasks for it and I work on it little by little. This has helped so much with my stress and anxiety since I made sure that I had enough time to work on it.",
    },
    { 
      id: 5,
      name:"Writing down all my deadlines",
      description: "Writing down all of my important school deadlines by using the semester plan grid that we had to fill up in class has helped me better visualize the workload that I will need to face in the near future. It has also help me have a better sense of time.",
    },
    { 
      id: 6,
      name:"Making friends with my classmates",
      description: "Getting to know my fellow classmates has helped me keep up with my classes when I am getting behind of the material. Having a peer support has helped with my well being in general.",
    },
    { 
      id: 7,
      name:"Mindfulness/Meditation",
      description: "I often disassociate at times and by practicing mindfulness it has helped me ground myself back to the present moment. If I don't ground myself in one way or another, I am stuck in a universe that has no meaning at all.",
    },
  ]);

  return (
    <section id="part2">
        <Container component="main" className={classes.main} maxWidth="md">

            <div className={classes.heading}>
              <Typography variant="h3" component="h3" className={classes.jobs}>
                  <span>Study Tips and Strategies</span>
              </Typography>
            </div>

            <div className={classes.body}>
              <Typography variant="h6" component="h2">
                  <p>Here are some strategies and tips that has helped me this semester...</p>
              </Typography>
              <br/>

              <Grid container spacing={2}>
                <Grid item>
                  <div className={classes.tipsSection}>
                    <Typography variant="h5" component="h2">
                      <span>The Strategies/Tips:</span>
                    </Typography>
                    <Divider />
                    <br/>
                    {
                        tips.map((tip)=>{
                          return ( 
                          <div key={tip.id}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item>
                                <HeartIcon/>
                              </Grid>
                              <Grid item>
                                <Typography component='span'>{tip.name}</Typography><br/>
                              </Grid>
                              <Grid item className={classes.tipDescription}>
                                <p>{tip.description}</p>
                              </Grid>
                            </Grid>
                          </div>)
                        })
                      }
                  </div>
                </Grid>
                {/* <Grid item xs='4'>
                  <Grid container>
                    <Grid item>
                      <div>
                        <Typography variant="h5" component="h2">
                          <span>Useful Documents</span>
                        </Typography>
                        <Divider/>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item >
                                  <ResumeIcon />
                              </Grid>
                              <Grid item >
                                  <Typography component='span' className="footerText">
                                      <TextDecrypt text={' hey'} />
                                  </Typography>
                              </Grid>
                          </Grid>
                      </div>
                    </Grid>
                  </Grid>
                 <div>
                  <Typography variant="h5" component="h2">
                      <span>Useful Links</span>
                    </Typography>
                    <Divider />
                    <Grid container spacing={2} alignItems="center">
                      <Grid item >
                              <ResumeIcon />
                          </Grid>
                          <Grid item >
                              <Typography component='span' className="footerText">
                                  <TextDecrypt text={' hey'} />
                              </Typography>
                          </Grid>
                      </Grid>
                  </div>
                </Grid> */}
              </Grid>
            </div>
        </Container>
    </section>
  );
};