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
    editBtn: {
      position: 'absolute',
      right: '15px',
      top: '15px',
    },
    grid: {
      position: 'relative',
      background: '#FFFFFF',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
      padding: '45px 45px 45px 0px',
      width: '100%',
      borderRadius: '2px',
      display: 'flex',
      flexFlow: 'row wrap',
    },
    avatarCon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '45px',
      width: '300px',
    },
    avatar: {
      width: '120px',
      height: '120px',
    },
    avatarName: {
      fontSize: '14px',
      lineHeight: '18px',
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '15px',
    },
    fieldType: {
      fontSize: '10px',
      lineHeight: '12px',
      marginBottom: '2px',
      color: '#3c9d9b',
    },
    fieldValue: {
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: 600,
    },
    valueBlock: {
      paddingLeft: '15px',
      paddingRight: '15px',
      marginBottom: '30px',
    },
    valueBlockNomargin: {
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  })
);
