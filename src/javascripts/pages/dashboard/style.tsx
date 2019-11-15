import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuConList: {
      paddingLeft: 8,
      paddingRight: 8,
    },
    menuButtonList: {
      color: '#222222',
      borderRadius: 4,
      marginBottom: 4,
      fontWeight: 600,
      fontSize: 16,
    },
    iconMenu: {
      color: '#222222',
    },
    iconMenuActive: {
      color: '#FFFFFF',
    },
    activeMenu: {
      background: '#394a6d',
      color: '#FFFFFF',
    },
    menuButton: {
      marginRight: 36,
    },
    white: {
      color: '#FFFFFF',
      fontSize: 20,
      lineHeight: 20,
    },
    settingsSpace: {
      marginRight: 10,
    },
    logo: {
      width: 40,
      display: 'none',
    },
    hide: {
      display: 'none',
    },
    show: {
      display: 'block',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    flexGrow: {
      flexGrow: 1,
    },
    appBarMenuDivider: {
      marginLeft: '15px',
      marginRight: '15px',
      height: '25px',
      background: '#d6d7da',
    },
    avatarCon: {
      display: 'flex',
      alignItems: 'center',
    },
    avatarName: {
      fontWeight: 300,
      marginLeft: '10px',
      fontSize: '14px',
    },
    avatarImage: {
      width: '25px',
      height: '25px',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    menuTitle: {},
    menuSubTitle: {},
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      color: '#222222',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    icon: {
      fontSize: 22,
    },
    iconText: {
      fontWeight: 600,
    },
    greetings: {
      color: '#222222',
      lineHeight: 1.5,
    },
    grid: {
      marginTop: 60,
      marginLeft: -15,
      marginRight: -15,
    },
    gridItem: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    search: {
      position: 'relative',
      borderRadius: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
      maxWidth: 250,
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: 42,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#222222',
    },
    inputRoot: {
      color: '#222222',
      fontSize: 14,
      fontWeight: 300,
      borderRadius: 100,
    },
    inputInput: {
      padding: '8px 8px 8px 42px',
      transition: theme.transitions.create('width'),
      width: '100%',
      borderRadius: 100,
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    fab: {
      marginRight: 15,
    },
    fabIcon: {
      fontSize: 30,
      color: '#FFFFFF',
    },
  })
);
