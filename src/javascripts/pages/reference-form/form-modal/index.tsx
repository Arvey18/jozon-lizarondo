import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux';
import {
  ADD_REFERENCE_FORM,
  GET_REFERENCE_FORM,
  UPDATE_REFERENCE_FORM,
} from '../../../actions/reference-form';

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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {useStyles} from './style';

// components
import FormItem from './form-item';

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

const themeSelect = createMuiTheme({
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
  addMaterial: (fname: string, description: string) => any;
  getMaterial: (id: string) => any;
  updateMaterial: (id: string, fname: string, description: string) => any;
}

interface IState {
  fname: string;
  description: string;
  initial: string;
  department: string;
}

const ReferenceModal = ({
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
    fname: '',
    description: '',
    initial: '',
    department: '',
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
            fname: data.name,
            description: data.description,
          });
        }
      });
    } else {
      handleResetForm();
    }
  }, [edit]);

  React.useEffect(() => {
    if (fieldState.fname.length > 0 && fieldState.description.length > 0) {
      setDisableSave(false);
    } else {
      setDisableSave(true);
    }
  }, [fieldState.fname, fieldState.description]);

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
      fname: '',
      description: '',
    });
    returnStatus(false, false);
  };

  const handleChange = (key: keyof IState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFieldState({...fieldState, [key]: event.target.value});
  };

  const handleSaveData = () => {
    addMaterial(fieldState.fname, fieldState.description).then(
      (result: any) => {
        if (result.statusText === 'Created') {
          handleResetForm();
          returnStatus(false, false);
        }
      }
    );
  };

  const handleUpdateData = () => {
    if (id !== undefined) {
      updateMaterial(id, fieldState.fname, fieldState.description).then(
        (result: any) => {
          console.log(result);
          if (result.statusText === 'OK') {
            returnStatus(false, false);
          }
        }
      );
    }
  };

  const handleDepartmentChange = (
    event: React.ChangeEvent<{value: unknown}>
  ) => {
    setFieldState({...fieldState, department: event.target.value as string});
  };

  return (
    <Dialog
      className="reference-modal"
      open={open}
      onClose={() => handleSave(false, false)}
      fullWidth={true}
    >
      <DialogTitle className={classes.formHeader}>
        {edit
          ? 'Update Reference Form' + fieldState.fname
          : 'Add Reference Form'}
      </DialogTitle>
      <DialogContent>
        <Grid container className={clsx(classes.grid, classes.gridTop)}>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="nameRef"
                label="Name *"
                margin="normal"
                autoComplete="off"
                onChange={handleChange('fname')}
                value={fieldState.fname}
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
                id="initial"
                label="Initial"
                margin="normal"
                autoComplete="off"
                type="string"
                onChange={handleChange('initial')}
                value={fieldState.initial}
              />
            </ThemeProvider>
          </Grid>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeSelect}>
              <FormControl className={classes.formControl}>
                <InputLabel
                  className={classes.formControlLabel}
                  htmlFor="department-label"
                >
                  Department
                </InputLabel>
                <Select
                  labelId="department-label"
                  id="department"
                  value={fieldState.department}
                  onChange={handleDepartmentChange}
                  className="department-select"
                >
                  <MenuItem className="department-select-menu" value="1">
                    Laboratory
                  </MenuItem>
                  <MenuItem className="department-select-menu" value="2">
                    X-Ray
                  </MenuItem>
                  <MenuItem className="department-select-menu" value="3">
                    Ultrasound
                  </MenuItem>
                  <MenuItem className="department-select-menu" value="4">
                    ECG
                  </MenuItem>
                  <MenuItem className="department-select-menu" value="5">
                    Dental X-Ray
                  </MenuItem>
                  <MenuItem className="department-select-menu" value="6">
                    2D Echo
                  </MenuItem>
                </Select>
              </FormControl>
            </ThemeProvider>
          </Grid>
        </Grid>
        <FormItem />
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
  addMaterial: (fname: string, description: string) =>
    dispatch(ADD_REFERENCE_FORM(fname, description)),
  getMaterial: (id: string) => dispatch(GET_REFERENCE_FORM(id)),
  updateMaterial: (id: string, fname: string, description: string) =>
    dispatch(UPDATE_REFERENCE_FORM(id, fname, description)),
});

export default connect(stateToProps, actionsToProps)(ReferenceModal);
