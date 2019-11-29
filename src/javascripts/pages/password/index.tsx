import React, {ReactElement} from 'react';

// MUI
import {useStyles} from './style';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

// variables
const themeInput = createMuiTheme({
  palette: {
    primary: {
      main: '#52de97',
    },
  },
});

const themeButton = createMuiTheme({
  palette: {
    primary: {
      main: '#394a6d',
    },
  },
});

export default function DashboardSettingsPassword(props: any): ReactElement {
  // variables
  const classes = useStyles();

  // states
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const [reenterpassword, setReEnterPassword] = React.useState('');
  const [errorreenterpassword, setErrorReEnterPassword] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [disableBtn, setDisableBtn] = React.useState(true);

  // use effects
  React.useEffect(() => {
    document.title = 'Dashboard Password | Jozon - Lizarondo';
    localStorage.setItem('page_title', 'Password');
  });

  React.useEffect(() => {
    const handleCheckPasswords = () => {
      if (
        password.length !== 0 &&
        reenterpassword.length !== 0 &&
        password === reenterpassword
      ) {
        setDisableBtn(false);
      } else {
        setDisableBtn(true);
      }
    };
    handleCheckPasswords();
  }, [password, reenterpassword]);

  // custom functions
  const handlePasswordChange = (event: React.ChangeEvent<{value: unknown}>) => {
    const val = event.target.value as string;
    console.log(val, val.length);
    setPassword(val);

    if (val.length >= 8) {
      setError(false);
      setDisable(false);
    } else {
      setError(true);
      setDisable(true);
    }
    if (val.length === 0) {
      setError(false);
      setDisable(true);
      setReEnterPassword('');
      setErrorReEnterPassword(false);
    }
  };

  const handleRenterPasswordChange = (
    event: React.ChangeEvent<{value: unknown}>
  ) => {
    const val = event.target.value as string;
    setReEnterPassword(val);
    if (val !== password) {
      setErrorReEnterPassword(true);
    } else {
      setErrorReEnterPassword(false);
    }
  };

  const handleResetPassword = () => {
    console.log('reset');
  };

  return (
    <div id="jlDashboardSettingsPassword" className={classes.root}>
      <h1 className={classes.tabContentTitle}>Password</h1>
      <Grid className={classes.grid}>
        <ThemeProvider theme={themeInput}>
          <TextField
            fullWidth={true}
            id="newpassword"
            label="New Password"
            margin="normal"
            autoComplete="off"
            onChange={handlePasswordChange}
            value={password}
            error={error}
            type="password"
            className={classes.input}
            InputLabelProps={{
              className: classes.label,
            }}
            InputProps={{
              className: classes.field,
            }}
          />
        </ThemeProvider>
        <ThemeProvider theme={themeInput}>
          <TextField
            fullWidth={true}
            id="reenterpassword"
            label="Re-Enter Password"
            margin="normal"
            autoComplete="off"
            onChange={handleRenterPasswordChange}
            value={reenterpassword}
            error={errorreenterpassword}
            type="password"
            className={classes.input}
            disabled={disable}
            InputLabelProps={{
              className: classes.label,
            }}
            InputProps={{
              className: classes.field,
            }}
          />
        </ThemeProvider>
        <ThemeProvider theme={themeButton}>
          <Button
            startIcon={<RotateLeftIcon />}
            size="large"
            variant="contained"
            color="primary"
            fullWidth={true}
            onClick={() => handleResetPassword()}
            className={classes.resetBtn}
            disabled={disableBtn}
          >
            Reset Password
          </Button>
        </ThemeProvider>
      </Grid>
    </div>
  );
}
