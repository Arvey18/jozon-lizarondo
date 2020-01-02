import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

// MUI
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
import HomeIcon from '@material-ui/icons/Home';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useStyles} from './style';

// styles
import './style.scss';

// images
import AvatarImage from '../../../assets/images/avatar.jpg';
import Logo from '../../../assets/images/logo.svg';

// pages
import DashboardDefault from '../dashboard-default';
import DashboardPatients from '../patient-list';
import DashboardXRay from '../patient-list-xray';
import DashboardUltrasound from '../patient-list-ultrasound';
import DashboardECG from '../patient-list-ecg';
import DashboardLaboratory from '../patient-list-laboratory';
import DashboardSettings from '../settings';

export default function DashboardMiniDrawer(props: any): ReactElement {
  // variables
  const classes = useStyles();
  const location = props.history.location.pathname;
  const login = localStorage.getItem('login');
  const menus = [
    {
      text: 'Dashboard',
      icon: <HomeIcon className={classes.icon} />,
      route: '/dashboard',
      active: location === '/dashboard' ? true : false,
    },
    {
      text: 'Patients',
      icon: <PeopleIcon className={classes.icon} />,
      route: '/dashboard-patients/ ',
      active: location === '/dashboard-patients' ? true : false,
    },
    {
      text: 'X-Ray',
      icon: <AccountBoxIcon className={classes.icon} />,
      route: '/dashboard-xray',
      active: location === '/dashboard-xray' ? true : false,
    },
    {
      text: 'Ultrasound',
      icon: <AirlineSeatFlatAngledIcon className={classes.icon} />,
      route: '/dashboard-ultrasound',
      active: location === '/dashboard-ultrasound' ? true : false,
    },
    {
      text: 'ECG',
      icon: <FavoriteIcon className={classes.icon} />,
      route: '/dashboard-ecg',
      active: location === '/dashboard-ecg' ? true : false,
    },
    {
      text: 'Laboratory',
      icon: <BarChartIcon className={classes.icon} />,
      route: '/dashboard-laboratory',
      active: location === '/dashboard-laboratory' ? true : false,
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

  // state
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [pageTitle, setPageTitle] = React.useState('Dashboard');
  const [search, setSearch] = React.useState('');
  const openSettingsMenu = Boolean(anchorEl);

  // use effects
  React.useEffect(() => {
    return () => {
      const page_title = localStorage.getItem('page_title') as string;
      setPageTitle(page_title);
    };
  });

  // custom functions
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.setItem('login', 'false');
    localStorage.setItem('token', '');
    props.history.push('/');
  };

  const handleChangeRoute = (route: string) => {
    props.history.push(route);
  };

  const handleSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsMenuRoute = (route: string) => {
    setAnchorEl(null);
    props.history.push(route);
  };

  const handleSearch = () => {
    if (search !== '') {
      setSearch('');
      props.history.push('/dashboard-patients/' + search);
    }
  };

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setSearch(event.target.value as string);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
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
          <Typography variant="h5" noWrap className={classes.clicker}>
            {pageTitle === 'Dashboard' ? (
              <div>Dashboard</div>
            ) : (
              <div className={classes.prevRoute}>
                <span onClick={() => handleChangeRoute('/dashboard')}>
                  Dashboard
                </span>{' '}
                / <span className={classes.currentRoute}>{pageTitle}</span>
              </div>
            )}
          </Typography>
          <div className={classes.flexGrow}>
            {location === '/dashboard' ? (
              <div className={clsx(classes.search)}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search Patient…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{'aria-label': 'search patient'}}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
            ) : null}
          </div>
          <Grid className={classes.avatarCon}>
            <div
              onClick={() =>
                handleChangeRoute('/dashboard-settings-profile-information')
              }
              className={classes.avatarClicker}
            >
              <Avatar
                alt="profile-pic"
                src={AvatarImage}
                className={classes.avatarImage}
              />
              <Typography noWrap className={classes.avatarName}>
                Arvey Jimenez
              </Typography>
            </div>
            <Divider
              className={classes.appBarMenuDivider}
              orientation="vertical"
            />
          </Grid>

          <Grid className={classes.avatarCon}>
            <div>
              <IconButton
                aria-label="log out"
                size="small"
                className={classes.settingsSpace}
                onClick={handleSettingsMenu}
              >
                <SettingsIcon className={classes.white} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={openSettingsMenu}
                onClose={handleClose}
                className={classes.settingsMenu}
                MenuListProps={{
                  className: classes.settingsMenu,
                }}
              >
                <MenuItem
                  className={classes.menuItem}
                  onClick={() =>
                    handleSettingsMenuRoute(
                      '/dashboard-settings-profile-information'
                    )
                  }
                >
                  Profile Information
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={() =>
                    handleSettingsMenuRoute(
                      '/dashboard-settings-user-management'
                    )
                  }
                >
                  Users Management
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={() =>
                    handleSettingsMenuRoute('/dashboard-settings-password')
                  }
                >
                  Password
                </MenuItem>
              </Menu>
            </div>

            <IconButton
              onClick={handleLogout}
              aria-label="log out"
              size="small"
            >
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
          <img
            src={Logo}
            alt="logo"
            className={clsx(classes.logo, {
              [classes.hide]: !open,
              [classes.show]: open,
            })}
          />
        </div>
        <List className={classes.menuConList}>
          {menus.map((val, index) => (
            <ListItem
              className={clsx(classes.menuButtonList, {
                [classes.activeMenu]: val.active,
              })}
              button
              key={index}
              onClick={() => handleChangeRoute(val.route)}
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
        <div>
          {login === 'false' ? <Redirect to="/" /> : null}
          <Route exact path="/dashboard" component={DashboardDefault} />
          <Route
            exact
            path="/dashboard-patients/:search?/"
            component={DashboardPatients}
          />
          <Route exact path="/dashboard-xray" component={DashboardXRay} />
          <Route
            exact
            path="/dashboard-ultrasound"
            component={DashboardUltrasound}
          />
          <Route exact path="/dashboard-ECG" component={DashboardECG} />
          <Route
            exact
            path="/dashboard-laboratory"
            component={DashboardLaboratory}
          />
          <Route
            exact
            path="/dashboard-settings"
            component={DashboardSettings}
          />
          <Route
            exact
            path="/dashboard-settings-profile-information"
            component={DashboardSettings}
          />
          <Route
            exact
            path="/dashboard-settings-user-management"
            component={DashboardSettings}
          />
          <Route
            exact
            path="/dashboard-settings-password"
            component={DashboardSettings}
          />
        </div>
        <Grid container className="copyright">
          <div>&copy; Jozon - Lizarondo 2019. All rights reserved.</div>
        </Grid>
      </main>
    </div>
  );
}
