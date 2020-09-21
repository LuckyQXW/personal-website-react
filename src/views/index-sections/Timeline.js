import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacRoundedIcon from '@material-ui/icons/LaptopMacRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px'    
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    timeTitle: {
        marginTop: '8px'
    },
    experienceTitle: {
        fontSize: '16px'
    }
}));

const content = [
    {
        time: "Summer 2020",
        color: "secondary",
        items: [
            {
                title: "Software Engineering Intern @ Cloudflare"
            },
            {
                title: "STEM League Developer Program Mentor"
            },
            {
                title: "CSE 163 Head Teaching Assistant"
            },
            {
                title: "Facebook ABCS Program Participant"
            }
        ]
    },
    {
        time: "Spring 2020",
        color: "primary",
        items: [
            {
                title: "CSE 163 Head Teaching Assistant"
            }
        ]
    },
    {
        time: "Winter 2020",
        color: "primary",
        items: [
            {
                title: "CSE 163 Teaching Assistant"
            }
        ]
    },
    {
        time: "Fall 2019",
        color: "primary",
        items: [
            {
                title: "CSE 143 Teaching Assistant"
            }
        ]
    },
    {
        time: "Summer 2019",
        color: "secondary",
        items: [
            {
                title: "UX Engineering Intern @ Microsoft"
            }
        ]
    },
    {
        time:  "Spring 2019",
        color: "primary",
        items: [
            {
                title: "CSE 190Z Teaching Assistant"
            }
        ]
    },
    {
        time:  "Fall 2018",
        color: "primary",
        items: [
            {
                title: "STARS Math Mentor"
            }
        ]
    },
    {
        time:  "Summer 2018",
        color: "secondary",
        items: [
            {
                title: "New Technologist @ Microsoft"
            }
        ]
    },
    {
        time:  "Summer 2017",
        color: "secondary",
        items: [
            {
                title: "High School Software Engineering Intern @ Autodesk"
            }
        ]
    },
]
export default function CustomizedTimeline() {
    const classes = useStyles();
    const numItems = content.length;
    const items = content.map((item, i) => {
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    <h5 className={classes.timeTitle}>{item.time}</h5>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color={item.color}>
                        {item.color === "secondary" ? <LaptopMacRoundedIcon /> : <SchoolRoundedIcon />}
                    </TimelineDot>
                    {i !== numItems - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        {item.items.map((exp) => {
                            return (
                                <div className={classes.experienceTitle}>{exp.title}</div>
                            );
                        })}
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        );
    })

    return (
        <Timeline align="left">
            {items}
        </Timeline>
    );
}