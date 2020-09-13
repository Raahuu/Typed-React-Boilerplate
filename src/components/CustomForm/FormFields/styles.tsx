import { makeStyles } from '@material-ui/core';

const multiChoiceGroupStyles = makeStyles(theme => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

export default multiChoiceGroupStyles;
