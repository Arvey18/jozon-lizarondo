import React from 'react';
import clsx from 'clsx';
import {Bar} from 'react-chartjs-2';

// MUI
// import { useTheme } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AirlineSeatFlatAngledIcon from '@material-ui/icons/AirlineSeatFlatAngled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BarChartIcon from '@material-ui/icons/BarChart';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {useStyles} from './style';

// styles
import './style.scss';

// images
import AvatarImage from '../../../assets/images/avatar.jpg';
import Logo from '../../../assets/images/logo.svg';

// variables
const themeSelect = createMuiTheme({
  palette: {
    primary: {
      main: '#52de97',
    },
  },
});

const themeFloatingBtn = createMuiTheme({
  palette: {
    primary: {
      main: '#394a6d',
    },
  },
});

export default function DashboardMiniDrawer() {
  // variables
  const classes = useStyles();
  // const theme = useTheme();
  const menus = [
    {
      text: 'Dashboard',
      icon: <PeopleIcon className={classes.icon} />,
      active: true,
    },
    {
      text: 'X-Ray',
      icon: <AccountBoxIcon className={classes.icon} />,
      active: false,
    },
    {
      text: 'Ultrasound',
      icon: <AirlineSeatFlatAngledIcon className={classes.icon} />,
      active: false,
    },
    {
      text: 'ECG',
      icon: <FavoriteIcon className={classes.icon} />,
      active: false,
    },
    {
      text: 'Laboratory',
      icon: <BarChartIcon className={classes.icon} />,
      active: false,
    },
  ];

  const menus2 = [
    {
      text: 'Report',
      icon: <NoteIcon className={classes.icon} />,
      active: false,
    },
    {
      text: 'Control',
      icon: <VideogameAssetIcon className={classes.icon} />,
      active: false,
    },
    {
      text: 'Reference',
      icon: <SettingsInputComponentIcon className={classes.icon} />,
      active: false,
    },
  ];
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
        // borderColor: [
        //   'rgba(0, 182, 122, 0.35)',
        //   'rgba(255, 66, 15, 0.35)',
        //   'rgba(122, 0, 255, 0.35)',
        //   'rgba(0, 187, 221, 0.35)',
        //   'rgba(122, 0, 255, 0.35)',
        //   'rgba(255, 66, 15, 0.35)',
        //   'rgba(0, 182, 122, 0.35)',
        //   'rgba(0, 187, 221, 0.35)',
        //   'rgba(255, 66, 15, 0.35)',
        //   'rgba(0, 182, 122, 0.35)',
        //   'rgba(0, 187, 221, 0.35)',
        //   'rgba(122, 0, 255, 0.35)',
        // ],
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
        // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        // hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 71, 42, 150, 134, 95, 89],
      },
    ],
  };

  // state
  const [open, setOpen] = React.useState(false);
  const [year, setYear] = React.useState(2019);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleYearChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setYear(event.target.value as number);
  };

  return (
    <div id="jlDrawer" className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography variant="h5" noWrap>
            Dashboard
          </Typography>
          <div className={classes.flexGrow}>
            <div className={clsx(classes.search)}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
              />
            </div>
          </div>
          <Grid className={classes.avatarCon}>
            <Avatar
              alt="profile-pic"
              src={AvatarImage}
              className={classes.avatarImage}
            />
            <Typography noWrap className={classes.avatarName}>
              Arvey Jimenez
            </Typography>
            <Divider
              className={classes.appBarMenuDivider}
              orientation="vertical"
            />
          </Grid>

          <Grid className={classes.avatarCon}>
            <IconButton
              aria-label="log out"
              size="small"
              className={classes.settingsSpace}
            >
              <SettingsIcon className={classes.white} />
            </IconButton>
            <IconButton aria-label="log out" size="small">
              <MeetingRoomIcon className={classes.white} />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          {/* <div className={classes.menuTitle}>JOZON - LIZARONDO</div>
          <div className={classes.menuSubTitle}>Cabanatuan Branch</div> */}
          <img
            src={Logo}
            alt="logo"
            className={clsx(classes.logo, {
              [classes.hide]: !open,
              [classes.show]: open,
            })}
          />
        </div>
        {/* <Divider /> */}
        <List className={classes.menuConList}>
          {menus.map((val, index) => (
            <ListItem
              className={clsx(classes.menuButtonList, {
                [classes.activeMenu]: val.active,
              })}
              button
              key={index}
            >
              <ListItemIcon
                className={clsx(classes.iconMenu, {
                  [classes.iconMenuActive]: val.active,
                })}
              >
                {val.icon}
              </ListItemIcon>
              <ListItemText
                classes={{primary: classes.iconText}}
                primary={val.text}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.menuConList}>
          {menus2.map((val, index) => (
            <ListItem button key={index}>
              <ListItemIcon
                className={clsx(classes.iconMenu, {
                  [classes.iconMenuActive]: val.active,
                })}
              >
                {val.icon}
              </ListItemIcon>
              <ListItemText
                classes={{primary: classes.iconText}}
                primary={val.text}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Grid container alignItems="center">
          <Typography
            className={clsx(classes.greetings, classes.flexGrow)}
            variant="h2"
            noWrap
          >
            Greetings Arvey!
          </Typography>
          <ThemeProvider theme={themeFloatingBtn}>
            <Fab
              color="primary"
              aria-label="Add Patient"
              className={classes.fab}
            >
              <AddIcon className={classes.fabIcon} />
            </Fab>
          </ThemeProvider>
        </Grid>
        <Grid container className={classes.grid}>
          <Grid className={clsx(classes.gridItem, 'status-box')} sm={3}>
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
          <Grid className={clsx(classes.gridItem, 'status-box')} sm={3}>
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
          <Grid className={clsx(classes.gridItem, 'status-box')} sm={3}>
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
          <Grid className={clsx(classes.gridItem, 'status-box')} sm={3}>
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
        <Grid container className="graph-dashboard">
          <div>
            <Grid className="graph-header" container alignItems="center">
              <h1 className={classes.flexGrow}>
                Patients Monthly Record - 2019
              </h1>
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
        <Grid container className="copyright">
          &copy; Jozon - Lizarondo 2019. All rights reserved.
        </Grid>
      </main>
    </div>
  );
}
