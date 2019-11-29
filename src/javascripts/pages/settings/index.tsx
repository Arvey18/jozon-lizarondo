import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {Route} from 'react-router-dom';

// MUI
import {useStyles} from './style';
import SettingsIcon from '@material-ui/icons/Settings';

// pages
import ProfileInformation from '../profile-information';
import UserManagement from '../user-management';
import Password from '../password';

export default function DashboardSettings(props: any): ReactElement {
  // variables
  const classes = useStyles();
  const location = props.history.location.pathname;

  // custom functions
  const handleChangeTab = (route: string) => {
    props.history.push(route);
  };
  return (
    <div id="jlDashboardSettings" className={classes.root}>
      <div className={classes.sectionHeader}>
        <h1 className={classes.headerText}>
          <SettingsIcon className={classes.headerIcon} /> Settings
        </h1>
      </div>
      <div className={clsx(classes.flexOne, classes.settingsContent)}>
        <div className={classes.tabButtons}>
          <div
            className={clsx(
              classes.tabButton,
              location === '/dashboard-settings-profile-information'
                ? 'active'
                : ''
            )}
            onClick={() =>
              handleChangeTab('/dashboard-settings-profile-information')
            }
          >
            Profile Information
          </div>
          <div
            className={clsx(
              classes.tabButton,
              location === '/dashboard-settings-user-management' ? 'active' : ''
            )}
            onClick={() =>
              handleChangeTab('/dashboard-settings-user-management')
            }
          >
            User Management
          </div>
          <div
            className={clsx(
              classes.tabButton,
              location === '/dashboard-settings-password' ? 'active' : ''
            )}
            onClick={() => handleChangeTab('/dashboard-settings-password')}
          >
            Password
          </div>
        </div>
        <div className={clsx(classes.tabButtonsContent, classes.flexOne)}>
          <Route
            exact
            path="/dashboard-settings-profile-information"
            component={ProfileInformation}
          />
          <Route
            exact
            path="/dashboard-settings-user-management"
            component={UserManagement}
          />
          <Route
            exact
            path="/dashboard-settings-password"
            component={Password}
          />
        </div>
      </div>
    </div>
  );
}
