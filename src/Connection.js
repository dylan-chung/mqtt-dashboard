import React, { useState, useEffect} from 'react'
import mqtt from 'mqtt'
//import {List} from '@material-ui/core'
//import Card from '@material-ui/core/Card'
//import Receiver from './Reciver';

const host= '54.183.147.154';
const port= 8083;
const url = `ws://${host}:${port}/mqtt`;
const options = {
  keepalive: 30,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  // will: {
  //   topic: 'WillMsg',
  //   payload: 'Connection Closed abnormally..!',
  //   qos: 0,
  //   retain: false
  // },
  rejectUnauthorized: false
};
export const client  = mqtt.connect(url, options);
//export const device = 'CED80';
//export const device1 = 'CEDC4';
//const topictest ='test';
//export const text1 = createContext();
// preciouschicken.com is the MQTT topic
// client.subscribe(device+topictest);
// client.subscribe(device+'/v1/devices/me/telemetry');
// client.subscribe(device1+'/v1/devices/me/telemetry');
// client.subscribe(device+'/v1/devices/me/attributes');
// client.subscribe(device1+'/v1/devices/me/attributes');
// client.subscribe(device+'/v1/devices/me/rpc/request/#');
// client.subscribe(device1+'/v1/devices/me/rpc/request/#');
// client.subscribe(device+'/v1/devices/me/attributes/request/#');
// client.subscribe(device1+'/v1/devices/me/attributes/request/#');
// client.subscribe('test/#');
const Connection =() => {
  const [connectStatus, setConnectStatus] = useState('Disconnect');
  //const [payload, setPayload] = useState({});

  useEffect(() => {
    if (client) {
      client.on('connect', () => {
        setConnectStatus('Connected');
      });
      client.on('error', (err) => {
        console.error('Connection error: ', err);
        client.end();
      });
      client.on('reconnect', () => {
       setConnectStatus('Reconnecting');
      });
      //----------------------------------when device connected ,give response
      // client.on('message', (topic, message) => {
      //   //const payload = { topic, message: message.toString() };
      //   const {qos}=1;
      //   const rePayload = JSON.parse(message.toString());
      //   const test={'shared':{'cloudHost':'54.183.147.154','uploadFreq':120,'syncTimeFreq':1800,'timeNTPServer':'pool.ntp.org','timezone':480}};
      //   if(topic === device+'/v1/devices/me/attributes/request/1'){
      //     if(rePayload.sharedKeys){
      //       const payload = JSON.stringify(test);
      //       const topic=device+'/v1/devices/me/attributes/response/1'
      //       client.publish(topic, payload, { qos }, error => {
      //         console.log(device+':'+payload);
      //         if (error) {
      //           console.log('Publish error: ', error);
      //         }
      //       });}
      //   }
      //   if(topic === device1+'/v1/devices/me/attributes/request/1'){
      //     if(rePayload.sharedKeys){
      //       const payload = JSON.stringify(test);
      //       const topic=device1+'/v1/devices/me/attributes/response/1'
      //       client.publish(topic, payload, { qos }, error => {
      //         console.log(device1+':'+payload);
      //         if (error) {
      //           console.log('Publish error: ', error);
      //         }
      //       });}
      //   }
      // });
      //-----------------------------------
    }
  },[]);

  // Sets default React state 
  //const [mesg, setMesg] = useState('');

  return (
    <div >
    <p>Broker connect?: {connectStatus}</p>
		</div>
  );
}

export default Connection;
