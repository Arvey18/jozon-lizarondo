import React, {ReactElement} from 'react';

// MUI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useStyles} from './style';

interface IProps {
  show: boolean;
  returnStatus: (status: boolean, removeData: boolean) => void;
}

export default function DeleteModal({
  show,
  returnStatus,
}: IProps): ReactElement {
  // variables
  const classes = useStyles();

  // use states
  const [open, setOpen] = React.useState(false);

  // use effects
  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  // custom functions
  const handleDialog = (status: boolean, removeData: boolean) => {
    returnStatus(status, removeData);
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleDialog(false, false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to Delete Data?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Clicking <span className={classes.dangerButton}>Yes</span> Will
          Permanently Delete the Data and will not be able to recover.
          <br />
          Be careful!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleDialog(false, false)} color="primary">
          No
        </Button>
        <Button
          className={classes.dangerButton}
          onClick={() => handleDialog(false, true)}
          color="primary"
          autoFocus
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
