import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ type, placeholder, onKeyDown, onSubmit }) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      type={type}
      onKeyDown={onKeyDown}
      variant='outlined'
      size="small"
      sx={{
        "& .MuiInputBase-input": {
          color: 'white',

        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: '2px dotted white',
        },
        "& .MuiFormLabel-root": {
          color: 'white',
        },
        "& .MuiOutlinedInput-root": {
          backgroundColor: 'black',
        },
        "& fieldset": {
        //   border: '3px solid #780200',
        padding:"8px"
        },
        "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root":{
            borderRadius:"none !important"
        }
      }}
    />
  );
};

export default CustomTextField;
