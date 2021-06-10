import React, {useEffect } from 'react';
import {client} from '../../Connection'
import { API } from "aws-amplify";
import { useParams } from "react-router-dom";

const PrgRequest=()=>{

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
              console.log(content)
              const topic=content+'/v1/devices/me/rpc/request/'
              const {qos}=1;
              const test= {method: 'remoteGetPrg00',params:{}};
              const test1= {method: 'remoteGetPrg01',params:{}};
              const test2= {method: 'remoteGetPrg02',params:{}};
              const test3= {method: 'remoteGetPrg03',params:{}};
              const test4= {method: 'remoteGetPrg04',params:{}};
              const test5= {method: 'remoteGetPrg05',params:{}};
              const test6= {method: 'remoteGetPrg06',params:{}};
              const payload = JSON.stringify(test);
              const payload1 = JSON.stringify(test1);
              const payload2= JSON.stringify(test2);
              const payload3 = JSON.stringify(test3);
              const payload4 = JSON.stringify(test4);
              const payload5 = JSON.stringify(test5);
              const payload6= JSON.stringify(test6);     
              client.publish(topic, payload, { qos }, error => {
              console.log(topic);
              if (error) {
              console.log('Publish error: ', error);
              }
              })
              client.publish(topic, payload1, { qos })
              client.publish(topic, payload2, { qos })
              client.publish(topic, payload3, { qos })
              client.publish(topic, payload4, { qos })
              client.publish(topic, payload5, { qos })
              client.publish(topic, payload6, { qos })
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
  export default PrgRequest;

  