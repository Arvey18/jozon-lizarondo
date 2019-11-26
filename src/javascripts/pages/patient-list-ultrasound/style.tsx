import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootTable: {
      width: '100%',
      marginTop: 15,
      height: 'calc(100vh - 335px)'
    },
    tableWrapper: {
      maxHeight: 540,
      overflow: 'auto',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',

      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    greetings: {
      color: '#222222',
      lineHeight: 1.5
    },
    grid: {
      marginTop: 60,
      marginLeft: -15,
      marginRight: -15
    },
    gridItem: {
      paddingLeft: 15,
      paddingRight: 15
    },
    fab: {
      marginRight: 15
    },
    fabIcon: {
      fontSize: 30,
      color: '#FFFFFF'
    },
    flexGrow: {
      flexGrow: 1
    },
    search: {
      position: 'relative',
      borderRadius: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',

      '&:hover': {
        backgroundColor: '#FFFFFF'
      },
      // maxWidth: 100,
      marginRight: theme.spacing(2),
      // marginTop: 30,
      paddingLeft: 15,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(3),
        width: 'auto'
      }
    },
    filterCon: {
      marginTop: 30
    },
    searchIcon: {
      width: 42,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#222222'
    },
    inputRoot: {
      color: '#222222',
      fontSize: 14,
      fontWeight: 300,
      borderRadius: 100,
      width: '100%'
    },
    inputInput: {
      padding: '8px 8px 8px 42px',
      transition: theme.transitions.create('width'),
      width: '100%',
      borderRadius: 100,
      [theme.breakpoints.up('md')]: {
        width: '100%'
      }
    }
  })
);
