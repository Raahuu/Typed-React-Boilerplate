import React from 'react';

import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from '@material-ui/core/TextField';
import multiChoiceGroupStyles from './styles';

interface Props {
  formik: any;
  id: string;
  label: string;
  options: any;
  optionsLabel: string;
}

const FileInput: React.FC<Props> = ({
  formik,
  id,
  label,
  options,
  optionsLabel,
}) => {
  const classes = multiChoiceGroupStyles();
  const selectedOptions = formik.values[id] ? formik.values[id] : [];
  return (
    <TextField
      select={true}
      label={label}
      variant="outlined"
      value={selectedOptions}
      fullWidth
      onChange={(evt) => formik.setFieldValue(id, evt.target.value)}
      SelectProps={{
        value: selectedOptions,
        multiple: true,
        fullWidth: true,
        renderValue: (selected) => (
          <div className={classes.chips}>
            {console.log(
              selected,
              options,
              options.filter((option: any) => {
                return (selected as string[]).includes(option.id);
              })
            )}
            {options
              .filter((option: any) => {
                return (selected as string[]).includes(option.id);
              })
              .map((value: any) => (
                <Chip
                  key={value.id}
                  label={value.label}
                  className={classes.chip}
                />
              ))}
          </div>
        ),
      }}
    >
      <MenuItem disabled value="">
        <em>selected values</em>
      </MenuItem>
      {options &&
        options.map((option: any) => (
          <MenuItem key={option.id} value={option.id} selected={true}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default FileInput;
