import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { API } from "aws-amplify";
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'
import {client} from '../../Connection'
import { useParams } from "react-router-dom";
//import { Fragment } from 'react';
import Card from '@material-ui/core/Card'
//import  IconButton  from '@material-ui/core/IconButton';
//import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
//import { TurnedIn } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
      minWidth: 500,
      minHeight:470,
    },
  });

const { qos } = 1;

const ProgramPublish = ({ publish }) => {
    const classes = useStyles();
    const { id } = useParams();
const [content, setContent] = useState("");
const topic = content+'/v1/devices/me/rpc/request/';
client.subscribe(content+'/v1/devices/me/rpc/response/+');
client.subscribe(content+'/v1/devices/me/attributes');
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
        
  useEffect(() => {
      
    client.on('message', (topic, message) => {
      const rePayload = JSON.parse(message.toString());
      if(topic ===content+'/v1/devices/me/attributes'||'/v1/devices/me/rpc/response/+'){
        if(rePayload.prgMode){
          setValue(rePayload.prgMode);}
        if(rePayload.prgSpValue00){
            setPrgSpValue00Payload(rePayload.prgSpValue00);}
        if(rePayload.prgSpTime00){
            setPrgSpTime00Payload(rePayload.prgSpTime00);}
        if(rePayload.prgSpValue01){
            setPrgSpValue01Payload(rePayload.prgSpValue01);}
        if(rePayload.prgSpTime01){
            setPrgSpTime01Payload(rePayload.prgSpTime01);}
        if(rePayload.prgSpValue02){
            setPrgSpValue02Payload(rePayload.prgSpValue02);}
        if(rePayload.prgSpTime02){
            setPrgSpTime02Payload(rePayload.prgSpTime02);}
         if(rePayload.prgSpValue03){
            setPrgSpValue03Payload(rePayload.prgSpValue03);}
        if(rePayload.prgSpTime03){
            setPrgSpTime03Payload(rePayload.prgSpTime03);}
        if(rePayload.prgSpValue04){
            setPrgSpValue04Payload(rePayload.prgSpValue04);}
        if(rePayload.prgSpTime04){
            setPrgSpTime04Payload(rePayload.prgSpTime04);}
        if(rePayload.prgSpValue05){
            setPrgSpValue05Payload(rePayload.prgSpValue05);}
        if(rePayload.prgSpTime05){
            setPrgSpTime05Payload(rePayload.prgSpTime05);}
        if(rePayload.prgSpValue06){
            setPrgSpValue06Payload(rePayload.prgSpValue06);}
        if(rePayload.prgSpTime06){
            setPrgSpTime06Payload(rePayload.prgSpTime06);}
        if(rePayload.prgSpValue07){
            setPrgSpValue07Payload(rePayload.prgSpValue07);}
        if(rePayload.prgSpTime07){
            setPrgSpTime07Payload(rePayload.prgSpTime07);}
        if(rePayload.prgSpValue08){
            setPrgSpValue08Payload(rePayload.prgSpValue08);}
        if(rePayload.prgSpTime08){
            setPrgSpTime08Payload(rePayload.prgSpTime08);}
        if(rePayload.prgSpValue09){
            setPrgSpValue09Payload(rePayload.prgSpValue09);}
        if(rePayload.prgSpTime09){
            setPrgSpTime09Payload(rePayload.prgSpTime09);}
            if(rePayload.prgSpValue10){
                setPrgSpValue10Payload(rePayload.prgSpValue10);}
            if(rePayload.prgSpTime10){
                setPrgSpTime10Payload(rePayload.prgSpTime10);}
            if(rePayload.prgSpValue11){
                setPrgSpValue11Payload(rePayload.prgSpValue11);}
            if(rePayload.prgSpTime11){
                setPrgSpTime11Payload(rePayload.prgSpTime11);}
            if(rePayload.prgSpValue12){
                setPrgSpValue12Payload(rePayload.prgSpValue12);}
            if(rePayload.prgSpTime12){
                setPrgSpTime12Payload(rePayload.prgSpTime12);}
             if(rePayload.prgSpValue13){
                setPrgSpValue13Payload(rePayload.prgSpValue13);}
            if(rePayload.prgSpTime13){
                setPrgSpTime13Payload(rePayload.prgSpTime13);}
            if(rePayload.prgSpValue14){
                setPrgSpValue14Payload(rePayload.prgSpValue14);}
            if(rePayload.prgSpTime14){
                setPrgSpTime14Payload(rePayload.prgSpTime14);}
            if(rePayload.prgSpValue15){
                setPrgSpValue15Payload(rePayload.prgSpValue15);}
            if(rePayload.prgSpTime15){
                setPrgSpTime15Payload(rePayload.prgSpTime15);}
            if(rePayload.prgSpValue16){
                setPrgSpValue16Payload(rePayload.prgSpValue16);}
            if(rePayload.prgSpTime16){
                setPrgSpTime16Payload(rePayload.prgSpTime16);}
            if(rePayload.prgSpValue17){
                setPrgSpValue17Payload(rePayload.prgSpValue17);}
            if(rePayload.prgSpTime17){
                setPrgSpTime17Payload(rePayload.prgSpTime17);}
            if(rePayload.prgSpValue18){
                setPrgSpValue18Payload(rePayload.prgSpValue18);}
            if(rePayload.prgSpTime18){
                setPrgSpTime18Payload(rePayload.prgSpTime18);}
            if(rePayload.prgSpValue19){
                setPrgSpValue19Payload(rePayload.prgSpValue19);}
            if(rePayload.prgSpTime19){
                setPrgSpTime19Payload(rePayload.prgSpTime19);}
                if(rePayload.prgSpValue20){
                    setPrgSpValue20Payload(rePayload.prgSpValue20);}
                if(rePayload.prgSpTime20){
                    setPrgSpTime20Payload(rePayload.prgSpTime20);}
                if(rePayload.prgSpValue21){
                    setPrgSpValue21Payload(rePayload.prgSpValue21);}
                if(rePayload.prgSpTime21){
                    setPrgSpTime21Payload(rePayload.prgSpTime21);}
                if(rePayload.prgSpValue22){
                    setPrgSpValue22Payload(rePayload.prgSpValue22);}
                if(rePayload.prgSpTime22){
                    setPrgSpTime22Payload(rePayload.prgSpTime22);}
                if(rePayload.prgSpValue23){
                    setPrgSpValue23Payload(rePayload.prgSpValue23);}
                if(rePayload.prgSpTime23){
                    setPrgSpTime23Payload(rePayload.prgSpTime23);}
                if(rePayload.prgSpValue24){
                    setPrgSpValue24Payload(rePayload.prgSpValue24);}
                if(rePayload.prgSpTime24){
                    setPrgSpTime24Payload(rePayload.prgSpTime24);}
                if(rePayload.prgSpValue25){
                    setPrgSpValue25Payload(rePayload.prgSpValue25);}
                if(rePayload.prgSpTime25){
                    setPrgSpTime25Payload(rePayload.prgSpTime25);}
                if(rePayload.prgSpValue26){
                    setPrgSpValue26Payload(rePayload.prgSpValue26);}
                if(rePayload.prgSpTime26){
                    setPrgSpTime26Payload(rePayload.prgSpTime26);}
                if(rePayload.prgSpValue27){
                    setPrgSpValue27Payload(rePayload.prgSpValue27);}
                if(rePayload.prgSpTime27){
                    setPrgSpTime27Payload(rePayload.prgSpTime27);}
      }
    });
  },[content]);

  const [value, setValue] = useState('No-program');
  const handleChange=(event,newValue) => {
    setValue(newValue);
    const test= {method: 'remoteSetPrgMode',params:newValue};
    const payload = JSON.stringify(test);
    client.publish(topic, payload, { qos }, error => {
      console.log(payload);
      if (error) {
        console.log('Publish error: ', error);
      }
    });
  }
//--------------------------------------------------------------
  const spvalue =[
    {value: 5,label: '5°C',}, {value: 5.5,label: '5.5°C',},
    {value: 6,label: '6°C',},{value: 6.5,label: '6.5°C',},
    {value: 7,label: '7°C',},{value: 7.5,label: '7.5°C',},
    {value: 8,label: '8°C',},{value: 8.5,label: '8.5°C',},
    {value: 9,label: '9°C',},{value: 9.5,label: '9.5°C',},
    {value: 10,label: '10°C',},{value: 10.5,label: '10.5°C',},
    {value: 11,label: '11°C',},{value: 11.5,label: '11.5°C',},
    {value: 12,label: '12°C',},{value: 12.5,label: '12.5°C',},
    {value: 13,label: '13°C',},{value: 13.5,label: '13.5°C',},
    {value: 14,label: '14°C',},{value: 14.5,label: '14.5°C',},
    {value: 15,label: '15°C',},{value: 15.5,label: '15.5°C',},
    {value: 16,label: '16°C',},{value: 16.5,label: '16.5°C',},
    {value: 17,label: '17°C',},{value: 17.5,label: '17.5°C',},
    {value: 18,label: '18°C',},{value: 18.5,label: '18.5°C',},
    {value: 19,label: '19°C',},{value: 19.5,label: '19.5°C',},
    {value: 20,label: '20°C',},{value: 20.5,label: '20.5°C',},
    {value: 21,label: '21°C',},{value: 21.5,label: '21.5°C',},
    {value: 22,label: '22°C',},{value: 22.5,label: '22.5°C',},
    {value: 23,label: '23°C',},{value: 23.5,label: '23.5°C',},
    {value: 24,label: '24°C',},{value: 24.5,label: '24.5°C',},
    {value: 25,label: '25°C',},{value: 25.5,label: '25.5°C',},
    {value: 26,label: '26°C',},{value: 26.5,label: '26.5°C',},
    {value: 27,label: '27°C',},{value: 27.5,label: '27.5°C',},
    {value: 28,label: '28°C',},{value: 28.5,label: '28.5°C',},
    {value: 29,label: '29°C',},{value: 29.5,label: '29.5°C',},
    {value: 30,label: '30°C',},{value: 30.5,label: '30.5°C',},
    {value: 31,label: '31°C',},{value: 31.5,label: '31.5°C',},
    {value: 32,label: '32°C',},{value: 32.5,label: '32.5°C',},
    {value: 33,label: '33°C',},{value: 33.5,label: '33.5°C',},
    {value: 34,label: '34°C',},{value: 34.5,label: '34.5°C',},
    {value: 35,label: '35°C',},{value: 35.5,label: '35.5°C',},
    {value: 36,label: '36°C',},{value: 36.5,label: '36.5°C',},
    {value: 37,label: '37°C',},{value: 37.5,label: '37.5°C',},
    {value: 38,label: '38°C',},{value: 38.5,label: '38.5°C',},
    {value: 39,label: '39°C',},{value: 39.5,label: '39.5°C',},
    {value: 40,label: '40°C',},
];
//-------------------------------------------------------------------
  const [prgSpValue00Payload, setPrgSpValue00Payload] = useState(20);
  const prgSpValue00handleChange=(event) => {
    setPrgSpValue00Payload(event.target.value);
    const test= {method: 'remoteSetPrgSpValue00',params:event.target.value};
    const payload = JSON.stringify(test);
    client.publish(topic, payload, { qos }, error => {
      console.log(payload);
      if (error) {
        console.log('Publish error: ', error);
      }
    });
  }
  
  const [prgSpTime00Payload, setPrgSpTime00Payload] = useState('08:00');
  const prgSpTime00handleChange=(event) => {
    setPrgSpTime00Payload(event.target.value);
    const test= {method: 'remoteSetPrgSpTime00',params:event.target.value};
    const payload = JSON.stringify(test);
    client.publish(topic, payload, { qos }, error => {
      console.log(payload);
      if (error) {
        console.log('Publish error: ', error);
      }
    });
  }

//--------------------------------------------------------------
const [prgSpValue01Payload, setPrgSpValue01Payload] = useState(20);
const prgSpValue01handleChange=(event) => {
  setPrgSpValue01Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue01',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime01Payload, setPrgSpTime01Payload] = useState('08:00');
const prgSpTime01handleChange=(event) => {
  setPrgSpTime01Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime01',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

//--------------------------------------------------------------
const [prgSpValue02Payload, setPrgSpValue02Payload] = useState(20);
const prgSpValue02handleChange=(event) => {
  setPrgSpValue02Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue02',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime02Payload, setPrgSpTime02Payload] = useState('08:00');
const prgSpTime02handleChange=(event) => {
  setPrgSpTime02Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime02',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

//--------------------------------------------------------------
const [prgSpValue03Payload, setPrgSpValue03Payload] = useState(20);
const prgSpValue03handleChange=(event) => {
  setPrgSpValue03Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue03',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime03Payload, setPrgSpTime03Payload] = useState('08:00');
const prgSpTime03handleChange=(event) => {
  setPrgSpTime03Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime03',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

//--------------------------------------------------------------
const [prgSpValue04Payload, setPrgSpValue04Payload] = useState(20);
const prgSpValue04handleChange=(event) => {
  setPrgSpValue04Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue04',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime04Payload, setPrgSpTime04Payload] = useState('08:00');
const prgSpTime04handleChange=(event) => {
  setPrgSpTime04Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime04',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue05Payload, setPrgSpValue05Payload] = useState(20);
const prgSpValue05handleChange=(event) => {
  setPrgSpValue05Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue05',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime05Payload, setPrgSpTime05Payload] = useState('08:00');
const prgSpTime05handleChange=(event) => {
  setPrgSpTime05Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime05',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue06Payload, setPrgSpValue06Payload] = useState(20);
const prgSpValue06handleChange=(event) => {
  setPrgSpValue06Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue04',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime06Payload, setPrgSpTime06Payload] = useState('08:00');
const prgSpTime06handleChange=(event) => {
  setPrgSpTime06Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime06',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue07Payload, setPrgSpValue07Payload] = useState(20);
const prgSpValue07handleChange=(event) => {
  setPrgSpValue07Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue07',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime07Payload, setPrgSpTime07Payload] = useState('08:00');
const prgSpTime07handleChange=(event) => {
  setPrgSpTime07Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime07',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue08Payload, setPrgSpValue08Payload] = useState(20);
const prgSpValue08handleChange=(event) => {
  setPrgSpValue08Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue08',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime08Payload, setPrgSpTime08Payload] = useState('08:00');
const prgSpTime08handleChange=(event) => {
  setPrgSpTime08Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime08',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue09Payload, setPrgSpValue09Payload] = useState(20);
const prgSpValue09handleChange=(event) => {
  setPrgSpValue09Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue09',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime09Payload, setPrgSpTime09Payload] = useState('08:00');
const prgSpTime09handleChange=(event) => {
  setPrgSpTime09Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime09',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue10Payload, setPrgSpValue10Payload] = useState(20);
const prgSpValue10handleChange=(event) => {
  setPrgSpValue10Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue10',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime10Payload, setPrgSpTime10Payload] = useState('08:00');
const prgSpTime10handleChange=(event) => {
  setPrgSpTime10Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime10',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue11Payload, setPrgSpValue11Payload] = useState(20);
const prgSpValue11handleChange=(event) => {
  setPrgSpValue11Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue11',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime11Payload, setPrgSpTime11Payload] = useState('08:00');
const prgSpTime11handleChange=(event) => {
  setPrgSpTime11Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime11',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue12Payload, setPrgSpValue12Payload] = useState(20);
const prgSpValue12handleChange=(event) => {
  setPrgSpValue12Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue12',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime12Payload, setPrgSpTime12Payload] = useState('08:00');
const prgSpTime12handleChange=(event) => {
  setPrgSpTime12Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime12',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue13Payload, setPrgSpValue13Payload] = useState(20);
const prgSpValue13handleChange=(event) => {
  setPrgSpValue13Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue13',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime13Payload, setPrgSpTime13Payload] = useState('08:00');
const prgSpTime13handleChange=(event) => {
  setPrgSpTime13Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime13',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue14Payload, setPrgSpValue14Payload] = useState(20);
const prgSpValue14handleChange=(event) => {
  setPrgSpValue14Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue14',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime14Payload, setPrgSpTime14Payload] = useState('08:00');
const prgSpTime14handleChange=(event) => {
  setPrgSpTime14Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime14',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue15Payload, setPrgSpValue15Payload] = useState(20);
const prgSpValue15handleChange=(event) => {
  setPrgSpValue15Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue15',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime15Payload, setPrgSpTime15Payload] = useState('08:00');
const prgSpTime15handleChange=(event) => {
  setPrgSpTime15Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime15',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue16Payload, setPrgSpValue16Payload] = useState(20);
const prgSpValue16handleChange=(event) => {
  setPrgSpValue16Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue16',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime16Payload, setPrgSpTime16Payload] = useState('08:00');
const prgSpTime16handleChange=(event) => {
  setPrgSpTime16Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime16',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue17Payload, setPrgSpValue17Payload] = useState(20);
const prgSpValue17handleChange=(event) => {
  setPrgSpValue17Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue17',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime17Payload, setPrgSpTime17Payload] = useState('08:00');
const prgSpTime17handleChange=(event) => {
  setPrgSpTime17Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime17',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue18Payload, setPrgSpValue18Payload] = useState(20);
const prgSpValue18handleChange=(event) => {
  setPrgSpValue18Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue18',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime18Payload, setPrgSpTime18Payload] = useState('08:00');
const prgSpTime18handleChange=(event) => {
  setPrgSpTime18Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime18',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue19Payload, setPrgSpValue19Payload] = useState(20);
const prgSpValue19handleChange=(event) => {
  setPrgSpValue19Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue19',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime19Payload, setPrgSpTime19Payload] = useState('08:00');
const prgSpTime19handleChange=(event) => {
  setPrgSpTime19Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime19',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue20Payload, setPrgSpValue20Payload] = useState(20);
const prgSpValue20handleChange=(event) => {
  setPrgSpValue20Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue20',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime20Payload, setPrgSpTime20Payload] = useState('08:00');
const prgSpTime20handleChange=(event) => {
  setPrgSpTime20Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime20',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue21Payload, setPrgSpValue21Payload] = useState(20);
const prgSpValue21handleChange=(event) => {
  setPrgSpValue21Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue21',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime21Payload, setPrgSpTime21Payload] = useState('08:00');
const prgSpTime21handleChange=(event) => {
  setPrgSpTime21Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime21',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue22Payload, setPrgSpValue22Payload] = useState(20);
const prgSpValue22handleChange=(event) => {
  setPrgSpValue22Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue22',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime22Payload, setPrgSpTime22Payload] = useState('08:00');
const prgSpTime22handleChange=(event) => {
  setPrgSpTime22Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime22',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue23Payload, setPrgSpValue23Payload] = useState(20);
const prgSpValue23handleChange=(event) => {
  setPrgSpValue23Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue23',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime23Payload, setPrgSpTime23Payload] = useState('08:00');
const prgSpTime23handleChange=(event) => {
  setPrgSpTime23Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime23',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue24Payload, setPrgSpValue24Payload] = useState(20);
const prgSpValue24handleChange=(event) => {
  setPrgSpValue24Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue24',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime24Payload, setPrgSpTime24Payload] = useState('08:00');
const prgSpTime24handleChange=(event) => {
  setPrgSpTime24Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime24',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue25Payload, setPrgSpValue25Payload] = useState(20);
const prgSpValue25handleChange=(event) => {
  setPrgSpValue25Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue25',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime25Payload, setPrgSpTime25Payload] = useState('08:00');
const prgSpTime25handleChange=(event) => {
  setPrgSpTime25Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime25',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue26Payload, setPrgSpValue26Payload] = useState(20);
const prgSpValue26handleChange=(event) => {
  setPrgSpValue26Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue26',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime26Payload, setPrgSpTime26Payload] = useState('08:00');
const prgSpTime26handleChange=(event) => {
  setPrgSpTime26Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime26',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------
const [prgSpValue27Payload, setPrgSpValue27Payload] = useState(20);
const prgSpValue27handleChange=(event) => {
  setPrgSpValue27Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpValue27',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}

const [prgSpTime27Payload, setPrgSpTime27Payload] = useState('08:00');
const prgSpTime27handleChange=(event) => {
  setPrgSpTime27Payload(event.target.value);
  const test= {method: 'remoteSetPrgSpTime27',params:event.target.value};
  const payload = JSON.stringify(test);
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
}
//--------------------------------------------------------------

  const PublishForm = (
   <Paper square>
       <Tabs value={value}
       indicatorColor="primary"
       textColor="primary"
       onChange={handleChange}
       aria-label="disabled tabs example">
           <Tab value='No-program' label="No Program"/>
           <Tab value='One-day' label="1 day"/>
           <Tab value='Sun_mon-fri_sat' label="1+5+1(sun+mon+sat)"/>
           <Tab value='Every-day' label="7 days"/>
       </Tabs>
   </Paper>
  )
 //------------------------------------------------------------ 
  const progdisplaytop =(

    <Grid container 
        direction="row" 
        justify="space-evenly" 
        alignItems="baseline"
        item xs={12} 
        spacing={2}
    >   
   <Paper>Set Point 1</Paper>
   <Paper>Set Point 2</Paper>
   <Paper>Set Point 3</Paper>
   <Paper>Set Point 4</Paper>
    </Grid> 
  
  )
//-------------------------------------------------------------
 const progdisplaysun=(

    <Grid container 
    direction="row" 
    justify="space-evenly" 
    alignItems="center"
    item xs={12} 
    spacing={2}> 
    <Card>SUN</Card>
    <Card >
        <TextField
            id="time"
            label="spTime00"
            type="time"
            //defaultValue="08:00"
            value={prgSpTime00Payload}
            onChange={prgSpTime00handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue00"
            select
            label="spValue00"
            value={prgSpValue00Payload}
            onChange={prgSpValue00handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime01"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime01Payload}
            onChange={prgSpTime01handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue01"
            select
            label="spValue01"
            value={prgSpValue01Payload}
            onChange={prgSpValue01handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime02"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime02Payload}
            onChange={prgSpTime02handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue02"
            select
            label="spValue02"
            value={prgSpValue02Payload}
            onChange={prgSpValue02handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime03"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime03Payload}
            onChange={prgSpTime03handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue03"
            select
            label="spValue03"
            value={prgSpValue03Payload}
            onChange={prgSpValue03handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
</Grid>
 )
//-------------------------------------------------------------
const progdisplaymon=(

    <Grid container 
    direction="row" 
    justify="space-evenly" 
    alignItems="center"
    item xs={12} 
    spacing={2}> 
    <Card>MON</Card>
    <Card >
        <TextField
            id="time"
            label="spTime04"
            type="time"
            //defaultValue="08:00"
            value={prgSpTime04Payload}
            onChange={prgSpTime04handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue04"
            select
            label="spValue04"
            value={prgSpValue04Payload}
            onChange={prgSpValue04handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime05"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime05Payload}
            onChange={prgSpTime05handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue05"
            select
            label="spValue05"
            value={prgSpValue05Payload}
            onChange={prgSpValue05handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime06"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime06Payload}
            onChange={prgSpTime06handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue06"
            select
            label="spValue06"
            value={prgSpValue06Payload}
            onChange={prgSpValue06handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime07"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime07Payload}
            onChange={prgSpTime07handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue07"
            select
            label="spValue07"
            value={prgSpValue07Payload}
            onChange={prgSpValue07handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
</Grid>
 )
//-------------------------------------------------------------
const progdisplaytue=(

    <Grid container 
    direction="row" 
    justify="space-evenly" 
    alignItems="center"
    item xs={12} 
    spacing={2}> 
    <Card>TUE</Card>
    <Card >
        <TextField
            id="time"
            label="spTime08"
            type="time"
            //defaultValue="08:00"
            value={prgSpTime08Payload}
            onChange={prgSpTime08handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue08"
            select
            label="spValue08"
            value={prgSpValue08Payload}
            onChange={prgSpValue08handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime09"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime09Payload}
            onChange={prgSpTime09handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue09"
            select
            label="spValue09"
            value={prgSpValue09Payload}
            onChange={prgSpValue09handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime10"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime10Payload}
            onChange={prgSpTime10handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue10"
            select
            label="spValue10"
            value={prgSpValue10Payload}
            onChange={prgSpValue10handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime11"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime11Payload}
            onChange={prgSpTime11handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue11"
            select
            label="spValue11"
            value={prgSpValue11Payload}
            onChange={prgSpValue11handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
</Grid>
 )
//-------------------------------------------------------------
const progdisplaywed=(

    <Grid container 
    direction="row" 
    justify="space-evenly" 
    alignItems="center"
    item xs={12} 
    spacing={2}> 
    <Card>WED</Card>
    <Card >
        <TextField
            id="time"
            label="spTime12"
            type="time"
            //defaultValue="08:00"
            value={prgSpTime12Payload}
            onChange={prgSpTime12handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue12"
            select
            label="spValue12"
            value={prgSpValue12Payload}
            onChange={prgSpValue12handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime13"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime13Payload}
            onChange={prgSpTime13handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue13"
            select
            label="spValue13"
            value={prgSpValue13Payload}
            onChange={prgSpValue13handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime14"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime14Payload}
            onChange={prgSpTime14handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue14"
            select
            label="spValue14"
            value={prgSpValue14Payload}
            onChange={prgSpValue14handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime15"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime15Payload}
            onChange={prgSpTime15handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue15"
            select
            label="spValue15"
            value={prgSpValue15Payload}
            onChange={prgSpValue15handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
</Grid>
 )
//-------------------------------------------------------------
const progdisplaythu=(

    <Grid container 
    direction="row" 
    justify="space-evenly" 
    alignItems="center"
    item xs={12} 
    spacing={2}> 
    <Card>THU</Card>
    <Card >
        <TextField
            id="time"
            label="spTime16"
            type="time"
            //defaultValue="08:00"
            value={prgSpTime16Payload}
            onChange={prgSpTime16handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue16"
            select
            label="spValue16"
            value={prgSpValue16Payload}
            onChange={prgSpValue16handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime17"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime17Payload}
            onChange={prgSpTime17handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue17"
            select
            label="spValue17"
            value={prgSpValue17Payload}
            onChange={prgSpValue17handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime18"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime18Payload}
            onChange={prgSpTime18handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue18"
            select
            label="spValue18"
            value={prgSpValue18Payload}
            onChange={prgSpValue18handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime19"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime19Payload}
            onChange={prgSpTime19handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue19"
            select
            label="spValue19"
            value={prgSpValue19Payload}
            onChange={prgSpValue19handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
</Grid>
 )
//-------------------------------------------------------------
const progdisplayfri=(

    <Grid container 
    direction="row" 
    justify="space-evenly" 
    alignItems="center"
    item xs={12} 
    spacing={2}> 
    <Card>FRI</Card>
    <Card >
        <TextField
            id="time"
            label="spTime20"
            type="time"
            //defaultValue="08:00"
            value={prgSpTime20Payload}
            onChange={prgSpTime20handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue20"
            select
            label="spValue20"
            value={prgSpValue20Payload}
            onChange={prgSpValue20handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime21"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime21Payload}
            onChange={prgSpTime21handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue21"
            select
            label="spValue21"
            value={prgSpValue21Payload}
            onChange={prgSpValue21handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime22"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime22Payload}
            onChange={prgSpTime22handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue22"
            select
            label="spValue22"
            value={prgSpValue22Payload}
            onChange={prgSpValue22handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime23"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime23Payload}
            onChange={prgSpTime23handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue23"
            select
            label="spValue23"
            value={prgSpValue23Payload}
            onChange={prgSpValue23handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
</Grid>
 )
//-------------------------------------------------------------
const progdisplaysat=(

    <Grid container 
    direction="row" 
    justify="space-evenly" 
    alignItems="center"
    item xs={12} 
    spacing={2}> 
    <Card>SAT</Card>
    <Card >
        <TextField
            id="time"
            label="spTime24"
            type="time"
            //defaultValue="08:00"
            value={prgSpTime24Payload}
            onChange={prgSpTime24handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue24"
            select
            label="spValue24"
            value={prgSpValue24Payload}
            onChange={prgSpValue24handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime25"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime25Payload}
            onChange={prgSpTime25handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue25"
            select
            label="spValue25"
            value={prgSpValue25Payload}
            onChange={prgSpValue25handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime26"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime26Payload}
            onChange={prgSpTime26handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue26"
            select
            label="spValue26"
            value={prgSpValue26Payload}
            onChange={prgSpValue26handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
    <Card >
        <TextField
            id="time"
            label="spTime27"
            type="time"
            //defaultValue="08:00"
            
            value={prgSpTime27Payload}
            onChange={prgSpTime27handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{step: 300,}}
            />
        <TextField
            id="spValue27"
            select
            label="spValue27"
            value={prgSpValue27Payload}
            onChange={prgSpValue27handleChange}
        >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
        </TextField>
    </Card>
</Grid>
 )
//-------------------------------------------------------------

  return (
    <div><h4>Device: {content}</h4>
    <br/>
    <Card className={classes.root}>
   <Grid direction="row" 
    justify="space-evenly" 
    alignItems="center"
    
    container spacing={3}>

      {PublishForm}
    
      {progdisplaytop}
      {progdisplaysun}
      {progdisplaymon}
      {progdisplaytue}
      {progdisplaywed}
      {progdisplaythu}
      {progdisplayfri}
      {progdisplaysat}
      </Grid>
    </Card>
    </div>
  );
}

export default ProgramPublish;
