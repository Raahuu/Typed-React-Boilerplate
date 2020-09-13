import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

interface Props {
  formik: any;
  id: string;
  label: string;
  options: any;
}

const FileInput: React.FC<Props> = ({ formik, id, label, options }) => {
  return (
    <TextField
      name={id}
      select={true}
      label={label}
      value={formik.values[id]}
      variant="outlined"
      fullWidth
      onChange={formik.handleChange}
    >
      {options.map((option: any) => (
        <MenuItem key={option.id} value={option.id}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FileInput;
