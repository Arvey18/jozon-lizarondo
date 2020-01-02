import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexGrow: {
      flexGrow: 1,
    },
    dangerButton: {
      color: '#f44336',
    },
  })
);
