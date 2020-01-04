import React, {ReactElement} from 'react';
import clsx from 'clsx';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {useStyles} from './style';

// variables
const themeInput = createMuiTheme({
  palette: {
    primary: {
      main: '#52de97',
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

interface IProps {
  getValue: (formValue: string) => any;
  resetData: boolean;
}

const FormValues = ({getValue, resetData}: IProps): ReactElement => {
  // variables
  const classes = useStyles();

  // use states
  const [valueData, setValueData] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [formValues, setFormValues] = React.useState('');
  const [disableAdd, setDisableAdd] = React.useState(true);

  // use effects
  React.useEffect(() => {
    if (gender.length > 0 && valueData.length > 0) {
      setDisableAdd(false);
    } else {
      setDisableAdd(true);
    }
  }, [gender, valueData]);

  React.useEffect(() => {
    getValue(formValues);
  }, [formValues]);

  React.useEffect(() => {
    if (resetData) {
      console.log(resetData);
      setFormValues('');
    }
  }, [resetData]);

  // custom components
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueData(event.target.value);
  };

  const handleReset = () => {
    setGender('');
    setValueData('');
  };

  const handleGenderChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setGender(event.target.value as string);
  };

  const handleAddValue = () => {
    const val = '{"gender":"' + gender + '","value":"' + valueData + '"}';
    console.log(formValues);
    if (formValues === '') {
      setFormValues(val);
    } else {
      setFormValues(formValues + ',' + val);
    }
    handleReset();
  };

  return (
    <div id="formValues">
      <Grid container className={clsx(classes.grid, classes.gridTop)}>
        <Grid item className={clsx(classes.gridItem)} sm={6}>
          <ThemeProvider theme={themeSelect}>
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classes.formControlLabel}
                htmlFor="gender-label"
              >
                Gender *
              </InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                className="gender-select"
              >
                <MenuItem className="gender-select-menu" value="Male">
                  Male
                </MenuItem>
                <MenuItem className="gender-select-menu" value="Female">
                  Female
                </MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
        </Grid>

        <Grid item className={clsx(classes.gridItem)} sm={6}>
          <ThemeProvider theme={themeInput}>
            <TextField
              fullWidth={true}
              id="value"
              label="Value *"
              margin="normal"
              autoComplete="off"
              onChange={handleChange}
              value={valueData}
              className={classes.formItemField}
            />
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid>
        <Button
          className={classes.saveButton}
          onClick={handleAddValue}
          disabled={disableAdd}
        >
          Add Value
        </Button>
      </Grid>
    </div>
  );
};

export default FormValues;
