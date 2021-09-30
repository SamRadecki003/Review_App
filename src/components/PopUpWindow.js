// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@material-ui/core";

// export default function FormDialog(props) {
//   console.log(props);
//   const [open, setOpen] = React.useState(false);
//   const [toDisable, setToDisable] = useState(true);
//   const [response, setResponse] = useState(props.review.response[0]);
//   const [date, setDate] = useState(props.review.response[0].date);
//   const [name, setName] = useState(props.review.response[0].setName);
//   const [content, setContent] = useState(props.review.response[0].content);
//   console.log(response);

//   useEffect(() => {
//     if (props.review.response[0].content === "") {
//       setToDisable(false);
//     }
//   });

//   useEffect(() => {
//     setContent(content);
//   });

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const content = event.target.content?.value;
//     console.log("did this work?");
//     console.log(content);
//   };

//   return (
//     <form
//       onSubmit={async (event) => {
//         await handleSubmit(event);
//       }}
//     >
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         disabled={toDisable}
//         onClick={handleClickOpen}
//       >
//         Add a Response
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Add a Response</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Write a small message to respond to the user's review.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="message"
//             label="Message"
//             type="message"
//             fullWidth
//             variant="standard"
//             onChange={(ev) => setContent(ev.target.value)}
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Name"
//             type="name"
//             fullWidth
//             variant="standard"
//             onChange={(ev) => setName(ev.target.value)}
//           />
//           <TextField
//             required
//             id="startDate"
//             label="Date"
//             type="date"
//             onChange={(ev) => setDate(ev.target.value)}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//         </DialogContent>

//         <DialogActions>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={handleClose}
//           >
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </form>
//   );
// }
