import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card'
import {client} from '../../Connection'
import { API } from "aws-amplify";
import { useParams } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//       minWidth: 500,
//       minHeight:250,
//     },
//   });
const TempRe = () => {
  //const classes = useStyles();
        const [Temp, setTemp] = useState('...');
        const [ChangeoverTemp, setChangeoverTemp] = useState('...');
        const [floorTemp, setFloorTemp] = useState('...');
        // const [wifirssi, setWifirssi] = useState('...');
        // const [iram, setIram] = useState('...');
        // const [spiram, setSpiram] = useState('...');
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
      client.subscribe(content+'/v1/devices/me/telemetry');
      client.subscribe(content+'/v1/devices/me/rpc/response/+');
        client.on('message', (topic, message) => {
          //const payload = { topic, message: message.toString() };
          const payload1 = JSON.parse(message.toString());
          if(topic ===content+'/v1/devices/me/telemetry'||'/v1/devices/me/rpc/response/+'){
          if(payload1.deviceId===content){
          setTemp(payload1.roomTemp);
          setChangeoverTemp(payload1.changeOverTemp);
          setFloorTemp(payload1.floorTemp);
          // setWifirssi(payload1.wifiRssi);
          // setIram(payload1.iram);
          // setSpiram(payload1.spiram);
          }
        }
          //<text1.Provider value={payload.spValue}></text1.Provider>
        });
    },[content]);
 
  
    return (
      
      <Card >
       <p>  roomTemp: {Temp} °C</p>
       <p>  ChangeoverTemp: {ChangeoverTemp} °C</p>
       <p>  floorTemp: {floorTemp} °C</p>
       {/* <p>  wifirssi: {wifirssi} </p>
       <p>  iram: {iram} </p>
       <p>  spiram: {spiram} </p> */}
      </Card>
    );
  }
  
  export default TempRe;
  