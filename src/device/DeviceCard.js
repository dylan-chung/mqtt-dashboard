import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card'
import {client} from '../Connection'

const DeviceRe = () => {
        const [model, setModel] = useState('...');
        const [mac, setMac] = useState('...');
        const [wifiFWVersion, setWifiFWVersion] = useState('...');
        const [wifiRSSIMin, setWifiRSSIMin] = useState('...');
        const [wifiRssiMax, setWifiRssiMax] = useState('...');
        const [wifiRssiStep, setWifiRssiStep] = useState('...');
        // const [uploadFreqMin, setUploadFreqMin] = useState('...');
        // const [uploadFreqMax, setUploadFreqMax] = useState('...');
        // const [uploadFreqStep, setUploadFreqStep] = useState('...');
        // const [syncTimeFreqMin, setSyncTimeFreqMin] = useState('...');
        // const [syncTimeFreqMax, setSyncTimeFreqMax] = useState('...');
        // const [syncTimeFreqStep, setSyncTimeFreqStep] = useState('...');
  
    useEffect(() => {
        
        client.on('message', (topic, message) => {
          //const payload = { topic, message: message.toString() };
          const payload1 = JSON.parse(message.toString());
          if(payload1.model){
            setModel(payload1.model);
            setMac(payload1.mac);
            setWifiFWVersion(payload1.wifiFWVersion);
            setWifiRSSIMin(payload1.wifiRSSIMin);
            setWifiRssiMax(payload1.wifiRssiMax);
            setWifiRssiStep(payload1.wifiRssiStep);
            // setUploadFreqMin(payload1.uploadFreqMin);
            // setUploadFreqMax(payload1.uploadFreqMax);
            // setUploadFreqStep(payload1.uploadFreqStep);
            // setSyncTimeFreqMin(payload1.syncTimeFreqMin);
            // setSyncTimeFreqMax(payload1.syncTimeFreqMax);
            // setSyncTimeFreqStep(payload1.syncTimeFreqStep);
          }
          //<text1.Provider value={payload.spValue}></text1.Provider>
        });
    },[]);
 
  
    return (
      <Card>
       <p>  model: {model} </p>
       <p>  mac: {mac} </p>
       <p>  wifiFWVersion: {wifiFWVersion} </p>
       <p>  wifiRSSIMin: {wifiRSSIMin} </p>
       <p>  wifiRssiMax: {wifiRssiMax} </p>
       <p>  wifiRssiStep: {wifiRssiStep} </p>
      </Card>
    );
  }
  
  export default DeviceRe;
  