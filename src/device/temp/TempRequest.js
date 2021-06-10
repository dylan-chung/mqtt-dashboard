import React, {useEffect } from 'react';
import {client} from '../../Connection'
import { API } from "aws-amplify";
import { useParams } from "react-router-dom";

const TempRequest=()=>{

        const { id } = useParams();
        //const [content, setContent] = useState("");
        
        useEffect(() => {
          function loadNote() {
            return API.get("notes", `/notes/${id}`);
          }
      
          async function onLoad() {
            try {
              const note = await loadNote();
              const { content } = note;
              //setContent(content);
              //console.log(content)
              const topic=content+'/v1/devices/me/rpc/request/'
              const {qos}=1;
              const test= {method: 'remoteGetTelemetry',params:{}};
              const payload = JSON.stringify(test);
              client.publish(topic, payload, { qos }, error => {
              //console.log(topic);
              if (error) {
              console.log('Publish error: ', error);
              }
              })
            } catch (e) {
              //onError(e);
            }
          }
          
          onLoad();
          //pp();
        }, [id]);

    return(
    <div></div>
    )
  }
  export default TempRequest;

  