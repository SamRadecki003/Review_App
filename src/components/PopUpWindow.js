// import React, { useState, useEffect } from "react";
// import EditIcon from "@material-ui/icons/Edit";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Button,
//   Box,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@material-ui/core";
// const useStyles = makeStyles((theme) => ({
//   editButton: {
//     display: "flex",
//     justifyContent: "flex-end",
//     alignItems: "flex-end",
//   },
// }));

// export default function PopUpWindow(props) {
//   console.log("props.reponse in PopUpWindow: ", props.response.content);
//   const [open, setOpen] = React.useState(false);
//   const [response, setReponse] = useState(props.response);
//   const [content, setContent] = useState(props.response.content);

//   const classes = useStyles();

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("did this work?");
//   };
//   // const handleContentChange = (event) => {
//   //   setReponse({ ...response, content: event.target.value });
//   //   console.log("content", response.content);
//   // };
//   const handleNameChange = (event) => {
//     setReponse({ ...response, name: event.target.value });
//   };
//   const handleDateChange = (event) => {
//     setReponse({ ...response, date: event.target.value });
//   };

//   return (
//     <div>
//       <Box className={classes.editButton}>
//         <Button onClick={handleClickOpen}>
//           <EditIcon color="primary" />
//         </Button>
//       </Box>
//       <form onSubmit={async (event) => await handleSubmit(event)}>
//         <Dialog open={open}>
//           <DialogTitle>Edit Your Response</DialogTitle>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="message"
//               label="Message"
//               fullWidth
//               variant="standard"
//               value={content}
//               onChange={(event) => setContent(event.target.value)}
//             />
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               label="Name"
//               type="name"
//               fullWidth
//               variant="standard"
//               onChange={handleNameChange}
//             />
//             <TextField
//               required
//               id="date"
//               label="Date"
//               type="date"
//               onChange={handleDateChange}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button type="submit" fullWidth variant="contained" color="primary">
//               Submit
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </form>
//     </div>
//   );
// }
