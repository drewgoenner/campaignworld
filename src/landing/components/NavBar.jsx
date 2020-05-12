import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
   

}));

export default function Nav() {
    const classes = useStyles();

    return (
        <Typography >
            <div>
                
                Andrew Goenner
            </div>
            <div >
                <a href = '#' >Home</a>
                <a href = '#register' >Register</a>
                <a href = '#login'>Login</a>
            </div>
            <div>
                
                <h2>Computers & Coders</h2>
            </div>
        </Typography>
    )

    
}