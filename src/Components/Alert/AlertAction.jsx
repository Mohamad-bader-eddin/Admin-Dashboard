import React, { forwardRef } from 'react'
import MuiAlert from '@mui/material/Alert';
import { Slide } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionLeft(props) {
  return <Slide {...props} direction="right" />;
}

const AlertAction = ({ open, setOpen, iserror, children }) => {
  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} TransitionComponent={TransitionLeft}>
      <Alert onClose={handleClose} severity={iserror ? 'error' : 'success'} sx={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
  )
}

export default AlertAction