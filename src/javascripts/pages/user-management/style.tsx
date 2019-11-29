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
  })
);
