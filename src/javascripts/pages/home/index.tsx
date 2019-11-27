import React, {ReactElement} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {LOGIN} from '../../actions/auth';
import clsx from 'clsx';
import {useStyles} from './style';

// MUI
import Button from '@material-ui/core/Button';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AirlineSeatFlatAngledIcon from '@material-ui/icons/AirlineSeatFlatAngled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';

// images
import Logo from '../../../assets/images/logo.svg';

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
const themeButton = createMuiTheme({
  palette: {
    primary: {
      main: '#394a6d',
    },
  },
});

const Home = (props: any): ReactElement => {
  // variables
  const classes = useStyles();

  // states
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errormessage, setErrorMessage] = React.useState('');
  const [showerrormessage, setShowErrorMessage] = React.useState(false);
  const [disablebutton, setDisableButton] = React.useState(true);

  // use effects
  React.useEffect(() => {
    const login = localStorage.getItem('login');
    const token = localStorage.getItem('token');
    if (login === 'true' && token !== '') {
      props.history.push('/dashboard');
    } else {
      localStorage.setItem('login', 'false');
      localStorage.setItem('token', '');
    }
  });

  React.useEffect(() => {
    const handleCheckInput = () => {
      if (username !== '' && password !== '') {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    };
    handleCheckInput();
  }, [username, password]);

  // custom functions
  const handleUsernameChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setUsername(event.target.value as string);
  };

  const handlePasswordChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setPassword(event.target.value as string);
  };

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      props.login(username, password).then((result: any) => {
        if (result.detail === undefined) {
          props.history.push('/dashboard');
          localStorage.setItem('login', 'true');
          localStorage.setItem('token', result.access);
        } else {
          setErrorMessage('You have entered incorrect Username or Password.');
          setShowErrorMessage(true);
        }
      });
    } else {
      setErrorMessage('Please enter Username and Password.');
      setShowErrorMessage(true);
    }
  };

  const handleCloseSnackBar = () => {
    setShowErrorMessage(!showerrormessage);
  };

  return (
    <div id="home">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={showerrormessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <SnackbarContent
          className={clsx(classes.error, classes.margin)}
          aria-describedby="form-message"
          message={
            <span id="form-message" className={classes.message}>
              <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
              {errormessage}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackBar}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
      <div className="screensaver">
        <div>
          <h1>
            <img src={Logo} alt="jl-logo" /> Jozon - Lizarondo
          </h1>
          <div className="description">
            Imaging and Diagnostic. Formerly Dr. Benedicto M. Joson Sr.
          </div>
          <div className="services">
            <ul>
              <li>
                <div className="icon-con">
                  <AccountBoxIcon />
                </div>
                <strong>X-Ray</strong> patients with any issues.
              </li>
              <li>
                <div className="icon-con">
                  <AirlineSeatFlatAngledIcon />
                </div>
                <strong>Ultrasound</strong> mothers giving births.
              </li>
              <li>
                <div className="icon-con">
                  <BarChartIcon />
                </div>
                <strong>Laboratory</strong> examine and analyze body.
              </li>
              <li>
                <div className="icon-con">
                  <FavoriteIcon />
                </div>
                <strong>2D-Echo</strong> for heart health issues.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="login-form-section">
        <div className="form-container">
          <h1>Welcome to Jozon - Lizarondo App!</h1>
          <div className="main-form">
            <ThemeProvider theme={themeInput}>
              <TextField
                fullWidth={true}
                id="username"
                label="Username"
                margin="normal"
                autoComplete="off"
                onChange={handleUsernameChange}
                value={username}
                error={showerrormessage}
              />
              <TextField
                fullWidth={true}
                id="password"
                label="Password"
                type="password"
                autoComplete="off"
                margin="normal"
                onChange={handlePasswordChange}
                value={password}
                error={showerrormessage}
              />
            </ThemeProvider>
            <ThemeProvider theme={themeButton}>
              <Button
                startIcon={<ExitToAppIcon />}
                size="large"
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={() => handleLogin()}
                disabled={disablebutton}
              >
                Log In
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; Jozon - Lizarondo 2019. All rights reserved.
      </div>
    </div>
  );
};

const stateToProps = () => ({});

const actionsToProps = (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(LOGIN(username, password)),
});

export default connect(stateToProps, actionsToProps)(Home);
