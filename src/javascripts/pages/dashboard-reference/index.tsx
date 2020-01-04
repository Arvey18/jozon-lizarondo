import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {Route} from 'react-router-dom';

// MUI
import {useStyles} from './style';
import SettingsIcon from '@material-ui/icons/Settings';

// pages
import ReferenceForm from '../reference-form';

export default function DashboardControl(props: any): ReactElement {
  // variables
  const classes = useStyles();
  const location = props.history.location.pathname;

  // custom functions
  const handleChangeTab = (route: string) => {
    props.history.push(route);
  };

  return (
    <div id="jlDashboardReference" className={classes.root}>
      <div className={classes.sectionHeader}>
        <h1 className={classes.headerText}>
          <SettingsIcon className={classes.headerIcon} /> Reference
        </h1>
      </div>
      <div className={clsx(classes.flexOne, classes.settingsContent)}>
        <div className={classes.tabButtons}>
          <div
            className={clsx(
              classes.tabButton,
              location === '/dashboard-reference-form' ? 'active' : ''
            )}
            onClick={() => handleChangeTab('/dashboard-reference-form')}
          >
            Reference Form
          </div>
        </div>
        <div className={clsx(classes.tabButtonsContent, classes.flexOne)}>
          <Route
            exact
            path="/dashboard-reference-form"
            component={ReferenceForm}
          />
        </div>
      </div>
    </div>
  );
}
