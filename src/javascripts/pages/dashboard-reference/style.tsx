import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexFlow: 'column wrap',
      height: '100%',
      minHeight: 'calc(100vh - 185px)',
    },
    sectionHeader: {
      display: 'flex',
      width: '100%',
    },
    headerText: {
      fontSize: '30px',
      lineHeight: '38px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      paddingBottom: '30px',
      borderBottom: '1px solid #c5c5c5',
      marginTop: '0px',
      marginBottom: '0px',
      width: '100%',
    },
    headerIcon: {
      fontSize: '48px',
      fontWeight: 700,
      color: '#394a6d',
      marginRight: '10px',
    },
    flexOne: {
      flex: 1,
    },
    settingsContent: {
      paddingTop: '45px',
      display: 'flex',
      flexFlow: 'row wrap',
      // paddingBottom: '30px',
    },
    tabButtons: {
      width: '210px',
    },
    tabButton: {
      width: '100%',
      fontSize: '20px',
      lineHeight: '25px',
      padding: '7px 16px 8px',
      borderRadius: '4px',
      marginBottom: '10px',
      cursor: 'pointer',
      backgroundColor: '#E9EAEF',
      transition: 'ease 0.3s background-color',
      '&:hover': {
        backgroundColor: '#394a6d',
        color: '#FFFFFF',
      },
      '&.active': {
        backgroundColor: '#394a6d',
        color: '#FFFFFF',
      },
    },
    tabButtonsContent: {
      overflowY: 'scroll',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      position: 'relative',
      height: '100%',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  })
);
