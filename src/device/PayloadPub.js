import React,{useEffect,useState}  from 'react';
import { Form, Input, Row, Col } from 'antd';
import {Card,Button} from '@material-ui/core'
//import Card from '@material-ui/core/Card'
//import Button from '@material-ui/core/Button';
import {client} from '../Connection'
import { API } from "aws-amplify";
import { useParams } from "react-router-dom";

const PayloadPub = () => {
    const [form] = Form.useForm();
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


    const onFinish = (context) => {
      
      const { qos } = 1;
      const topic = content+'/v1/devices/me/attributes/response/1';
      //const topic ='CEDC4/v1/devices/me/rpc/request/';
      //{"method":"remoteSetOverrideStatus","params":{}}
      //
      //const topic = 'v1/devices/me/attributes';
     // const test= ;
      //const payload = (context);
      const{payload} = context;
      //console.log();
      client.publish(topic, payload, { qos }, error => {
        if (error) {
          console.log('Publish error: ', error);
        }
      });
    };
  
    const PublishForm = (
      <Form
        layout="vertical"
        name="basic"
        form={form}
        onFinish={onFinish}
      >
        <Row gutter={20}>
        <Col span={24}>
          <Form.Item
            label="Topic"
            name="topic"
          >
            <Input />
          </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Payload"
              name="payload"
            >
              <Input.TextArea/>
            </Form.Item>
          </Col>
          <Col span={8} offset={16} style={{ textAlign: 'right' }}>
            <Form.Item>
              <Button variant="outlined" color="primary" type="submit">
                Publish
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  
    return (
      <Card
        title="Publisher"
      >
          
        {PublishForm}
      </Card>
    );
  }
  
  export default PayloadPub;
  