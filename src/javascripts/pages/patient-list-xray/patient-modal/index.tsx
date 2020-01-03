import React, {ReactElement} from 'react';
import clsx from 'clsx';

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
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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
  returnStatus: (show: boolean, edit: boolean) => void;
}

const themeSelect = createMuiTheme({
  palette: {
    primary: {
      main: '#52de97',
    },
  },
});

export default function DeleteModal({
  show,
  edit,
  returnStatus,
}: IProps): ReactElement {
  // variables
  const classes = useStyles();

  // use states
  const [open, setOpen] = React.useState(false);
  const [lastname, setLastname] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [middlename, setMiddlename] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [birthday, setBirthday] = React.useState<Date | null>(new Date());
  const [gender, setGender] = React.useState('male');
  const [civilStatus, setCivilStatus] = React.useState('single');
  const [showProfile, setShowProfile] = React.useState(false);

  // use effects
  React.useEffect(() => {
    // if (edit) {
    // }
    setOpen(show);
  }, [show]);

  // custom functions
  const handleSave = (status: boolean, edit: boolean) => {
    returnStatus(status, edit);
    if (status) {
      returnStatus(false, edit);
    } else {
      returnStatus(status, edit);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setBirthday(date);
  };

  const handleGenderChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setGender(event.target.value as string);
  };

  const handleCivilStatusChange = (
    event: React.ChangeEvent<{value: unknown}>
  ) => {
    setCivilStatus(event.target.value as string);
  };

  const handleFileUpload = (
    event: React.ChangeEvent<{value: unknown; files: any}>
  ) => {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (e: any) => {
        const profileImage: any = document.getElementById('profileImage');
        profileImage.setAttribute('src', e.target.result);
        setShowProfile(true);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleResetForm = () => {
    returnStatus(false, false);
    setBirthday(new Date());
    setGender('male');
    setCivilStatus('single');
    setShowProfile(false);
    setLastname('');
    setFirstname('');
    setMiddlename('');
    setContact('');
    setAddress('');
  };

  return (
    <Dialog
      className="patient-modal"
      open={open}
      onClose={() => handleSave(false, false)}
    >
      <DialogTitle className={classes.formHeader}>Add Patient</DialogTitle>
      <DialogContent>
        <Grid container className={clsx(classes.grid, classes.gridTop)}>
          <Grid item className={clsx(classes.gridItem)} sm={5}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="lastname"
                label="Lastname *"
                margin="normal"
                autoComplete="off"
              />
            </ThemeProvider>
          </Grid>
          <Grid item className={clsx(classes.gridItem)} sm={5}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="fisrtname"
                label="Firstname *"
                margin="normal"
                autoComplete="off"
              />
            </ThemeProvider>
          </Grid>
          <Grid item className={clsx(classes.gridItem)} sm={2}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="middleinitial"
                label="M.I."
                margin="normal"
                autoComplete="off"
              />
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={classes.grid}>
          <Grid item className={clsx(classes.gridItem)} sm={12}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="address"
                label="Address"
                margin="normal"
                autoComplete="off"
              />
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={classes.grid}>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="contact"
                label="Contact No."
                margin="normal"
                autoComplete="off"
              />
            </ThemeProvider>
          </Grid>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <ThemeProvider theme={themeInput}>
                <KeyboardDatePicker
                  margin="normal"
                  id="birthday"
                  label="Date of Birth *"
                  format="MM/dd/yyyy"
                  value={birthday}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'birthdays',
                  }}
                  fullWidth={true}
                />
              </ThemeProvider>
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid container className={classes.grid}>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeSelect}>
              <FormControl className={classes.formControl}>
                <InputLabel
                  className={classes.formControlLabel}
                  htmlFor="gender-label"
                >
                  Gender
                </InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  className="gender-select"
                >
                  <MenuItem className="gender-select-menu" value="male">
                    Male
                  </MenuItem>
                  <MenuItem className="gender-select-menu" value="female">
                    Female
                  </MenuItem>
                </Select>
              </FormControl>
            </ThemeProvider>
          </Grid>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <ThemeProvider theme={themeSelect}>
              <FormControl className={classes.formControl}>
                <InputLabel
                  className={classes.formControlLabel}
                  htmlFor="civil-status-label"
                >
                  Civil Status
                </InputLabel>
                <Select
                  labelId="civil-status-label"
                  id="civil-status"
                  value={civilStatus}
                  onChange={handleCivilStatusChange}
                  className="civil-status-select"
                >
                  <MenuItem className="civil-status-select-menu" value="single">
                    Single
                  </MenuItem>
                  <MenuItem
                    className="civil-status-select-menu"
                    value="married"
                  >
                    Married
                  </MenuItem>
                  <MenuItem
                    className="civil-status-select-menu"
                    value="widowed"
                  >
                    Widowed
                  </MenuItem>
                  <MenuItem
                    className="civil-status-select-menu"
                    value="divorced"
                  >
                    Divorced
                  </MenuItem>
                  <MenuItem
                    className="civil-status-select-menu"
                    value="separated"
                  >
                    Separated
                  </MenuItem>
                </Select>
              </FormControl>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={clsx(classes.grid, classes.profilePicture)}>
          <Grid item className={clsx(classes.gridItem)} sm={12}>
            <input
              accept="image/*"
              className={classes.input}
              id="profile-image"
              type="file"
              onChange={handleFileUpload}
            />
            <InputLabel
              className={classes.profileImageLabel}
              htmlFor="profile-image"
            >
              Profile Image
            </InputLabel>
            <div
              className={clsx(
                classes.profileImage,
                showProfile ? classes.profileImageShow : ''
              )}
            >
              <img
                className={classes.responsiveImage}
                id="profileImage"
                src=""
                alt="profile"
              />
            </div>
            <label htmlFor="profile-image">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.formFooter}>
        <Button onClick={handleResetForm}>Cancel</Button>
        <Button
          className={classes.saveButton}
          onClick={() => handleSave(true, false)}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
