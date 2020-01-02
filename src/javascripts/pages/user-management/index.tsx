import React, {ReactElement} from 'react';

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

// variables
interface Column {
  id: string;
  name: string;
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
  },
  {
    id: 'name',
    name: 'Name',
  },
  {
    id: 'role',
    name: 'Role',
  },
];

interface Data {
  id: string;
  name: string;
  role: string;
}

function createData(id: string, name: string, role: string): Data {
  return {id, name, role};
}

const rows = [
  createData('23jj233', 'Arvey', 'Admmin'),
  createData('23jj233', 'John', 'Pharmacist'),
];

export default function DashboardSettingsUserManagement(
  props: any
): ReactElement {
  // variables
  const classes = useStyles();

  // states
  const [page, setPage] = React.useState(0);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  // use effects
  React.useEffect(() => {
    document.title = 'Dashboard User Management | Jozon - Lizarondo';
    localStorage.setItem('page_title', 'User Management');
  });

  // custom functions
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleDeleteModal = (status: boolean, removeData: boolean) => {
    setOpenDeleteModal(status);
    if (removeData) {
      console.log('delete data');
    }
  };

  return (
    <div id="jlDashboardSettingsUserManagement" className={classes.root}>
      <DeleteModal
        show={openDeleteModal}
        returnStatus={(status, removeData) =>
          handleDeleteModal(status, removeData)
        }
      />
      <Grid className={classes.gridHeader} container alignItems="center">
        <div>
          <h1 className={classes.tabContentTitle}>User Management</h1>
        </div>
        <div className={classes.addButton}>
          <ThemeProvider theme={themeFloatingBtn}>
            <Fab color="primary" aria-label="Add User" className={classes.fab}>
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
                    <TableCell key={key} className={classes.tableHeader}>
                      {column.name}
                    </TableCell>
                  ))}
                  <TableCell
                    className={classes.tableHeader}
                    key={3}
                    align="right"
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * 5, page * 5 + 5)
                  .map((row: any, key: any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        {columns.map(column => {
                          const value: any = row[column.id];
                          return <TableCell key={column.id}>{value}</TableCell>;
                        })}
                        <TableCell align="right" key={key + '-action'}>
                          <div>
                            <Button className={classes.actionButtonEdit}>
                              <EditIcon />
                            </Button>
                            <Button
                              onClick={() => handleDeleteModal(true, false)}
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
            count={rows.length}
            rowsPerPage={5}
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
}
