import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexGrow: {
      flexGrow: 1,
    },
    saveButton: {
      color: '#fff',
      backgroundColor: '#394a6d',
      '&:hover': {
        backgroundColor: 'rgb(39, 51, 76)',
      },
      '&:active': {
        boxShadow:
          '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
      },
    },
    headerTitle: {
      fontSize: '15px',
      margin: '15px 0px 15px 0px',
    },
    headerTitleList: {
      fontSize: '15px',
      margin: '0px 0px 15px 0px',
    },
    formItemField: {
      marginBottom: '20px !important',
    },
    formItemListCon: {
      padding: '15px',
      width: '100%',
      // height: '100%',
      backgroundColor: '#E9EAEF',
      borderRadius: '2px',
      display: 'flex',
      flexFlow: 'column wrap',
    },
    formItemList: {
      flex: '1',
      overflowY: 'auto',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      maxHeight: '250px',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    formItemListValue: {
      borderBottom: '1px solid #394a6d',
      width: '100%',
      paddingBottom: '15px',
      '&:last-child': {
        border: 'none',
      },
    },
    formItemListValueName: {
      marginBottom: '20px',
    },
    formValuesTitle: {
      fontSize: '13px',
      marginLeft: '0px',
      marginBottom: '10px',
    },
    valuesItem: {
      margin: '0px 0px 30px 0px',
      padding: '0px',
      listStyle: 'none',
    },
    valuesItemLI: {
      marginBottom: '5px',
    },
    valuesItemSpan: {
      fontWeight: 700,
    },
    gridTop: {
      marginTop: '20px',
    },
    grid: {
      marginLeft: -15,
      marginRight: -15,
    },
    gridItem: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    formControl: {
      margin: '0px',
      width: '100%',
    },
    formControlLabel: {
      fontSize: '16px',
      lineHeight: '20px',
      color: '#222222',
      fontWeight: 300,
      outline: 'none !important',
    },
    formHeader: {
      backgroundColor: '#394a6d',
      color: '#FFFFFF',
    },
    formFooter: {
      backgroundColor: '#E9EAEF',
      paddingTop: '15px',
      paddingBottom: '15px',
      marginTop: '50px',
    },
    input: {
      display: 'none',
    },
    profilePicture: {
      marginTop: '45px',
    },
    profileImageLabel: {
      marginBottom: '10px',
      pointerEvents: 'none',
    },
    profileImage: {
      maxWidth: '150px',
      display: 'none',
      marginBottom: '10px',
    },
    profileImageShow: {
      display: 'block',
    },
    responsiveImage: {
      maxWidth: '100%',
    },
  })
);
