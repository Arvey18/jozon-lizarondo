import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 9999,
      display: 'none',
    },
    show: {
      display: 'block',
    },
    flexGrow: {
      flexGrow: 1,
    },
  })
);
