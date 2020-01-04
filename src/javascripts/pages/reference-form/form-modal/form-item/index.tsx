import React, {ReactElement} from 'react';
import clsx from 'clsx';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useStyles} from './style';

// components
import FormValue from './form-values';

// variables
const themeInput = createMuiTheme({
  palette: {
    primary: {
      main: '#52de97',
    },
  },
});

interface IProps {}

const FormItem = ({}: IProps): ReactElement => {
  // use states
  const [itemName, setItemName] = React.useState('');
  const [formItemData, setFormItemData] = React.useState('');
  const [formValues, setFormValues] = React.useState('[]');
  const [formItems, setFormItems] = React.useState('');
  const [disableAdd, setDisableAdd] = React.useState(true);
  const [resetData, setResetData] = React.useState(false);

  // use effects
  React.useEffect(() => {
    if (itemName.length > 0) {
      setDisableAdd(false);
    } else {
      setDisableAdd(true);
    }
  }, [itemName]);

  React.useEffect(() => {
    setFormItemData('[' + formItems + ']');
    handleReset();
    setResetData(false);
  }, [formItems]);

  // variables
  const classes = useStyles();
  const values = JSON.parse(formValues || '[]');
  const itemData = JSON.parse(formItemData || '{}');

  // custom functions
  const handleGetValue = (formValue: string) => {
    let text = '';
    if (formValue !== '') {
      text = '[' + formValue + ']';
    } else {
      text = '[]';
    }
    setFormValues(text);
  };

  const handleReset = () => {
    // setFormItemData('');

    setItemName('');
    setFormValues('[]');
    setResetData(true);
    // setFormItems('[]');
  };

  const handleAddItem = () => {
    const item =
      '{"name": "' + itemName + '", "normalValues":' + formValues + '}';
    if (formItems === '') {
      setFormItems(item);
    } else {
      setFormItems(formItems + ',' + item);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  return (
    <div id="formItem">
      <Grid>
        <Grid container className={clsx(classes.grid, classes.gridTop)}>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <h1 className={classes.headerTitle}>Form Item</h1>
            <Grid item sm={12}>
              <ThemeProvider theme={themeInput}>
                <TextField
                  fullWidth={true}
                  id="name"
                  label="Name *"
                  margin="normal"
                  autoComplete="off"
                  onChange={handleChange}
                  value={itemName}
                  className={classes.formItemField}
                />
              </ThemeProvider>
            </Grid>
            <Grid item sm={12}>
              <h2 className={classes.formValuesTitle}>Values</h2>
              <ul className={classes.valuesItem}>
                {values.length > 0
                  ? values.map((value: any, key: any) => {
                      return (
                        <li key={key} className={classes.valuesItemLI}>
                          <span className={classes.valuesItemSpan}>Gender</span>
                          : {value.gender},{' '}
                          <span className={classes.valuesItemSpan}>Value</span>:
                          {value.value}
                        </li>
                      );
                    })
                  : null}
              </ul>
              <FormValue
                resetData={resetData}
                getValue={(formValue: string) => handleGetValue(formValue)}
              />
            </Grid>
          </Grid>
          <Grid item className={clsx(classes.gridItem)} sm={6}>
            <div className={classes.formItemListCon}>
              <h1 className={classes.headerTitleList}>Form Item List</h1>
              <div className={classes.formItemList}>
                {itemData.length > 0
                  ? itemData.map((value: any, key: any) => {
                      return (
                        <div key={key} className={classes.formItemListValue}>
                          <h3 className={classes.formItemListValueName}>
                            {value.name}
                          </h3>
                          <h2 className={classes.formValuesTitle}>Values</h2>
                          {value.normalValues.map(
                            (nvValue: any, nvKey: any) => {
                              return (
                                <div
                                  key={nvKey}
                                  className={classes.valuesItemLI}
                                >
                                  <span className={classes.valuesItemSpan}>
                                    Gender
                                  </span>
                                  : {nvValue.gender},{' '}
                                  <span className={classes.valuesItemSpan}>
                                    Value
                                  </span>
                                  : {nvValue.value}
                                </div>
                              );
                            }
                          )}
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Button
          className={classes.saveButton}
          onClick={handleAddItem}
          disabled={disableAdd}
        >
          Add Item
        </Button>
      </Grid>
    </div>
  );
};

export default FormItem;
