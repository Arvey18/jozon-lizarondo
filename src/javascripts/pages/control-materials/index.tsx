import React, {ReactElement} from 'react';
import {connect} from 'react-redux';
import {GET_MATERIALS, DELETE_MATERIAL} from '../../actions/materials';
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
import MaterialModal from './material-modal';

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
    id: 'description',
    name: 'Description',
  },
  {
    id: 'quantity',
    name: 'Quantity',
  },
  {
    id: 'cq',
    name: 'Charge Quantity',
  },
  {
    id: 'price',
    name: 'Price',
  },
];

interface Data {
  id: string;
  name: string;
  description: string;
  quantity: number;
  cq: number;
  price: number;
}

const DashboardControlMaterials = (props: any): ReactElement => {
  // variables
  const classes = useStyles();

  // states
  const [page, setPage] = React.useState(0);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openMaterialModal, setOpenMaterialModal] = React.useState(false);
  const [editMaterialModal, setEditMaterialModal] = React.useState(false);
  const [dataMaterial, setDataMaterial] = React.useState('');
  const [dataRow, setDataRow] = React.useState([]);
  const [materialID, setMaterialID] = React.useState('');

  // use effects
  React.useEffect(() => {
    document.title = 'Dashboard Control Material | Jozon - Lizarondo';
    localStorage.setItem('page_title', 'Materials');
    handleGetData();
  });

  React.useEffect(() => {
    const dataMat = JSON.parse(dataMaterial || '{}');
    const rows: any = [];
    const createData = (
      id: string,
      name: string,
      description: string,
      quantity: number,
      cq: number,
      price: number
    ): Data => {
      return {id, name, description, quantity, cq, price};
    };
    if (dataMat.length > 0) {
      dataMat.map((value: any, key: any) => {
        rows.push(
          createData(
            value.id,
            value.name,
            value.description,
            value.quantity,
            value.charging_quantity,
            value.price
          )
        );
      });
      setDataRow(rows);
    }
  }, [dataMaterial]);

  const handleGetData = () => {
    props.getMaterials().then((result: any) => {
      setDataMaterial(JSON.stringify(result.data));
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
      setMaterialID(matID);
    }

    if (removeData) {
      props.deleteMaterial(materialID).then((result: any) => {
        if (result.statusText === 'No Content') {
          setOpenDeleteModal(status);
        }
      });
    } else {
      setOpenDeleteModal(status);
    }
  };

  const handleShowMaterialModal = (
    show: boolean,
    edit: boolean,
    matID?: string
  ) => {
    if (matID !== undefined) {
      setMaterialID(matID);
    }
    setOpenMaterialModal(show);
    setEditMaterialModal(edit);
  };

  return (
    <div id="jlDashboardSettingsUserManagement" className={classes.root}>
      <DeleteModal
        show={openDeleteModal}
        returnStatus={(status: boolean, removeData: boolean) =>
          handleDeleteModal(status, removeData)
        }
      />
      <MaterialModal
        show={openMaterialModal}
        edit={editMaterialModal}
        id={materialID}
        returnStatus={(show, edit) => handleShowMaterialModal(show, edit)}
      />
      <Grid className={classes.gridHeader} container alignItems="center">
        <div>
          <h1 className={classes.tabContentTitle}>Materials</h1>
        </div>
        <div className={classes.addButton}>
          <ThemeProvider theme={themeFloatingBtn}>
            <Fab
              onClick={() => handleShowMaterialModal(true, false)}
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
                    >
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
                {dataRow
                  .slice(page * 5, page * 5 + 5)
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
                                handleShowMaterialModal(true, true, row['id'])
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
};

const stateToProps = () => ({});

const actionsToProps = (dispatch: any) => ({
  getMaterials: () => dispatch(GET_MATERIALS()),
  deleteMaterial: (id: string) => dispatch(DELETE_MATERIAL(id)),
});

export default connect(stateToProps, actionsToProps)(DashboardControlMaterials);
