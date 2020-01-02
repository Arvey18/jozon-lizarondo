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
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// components
import DeleteModal from '../../components/delete-modal';

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
    id: 'caseNumber',
    name: 'Case Number',
  },
  {
    id: 'description',
    name: 'Description',
  },
  {
    id: 'date',
    name: 'Date',
  },
];

interface Data {
  id: string;
  patientName: string;
  age: string;
  caseNumber: string;
  description: string;
  date: any;
}

function createData(
  id: string,
  patientName: string,
  age: string,
  caseNumber: string,
  description: string,
  date: any
): Data {
  return {id, patientName, age, caseNumber, description, date};
}
const rows = [
  createData(
    'JFF92282',
    'Arvey Jimenez',
    '21',
    '298NGG',
    'Got problem on lungs',
    '2010-12-23'
  ),
  createData(
    'JHGH8282',
    'John Dave',
    '21',
    '248NGO',
    'Got problem on lungs',
    '2010-12-23'
  ),
  createData(
    'J2JFHF222',
    'Arvey Snow',
    '55',
    'H98NGG',
    'Got problem on lungs',
    '2010-12-23'
  ),
  createData(
    'JFFJGHH222',
    'Jake Vague',
    '34',
    '2JHNGG',
    'Got problem on lungs',
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

export default function DashboardPatientsXRay(props: any): ReactElement {
  // variables
  const classes = useStyles();
  const date = new Date();
  const currentYear = date.getFullYear();

  // states
  const [year, setYear] = React.useState(currentYear);
  const [page, setPage] = React.useState(0);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  // use effects
  React.useEffect(() => {
    document.title = 'Dashboard Patients X-Ray | Jozon - Lizarondo';
    localStorage.setItem('page_title', 'Patients X-Ray');
  });

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
        <MenuItem className="year-select-menu" value={currentYear}>
          {currentYear}
        </MenuItem>
      );
      currentYear = currentYear - 1;
    }
    return list;
  };

  return (
    <div id="jlDashboardPatients">
      <DeleteModal
        show={openDeleteModal}
        returnStatus={(status, removeData) =>
          handleDeleteModal(status, removeData)
        }
      />
      <Grid container alignItems="center">
        <Typography
          className={clsx(classes.greetings, classes.flexGrow)}
          variant="h2"
          noWrap
        >
          <AccountBoxIcon className={classes.greetingsIcon} />
          Patient List X-Ray
        </Typography>
        <ThemeProvider theme={themeFloatingBtn}>
          <Fab color="primary" aria-label="Add Patient" className={classes.fab}>
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
