import React, { useState, useEffect } from 'react';
//import Card from '@material-ui/core/Card'
import {client} from '../Connection'
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//       minWidth: 500,
//       minHeight:250,
//     },
//   });
const TempReOut = ({content}) => {
    client.subscribe(content+'/v1/devices/me/telemetry');
    client.subscribe(content+'/v1/devices/me/rpc/response/+');
   // const classes = useStyles();
        const [Temp, setTemp] = useState('...');
        // const [ChangeoverTemp, setChangeoverTemp] = useState('...');
        // const [floorTemp, setFloorTemp] = useState('...');
        // const [wifirssi, setWifirssi] = useState('...');
        // const [iram, setIram] = useState('...');
        // const [spiram, setSpiram] = useState('...');

    useEffect(() => {
      
        client.on('message', (topic, message) => {
            
          //const payload = { topic, message: message.toString() };
          const payload1 = JSON.parse(message.toString());
          if(topic ===content+'/v1/devices/me/telemetry'||'/v1/devices/me/rpc/response/+'){
            if(payload1.deviceId===content){
              
            //  console.log('recv'+payload1.roomTemp)
          setTemp(payload1.roomTemp);
        //   setChangeoverTemp(payload1.changeOverTemp);
        //   setFloorTemp(payload1.floorTemp);
        //   setWifirssi(payload1.wifiRssi);
        //   setIram(payload1.iram);
        //   setSpiram(payload1.spiram);
          }
        }
          //<text1.Provider value={payload.spValue}></text1.Provider>
        });
    },[content]);
 
  
    return (
      //<Card className={classes.root}>
      //<Card>
      <div><Typography variant="body2" display="block" gutterBottom>
      RoomTemp : {Temp} </Typography></div> 
       /* <p>  ChangeoverTemp: {ChangeoverTemp} °C</p>
       <p>  floorTemp: {floorTemp} °C</p>
       <p>  wifirssi: {wifirssi} </p>
       <p>  iram: {iram} </p>
       <p>  spiram: {spiram} </p>
      </Card> */
    )
  }
  
  export default TempReOut;
  