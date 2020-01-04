import React, {ReactElement} from 'react';
import {connect} from 'react-redux';
import {
  GET_REFERENCE_FORMS,
  DELETE_REFERENCE_FORM,
} from '../../actions/reference-form';
import clsx from 'clsx';

// MUI
import {useStyles} from './style';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// components
import DeleteModal from '../../components/delete-modal';
import FormModal from './form-modal';

// variables
interface Column {
  id: string;
  name: string;
  minWidth?: number;
}

const themeFloatingBtn = createMuiTheme({
  palette: {
    primary: {
      main: '#394a6d',
    },
  },
});

const columns: Column[] = [
  {
    id: 'id',
    name: 'ID',
    minWidth: 170,
  },
  {
    id: 'name',
    name: 'Name',
    minWidth: 170,
  },
  {
    id: 'description',
    name: 'Description',
    minWidth: 220,
  },
  {
    id: 'department',
    name: 'Department',
    minWidth: 170,
  },
  {
    id: 'initial',
    name: 'Initial',
    minWidth: 100,
  },
  {
    id: 'items',
    name: 'Items',
    minWidth: 0,
  },
];

interface Data {
  id: string;
  name: string;
  description: string;
  department: string;
  initial: string;
  items: string;
}

const DashboardReferenceForm = (props: any): ReactElement => {
  // variables
  const classes = useStyles();

  // states
  const [page, setPage] = React.useState(0);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openReferenceModal, setOpenReferenceModal] = React.useState(false);
  const [editReferenceModal, setEditReferenceModal] = React.useState(false);
  const [dataReference, setDataReference] = React.useState('');
  const [dataRow, setDataRow] = React.useState([]);
  const [referenceID, setReferenceID] = React.useState('');

  // use effects
  React.useEffect(() => {
    document.title = 'Dashboard Reference Form | Jozon - Lizarondo';
    localStorage.setItem('page_title', 'Reference Form');
    handleGetData();
  });

  React.useEffect(() => {
    const dataRef = JSON.parse(dataReference || '{}');
    const rows: any = [];
    const createData = (
      id: string,
      name: string,
      description: string,
      department: string,
      initial: string,
      items: string
    ): Data => {
      return {id, name, description, department, initial, items};
    };
    if (dataRef.length > 0) {
      dataRef.map((value: any, key: any) => {
        rows.push(
          createData(
            value.id,
            value.name,
            value.description,
            value.department.name,
            value.initial,
            value.form_items
          )
        );
      });
    }
    setDataRow(rows);
  }, [dataReference]);

  const handleGetData = () => {
    props.getReferenceForms().then((result: any) => {
      console.log(result);
      if (result.statusText === 'OK') {
        setDataReference(JSON.stringify(result.data));
      }
    });
  };

  // custom functions
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleDeleteModal = (
    status: boolean,
    removeData: boolean,
    matID?: string
  ) => {
    if (matID !== undefined) {
      setReferenceID(matID);
    }

    if (removeData) {
      props.deleteReferenceForm(referenceID).then((result: any) => {
        if (result.statusText === 'No Content') {
          setOpenDeleteModal(status);
        }
      });
    } else {
      setOpenDeleteModal(status);
    }
  };

  const handleShowReferenceModal = (
    show: boolean,
    edit: boolean,
    matID?: string
  ) => {
    if (matID !== undefined) {
      setReferenceID(matID);
    }
    setOpenReferenceModal(show);
    setEditReferenceModal(edit);
  };

  return (
    <div id="jlDashboardSettingsUserManagement" className={classes.root}>
      <DeleteModal
        show={openDeleteModal}
        returnStatus={(status: boolean, removeData: boolean) =>
          handleDeleteModal(status, removeData)
        }
      />
      <FormModal
        show={openReferenceModal}
        edit={editReferenceModal}
        id={referenceID}
        returnStatus={(show, edit) => handleShowReferenceModal(show, edit)}
      />
      <Grid className={classes.gridHeader} container alignItems="center">
        <div>
          <h1 className={classes.tabContentTitle}>Reference</h1>
        </div>
        <div className={classes.addButton}>
          <ThemeProvider theme={themeFloatingBtn}>
            <Fab
              onClick={() => handleShowReferenceModal(true, false)}
              color="primary"
              aria-label="Add User"
              className={classes.fab}
            >
              <AddIcon className={classes.fabIcon} />
            </Fab>
          </ThemeProvider>
        </div>
      </Grid>
      <div id="userList">
        <Paper className={classes.rootTable}>
          <div className={classes.tableWrapper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, key) => (
                    <TableCell
                      key={key}
                      className={clsx(
                        classes.tableHeader,
                        column.id === 'id' ? 'headerId' : ''
                      )}
                      style={{minWidth: column.minWidth}}
                    >
                      {column.name}
                    </TableCell>
                  ))}
                  <TableCell
                    className={classes.tableHeader}
                    key={3}
                    align="right"
                    style={{minWidth: 180}}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataRow
                  .slice(page * 15, page * 15 + 15)
                  .map((row: any, key: any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        {columns.map((column: any, key: any) => {
                          const value: any = row[column.id];
                          return (
                            <TableCell
                              className={clsx(
                                column.id === 'id' ? 'headerId' : ''
                              )}
                              key={column.id}
                            >
                              {value}
                            </TableCell>
                          );
                        })}
                        <TableCell align="right" key={key + '-action'}>
                          <div>
                            <Button
                              onClick={() =>
                                handleShowReferenceModal(true, true, row['id'])
                              }
                              className={classes.actionButtonEdit}
                            >
                              <EditIcon />
                            </Button>
                            <Button
                              onClick={() =>
                                handleDeleteModal(true, false, row['id'])
                              }
                              className={classes.actionButtonDelete}
                            >
                              <DeleteIcon />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[]}
            labelRowsPerPage=""
            component="div"
            count={dataRow.length}
            rowsPerPage={15}
            page={page}
            backIconButtonProps={{
              'aria-label': 'previous page',
            }}
            nextIconButtonProps={{
              'aria-label': 'next page',
            }}
            onChangePage={handleChangePage}
          />
        </Paper>
      </div>
    </div>
  );
};

const stateToProps = () => ({});

const actionsToProps = (dispatch: any) => ({
  getReferenceForms: () => dispatch(GET_REFERENCE_FORMS()),
  deleteReferenceForm: (id: string) => dispatch(DELETE_REFERENCE_FORM(id)),
});

export default connect(stateToProps, actionsToProps)(DashboardReferenceForm);
