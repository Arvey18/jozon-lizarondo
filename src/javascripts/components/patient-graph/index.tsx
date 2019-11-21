import React, {ReactElement} from 'react';
import {Bar} from 'react-chartjs-2';

// MUI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './style';

// styles
import './style.scss';

// variables
const themeSelect = createMuiTheme({
  palette: {
    primary: {
      main: '#52de97',
    },
  },
});

interface IProps {
  title: string;
}

export default function PatientGraph({title}: IProps): ReactElement {
  // variables
  const classes = useStyles();
  const options = {
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#222222',
            fontFamily: 'Roboto',
            fontSize: 14,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: '#222222',
            fontFamily: 'Roboto',
            fontSize: 14,
          },
        },
      ],
    },
  };
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Monthly Record',
        backgroundColor: [
          '#00b67a',
          '#ff420f',
          '#7a00ff',
          '#00bbdd',
          '#7a00ff',
          '#ff420f',
          '#00b67a',
          '#00bbdd',
          '#ff420f',
          '#00b67a',
          '#00bbdd',
          '#7a00ff',
        ],
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 71, 42, 150, 134, 95, 89],
      },
    ],
  };
  const [year, setYear] = React.useState(2019);
  const handleYearChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setYear(event.target.value as number);
  };
  return (
    <Grid container className="graph-dashboard">
      <div>
        <Grid className="graph-header" container alignItems="center">
          <h1 className={classes.flexGrow}>{title} - 2019</h1>
          <ThemeProvider theme={themeSelect}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              onChange={handleYearChange}
              className="year-select"
            >
              <MenuItem className="year-select-menu" value={2019}>
                2019
              </MenuItem>
              <MenuItem className="year-select-menu" value={2018}>
                2018
              </MenuItem>
              <MenuItem className="year-select-menu" value={2017}>
                2017
              </MenuItem>
            </Select>
          </ThemeProvider>
        </Grid>
        <div className="graph-con">
          <Bar data={data} width={100} height={20} options={options} />
        </div>
      </div>
    </Grid>
  );
}
