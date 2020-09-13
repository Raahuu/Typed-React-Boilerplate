import React from 'react';

interface Props {
  formik: any;
  id: string;
  label: string;
}

const DatePicker: React.FunctionComponent<Props> = ({ formik, id, label }) => {
  return <div>datepicker</div>;
};

export default DatePicker;
