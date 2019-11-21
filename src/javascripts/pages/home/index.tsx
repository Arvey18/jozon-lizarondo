import React, {ReactElement} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

// MUI
import Button from '@material-ui/core/Button';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AirlineSeatFlatAngledIcon from '@material-ui/icons/AirlineSeatFlatAngled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

export default function Home(props: any): ReactElement {
  const handleLogin = () => {
    props.history.push('/dashboard');
  };

  return (
    <div id="home">
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
              />
              <TextField
                fullWidth={true}
                id="password"
                label="Password"
                type="password"
                autoComplete="off"
                margin="normal"
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
}
