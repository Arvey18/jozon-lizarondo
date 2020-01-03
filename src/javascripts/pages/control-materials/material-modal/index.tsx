import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux';
import {
  ADD_MATERIAL,
  GET_MATERIAL,
  UPDATE_MATERIAL,
} from '../../../actions/materials';

// MUI
import 'date-fns';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useStyles} from './style';

// styles
import './style.scss';

// variables
const themeInput = createMuiTheme({
  palette: {
    primary: {
      main: '#52de97',
    },
  },
});

interface IProps {
  show: boolean;
  edit: boolean;
  id?: string;
  returnStatus: (show: boolean, edit: boolean) => void;
  addMaterial: (
    mname: string,
    description: string,
    quantity: number,
    cq: number,
    price: number
  ) => any;
  getMaterial: (id: string) => any;
  updateMaterial: (
    id: string,
    mname: string,
    description: string,
    quantity: number,
    cq: number,
    price: number
  ) => any;
}

interface IState {
  mname: string;
  description: string;
  quantity: number;
  cq: number;
  price: number;
}

const MaterialModal = ({
  show,
  edit,
  id,
  returnStatus,
  addMaterial,
  getMaterial,
  updateMaterial,
}: IProps): ReactElement => {
  // variables
  const classes = useStyles();

  // use states
  const [open, setOpen] = React.useState(false);
  const [fieldState, setFieldState] = React.useState<IState>({
    mname: '',
    description: '',
    quantity: 0,
    cq: 0,
    price: 0,
  });
  const [disableSave, setDisableSave] = React.useState(true);

  // use effects
  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  React.useEffect(() => {
    if (edit && id !== undefined) {
      getMaterial(id).then((result: any) => {
        if (result.statusText === 'OK') {
          const data = result.data;
          setFieldState({
            ...fieldState,
            mname: data.name,
            description: data.description,
            quantity: data.quantity,
            cq: data.charging_quantity,
            price: data.price,
          });
        }
      });
    } else {
      handleResetForm();
    }
  }, [edit]);

  React.useEffect(() => {
    if (fieldState.mname.length > 0 && fieldState.description.length > 0) {
      setDisableSave(false);
    } else {
      setDisableSave(true);
    }
  }, [fieldState.mname, fieldState.description]);

  // custom functions
  const handleSave = (status: boolean, edit: boolean) => {
    if (status) {
      handleSaveData();
      returnStatus(false, edit);
    } else {
      returnStatus(status, edit);
    }
  };

  const handleResetForm = () => {
    setFieldState({
      ...fieldState,
      mname: '',
      description: '',
      quantity: 0,
      cq: 0,
      price: 0,
    });
    returnStatus(false, false);
  };

  const handleChange = (key: keyof IState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFieldState({...fieldState, [key]: event.target.value});
  };

  const handleSaveData = () => {
    addMaterial(
      fieldState.mname,
      fieldState.description,
      fieldState.quantity,
      fieldState.cq,
      fieldState.price
    ).then((result: any) => {
      if (result.statusText === 'Created') {
        returnStatus(false, false);
      }
    });
  };

  const handleUpdateData = () => {
    if (id !== undefined) {
      updateMaterial(
        id,
        fieldState.mname,
        fieldState.description,
        fieldState.quantity,
        fieldState.cq,
        fieldState.price
      ).then((result: any) => {
        console.log(result);
        if (result.statusText === 'OK') {
          returnStatus(false, false);
        }
      });
    }
  };

  return (
    <Dialog
      className="material-modal"
      open={open}
      onClose={() => handleSave(false, false)}
    >
      <DialogTitle className={classes.formHeader}>
        {edit ? 'Update Material ' + fieldState.mname : 'Add Material'}
      </DialogTitle>
      <DialogContent>
        <Grid container className={clsx(classes.grid, classes.gridTop)}>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="name"
                label="Name *"
                margin="normal"
                autoComplete="off"
                onChange={handleChange('mname')}
                value={fieldState.mname}
              />
            </ThemeProvider>
          </Grid>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="description"
                label="Description *"
                margin="normal"
                autoComplete="off"
                onChange={handleChange('description')}
                value={fieldState.description}
              />
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={clsx(classes.grid, classes.gridTop)}>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="quantity"
                label="Quantity"
                margin="normal"
                autoComplete="off"
                type="number"
                onChange={handleChange('quantity')}
                value={fieldState.quantity}
              />
            </ThemeProvider>
          </Grid>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="cq"
                label="Charge Quantity"
                margin="normal"
                autoComplete="off"
                type="number"
                onChange={handleChange('cq')}
                value={fieldState.cq}
              />
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={clsx(classes.grid, classes.gridTop)}>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="price"
                label="Price"
                margin="normal"
                autoComplete="off"
                type="number"
                onChange={handleChange('price')}
                value={fieldState.price}
              />
            </ThemeProvider>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.formFooter}>
        <Button onClick={handleResetForm}>Cancel</Button>
        {edit ? (
          <Button
            className={classes.saveButton}
            onClick={handleUpdateData}
            disabled={disableSave}
          >
            Update
          </Button>
        ) : (
          <Button
            className={classes.saveButton}
            onClick={() => handleSave(true, false)}
            disabled={disableSave}
          >
            Save
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

const stateToProps = () => ({});

const actionsToProps = (dispatch: any) => ({
  addMaterial: (
    mname: string,
    description: string,
    quantity: number,
    cq: number,
    price: number
  ) => dispatch(ADD_MATERIAL(mname, description, quantity, cq, price)),
  getMaterial: (id: string) => dispatch(GET_MATERIAL(id)),
  updateMaterial: (
    id: string,
    mname: string,
    description: string,
    quantity: number,
    cq: number,
    price: number
  ) => dispatch(UPDATE_MATERIAL(id, mname, description, quantity, cq, price)),
});

export default connect(stateToProps, actionsToProps)(MaterialModal);
