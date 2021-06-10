import React, { useEffect } from "react";
import {client} from "../Connection";

const cloudHost='54.183.147.154';
const uploadFreq=120;
const syncTimeFreq=1800;
const timeNTPServer='pool.ntp.org';
const timezone=480;

const AutoRequest=({content})=>{
    client.subscribe(content+'/v1/devices/me/attributes/request/#');
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
                            if (error) {console.log('Publish error: ', error);}
                        });
                    }
                }   
            });
      },[content]);
    
      return (
        <div >
        </div>
      );
}


export default AutoRequest;