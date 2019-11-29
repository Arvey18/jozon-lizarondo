import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      paddingLeft: '30px',
      paddingBottom: '15px',
    },
    tabContentTitle: {
      fontSize: '30px',
      lineHeight: '38px',
      fontWeight: 700,
      marginTop: '0px',
      marginBottom: '30px',
    },
    flexOne: {
      flex: 1,
    },
    grid: {
      position: 'relative',
      background: '#FFFFFF',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
      padding: '35px 35px',
      width: '450px',
      borderRadius: '2px',
      display: 'flex',
      flexFlow: 'row wrap',
    },
    input: {
      marginTop: '0px',
      marginBottom: '15px',
    },
    label: {
      fontSize: '16px',
      lineHeight: '20px',
      color: '#222222',
      fontWeight: 300,
      '&.Mui-focused': {
        color: '#3c9d9b',
      },
      '&.Mui-focused.Mui-error': {
        color: '#f44336',
      },
    },
    field: {
      fontSize: '16px',
      lineHeight: '20px',
      color: '#222222',
      fontWeight: 300,
      '&:hover:not(.Mui-disabled):before': {
        borderColor: '#52de97',
      },
    },
    message: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    resetBtn: {
      marginTop: '30px',
      fontSize: '16px',
      lineHeight: '20px',
      paddingTop: '15px',
      paddingBottom: '15px',
      '&.Mui-disabled': {
        backgroundColor: 'rgba(57, 74, 109, 0.7)',
        color: '#FFFFFF',
      },
    },
  })
);
