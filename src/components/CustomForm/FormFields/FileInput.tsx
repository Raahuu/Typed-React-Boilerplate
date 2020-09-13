import React from 'react';

interface Props {
  formik: any;
  id: string;
  label: string;
}

const FileInput: React.FC<Props> = ({ formik, id, label }) => {
  return <div>File input</div>;
};

export default FileInput;
