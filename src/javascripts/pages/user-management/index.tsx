import React, {ReactElement} from 'react';
// import clsx from 'clsx';

// MUI
import {useStyles} from './style';

export default function DashboardSettingsUserManagement(
  props: any
): ReactElement {
  // variables
  const classes = useStyles();

  // use effects
  React.useEffect(() => {
    document.title = 'Dashboard User Management | Jozon - Lizarondo';
    localStorage.setItem('page_title', 'User Management');
  });

  return (
    <div id="jlDashboardSettingsUserManagement" className={classes.root}>
      <h1 className={classes.tabContentTitle}>User Management</h1>
    </div>
  );
}
