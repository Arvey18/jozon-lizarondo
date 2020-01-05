import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux';
import {
  ADD_REFERENCE_FORM,
  GET_REFERENCE_FORM,
  UPDATE_REFERENCE_FORM,
} from '../../../actions/reference-form';
import {GET_DEPARTMENTS} from '../../../actions/department';

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
  addReference: (
    fname: string,
    description: string,
    initial: string,
    department: string,
    formItem: string
  ) => any;
  getReferenceForm: (id: string) => any;
  updateMaterial: (id: string, fname: string, description: string) => any;
  getDepartments: () => any;
}

interface IState {
  fname: string;
  description: string;
  initial: string;
  department: string;
  formItem: any;
}

const ReferenceModal = ({
  show,
  edit,
  id,
  returnStatus,
  addReference,
  getReferenceForm,
  updateMaterial,
  getDepartments,
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
    formItem: '',
  });
  const [disableSave, setDisableSave] = React.useState(true);
  const [departments, setDepartments] = React.useState([]);

  // use effects
  React.useEffect(() => {
    if (departments.length === 0) {
      getDepartments().then((result: any) => {
        if (result.statusText === 'OK') {
          setDepartments(result.data);
        }
      });
    }
  }, [departments]);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  React.useEffect(() => {
    if (edit && id !== undefined) {
      getReferenceForm(id).then((result: any) => {
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
    if (
      fieldState.fname.length > 0 &&
      fieldState.description.length > 0 &&
      fieldState.initial.length > 0 &&
      fieldState.department.length > 0
    ) {
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
      initial: '',
      department: '',
      formItem: '',
    });
    returnStatus(false, false);
  };

  const handleChange = (key: keyof IState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFieldState({...fieldState, [key]: event.target.value});
  };

  const handleSaveData = () => {
    addReference(
      fieldState.fname,
      fieldState.description,
      fieldState.initial,
      fieldState.department,
      fieldState.formItem
    ).then((result: any) => {
      if (result.statusText === 'Created') {
        handleResetForm();
        returnStatus(false, false);
      }
    });
  };

  const handleSetFormItem = (formItem: any) => {
    setFieldState({
      ...fieldState,
      formItem: formItem,
    });
  };

  const handleUpdateData = () => {
    if (id !== undefined) {
      updateMaterial(id, fieldState.fname, fieldState.description).then(
        (result: any) => {
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
                label="Initial *"
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
                  Department *
                </InputLabel>
                <Select
                  labelId="department-label"
                  id="department"
                  value={fieldState.department}
                  onChange={handleDepartmentChange}
                  className="department-select"
                >
                  {departments.length > 0
                    ? departments.map((value: any, key: any) => {
                        return (
                          <MenuItem
                            key={key}
                            className="department-select-menu"
                            value={value.id}
                          >
                            {value.name}
                          </MenuItem>
                        );
                      })
                    : null}
                </Select>
              </FormControl>
            </ThemeProvider>
          </Grid>
        </Grid>
        <FormItem
          getFormItem={(formItem: any) => handleSetFormItem(formItem)}
        />
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
  addReference: (
    fname: string,
    description: string,
    initial: string,
    department: string,
    formItem: any
  ) =>
    dispatch(
      ADD_REFERENCE_FORM(fname, description, initial, department, formItem)
    ),
  getReferenceForm: (id: string) => dispatch(GET_REFERENCE_FORM(id)),
  updateMaterial: (id: string, fname: string, description: string) =>
    dispatch(UPDATE_REFERENCE_FORM(id, fname, description)),
  getDepartments: () => dispatch(GET_DEPARTMENTS()),
});

export default connect(stateToProps, actionsToProps)(ReferenceModal);
