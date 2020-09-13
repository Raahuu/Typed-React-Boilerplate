import React from 'react';
import { useFormik } from 'formik';

import Grid from '@material-ui/core/Grid';

import { Button } from '@material-ui/core';
import TextField from './FormFields/TextField';
import FileInput from './FormFields/FileInput';
import Select from './FormFields/Select';
import MultiSelect from './FormFields/MultiSelect';
import DatePicker from './FormFields/DatePicker';

interface FormField {
  id: string | number | undefined;
  label: string;
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
  type: string;
  selectOptionLabel?: string;
}

interface FieldProps {
  field: FormField;
  formik: any;
  selectOptions?: any;
}

const Field: React.FC<FieldProps> = ({
  field: { label, width, type, selectOptionLabel },
  formik,
  selectOptions,
}) => {
  switch (type) {
    case 'textField':
      return (
        <Grid item xs={width}>
          <TextField label={label} formik={formik} id={label} />
        </Grid>
      );
    case 'number':
      return (
        <Grid item xs={width}>
          <TextField type="number" label={label} formik={formik} id={label} />
        </Grid>
      );
    case 'password':
      return (
        <Grid item xs={width}>
          <TextField type="password" label={label} formik={formik} id={label} />
        </Grid>
      );
    case 'fileInput':
      return (
        <Grid item xs={width}>
          <FileInput formik={formik} id={label} label={label} />
        </Grid>
      );
    case 'select':
      return (
        <Grid item xs={width}>
          <Select
            label={label}
            formik={formik}
            id={label}
            options={selectOptions[label]}
          />
        </Grid>
      );
    case 'multiselect':
      return (
        <Grid item xs={width}>
          <MultiSelect
            label={label}
            formik={formik}
            id={label}
            options={selectOptions[label]}
            optionsLabel="Select multiple options"
          />
        </Grid>
      );
    case 'datePicker':
      return (
        <Grid item xs={width}>
          <DatePicker label={label} formik={formik} id={label} />
        </Grid>
      );
    default:
      return null;
  }
};

interface Props {
  initialValues: Object;
  formFields: Array<FormField>;
  onSave: Function;
  validationSchema?: Object;
  selectOptions?: any;
}

const CustomForm: React.FC<Props> = ({
  initialValues,
  onSave,
  validationSchema,
  formFields,
  selectOptions,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSave(formik.values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {formFields.map((field: FormField) => {
          return (
            <Field
              key={field.id}
              field={field}
              formik={formik}
              selectOptions={selectOptions}
            />
          );
        })}
      </Grid>
      <Button>Save</Button>
    </form>
  );
};

export default CustomForm;
