import React, {ReactElement} from 'react';
import {connect} from 'react-redux';
import {GET_USER_DATA} from '../../actions/user';

// MUI
import {useStyles} from './style';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

// images
import AvatarImage from '../../../assets/images/avatar.jpg';

// variables
const themeFloatingBtn = createMuiTheme({
  palette: {
    primary: {
      main: '#394a6d',
    },
  },
});

const DashboardSettingsProfileInformation = (props: any): ReactElement => {
  // variables
  const classes = useStyles();

  // use effects
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userID = user.user_id;
    console.log(userID);
    props.getUserData(userID).then((result: any) => {
      console.log(result);
    });
    document.title = 'Dashboard Profile Information | Jozon - Lizarondo';
    localStorage.setItem('page_title', 'Profile Information');
  });

  return (
    <div id="jlDashboardSettingsProfileInformation" className={classes.root}>
      <h1 className={classes.tabContentTitle}>Profile Information</h1>
      <Grid className={classes.grid}>
        <ThemeProvider theme={themeFloatingBtn}>
          <Fab className={classes.editBtn} color="primary" aria-label="edit">
            <EditIcon />
          </Fab>
        </ThemeProvider>
        <Grid className={classes.avatarCon}>
          <div>
            <Avatar className={classes.avatar} src={AvatarImage} />
            <div className={classes.avatarName}>Arvey Jimenez</div>
          </div>
        </Grid>
        <Grid className={classes.flexOne}>
          <Grid container className={classes.valueBlock}>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Username</div>
              <div className={classes.fieldValue}>xrayarvey</div>
            </Grid>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Email</div>
              <div className={classes.fieldValue}>arve505@gmail.com</div>
            </Grid>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Title</div>
              <div className={classes.fieldValue}>Mr.</div>
            </Grid>
          </Grid>
          <Grid container className={classes.valueBlock}>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Firstname</div>
              <div className={classes.fieldValue}>Arvey</div>
            </Grid>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Lastname</div>
              <div className={classes.fieldValue}>Jimenez</div>
            </Grid>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Middlename</div>
              <div className={classes.fieldValue}>R</div>
            </Grid>
          </Grid>
          <Grid container className={classes.valueBlock}>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Birthday</div>
              <div className={classes.fieldValue}>October 07, 1993</div>
            </Grid>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Address</div>
              <div className={classes.fieldValue}>
                Camp Tinio, Cabanatuan City, Nueva Ecija, Philippines
              </div>
            </Grid>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Contact No</div>
              <div className={classes.fieldValue}>09279432823</div>
            </Grid>
          </Grid>
          <Grid container className={classes.valueBlockNomargin}>
            <Grid item sm={4}>
              <div className={classes.fieldType}>Role</div>
              <div className={classes.fieldValue}>Administrator</div>
            </Grid>
            <Grid item sm={4}>
              <div className={classes.fieldType}>License No</div>
              <div className={classes.fieldValue}>0393-KRIW928-092</div>
            </Grid>
            <Grid item sm={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const stateToProps = () => ({});

const actionsToProps = (dispatch: any) => ({
  getUserData: (user_id: string) => dispatch(GET_USER_DATA(user_id)),
});

export default connect(
  stateToProps,
  actionsToProps
)(DashboardSettingsProfileInformation);
