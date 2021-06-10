import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card'
import {client} from '../../Connection'
import { API } from "aws-amplify";
import { useParams } from "react-router-dom";
//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//       minWidth: 500,
//       minHeight:250,
//     },
//   });
  
const StatusRe = () => {

    //const classes = useStyles();

        const [overrideStat, setOverrideStat] = useState('false');
        const [prgEnable, setPrgEnable] = useState('false');
        const [prgNextTime, setPrgNextTime] = useState('...');
        const [prgNextSp, setPrgNextSp] = useState('...');
        const { id } = useParams();
        const [content, setContent] = useState("");
        
        useEffect(() => {
          function loadNote() {
            return API.get("notes", `/notes/${id}`);
          }
      
          async function onLoad() {
            try {
              const note = await loadNote();
              const { content } = note;
              setContent(content);
            } catch (e) {
              //onError(e);
            }
          }
          onLoad();
        }, [id]);
    useEffect(() => {
      client.subscribe(content+'/v1/devices/me/attributes');
        client.on('message', (topic, message) => {
          //const payload = { topic, message: message.toString() };
          const payload1 = JSON.parse(message.toString());
          if(topic ===content+'/v1/devices/me/attributes'){
            if(payload1.overrideStatus){setOverrideStat(payload1.overrideStatus);}
            if(payload1.prgNextEnable){setPrgEnable(payload1.prgNextEnable);}
            if(payload1.prgNextDaysTime){setPrgNextTime(payload1.prgNextDaysTime);}
            if(payload1.prgNextSetpoint){setPrgNextSp(payload1.prgNextSetpoint);}
          }
        });
    },[content]);
 
  
    return (
      <Card >
       <p value={overrideStat}>  overrideStatus: {overrideStat} </p>
       <p>  prgNextEnable: {prgEnable} </p>
       <p>  prgNextDayTime: {prgNextTime} </p>
       <p>  prgNextSetpoint: {prgNextSp} </p>
      </Card>
    );
  }
  
  export default StatusRe;
  