
import './App.css';

function App2() {
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App2;
import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import {makeStyles,
  CssBaseline,
  Drawer,Box,List,Typography,Divider,IconButton,Container,Icon,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
//import { mainListItems, secondaryListItems } from './listItems';
import { Auth } from "aws-amplify";
import Connection from "./Connection";
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";
import Routes from "./Routes";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://material-ui.com/">
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function App2() {
    const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  var storage=window.localStorage;
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
    storage.clear();
    history.push("/");
  }

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    !isAuthenticating && (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <Icon>chevron_left</Icon> : <Icon>chevron_right</Icon>}
          </IconButton>
        </div>
        <Divider />
        <List><Link  to="/">
    <ListItem button>
      <ListItemIcon>
        <Icon>dashboard</Icon>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link  to="/User">
    <ListItem button>
      <ListItemIcon>
        <Icon>account_circle</Icon>
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
    </Link></List>
        <Divider />
        <List>{isAuthenticated ? (
                <>
                  <Connection />
                  <ListItem button onClick={handleLogout}>
      <ListItemIcon>
        <Icon>logout</Icon>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
                </>
              ) : (
                <>
                </>
              )}</List>
      </Drawer>
      <main className={classes.content}>
        
        <Container maxWidth="lg" className={classes.container}>
         
             
          <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
  
         
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
        
      </main>
      
    </div>
    )
    
  );
}
