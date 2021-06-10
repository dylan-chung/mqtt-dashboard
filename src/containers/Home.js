import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import ListGroup from "react-bootstrap/ListGroup";
import {Link } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import AutoRequest from "../device/AutoRequest"
import "./Home.css";
//import DeviceConnection from "../device/temp/DeviceConnect";
import TempReOut from "../device/TempCardOut";
import {Button,Modal,Backdrop,Fade,Icon,IconButton, Grid,makeStyles} from '@material-ui/core'
import TempRequestMenu from "../device/TempRequestMenu";
import Login from "./Login";
import NewNote from "./NewNote";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 6, 5),
  },
}));

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
        //console.log(notes.length)
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/notes");
  }
  
 
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  //const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function renderNotesList(notes) {
    
    return (
      <>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            <Icon sixe={17}>add</Icon>
            <span className="ml-2 font-weight-bold">Add Device</span>
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500,}}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <NewNote/>
              </div>
            </Fade>
          </Modal>
        </Grid>
        <span>{notes.length} Device</span>
        <br />
        {notes.map(({ noteId, content, createdAt }) => (
            <ListGroup.Item>
              <span className="font-weight-bold">
                <Grid  container direction="row" justify="space-between" alignItems="flex-start">
                  <Grid>{content.trim().split("\n")[0]}</Grid>
                  <Grid>
                    <Link  to={`/devices/${noteId}/Temp`}>
                      <IconButton size="small"><Icon>thermostat</Icon></IconButton>
                    </Link>
                    <Link  to={`/devices/${noteId}/Prg`}>
                      <IconButton size="small"><Icon>date_range</Icon></IconButton>
                    </Link>
                    <Link  to={`/devices/${noteId}/Settings`}>
                      <IconButton size="small"><Icon>settings</Icon></IconButton>
                    </Link>
                    <Link key={noteId} to={`/devices/${noteId}/Admin`}>
                      <IconButton size="small"><Icon>construction</Icon></IconButton>
                    </Link>
                  </Grid>
                </Grid>
                <AutoRequest content={content}/>        {/*Connection request and send */}
                <TempRequestMenu content={content}/>    {/*Temp Asking */}
                <TempReOut content={content}/>          {/*Temp Show */}
              </span>
              <br />
              <span className="text-muted">
                Created: {new Date(createdAt).toLocaleString()}
              </span>
            </ListGroup.Item>
        ))}
      </>
    );
  }

  function renderLander() {
    //client.end();
    return (
      <div>
        <Login/>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <h3 className="pb-3 mt-4 mb-3 border-bottom">My Device</h3>
        <ListGroup>{!isLoading && renderNotesList(notes)}</ListGroup>
        
      </div>
    );
  }
  
  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
