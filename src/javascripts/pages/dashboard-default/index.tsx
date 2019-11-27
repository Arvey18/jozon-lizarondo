import React, {ReactElement} from 'react';
import clsx from 'clsx';

// MUI
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './style';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AirlineSeatFlatAngledIcon from '@material-ui/icons/AirlineSeatFlatAngled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BarChartIcon from '@material-ui/icons/BarChart';

// components
import PatientGraph from '../../components/patient-graph';

// variables
const themeFloatingBtn = createMuiTheme({
  palette: {
    primary: {
      main: '#394a6d',
    },
  },
});

export default function DashboardDefault(props: any): ReactElement {
  // variables
  const classes = useStyles();

  // use effects
  React.useEffect(() => {
    document.title = 'Dashboard | Jozon - Lizarondo';
  });

  return (
    <div id="jlDashboardDefault">
      <Grid container alignItems="center">
        <Typography
          className={clsx(classes.greetings, classes.flexGrow)}
          variant="h2"
          noWrap
        >
          Greetings Arvey!
        </Typography>
        <ThemeProvider theme={themeFloatingBtn}>
          <Fab color="primary" aria-label="Add Patient" className={classes.fab}>
            <AddIcon className={classes.fabIcon} />
          </Fab>
        </ThemeProvider>
      </Grid>
      <Grid container className={classes.grid}>
        <Grid item className={clsx(classes.gridItem, 'status-box')} sm={3}>
          <div>
            <div className="icon-con">
              <AccountBoxIcon />
            </div>
            <h3>X-Ray</h3>
            <div className="count-patient">482</div>
            <Divider />
            <div className="percent-count-patient">
              25% of total patient record this year.
            </div>
          </div>
        </Grid>
        <Grid item className={clsx(classes.gridItem, 'status-box')} sm={3}>
          <div>
            <div className="icon-con orange-con">
              <AirlineSeatFlatAngledIcon />
            </div>
            <h3>Ultrasound</h3>
            <div className="count-patient">254</div>
            <Divider />
            <div className="percent-count-patient">
              45% of total patient record this year.
            </div>
          </div>
        </Grid>
        <Grid item className={clsx(classes.gridItem, 'status-box')} sm={3}>
          <div>
            <div className="icon-con purple-con">
              <FavoriteIcon />
            </div>
            <h3>ECG</h3>
            <div className="count-patient">123</div>
            <Divider />
            <div className="percent-count-patient">
              15% of total patient record this year.
            </div>
          </div>
        </Grid>
        <Grid item className={clsx(classes.gridItem, 'status-box')} sm={3}>
          <div>
            <div className="icon-con blue-con">
              <BarChartIcon />
            </div>
            <h3>Laboratory</h3>
            <div className="count-patient">198</div>
            <Divider />
            <div className="percent-count-patient">
              30% of total patient record this year.
            </div>
          </div>
        </Grid>
      </Grid>
      <PatientGraph title="Patient Monthly Record" />
    </div>
  );
}
