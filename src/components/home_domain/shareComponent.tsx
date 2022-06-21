import { Share } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

const ShareComponent = () => {

	const [message, setMessage] = useState("share");

	function myTimer(){}

  const changeMessage = () => {

    setMessage("Link copied!");

		myTimer();

  };


	return (
	<>
	  <Tooltip title={message} placement="top">
	  <IconButton onClick={() => {changeMessage()}}>
      <Share color="primary" />
    </IconButton>
		</Tooltip>

	</>
	);
}

export default ShareComponent;