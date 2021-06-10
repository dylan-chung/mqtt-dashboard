import React, { useState, useEffect} from 'react'
import {client} from '../../Connection'
import { API } from "aws-amplify";
import { useParams } from "react-router-dom";

const cloudHost='54.183.147.154';
const uploadFreq=120;
const syncTimeFreq=1800;
const timeNTPServer='pool.ntp.org';
const timezone=480;

const DeviceConnection =() => {

    const [connectStatus, setConnectStatus] = useState('Disconnect');
    const [counter, setCounter] = useState(130);
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
    client.subscribe(content+'/v1/devices/me/telemetry');
    client.subscribe(content+'/v1/devices/me/attributes');
    client.subscribe(content+'/v1/devices/me/rpc/request/#');
    client.subscribe(content+'/v1/devices/me/attributes/request/#');
    useEffect(() => {
      const timer= counter>0&&setInterval(()=>setCounter(counter-1),1000);
      if(counter===0){
        setConnectStatus('Disconnect');
      }
      return ()=> {clearInterval(timer);
        }
      //console.log(counter);
    },[counter]);

    useEffect(() => {
          //----------------------------------when device connected ,give response
          client.on('message', (topic, message) => {
                //const payload = { topic, message: message.toString() };
            const {qos}=1;
            const rePayload = JSON.parse(message.toString());
            const test={'shared':{'cloudHost':cloudHost,'uploadFreq':uploadFreq,'syncTimeFreq':syncTimeFreq,'timeNTPServer':timeNTPServer,'timezone':timezone}};
            if(topic === content+'/v1/devices/me/attributes/request/1'){
              if(rePayload.sharedKeys){
                const payload = JSON.stringify(test);
                const topic=content+'/v1/devices/me/attributes/response/1'
                client.publish(topic, payload, { qos }, error => {
                  console.log(content+':'+payload);
                  if (error) {
                    console.log('Publish error: ', error);
                  }
                });}
            }
            // if(topic === content+'/v1/devices/me/attributes/request/1'){
            //   if(rePayload.sharedKeys){
            //     const payload = JSON.stringify(test);
            //     const topic=content+'/v1/devices/me/attributes/response/1'
            //     client.publish(topic, payload, { qos }, error => {
            //       console.log(content+':'+payload);
            //       if (error) {
            //         console.log('Publish error: ', error);
            //       }
            //       //setConnectStatus('Connected');
            //     });}
            // }
            if(topic === content+'/v1/devices/me/attributes'||'/v1/devices/me/telemetry'){
                //console.log('hi');
                if(!rePayload.method){
                  setConnectStatus('Connected');
                  setCounter(uploadFreq+10);
                }
            }
          });
      },[content]);
    
      return (
        <div >
            <p>Device connect?: {connectStatus}{counter}</p>
        </div>
      );
    }
    
    export default DeviceConnection;