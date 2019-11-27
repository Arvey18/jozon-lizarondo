import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux';

// MUI
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useStyles} from './style';

// variables
const themeProgress = createMuiTheme({
  palette: {
    primary: {
      main: '#394a6d',
    },
  },
});

const ProgressBar = (props: any): ReactElement => {
  // variables
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, 'progress-bar-container', {
        [classes.show]: props.showProgressBar,
      })}
    >
      <ThemeProvider theme={themeProgress}>
        <LinearProgress variant="determinate" value={props.progressValue} />
      </ThemeProvider>
    </div>
  );
};

const stateToProps = ({apiCallProgress}: any) => ({
  showProgressBar: apiCallProgress.show,
  progressValue: apiCallProgress.progress,
});

const actionsToProps = (dispatch: any) => ({});

export default connect(stateToProps, actionsToProps)(ProgressBar);
