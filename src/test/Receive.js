import React, { useState, useEffect } from 'react';
import Receiver from './ReciverCard';
import {client} from '../Connection'

const Receive =() => {

    const [payload, setPayload] = useState({});

    useEffect(() => {
        
        client.on('message', (topic, message) => {
          //const payload = { topic, message: message.toString() };
          const payload = JSON.parse(message.toString());
          setPayload(payload.spValue);
          console.log(payload.spValue);
          //<text1.Provider value={payload.spValue}></text1.Provider>
        });
    },[]);
    return (
      <div >
      <Receiver payload={payload}/>
    </div>
    );
  }

  export default Receive;