import React, { useState, useEffect } from "react";
import { Icon, IconButton,Grid } from "@material-ui/core";
import { API } from "aws-amplify";
import { useParams,Link } from "react-router-dom";
import { onError } from "../libs/errorLib";
import PayloadPub from "../device/PayloadPub";
import DeviceConnection from "../device/temp/DeviceConnect";
import TempRe from "../device/temp/TempCard";
import StatusRe from "../device/temp/StatusCard";
import TempRequest from "../device/temp/TempRequest";
import MainPublish from "../device/temp/MenuPub";

export default function Notes() {
  
  const { id } = useParams();
  //const history = useHistory();
  //const [note, setNote] = useState(null);
  const [content, setContent] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [isDeleting, setIsDeleting] = useState(false);

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
        //setNote(note);
      } catch (e) {
        onError(e);
      }
    }

    onLoad();
  }, [id]);

  // function validateForm() {
  //   return content.length > 0;
  // }
  // function saveNote(note) {
  //   return API.put("notes", `/notes/${id}`, {
  //     body: note
  //   });
  // }

  // async function handleSubmit(event) {
  //   //let attachment;

  //   event.preventDefault();

  //   // if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
  //   //   alert(
  //   //     `Please pick a file smaller than ${
  //   //       config.MAX_ATTACHMENT_SIZE / 1000000
  //   //     } MB.`
  //   //   );
  //   //   return;
  //   // }

  //   setIsLoading(true);

  //   try {
  //     // if (file.current) {
  //     //  // attachment = await s3Upload(file.current);
  //     // }

  //     await saveNote({
  //       content,
  //       //attachment: attachment || note.attachment
  //     });
  //     history.push("/");
  //     console.log(note);
  //   } catch (e) {
  //     onError(e);
  //     setIsLoading(false);
  //   }
  // }

  // function deleteNote() {
  //   return API.del("notes", `/notes/${id}`);
  // }

  // async function handleDelete(event) {
  //   event.preventDefault();

  //   const confirmed = window.confirm(
  //     "Are you sure you want to remove this device?"
  //   );

  //   if (!confirmed) {
  //     return;
  //   }

  //   setIsDeleting(true);

  //   try {
  //     await deleteNote();
  //     history.push("/");
  //   } catch (e) {
  //     onError(e);
  //     setIsDeleting(false);
  //   }
  // }


  return (
    <div className="Notes">
      <Link to="/">
        <IconButton>
      <Icon>home</Icon>
      </IconButton>
            </Link> 
      <h4>Device: {content}</h4>
      <DeviceConnection/>
      <Grid container justify="center" alignItems="flex-start" >
      <TempRe/>
      <TempRequest/>
      <MainPublish/>
      </Grid>
      <StatusRe/>

     
      <PayloadPub/>
    </div>
  );
}
