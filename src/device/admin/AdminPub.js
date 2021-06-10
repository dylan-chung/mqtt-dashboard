import React, { useState, useEffect } from 'react';
import { Grid,Button} from '@material-ui/core';
import {client} from '../../Connection'
import { onError } from "../../libs/errorLib";
import { API } from "aws-amplify";
import { useParams,useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import LoaderButton from "../../components/LoaderButton";


const { qos } = 1;

const AdminPub = () => {
 // const [form] = Form.useForm();
 const history = useHistory();
 const { id } = useParams();
 const [content, setContent] = useState("");
 const topic = content+'/v1/devices/me/rpc/request/';
 client.subscribe(content+'/v1/devices/me/attributes');
  client.subscribe(content+'/v1/devices/me/rpc/request/#');
  client.subscribe(content+'/v1/devices/me/rpc/response/+');
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    function loadNote() {
      return API.get("notes", `/notes/${id}`);
    }

    async function onLoad() {
      try {
        const note = await loadNote();
        const { content } = note;

        // if (attachment) {
        //   note.attachmentURL = await Storage.vault.get(attachment);
        // }

        setContent(content);
        setNote(note);
      } catch (e) {
        onError(e);
      }
    }

    onLoad();
  }, [id]);

  function validateForm() {
    return content.length > 0;
  }

  function saveNote(note) {
    return API.put("notes", `/notes/${id}`, {
      body: note
    });
  }

  async function handleSubmit(event) {
    //let attachment;

    event.preventDefault();
    setIsLoading(true);

    try {
      // if (file.current) {
      //  // attachment = await s3Upload(file.current);
      // }

      await saveNote({
        content,
        //attachment: attachment || note.attachment
      });
      history.push("/");
      console.log(note);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function deleteNote() {
    return API.del("notes", `/notes/${id}`);
  }

  async function handleDelete(event) {
    event.preventDefault();

    const confirmed = window.confirm(
      "Are you sure you want to remove this device?"
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      await deleteNote();
      history.push("/");
    } catch (e) {
      onError(e);
      setIsDeleting(false);
    }
  }

  // useEffect(() => {
      
  //   client.on('message', (topic, message) => {
  //     //const payload = { topic, message: message.toString() };
  //     const rePayload = JSON.parse(message.toString());
  //     if(topic ===content+'/v1/devices/me/attributes'||'/v1/devices/me/rpc/response/+'){
        
  //     }
  //   });
  // },[content]);


  //--------------------------------------------------
  const reboot=()=>{
    const test= {method: 'remoteRebootDevice',params:{}};
    const payload = JSON.stringify(test);
    client.publish(topic, payload, { qos }, error => {
      console.log(payload);
      if (error) {
        console.log('Publish error: ', error);
      }
    });
  }
  const rebootBut=(
    <Button variant="outlined" color="secondary" onClick={reboot}>
      Reboot
    </Button>
  )
//-------------------------------------------------------------------
  return (
 <div>
   {note && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="content">
            <h5>Device</h5>
            <Form.Control
              
              value={content}
              placeholder="Device Name"
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <LoaderButton
            //block
            size="sm"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
          >
            Save
          </LoaderButton>
          <LoaderButton
            //block
            size="sm"
            variant="danger"
            onClick={handleDelete}
            isLoading={isDeleting}
          >
            Delete
          </LoaderButton>
        </Form>
        
      )}
    <Grid direction="column" 
    justify="space-evenly"
    >
      <br/>
      <Grid>
      {rebootBut}
      </Grid>
    </Grid>
  </div>
  );
}

export default AdminPub;
