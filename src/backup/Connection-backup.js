import React, { useState, useEffect} from 'react'
import mqtt from 'mqtt'
//import {List} from '@material-ui/core'
//import Card from '@material-ui/core/Card'
import Receiver from './Reciver';
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
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
  rejectUnauthorized: false
};
//const client  = mqtt.connect(url, options);

// preciouschicken.com is the MQTT topic
//client.subscribe('test');

const Connection = () => {
  //client.subscribe('test');
  const client  = mqtt.connect(url, options);
  const [connectStatus, setConnectStatus] = useState('Disconnect');
  const [payload, setPayload] = useState({});
  client.subscribe('test');
  
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
      client.on('message', (topic, message) => {
        const payload = { topic, message: message.toString() };
        setPayload(payload);
      });
    }
  }, [client]);

  // Sets default React state 
  //const [mesg, setMesg] = useState('');

  return (
    <div >
    <Receiver payload={payload}/>
    <p>connect?:{connectStatus}</p>
		</div>
  );
}

export default Connection;
