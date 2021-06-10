import React, {useEffect } from 'react';
import {client} from '../Connection'
//import { API } from "aws-amplify";
//import { useParams } from "react-router-dom";

const TempRequestMenu=({content})=>{

    
        //const [content, setContent] = useState("");
        
        useEffect(() => {
    
      
          async function onLoad() {
            try {
              
              //setContent(content);
              //console.log(content)
              const topic=content+'/v1/devices/me/rpc/request/'
              const {qos}=1;
              const test= {method: 'remoteGetTemp',params:{}};
              const payload = JSON.stringify(test);
              client.publish(topic, payload, { qos }, error => {
              //console.log('asking');
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
        }, [content]);

    return(
    <div></div>
    )
  }
  export default TempRequestMenu;

  