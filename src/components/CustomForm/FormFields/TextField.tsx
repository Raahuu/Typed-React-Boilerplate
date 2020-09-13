import React from 'react';
import { TextField } from '@material-ui/core';

interface TextFormFieldProps {
  formik: any;
  id: string;
  label: string;
  type?: 'text' | 'number' | 'password';
}

const TextFormField: React.FC<TextFormFieldProps> = ({
  formik,
  id,
  label,
  type = 'text',
}) => {
  return (
    <>
      <TextField
        type={type}
        name={id}
        label={label}
        value={formik.values.id}
        variant="outlined"
        fullWidth
        onChange={formik.handleChange}
      />
    </>
  );
};

export default TextFormField;
