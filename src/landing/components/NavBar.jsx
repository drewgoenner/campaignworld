import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase } from '@material-ui/core';


export default function Nav() {
    const classes = useStyles();

    return (
        <Typography className = {classes.wrapper}>
            <div className = {classes.left}>
                <h2>CWC</h2>
            </div>
            <div className = {classes.middle}>
                <h1>Campaign World Creator</h1>
                
            </div>
            <div className = {classes.right}>
                <a href = '#' className = {classes.tabs} >Home</a>
                <a href = '#register' className = {classes.tabs} >Register</a>
                <a href = '#login' className = {classes.tabs}>Login</a>
            </div>
        </Typography>
    )

    
}


//below here all material-ui styling for the page
const useStyles = makeStyles(theme => ({
   
    wrapper: {

        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        justifyContent: 'space-between',
        width: '99%',
        margin: '10px',
        borderBottom: '2px solid green'
    },

    link: {
        fontSize: '16px',
        padding: '10px'
    },

    image: {
        width: '100px'
    },

    img: {
        display: 'flex',
        margin: '0',
        width: '70%',
    },

    left: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },

    right: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    middle: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        alignItems: 'flex-end'
    },

    tabs: {
        margin: '0 10px',
        textDecoration: 'none',
        color: 'white',
       
        
    }

}));