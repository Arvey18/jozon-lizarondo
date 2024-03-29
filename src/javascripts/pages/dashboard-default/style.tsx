import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    greetings: {
      color: '#222222',
      lineHeight: 1.5,
      display: 'flex',
      alignItems: 'center',
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
    fab: {
      marginRight: 15,
    },
    fabIcon: {
      fontSize: 30,
      color: '#FFFFFF',
    },
    flexGrow: {
      flexGrow: 1,
    },
    greetingsIcon: {
      marginRight: '10px',
      fontSize: '3.75rem',
      color: '#394a6d',
    },
  })
);
