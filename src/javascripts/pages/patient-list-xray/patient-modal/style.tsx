import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexGrow: {
      flexGrow: 1,
    },
    saveButton: {
      color: '#fff',
      backgroundColor: '#394a6d',
      '&:hover': {
        backgroundColor: 'rgb(39, 51, 76)',
      },
      '&:active': {
        boxShadow:
          '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
      },
    },
    gridTop: {
      marginTop: '30px',
    },
    grid: {
      marginLeft: -15,
      marginRight: -15,
    },
    gridItem: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    formControl: {
      margin: '0px',
      width: '100%',
    },
    formControlLabel: {
      fontSize: '16px',
      lineHeight: '20px',
      color: '#222222',
      fontWeight: 300,
      outline: 'none !important',
    },
    formHeader: {
      backgroundColor: '#394a6d',
      color: '#FFFFFF',
    },
    formFooter: {
      backgroundColor: '#E9EAEF',
      paddingTop: '15px',
      paddingBottom: '15px',
      marginTop: '50px',
    },
    input: {
      display: 'none',
    },
    profilePicture: {
      marginTop: '45px',
    },
    profileImageLabel: {
      marginBottom: '10px',
      pointerEvents: 'none',
    },
    profileImage: {
      maxWidth: '150px',
      display: 'none',
      marginBottom: '10px',
    },
    profileImageShow: {
      display: 'block',
    },
    responsiveImage: {
      maxWidth: '100%',
    },
  })
);
