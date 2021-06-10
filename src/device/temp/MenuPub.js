import React, { useState, useEffect } from 'react';
//import { Form, Row, Col } from 'antd';
//import {Grid} from '@material-ui/core'
//import Card from '@material-ui/core/Card'
// import Button from '@material-ui/core/Button';
import {client} from '../../Connection'
//import TextField from '@material-ui/core/TextField';
//import MenuItem from '@material-ui/core/MenuItem';
import { InputLabel, Select,Tab,Tabs,Paper,FormControl,MenuItem,TextField,Grid } from '@material-ui/core';
//import FormControl from '@material-ui/core/FormControl';
import { API } from "aws-amplify";
import { useParams } from "react-router-dom";

const { qos } = 1;
//const topic = content+'/v1/devices/me/rpc/request/';

const MainPublish = ({ publish }) => {
 // const [form] = Form.useForm();
 const { id } = useParams();
 const [content, setContent] = useState("");
 const topic = content+'/v1/devices/me/rpc/request/';
 client.subscribe(content+'/v1/devices/me/attributes');
  client.subscribe(content+'/v1/devices/me/rpc/request/#');
  client.subscribe(content+'/v1/devices/me/rpc/response/+');
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
//-----------------------------
//  function saveNote(note) {
//   return API.put("notes", `/notes/${id}`, {
//     body: note
//   });
// }
// async function handleSubmit(event) {
//   //event.preventDefault();
//   try {
//     await saveNote({
//       content,
//     });
//    // history.push("/");
//     console.log('hi')
//   } catch (e) {
//   }
// }
//-----------------------------
  useEffect(() => {
      
    client.on('message', (topic, message) => {
      //const payload = { topic, message: message.toString() };
      const rePayload = JSON.parse(message.toString());
      if(topic ===content+'/v1/devices/me/attributes'||'/v1/devices/me/rpc/response/+'){
        if(rePayload.spValue){
          setSpValuePayload(rePayload.spValue);}
        if(rePayload.controlMode){
          setControlModPayload(rePayload.controlMode);}
          if(rePayload.fanMode){
            setFanValue(rePayload.fanMode);}
            if(rePayload.overrideStatus){
              setOverridePayload(rePayload.overrideStatus);}
      }
    });
  },[content]);

 //--------------------------------------------------------------
  const [spValuePayload, setSpValuePayload] = useState(20);
  const handleChange=(event) => {
    setSpValuePayload(event.target.value);
    //const { qos } = 1;
   // const topic = 'v1/devices/me/attributes';
    //const test= {spValue: event.target.value};
    const test= {method: 'remoteSetSpValue',params:event.target.value};
    const payload = JSON.stringify(test);
    //const payload ='{"method":"remoteSetSpValue","params":'+event.target.value+'}';
    client.publish(topic, payload, { qos }, error => {
      console.log(payload);
      if (error) {
        console.log('Publish error: ', error);
      }
    });
  }
  
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

  const PublishForm = (
    // <Form
    //   layout="vertical"
    //   name="basic"
    //   form={form}
    //   //onFinish={onFinish}
    // >
    //   <Row gutter={20}>
    //     <Col span={24}>
            <TextField
            id="sp"
            select
            label="spValue"
            value={spValuePayload}
            onChange={handleChange}
            variant="outlined"
            >
            {spvalue.map((option)=> (
                <MenuItem key={option.value} value={option.value} >
                 {option.label}
                </MenuItem>
            ))}   
            </TextField>
    //     </Col>
    //   </Row>
    // </Form>
  )
//-------------------------------------------------------------
const [fanValue, setFanValue] = useState('Auto');
  const handleChangeFan=(event,newValue) => {
    setFanValue(newValue);
    const test= {method: 'remoteSetFanMode',params:newValue};
    const payload = JSON.stringify(test);
    client.publish(topic, payload, { qos }, error => {
      console.log(payload);
      if (error) {
        console.log('Publish error: ', error);
      }
    });
  }
const PublishFan = (
  <Paper square>
      <Tabs value={fanValue}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChangeFan}
      aria-label="disabled tabs example">
          <Tab value='Auto' label="Auto"/>
          <Tab value='Low' label="Low"/>
          <Tab value='Med' label="Med"/>
          <Tab value='High' label="High"/>
      </Tabs>
  </Paper>
 )
//-------------------------------------------------------------------
const [controlModPayload, setControlModPayload]= useState('On');
const handleChange3 =(event)=>{
  setControlModPayload(event.target.value);
  //const { qos } = 1;
  //const topic = 'v1/devices/me/attributes';
  //const test= {tempUnit: event.target.value};
  const test= {method: 'remoteSetControlMode',params:event.target.value};
  const payload = JSON.stringify(test);
  //const payload ='{"method":"remoteSetTempUnit","params":"'+event.target.value+'"}';
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
  }

const ControlModePub=(
  <FormControl variant="filled">
    <InputLabel id="controlMode">controlMode</InputLabel>
    <Select
    labelId="controlMode"
    id="controlMode"
    value={controlModPayload}
    onChange={handleChange3}>
      <MenuItem value={"Off"}> OFF</MenuItem>
      <MenuItem value={"On"}> ON</MenuItem>
    </Select>
  </FormControl>
)

//-------------------------------------------------------------
const [overridePayload, setOverridePayload]= useState('true');
const handleChangeOverride =(event)=>{
  setOverridePayload(event.target.value);
  //const { qos } = 1;
  //const topic = 'v1/devices/me/attributes';
  //const test= {tempUnit: event.target.value};
  const test= {method: 'remoteSetOverrideStatus',params:event.target.value};
  const payload = JSON.stringify(test);
  //const payload ='{"method":"remoteSetTempUnit","params":"'+event.target.value+'"}';
  client.publish(topic, payload, { qos }, error => {
    console.log(payload);
    if (error) {
      console.log('Publish error: ', error);
    }
  });
  }

const OverridePub=(
  <FormControl variant="filled">
    <InputLabel id="Override">Override</InputLabel>
    <Select
    labelId="Override"
    id="Override"
    value={overridePayload}
    onChange={handleChangeOverride}>
      <MenuItem value={"true"}> Yes</MenuItem>
      <MenuItem value={"false"}> No</MenuItem>
    </Select>
  </FormControl>
)

//-------------------------------------------------------------
  return (
 <div>
    <Grid container
  direction="row"
  justify="center"
  alignItems="center"
    >
      <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  >
        {ControlModePub} 
      {PublishForm}
      {OverridePub}
      </Grid>
      <Grid>Fan Mode{PublishFan}</Grid>
      
    </Grid>
  </div>
  );
}

export default MainPublish;
