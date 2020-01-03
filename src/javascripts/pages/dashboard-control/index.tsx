import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {Route} from 'react-router-dom';

// MUI
import {useStyles} from './style';
import SettingsIcon from '@material-ui/icons/Settings';

// pages
import ControlMaterials from '../control-materials';

export default function DashboardControl(props: any): ReactElement {
  // variables
  const classes = useStyles();
  const location = props.history.location.pathname;

  // custom functions
  const handleChangeTab = (route: string) => {
    props.history.push(route);
  };

  return (
    <div id="jlDashboardControl" className={classes.root}>
      <div className={classes.sectionHeader}>
        <h1 className={classes.headerText}>
          <SettingsIcon className={classes.headerIcon} /> Controls
        </h1>
      </div>
      <div className={clsx(classes.flexOne, classes.settingsContent)}>
        <div className={classes.tabButtons}>
          <div
            className={clsx(
              classes.tabButton,
              location === '/dashboard-control-materials' ? 'active' : ''
            )}
            onClick={() => handleChangeTab('/dashboard-control-materials')}
          >
            Materials
          </div>
        </div>
        <div className={clsx(classes.tabButtonsContent, classes.flexOne)}>
          <Route
            exact
            path="/dashboard-control-materials"
            component={ControlMaterials}
          />
        </div>
      </div>
    </div>
  );
}
