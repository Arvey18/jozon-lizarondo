import React, {ReactElement} from 'react';
import clsx from 'clsx';

// MUI
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {useStyles} from './style';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// components
import DeleteModal from '../../components/delete-modal';
import PatientModal from './patient-modal';

// variables
interface Column {
  id: string;
  name: string;
}

const columns: Column[] = [
  {id: 'id', name: 'Patient Name'},
  {id: 'patientName', name: 'Patient Name'},
  {id: 'age', name: 'Age'},
  {
    id: 'address',
    name: 'Address',
  },
  {
    id: 'sex',
    name: 'Sex',
  },
  {
    id: 'dob',
    name: 'Date of Birth',
  },
];

interface Data {
  id: string;
  patientName: string;
  age: string;
  address: string;
  sex: string;
  dob: string;
}

function createData(
  id: string,
  patientName: string,
  age: string,
  address: string,
  sex: string,
  dob: string
): Data {
  return {id, patientName, age, address, sex, dob};
}

const rows = [
  createData(
    'JFF92282',
    'Arvey Jimenez',
    '21',
    '298NGG Camp Tinio',
    'Male',
    '2010-12-23'
  ),
  createData(
    'JHGH8282',
    'John Dave',
    '21',
    '248NGO Bangad',
    'Male',
    '2010-12-23'
  ),
  createData(
    'J2JFHF222',
    'Arvey Snow',
    '55',
    'H98NGG Fort Magsaysay',
    'Male',
    '2010-12-23'
  ),
  createData(
    'JFFJGHH222',
    'Jake Vague',
    '34',
    '2JHNGG San Isidro',
    'Female',
    '2010-12-23'
  ),
];

const themeFloatingBtn = createMuiTheme({
  palette: {
    primary: {
      main: '#394a6d',
    },
  },
});

const themeSelect = createMuiTheme({
  palette: {
    primary: {
      main: '#52de97',
    },
  },
});

export default function DashboardPatients(props: any): ReactElement {
  // variables
  const classes = useStyles();
  const date = new Date();
  const currentYear = date.getFullYear();
  const searchParam = props.match.params.search;

  // states
  const [year, setYear] = React.useState(currentYear);
  const [page, setPage] = React.useState(0);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openPatientModal, setOpenPatientModal] = React.useState(false);
  const [editPatientModal, setEditPatientModal] = React.useState(false);
  const [search, setSearch] = React.useState('');

  // use effects
  React.useEffect(() => {
    document.title = 'Dashboard Patients | Jozon - Lizarondo';
    localStorage.setItem('page_title', 'Patients');
  });

  React.useEffect(() => {
    if (searchParam === ' ' || searchParam === undefined) {
      setSearch('');
    } else {
      setSearch(searchParam);
    }
  }, [searchParam]);

  // custom functions
  const handleYearChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setYear(event.target.value as number);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleDeleteModal = (status: boolean, removeData: boolean) => {
    setOpenDeleteModal(status);
    if (removeData) {
      console.log('delete data');
    }
  };

  const handleDropDownYearList = () => {
    const list = [];
    const date = new Date();
    let currentYear = date.getFullYear();
    for (let x = 0; x <= 10; x++) {
      list.push(
        <MenuItem key={x} className="year-select-menu" value={currentYear}>
          {currentYear}
        </MenuItem>
      );
      currentYear = currentYear - 1;
    }
    return list;
  };

  const handleSearch = (event: React.ChangeEvent<{value: unknown}>) => {
    setSearch(event.target.value as string);
  };

  const handleShowPatientModal = (show: boolean, edit: boolean) => {
    setOpenPatientModal(show);
    setEditPatientModal(edit);
  };

  return (
    <div id="jlDashboardPatients">
      <DeleteModal
        show={openDeleteModal}
        returnStatus={(status, removeData) =>
          handleDeleteModal(status, removeData)
        }
      />
      <PatientModal
        show={openPatientModal}
        edit={editPatientModal}
        returnStatus={(show, edit) => handleShowPatientModal(show, edit)}
      />
      <Grid container alignItems="center">
        <Typography
          className={clsx(classes.greetings, classes.flexGrow)}
          variant="h2"
          noWrap
        >
          <PeopleIcon className={classes.greetingsIcon} />
          Patient List
        </Typography>
        <ThemeProvider theme={themeFloatingBtn}>
          <Fab
            onClick={() => handleShowPatientModal(true, false)}
            color="primary"
            aria-label="Add Patient"
            className={classes.fab}
          >
            <AddIcon className={classes.fabIcon} />
          </Fab>
        </ThemeProvider>
      </Grid>
      <Grid container alignItems="center" className={classes.filterCon}>
        <div className={clsx(classes.flexGrow)}>
          <div className={classes.flexGrow}>
            <div className={clsx(classes.search)}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Patient Name…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search patient name'}}
                onChange={handleSearch}
                value={search}
              />
            </div>
          </div>
        </div>
        <div>
          <ThemeProvider theme={themeSelect}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              onChange={handleYearChange}
              className="year-select"
            >
              {handleDropDownYearList()}
            </Select>
          </ThemeProvider>
        </div>
      </Grid>
      <Paper className={classes.rootTable}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column: any, key: any) => (
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
              {rows
                .slice(page * 20, page * 20 + 20)
                .map((row: any, key: any) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            className={column.id === 'id' ? 'headerId' : ''}
                            key={column.id}
                          >
                            {value}
                          </TableCell>
                        );
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
          rowsPerPage={20}
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
  );
}
