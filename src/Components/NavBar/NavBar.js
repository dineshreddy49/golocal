import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
    marginLeft: theme.spacing(2),
      flexGrow: 1,
      textAlign:'start'
    },
  }));
function NavBar() {
      const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static">
      <Typography variant="h4" className={classes.title} noWrap>
            GoLocal
          </Typography></AppBar>
            
        </div>
    )
}

export default NavBar
